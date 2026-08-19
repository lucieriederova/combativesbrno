import { Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
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
            <h1 className="font-serif text-[clamp(34px,5vw,58px)] font-bold text-white leading-tight mb-3">
              Domluv si <span className="text-white/90">první trénink</span>
            </h1>
            <p className="text-[14px] text-white/70">
              Nábor probíhá od 22. 9. 2026. Ukázkový trénink je zdarma a bez závazku — stačí se zaregistrovat.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* Reenio rezervační systém */}
      <section className="py-24 bg-[#F5F3F0]">
        <div className="max-w-[700px] mx-auto px-12 max-[880px]:px-5">
          <RevealOnScroll>
            <div className="bg-white border-l-[4px] border-[#C41E2A] p-12 text-center relative overflow-hidden">
              <div className="w-16 h-16 bg-[rgba(196,30,42,0.1)] rounded-full flex items-center justify-center mx-auto mb-5">
                <Calendar className="text-[#C41E2A]" size={28} />
              </div>
              <h3 className="font-serif text-[24px] font-bold text-[#0A0A0A] mb-3">
                Rezervační kalendář Reenio
              </h3>
              <p className="text-[14px] text-[#0A0A0A]/60 leading-relaxed max-w-[420px] mx-auto mb-8">
                Vyber si volný termín a přihlas se na trénink přímo online — kalendář se otevře v nové záložce.
              </p>
              <a
                href="https://combatives.reenio.cz/cs/terms/2026-09-22;viewMode=3-days"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C41E2A] hover:bg-[#A01822] text-white px-8 py-3.5 text-[11px] font-bold tracking-[2px] uppercase transition-colors"
              >
                Otevřít rezervaci <ExternalLink size={14} />
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
                  <span className="text-[15px] text-white/80">{item}</span>
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
