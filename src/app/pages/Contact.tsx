import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';
import { RevealOnScroll } from '../components/RevealOnScroll';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-[88px]">
      {/* Page Hero - ČERVENÁ */}
      <section className="bg-[#C41E2A] min-h-[35vh] flex items-end pb-10 relative overflow-hidden">
        {/* Tmavší gradient overlay pro hloubku */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#C41E2A] to-[#0A0A0A]" />
        
        {/* Scan lines texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.08) 3px, rgba(255,255,255,0.08) 4px)',
          }}
        />
        
        <RevealOnScroll delay={0.2}>
          <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5 relative z-10">
            <div className="text-[10px] tracking-[4px] uppercase text-white/60 mb-3.5">
              RBSD Combatives Brno <span className="text-white">/ Kontakt</span>
            </div>
            <h1 className="font-serif text-[clamp(34px,5vw,58px)] font-bold text-white leading-tight">
              KONTAKTUJTE <span className="text-white/90">NÁS</span>
            </h1>
          </div>
        </RevealOnScroll>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-[#F5F3F0]">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-3">
                Napište nám
              </span>
              <h2 className="font-serif text-[clamp(28px,4vw,46px)] font-bold leading-tight text-[#0A0A0A] mb-6">
                Máte <span className="text-[#C41E2A]">dotaz?</span>
              </h2>
              <p className="text-[15px] text-[#0A0A0A]/70 mb-7">
                Neváhejte se na nás obrátit s jakýmkoliv dotazem. Odpovídáme do 24 hodin.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">Zpráva odeslána!</h3>
                  <p className="text-green-700">Děkujeme za vaši zprávu. Ozveme se vám do 24 hodin.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-semibold tracking-[3px] uppercase text-[var(--kung-fu-g400)] mb-2">
                      <User size={14} />
                      Jméno a příjmení *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jan Novák"
                      className="w-full px-4 py-3.5 border-[1.5px] border-[var(--kung-fu-g200)] rounded-sm text-sm text-[var(--kung-fu-text)] bg-white transition-colors focus:border-[var(--kung-fu-red)] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-semibold tracking-[3px] uppercase text-[var(--kung-fu-g400)] mb-2">
                        <Mail size={14} />
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jan@email.cz"
                        className="w-full px-4 py-3.5 border-[1.5px] border-[var(--kung-fu-g200)] rounded-sm text-sm text-[var(--kung-fu-text)] bg-white transition-colors focus:border-[var(--kung-fu-red)] outline-none"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-semibold tracking-[3px] uppercase text-[var(--kung-fu-g400)] mb-2">
                        <Phone size={14} />
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+420 123 456 789"
                        className="w-full px-4 py-3.5 border-[1.5px] border-[var(--kung-fu-g200)] rounded-sm text-sm text-[var(--kung-fu-text)] bg-white transition-colors focus:border-[var(--kung-fu-red)] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-semibold tracking-[3px] uppercase text-[var(--kung-fu-g400)] mb-2">
                      <MessageSquare size={14} />
                      Předmět dotazu *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border-[1.5px] border-[var(--kung-fu-g200)] rounded-sm text-sm text-[var(--kung-fu-text)] bg-white appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2710%27%20height=%277%27%3E%3Cpath%20d=%27M5%207L0%200h10z%27%20fill=%27%23a8998e%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_14px_center] pr-10 transition-colors focus:border-[var(--kung-fu-red)] outline-none"
                    >
                      <option value="">Vyberte předmět...</option>
                      <option value="general">Obecný dotaz</option>
                      <option value="private">Osobní trénink</option>
                      <option value="pricing">Ceny a členství</option>
                      <option value="schedule">Rozvrh tréninků</option>
                      <option value="other">Jiné</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold tracking-[3px] uppercase text-[var(--kung-fu-g400)] mb-2">
                      Vaše zpráva *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Napište nám váš dotaz nebo zprávu..."
                      rows={6}
                      className="w-full px-4 py-3.5 border-[1.5px] border-[var(--kung-fu-g200)] rounded-sm text-sm text-[var(--kung-fu-text)] bg-white resize-vertical transition-colors focus:border-[var(--kung-fu-red)] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[var(--kung-fu-red)] hover:bg-[var(--kung-fu-red-hover)] text-white px-7 py-4 rounded-sm text-[13px] font-semibold tracking-[2px] uppercase transition-colors"
                  >
                    Odeslat zprávu →
                  </button>

                  <p className="text-[11px] text-[var(--kung-fu-g400)] text-center">
                    * Povinné pole · Odpovídáme do 24 hodin
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <span className="block text-[10px] font-semibold tracking-[5px] uppercase text-[var(--kung-fu-red)] mb-3">
                Kde nás najdete
              </span>
              <h2 className="font-serif text-[22px] font-semibold text-[#0A0A0A] mb-6">
                Kontaktn<br />informace
              </h2>

              <div className="space-y-0">
                {[
                  { 
                    icon: <MapPin size={20} />, 
                    label: 'Adresa tréninků', 
                    value: 'Šujanovo náměstí 1\nBrno'
                  },
                  { 
                    icon: <Phone size={20} />, 
                    label: 'Telefon', 
                    value: '+420 xxx xxx xxx' 
                  },
                  { 
                    icon: <Mail size={20} />, 
                    label: 'E-mail', 
                    value: 'info@hunggar-brno.cz' 
                  },
                  { 
                    icon: <Clock size={20} />, 
                    label: 'Odpovídáme', 
                    value: 'Do 24 hodin · Po–Pá' 
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3.5 items-start py-5 border-b border-black/[0.08]"
                  >
                    <div className="w-[42px] h-[42px] flex-shrink-0 rounded-sm bg-[rgba(196,30,42,0.15)] flex items-center justify-center text-[var(--kung-fu-red)]">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold tracking-[3px] uppercase text-[#0A0A0A]/40 mb-1">
                        {item.label}
                      </div>
                      <div className="text-[15px] font-medium text-[#0A0A0A] whitespace-pre-line">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-black/[0.03] border border-black/[0.08] h-60 flex items-center justify-center text-[13px] text-[#0A0A0A]/40 tracking-[2px] uppercase rounded-sm">
                <MapPin size={20} className="mr-2" />
                Google Maps
              </div>

              {/* Osobní tréninky */}
              <div className="mt-8 p-6 bg-[var(--kung-fu-black)] text-white rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C41E2A] to-transparent opacity-10" />
                <div 
                  className="absolute -bottom-4 -right-4 text-[120px] font-bold text-white/5 leading-none pointer-events-none select-none"
                  style={{ fontFamily: "'Ma Shan Zheng', cursive" }}
                >
                  武
                </div>
                <h3 className="font-serif text-[20px] font-semibold mb-3 relative z-10">
                  Osobní <span className="text-[#C41E2A]">tréninky</span>
                </h3>
                <p className="text-[13px] text-white/75 leading-relaxed mb-4 relative z-10">
                  Nabízíme také individuální lekce přizpůsobené vašim potřebám a tempu. 
                  Ideální pro ty, kdo chtějí rychlejší pokrok nebo mají specifické cíle.
                </p>
                <ul className="space-y-2 relative z-10">
                  <li className="flex items-start gap-2 text-[12px] text-white/75">
                    <span className="text-[#C41E2A] mt-0.5">→</span>
                    <span>Individuální přístup</span>
                  </li>
                  <li className="flex items-start gap-2 text-[12px] text-white/75">
                    <span className="text-[#C41E2A] mt-0.5">→</span>
                    <span>Flexibilní termíny</span>
                  </li>
                  <li className="flex items-start gap-2 text-[12px] text-white/75">
                    <span className="text-[#C41E2A] mt-0.5">→</span>
                    <span>Zaměření na vaše cíle</span>
                  </li>
                </ul>
                <p className="text-[11px] text-[#C41E2A] mt-4 font-medium tracking-wide relative z-10">
                  Kontaktujte nás pro více informací a ceny
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}