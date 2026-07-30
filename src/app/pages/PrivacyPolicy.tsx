import { RevealOnScroll } from '../components/RevealOnScroll';
import { openCookieSettings } from '../lib/cookieConsent';

export default function PrivacyPolicy() {
  return (
    <div className="pt-[88px]">
      {/* Page Hero */}
      <section className="bg-[#C41E2A] min-h-[30vh] flex items-end pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#C41E2A] to-[#0A0A0A]" />

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.08) 3px, rgba(255,255,255,0.08) 4px)',
          }}
        />

        <RevealOnScroll delay={0.2}>
          <div className="max-w-[900px] mx-auto px-12 max-[880px]:px-5 relative z-10">
            <div className="text-[10px] tracking-[4px] uppercase text-white/60 mb-3.5">
              RBSD Combatives Brno <span className="text-white">/ Ochrana soukromí</span>
            </div>
            <h1 className="font-serif text-[clamp(30px,4.5vw,50px)] font-bold text-white leading-tight">
              Ochrana <span className="text-white/90">soukromí</span> a cookies
            </h1>
          </div>
        </RevealOnScroll>
      </section>

      {/* Obsah */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-12 max-[880px]:px-5">
          <div className="space-y-12 text-[15px] text-[#0A0A0A]/70 leading-relaxed">
            <div>
              <h2 className="font-serif text-[24px] font-bold text-[#0A0A0A] mb-4">Správce osobních údajů</h2>
              <p>
                Provozovatelem webu a správcem osobních údajů je RBSD Combatives Brno.
                V případě dotazů k ochraně soukromí nás kontaktujte na{' '}
                <a href="mailto:info@combatives-brno.cz" className="text-[#C41E2A] hover:text-[#A01822] underline underline-offset-2">
                  info@combatives-brno.cz
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[24px] font-bold text-[#0A0A0A] mb-4">Jaké cookies používáme</h2>
              <p className="mb-5">
                Cookies jsou malé textové soubory, které web ukládá ve vašem prohlížeči. Používáme tři kategorie:
              </p>
              <div className="space-y-4">
                <div className="border border-[#0A0A0A]/10 p-5">
                  <h3 className="font-bold text-[#0A0A0A] mb-1.5">Nezbytné</h3>
                  <p className="text-[14px]">
                    Potřebné pro základní chod webu (např. zapamatování si vaší volby v cookie liště).
                    Nelze je vypnout a nevyžadují souhlas.
                  </p>
                </div>
                <div className="border border-[#0A0A0A]/10 p-5">
                  <h3 className="font-bold text-[#0A0A0A] mb-1.5">Analytické — Google Analytics</h3>
                  <p className="text-[14px]">
                    Pomáhají nám anonymizovaně pochopit, jak návštěvníci web používají (např. které stránky jsou
                    nejnavštěvovanější), abychom mohli obsah zlepšovat. Aktivují se jen s vaším souhlasem.
                  </p>
                </div>
                <div className="border border-[#0A0A0A]/10 p-5">
                  <h3 className="font-bold text-[#0A0A0A] mb-1.5">Marketingové — Meta Pixel</h3>
                  <p className="text-[14px]">
                    Používáme k měření účinnosti reklamy na Facebooku a Instagramu a k zobrazování relevantnější
                    nabídky. Aktivují se jen s vaším souhlasem.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-[24px] font-bold text-[#0A0A0A] mb-4">Změna souhlasu</h2>
              <p className="mb-5">
                Svůj souhlas s analytickými a marketingovými cookies můžete kdykoliv změnit nebo odvolat.
              </p>
              <button
                onClick={openCookieSettings}
                className="inline-flex items-center gap-2 bg-[#C41E2A] hover:bg-[#A01822] text-white px-7 py-3.5 text-xs font-semibold tracking-[2px] uppercase transition-colors cursor-pointer"
              >
                Upravit nastavení cookies
              </button>
            </div>

            <div>
              <h2 className="font-serif text-[24px] font-bold text-[#0A0A0A] mb-4">Vaše práva</h2>
              <p>
                Podle GDPR máte právo na přístup ke svým osobním údajům, jejich opravu či výmaz, omezení
                zpracování a vznesení námitky proti zpracování. Máte také právo podat stížnost u Úřadu pro
                ochranu osobních údajů (uoou.cz), pokud se domníváte, že zpracování vašich údajů porušuje
                platné právní předpisy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
