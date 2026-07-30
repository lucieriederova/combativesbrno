import { useState } from 'react';
import { Calendar, CheckCircle2, Mail, Phone, User } from 'lucide-react';
import { RevealOnScroll } from '../components/RevealOnScroll';

export default function Prihlaseni() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDay: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', preferredDay: '', message: '' });
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
      {/* Page Hero */}
      <section className="bg-[#C41E2A] min-h-[35vh] flex items-end pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#C41E2A] to-[#0A0A0A]" />
        
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.08) 3px, rgba(255,255,255,0.08) 4px)',
          }}
        />
        
        <RevealOnScroll delay={0.2}>
          <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5 relative z-10">
            <div className="text-[10px] tracking-[4px] uppercase text-white/60 mb-3.5">
              RBSD Combatives Brno <span className="text-white">/ Zkus si trénink</span>
            </div>
            <h1 className="font-serif text-[clamp(34px,5vw,58px)] font-bold text-white leading-tight">
              Domluv si <span className="text-white/90">první trénink</span>
            </h1>
          </div>
        </RevealOnScroll>
      </section>

      {/* Vyber si termín */}
      <section className="py-24 bg-[#F5F3F0]">
        <div className="max-w-[900px] mx-auto px-12 max-[880px]:px-5">
          <RevealOnScroll>
            <div className="text-center mb-6">
              <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold text-[#0A0A0A] mb-3">
                Vyber si <span className="text-[#C41E2A]">termín</span>
              </h2>
              <p className="text-[15px] text-[#0A0A0A]/60">
                Tréninky probíhají v tělocvičně ZŠ Milénova
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                { day: 'Pondělí', time: '18:00 - 20:00', level: 'Začátečníci' },
                { day: 'Pondělí', time: '20:00 - 21:30', level: 'Pokročilí' },
                { day: 'Středa', time: '18:30 - 20:00', level: 'Začátečníci + pokročilí' },
                { day: 'Pátek', time: '18:00 - 19:30', level: 'Pokročilí' },
              ].map((slot, i) => (
                <div
                  key={i}
                  className="bg-white border-l-[3px] border-[#C41E2A] p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-[18px] font-bold text-[#0A0A0A] mb-2">
                    {slot.day}
                  </div>
                  <div className="text-[15px] text-[#0A0A0A]/70 mb-3">
                    {slot.time}
                  </div>
                  <div className="inline-block text-[10px] font-bold tracking-[2px] uppercase bg-[rgba(196,30,42,0.1)] text-[#C41E2A] px-3 py-1">
                    {slot.level}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Co potřebuješ s sebou */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[900px] mx-auto px-12 max-[880px]:px-5">
          <RevealOnScroll>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold text-white text-center mb-12">
              Co potřebuješ <span className="text-[#C41E2A]">s sebou?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Pohodlné sportovní oblečení (tričko + tepláky)',
                'Čistá obuv do tělocvičny nebo ponožky',
                'Láhev s vodou',
                'Dobrá nálada a chuť se učit',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 p-5"
                >
                  <CheckCircle2 className="text-[#C41E2A] flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-[15px] text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Přihlas se na trénink */}
      <section className="py-24 bg-[#F5F3F0]">
        <div className="max-w-[700px] mx-auto px-12 max-[880px]:px-5">
          <RevealOnScroll>
            <div className="text-center mb-10">
              <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold text-[#0A0A0A] mb-3">
                Přihlas se na <span className="text-[#C41E2A]">trénink</span>
              </h2>
              <p className="text-[15px] text-[#0A0A0A]/60">
                Vyplň formulář a ozveme se ti do 24 hodin
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#0A0A0A] border-l-[4px] border-[#C41E2A] p-10 text-center">
                <div className="w-16 h-16 bg-[#C41E2A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-white" size={32} />
                </div>
                <h3 className="text-[22px] font-bold text-white mb-2">Přihláška odeslána!</h3>
                <p className="text-[15px] text-white/70">
                  Děkujeme za zájem. Ozveme se ti do 24 hodin s potvrzením termínu.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-10 border-l-[4px] border-[#C41E2A]">
                <div className="space-y-5">
                  {/* Jméno */}
                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase text-[#0A0A0A]/60 mb-2">
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
                      className="w-full px-4 py-3.5 border-[1.5px] border-[#0A0A0A]/10 text-[15px] text-[#0A0A0A] bg-[#F5F3F0] transition-colors focus:border-[#C41E2A] outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase text-[#0A0A0A]/60 mb-2">
                      <Mail size={14} />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jan@email.cz"
                      className="w-full px-4 py-3.5 border-[1.5px] border-[#0A0A0A]/10 text-[15px] text-[#0A0A0A] bg-[#F5F3F0] transition-colors focus:border-[#C41E2A] outline-none"
                    />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase text-[#0A0A0A]/60 mb-2">
                      <Phone size={14} />
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+420 123 456 789"
                      className="w-full px-4 py-3.5 border-[1.5px] border-[#0A0A0A]/10 text-[15px] text-[#0A0A0A] bg-[#F5F3F0] transition-colors focus:border-[#C41E2A] outline-none"
                    />
                  </div>

                  {/* Preferovaný termín */}
                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase text-[#0A0A0A]/60 mb-2">
                      <Calendar size={14} />
                      Preferovaný termín *
                    </label>
                    <select
                      name="preferredDay"
                      value={formData.preferredDay}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border-[1.5px] border-[#0A0A0A]/10 text-[15px] text-[#0A0A0A] bg-[#F5F3F0] appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2710%27%20height=%277%27%3E%3Cpath%20d=%27M5%207L0%200h10z%27%20fill=%27%23a8998e%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_14px_center] pr-10 transition-colors focus:border-[#C41E2A] outline-none"
                    >
                      <option value="">Vyber termín...</option>
                      <option value="pondeli-zaklady">Pondělí 18:00 - 20:00 (Začátečníci)</option>
                      <option value="pondeli-pokrocili">Pondělí 20:00 - 21:30 (Pokročilí)</option>
                      <option value="streda">Středa 18:30 - 20:00 (Začátečníci + pokročilí)</option>
                      <option value="patek">Pátek 18:00 - 19:30 (Pokročilí)</option>
                    </select>
                  </div>

                  {/* Poznámka */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-[2px] uppercase text-[#0A0A0A]/60 mb-2">
                      Poznámka (volitelné)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Máš nějaké dotazy nebo speciální požadavky?"
                      rows={4}
                      className="w-full px-4 py-3.5 border-[1.5px] border-[#0A0A0A]/10 text-[15px] text-[#0A0A0A] bg-[#F5F3F0] resize-vertical transition-colors focus:border-[#C41E2A] outline-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full bg-[#C41E2A] hover:bg-[#A01822] text-white px-8 py-4 text-[14px] font-bold tracking-[2px] uppercase transition-colors"
                  >
                    Odeslat přihlášku
                  </button>

                  <p className="text-[11px] text-[#0A0A0A]/40 text-center pt-2">
                    * Povinné pole
                  </p>
                </div>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </section>

      {/* Časté otázky */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[900px] mx-auto px-12 max-[880px]:px-5">
          <RevealOnScroll>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold text-white text-center mb-12">
              Časté <span className="text-[#C41E2A]">otázky</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Je první trénink opravdu zdarma?',
                  a: 'Ano! První hodina je vždy zdarma a bez závazků. Chceme, aby ses mohl rozhodnout, jestli je RBSD pro tebe.'
                },
                {
                  q: 'Potřebuji nějaké předchozí zkušenosti?',
                  a: 'Ne! Přijímáme úplné začátečníky i pokročilé. Každý trénuje svým tempem a instruktor tě provede od základů.'
                },
                {
                  q: 'Jak vypadá typický trénink?',
                  a: 'Začínáme zahřátím, pak technika (údery, kryty, clinch), stresové scénáře a diskuse o právní stránce a psychologii. Vše přizpůsobujeme úrovni skupiny.'
                },
                {
                  q: 'Kolik stojí členství?',
                  a: 'Měsíční členství je 1 200 Kč. Zahrnuje neomezený počet tréninků týdně. Studenti a senioři mají 20% slevu.'
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6">
                  <div className="flex items-start gap-3">
                    <div className="text-[#C41E2A] font-bold text-[18px] flex-shrink-0 mt-1">
                      Q:
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-white mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-[15px] text-white/70 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
