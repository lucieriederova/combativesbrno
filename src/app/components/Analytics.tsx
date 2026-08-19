import { useEffect } from 'react';
import { getStoredConsent, onConsentChange } from '../lib/cookieConsent';

const GTM_ID = 'GTM-MTNKRNZ';

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

let gtmLoaded = false;

function loadGTM() {
  if (gtmLoaded) return;
  gtmLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

/**
 * Mount once (in Root) — loads GTM only after the visitor has consented via
 * CookieConsent, and reacts live if they change their choice.
 */
export default function Analytics() {
  useEffect(() => {
    const consent = getStoredConsent();
    if (consent?.analytics) loadGTM();

    return onConsentChange((updated) => {
      if (updated.analytics) loadGTM();
    });
  }, []);

  return null;
}
