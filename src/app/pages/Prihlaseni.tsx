import { CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from '../components/RevealOnScroll';

export default function Prihlaseni() {
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
              RBSD Combatives Brno <span className="text-white">/ Chci začít</span>
            </div>
            <h1 className="font-serif text-[clamp(34px,5vw,58px)] font-bold text-white leading-tight">
              Domluv si <span className="text-white/90">první trénink</span>
            </h1>
          </div>
        </RevealOnScroll>
      </section>

      {/* Nábor probíhá */}
      <section className="bg-[#0A0A0A] py-8 border-b border-[#C41E2A]/30">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5 text-center">
          <p className="text-[18px] md:text-[22px] font-bold text-white leading-snug">
            Nábor probíhá už jen do <span className="text-[#C41E2A]">9. října 2026</span>, a to po předchozí domluvě. Zavolejte nám nebo napište. Ukázkový trénink je zdarma a bez závazku.
          </p>
        </div>
      </section>

      {/* Kontakt pro domluvení tréninku */}
      <section className="py-24 bg-[#F5F3F0]">
        <div className="max-w-[700px] mx-auto px-12 max-[880px]:px-5">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+420605521525"
                className="inline-flex items-center justify-center gap-2 border border-[#C41E2A] text-[#C41E2A] hover:bg-[#C41E2A] hover:text-white px-6 py-3 text-[11px] font-bold tracking-[2px] uppercase transition-colors"
              >
                +420 605 521 525
              </a>
              <a
                href="mailto:info@combatives-brno.cz"
                className="inline-flex items-center justify-center gap-2 bg-[#C41E2A] hover:bg-[#A01822] text-white px-6 py-3 text-[11px] font-bold tracking-[2px] uppercase transition-colors"
              >
                info@combatives-brno.cz
              </a>
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
                'Pohodlné sportovní oblečení (tričko + kraťasy)',
                'Sálová obuv do tělocvičny',
                'Láhev s vodou',
                'Dobrá nálada a chuť se učit',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 p-5"
                >
                  <CheckCircle2 className="text-[#C41E2A] flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-[16px] text-white/80">{item}</span>
                </div>
              ))}
            </div>
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
                  a: 'Na úvod teorie na dané téma (právo, stres, první pomoc...), poté základy — technika, taktika, reálné scénáře a scénáře ve stresu.'
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
                      <p className="text-[16px] text-white/70 leading-relaxed">
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
