// Vercel serverless function behind the contact form (POST /api/contact).
// Sends the message through Resend (resend.com), so it lands in the school's
// inbox with Reply-To set to the visitor.
//
// Env vars (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY  API key from resend.com                    (required)
//   CONTACT_FROM    sender on a domain verified in Resend, default SITE.from
//   CONTACT_TO      where messages go, default SITE.to
//
// Spam protection, all invisible to people:
//   - honeypot field "website" that only bots fill in
//   - the form must be open at least 4 s before sending
//   - at most 5 messages per IP per 10 minutes (per function instance)
//   - field length limits, max 3 links in the message, no links in the name
// Bots get a fake success so they don't learn what tripped them.

const SITE = {
  name: 'combatives-brno.cz',
  from: 'Web combatives-brno.cz <web@combatives-brno.cz>',
  to: 'info@combatives-brno.cz',
};

const SUBJECTS = {
  general: 'Obecný dotaz',
  private: 'Osobní trénink',
  pricing: 'Ceny a členství',
  schedule: 'Rozvrh tréninků',
  other: 'Jiné',
};

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

const clean = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';

  // Bot checks — pretend it worked.
  const elapsed = Date.now() - Number(body.startedAt || 0);
  if (clean(body.website, 200) || !(elapsed > 4000)) {
    return res.status(200).json({ ok: true });
  }
  if (rateLimited(ip)) {
    return res.status(429).json({ ok: false, error: 'rate' });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const subject = SUBJECTS[body.subject] || 'Dotaz z webu';
  const message = clean(body.message, 5000);

  const linkCount = (message.match(/https?:\/\/|www\./gi) || []).length;
  if (
    !name ||
    !message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    /https?:\/\/|www\./i.test(name) ||
    linkCount > 3
  ) {
    return res.status(400).json({ ok: false, error: 'invalid' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('contact: RESEND_API_KEY not set');
    return res.status(503).json({ ok: false, error: 'not_configured' });
  }

  const text = [
    `Jméno: ${name}`,
    `E-mail: ${email}`,
    ...(phone ? [`Telefon: ${phone}`] : []),
    `Předmět: ${subject}`,
    '',
    message,
    '',
    '—',
    `Odesláno z kontaktního formuláře na ${SITE.name}`,
  ].join('\n');

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || SITE.from,
        to: [process.env.CONTACT_TO || SITE.to],
        reply_to: `"${name.replace(/"/g, '')}" <${email}>`,
        subject: `Web: ${subject} — ${name}`,
        text,
      }),
    });
    if (!r.ok) {
      console.error('contact: Resend error', r.status, await r.text());
      return res.status(502).json({ ok: false, error: 'send' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact: send failed', err);
    return res.status(502).json({ ok: false, error: 'send' });
  }
}
