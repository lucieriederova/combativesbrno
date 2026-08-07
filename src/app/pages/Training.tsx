import { Link } from 'react-router';
import { RevealOnScroll } from '../components/RevealOnScroll';

export default function Training() {
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
              RBSD Combatives Brno <span className="text-white">/ Tréninky</span>
            </div>
            <h1 className="font-serif text-[clamp(34px,5vw,58px)] font-bold text-white leading-tight">
              TRÉNINKY & <span className="text-white/90">ROZVRH</span>
            </h1>
          </div>
        </RevealOnScroll>
      </section>

      {/* Jak probíhá trénink */}
      <section className="py-24 bg-[#F5F3F0]">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-4">
            01 — JAK TO FUNGUJE
          </span>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight text-[#0A0A0A] mb-6">
            JAK PROBÍHÁ <span className="text-[#C41E2A]">TRÉNINK</span>
          </h2>
          <p className="text-base text-[#0A0A0A]/70 leading-relaxed max-w-[700px] mb-14">
            Každý trénink je navržen tak, aby maximalizoval tvou přípravu na reálnou situaci.
            Bez zbytečností, jen praktická příprava. Každý trénink je intenzivní a praktický.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: '01',
                title: 'Diskuse',
                desc: 'Rozbor problematiky pro daný trénink — psychologie, právo, video ukázky konfliktů.',
              },
              {
                step: '02',
                title: 'Zahřátí',
                desc: 'Funkční zahřátí zaměřené na kondici a mobilitu potřebnou pro sebeobranu.',
              },
              {
                step: '03',
                title: 'Technika',
                desc: 'Nácvik základních elementů — úderů, kopů a práce v pohybu.',
              },
              {
                step: '04',
                title: 'Taktika',
                desc: 'Trénink vhodné taktiky pro danou situaci.',
              },
              {
                step: '05',
                title: 'Scénáře',
                desc: 'Technika a taktika aplikovaná do dané situace s postupným přidáváním stresu.',
              },
            ].map((phase, i) => (
              <div key={i} className="bg-white p-6 border-l-[3px] border-[#C41E2A]">
                <div className="text-[48px] font-bold text-[#C41E2A]/10 leading-none mb-3">
                  {phase.step}
                </div>
                <h3 className="text-[18px] font-bold text-[#0A0A0A] mb-2">
                  {phase.title}
                </h3>
                <p className="text-[13px] text-[#0A0A0A]/60 leading-relaxed mt-3">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rozvrh */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-3">
            02 — ROZVRH
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,46px)] font-bold leading-tight text-white mb-6">
            Kdy <span className="text-[#C41E2A]">trénujeme</span>
          </h2>
          <p className="text-base text-white/60 leading-relaxed max-w-[580px] mb-14">
            Většina tréninků probíhá na adrese{' '}
            <a
              href="https://www.google.com/maps/search/?api=1&query=%C5%A0ujanovo+n%C3%A1m%C4%9Bst%C3%AD+1+Brno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C41E2A] underline underline-offset-2 hover:text-white transition-colors"
            >
              Šujanovo náměstí 1, Brno
            </a>
            , další programy podle rozvrhu níže. První hodina je vždy zdarma.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0A0A0A]">
                  <th className="px-5 py-3.5 text-left text-[10px] font-bold tracking-[3px] uppercase text-white">
                    Den
                  </th>
                  <th className="px-5 py-3.5 text-left text-[10px] font-bold tracking-[3px] uppercase text-white">
                    Čas
                  </th>
                  <th className="px-5 py-3.5 text-left text-[10px] font-bold tracking-[3px] uppercase text-white">
                    Program
                  </th>
                  <th className="px-5 py-3.5 text-left text-[10px] font-bold tracking-[3px] uppercase text-white">
                    Úroveň
                  </th>
                  <th className="px-5 py-3.5 text-left text-[10px] font-bold tracking-[3px] uppercase text-white">
                    Místo
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { day: 'Úterý', time: '16:00 – 17:00', program: 'Sebeobrana', level: 'Děti 6–10 let', levelColor: 'red', location: 'Šujanovo náměstí 1' },
                  { day: 'Úterý', time: '17:00 – 18:00', program: 'Sebeobrana', level: 'Junioři 11–16 let', levelColor: 'red', location: 'Šujanovo náměstí 1' },
                  { day: 'Úterý', time: '18:00 – 19:30', program: 'Sebeobrana', level: 'Dospělí', levelColor: 'red', location: 'Šujanovo náměstí 1' },
                  { day: 'Středa', time: '11:00 – 12:15', program: 'Sebeobrana', level: 'Studenti VUT', levelColor: 'red', location: 'Tělocvična Machina' },
                  { day: 'Čtvrtek', time: '16:00 – 17:00', program: 'Kondiční trénink', level: 'Plně obsazeno', levelColor: 'muted', location: 'Josefská' },
                  { day: 'Pátek', time: '6:15 – 7:30', program: 'Sanda', level: '—', levelColor: 'red', location: 'Josefská' },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-5 py-3.5 text-sm font-bold text-white">
                      {row.day}
                    </td>
                    <td className="px-5 py-3.5 text-sm text-white/70">{row.time}</td>
                    <td className="px-5 py-3.5 text-sm text-white/70">{row.program}</td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-sm text-[10px] font-bold tracking-wide uppercase ${
                          row.levelColor === 'red'
                            ? 'bg-[rgba(196,30,42,0.2)] text-[#C41E2A]'
                            : row.levelColor === 'gold'
                            ? 'bg-[rgba(184,146,42,0.2)] text-[#B8922A]'
                            : 'bg-white/10 text-white'
                        }`}
                      >
                        {row.level}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-white/70">
                      {row.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-white/40 mt-3.5 tracking-wide">
            * Rozvrh se může měnit — sledujte aktuality nebo nás kontaktujte.
          </p>

          <div className="mt-12 text-center">
            <Link
              to="/prihlaseni"
              className="inline-flex items-center justify-center bg-[#C41E2A] hover:bg-[#A01822] text-white px-10 py-4 text-[13px] font-bold tracking-[3px] uppercase transition-colors"
            >
              Rezervovat trénink →
            </Link>
          </div>
        </div>
      </section>

      {/* Co je Sanda */}
      <section className="py-24 bg-[#F5F3F0]">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-start">
            <div>
              <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-4">
                03 — NADSTAVBA
              </span>
              <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight text-[#0A0A0A] mb-6">
                CO JE <span className="text-[#C41E2A]">SANDA</span>
              </h2>
              <p className="text-[15px] leading-relaxed text-[#0A0A0A]/70 mb-3.5">
                Sanda je (plno)kontaktní sport, kombinující údery, kopy a hody. Sanda vám pomůže s vylepšením technik,
                které znáte z tréninku sebeobrany, do praxe. Pomůže vám vylepšit úderovou a kopací techniku, zlepší
                vaši práci na nohách, práci se vzdáleností.
              </p>
              <p className="text-[15px] leading-relaxed text-[#0A0A0A]/70">
                S přibývajícími schopnostmi je možné přidat řízený a posléze i volný sparing, který vám pomůže
                s načasováním a rozhodně i s odolností.
              </p>
            </div>

            <div className="bg-[#0A0A0A] p-8">
              <div className="text-[11px] font-bold tracking-[4px] uppercase text-[#C41E2A] mb-4">
                PRO KOHO
              </div>
              <p className="text-[14px] text-white/60 leading-relaxed mb-6">
                Pro každého staršího 13 let. Tréninky jsou uzpůsobené pro všechny výkonnostní kategorie —
                přidat se mohou i začátečníci.
              </p>
              <div className="text-[11px] font-bold tracking-[4px] uppercase text-[#C41E2A] mb-2">
                KDY A KDE
              </div>
              <p className="text-[14px] text-white/60 leading-relaxed">
                Pátek 6:15 – 7:30 · tělocvična Josefská
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Co potřebuješ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-4">
            04 — CO POTŘEBUJEŠ
          </span>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight text-[#0A0A0A] mb-16">
            VYBAVENÍ <span className="text-[#C41E2A]">NA TRÉNINK</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[20px] font-bold text-[#0A0A0A] mb-6">
                Na první lekci
              </h3>
              <ul className="space-y-4">
                {[
                  'Kraťasy',
                  'Sálová obuv',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-[#0A0A0A]/70">
                    <span className="text-[#C41E2A] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-[#0A0A0A] mb-6">
                Pro pravidelný trénink
              </h3>
              <ul className="space-y-4">
                {[
                  'Chránič na zuby',
                  'Suspenzor',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-[#0A0A0A]/70">
                    <span className="text-[#C41E2A] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[13px] text-[#0A0A0A]/50 mt-6">
                * Vybavení lze zakoupit přes nás za zvýhodněnou cenu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ceny */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-3">
            05 — CENÍK
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,46px)] font-bold leading-tight text-white mb-6">
            Kolik to <span className="text-[#C41E2A]">stojí</span>
          </h2>
          <p className="text-base text-white/60 leading-relaxed max-w-[580px] mb-14">
            Transparentní ceny bez skrytých poplatků. První lekce je vždy zdarma.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Děti',
                price: '2 300 Kč',
                desc: 'pololetí',
                features: [],
              },
              {
                name: 'Junioři',
                price: '2 800 Kč',
                desc: 'pololetí',
                features: [],
              },
              {
                name: 'Studenti SŠ & VŠ',
                price: '2 200 Kč',
                desc: '3 měsíce · prezenční studium',
                features: [],
                featured: true,
              },
              {
                name: 'Dospělí',
                price: '2 400 Kč',
                desc: '3 měsíce',
                features: [],
              },
              {
                name: 'Osobní trénink',
                price: '1 100 Kč',
                desc: 'hodina · až pro 4 osoby',
                features: [],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`flex flex-col p-8 border-l-[3px] ${
                  plan.featured
                    ? 'bg-gradient-to-br from-[#C41E2A] via-[#C41E2A] to-[#8B0000] border-white/60'
                    : 'bg-[#0A0A0A] border-[#C41E2A]'
                }`}
              >
                {plan.featured ? (
                  <span className="self-start bg-[#0A0A0A] text-white text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 mb-5">
                    Nejlepší volba
                  </span>
                ) : (
                  <div className="h-[26px] mb-5" />
                )}

                <h3 className="text-[20px] font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className={`text-[11px] tracking-[2px] uppercase mb-8 ${plan.featured ? 'text-white/80' : 'text-white/40'}`}>
                  {plan.desc}
                </div>

                <div className="mt-auto">
                  <div className="text-[36px] font-bold text-white mb-6 whitespace-nowrap tabular-nums">
                    {plan.price}
                  </div>
                  {plan.features.length > 0 && (
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className={`flex items-start gap-2 text-[13px] ${plan.featured ? 'text-white/90' : 'text-white/50'}`}>
                          <span className={plan.featured ? 'text-white' : 'text-[#C41E2A]'}>▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    to="/prihlaseni"
                    className={`block text-center py-3 text-[11px] font-bold tracking-[2px] uppercase transition-colors ${
                      plan.featured
                        ? 'bg-[#0A0A0A] text-white hover:bg-[#111]'
                        : 'bg-[#C41E2A] text-white hover:bg-[#A01822]'
                    }`}
                  >
                    {i === 0 ? 'Vyzkoušet' : i === 1 ? 'Začít trénovat' : 'Rezervovat'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[13px] text-white/40 mt-8 text-center">
            Kontaktujte nás pro více informací nebo individuální dohodu.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#C41E2A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A01822] via-[#C41E2A] to-[#8B0000] opacity-50" />
        
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5 text-center relative z-10">
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-bold text-white leading-tight mb-6">
            První lekce <br className="md:hidden" />
            <span className="text-[#F5F3F0]">zdarma</span>
          </h2>
          <p className="text-[16px] text-white/80 mb-10 max-w-[600px] mx-auto">
            Bez závazku, bez smluv. Přijď se podívat, jak vypadá reálná sebeobrana.
          </p>
          <Link
            to="/prihlaseni"
            className="inline-flex items-center justify-center bg-[#0A0A0A] hover:bg-[#111] text-white px-12 py-5 text-[14px] font-bold tracking-[3px] uppercase transition-colors"
          >
            Rezervovat lekci zdarma →
          </Link>
        </div>
      </section>
    </div>
  );
}
