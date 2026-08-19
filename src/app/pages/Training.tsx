import { useState, useRef, type RefObject } from 'react';
import { Link } from 'react-router';
import { MapPin, Clock, ChevronRight, Shield, Users, ShieldCheck, Flame, Target } from 'lucide-react';
import type { ReactNode } from 'react';
import { RevealOnScroll } from '../components/RevealOnScroll';

type Group = 'deti' | 'juniori' | 'dospeli' | 'sanda' | 'individualni';

const groups = [
  {
    id: 'deti' as Group,
    label: 'Sebeobrana pro děti',
    sub: '6–10 let',
    Icon: Shield,
    desc: 'Základy sebeobrany hrou, pohybová všestrannost a sebedůvěra v bezpečném prostředí.',
  },
  {
    id: 'juniori' as Group,
    label: 'Sebeobrana pro juniory',
    sub: '11–16 let',
    Icon: Users,
    desc: 'Reálná sebeobrana přizpůsobená věku — technika, sebevědomí a zvládání konfliktu.',
  },
  {
    id: 'dospeli' as Group,
    label: 'Sebeobrana pro dospělé',
    sub: '17+ let',
    Icon: ShieldCheck,
    desc: 'Urban Combatives — praktická příprava na reálnou situaci, bez zbytečností.',
  },
  {
    id: 'sanda' as Group,
    label: 'Sanda',
    sub: 'Sportovní boj',
    Icon: Flame,
    desc: 'Plnokontaktní sportovní boj s jasnými pravidly — údery, kopy, hody a sparing.',
  },
  {
    id: 'individualni' as Group,
    label: 'Individuální trénink',
    sub: 'Na domluvě',
    Icon: Target,
    desc: 'Osobní trénink pro 1–4 osoby, vlastní témata a časy dle dohody.',
  },
];

const gearNote =
  'Na první lekci stačí kraťasy a sálová obuv. Pro pravidelný trénink doporučujeme i chránič zubů a suspenzor — vybavení lze zakoupit přes nás za zvýhodněnou cenu.';

const scheduleData = {
  deti: {
    sections: [
      {
        title: 'Sebeobrana — děti',
        rows: [
          { name: 'Sebeobrana děti 6–10 let', day: 'Úterý', time: '16:00–17:00', place: 'Šujanovo náměstí 1', note: '' },
        ],
        note: '',
      },
    ],
    pricing: {
      main: [{ label: 'Sebeobrana pro děti', price: '2 300 Kč', period: '/ pololetí' }],
      notes: [] as ReactNode[],
    },
    gear: gearNote,
  },
  juniori: {
    sections: [
      {
        title: 'Sebeobrana — junioři',
        rows: [
          { name: 'Sebeobrana junioři 11–16 let', day: 'Úterý', time: '17:00–18:00', place: 'Šujanovo náměstí 1', note: '' },
        ],
        note: '',
      },
    ],
    pricing: {
      main: [{ label: 'Sebeobrana pro juniory', price: '2 800 Kč', period: '/ pololetí' }],
      notes: [] as ReactNode[],
    },
    gear: gearNote,
  },
  dospeli: {
    sections: [
      {
        title: 'Sebeobrana — dospělí',
        rows: [
          { name: 'Sebeobrana dospělí', day: 'Úterý', time: '18:00–19:30', place: 'Šujanovo náměstí 1', note: '' },
          { name: 'Sebeobrana — studenti VUT', day: 'Středa', time: '11:00–12:15', place: 'Tělocvična Machina', note: 'jen studenti VUT' },
          { name: 'Kondiční trénink', day: 'Čtvrtek', time: '16:00–17:00', place: 'Josefská', note: 'plně obsazeno' },
        ],
        note: '',
      },
    ],
    pricing: {
      extra: [
        { label: 'Studenti SŠ & VŠ', price: '2 200 Kč / 3 měsíce', featured: true },
        { label: 'Dospělí', price: '2 400 Kč / 3 měsíce', featured: false },
      ],
      notes: [] as ReactNode[],
    },
    gear: gearNote,
  },
};

export default function Training() {
  const [active, setActive] = useState<Group | null>(null);
  const contentRef = useRef<HTMLElement>(null);

  const handleSelect = (id: Group) => {
    const next = active === id ? null : id;
    setActive(next);
    if (next) {
      setTimeout(() => contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
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

      {/* Výběr skupiny */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <RevealOnScroll>
            <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-4">
              02 — ZAČNĚTE ZDE
            </span>
            <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight text-[#0A0A0A] mb-14">
              JAKÝ TRÉNINK VÁS <span className="text-[#C41E2A]">ZAJÍMÁ?</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[2px] bg-[#0A0A0A]/10">
            {groups.map((g) => {
              const isActive = active === g.id;
              const Icon = g.Icon;
              return (
                <button
                  key={g.id}
                  onClick={() => handleSelect(g.id)}
                  className={`text-left p-8 relative overflow-hidden transition-all duration-300 group ${
                    isActive ? 'bg-[#0A0A0A]' : 'bg-white hover:bg-[#F5F3F0]'
                  }`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 ${isActive ? 'bg-[#C41E2A]' : 'bg-transparent group-hover:bg-[#C41E2A] scale-x-0 group-hover:scale-x-100 origin-left'}`} />

                  <Icon
                    className={`absolute bottom-3 right-3 transition-opacity duration-300 ${isActive ? 'opacity-10 text-white' : 'opacity-[0.07] text-[#C41E2A] group-hover:opacity-15'}`}
                    size={80}
                    strokeWidth={1.5}
                  />

                  <div className={`text-[9px] font-bold tracking-[3px] uppercase mb-3 transition-colors ${isActive ? 'text-[#C41E2A]' : 'text-[#C41E2A]/70'}`}>
                    {g.sub}
                  </div>
                  <div className={`font-serif text-[20px] font-bold mb-2 leading-tight transition-colors ${isActive ? 'text-white' : 'text-[#0A0A0A]'}`}>
                    {g.label}
                  </div>
                  <p className={`text-[12px] leading-normal transition-colors ${isActive ? 'text-white/50' : 'text-[#0A0A0A]/60'}`}>
                    {g.desc}
                  </p>

                  <div className={`mt-5 flex items-center gap-1 text-[10px] font-bold tracking-[2px] uppercase transition-colors ${isActive ? 'text-[#C41E2A]' : 'text-[#C41E2A]/60 group-hover:text-[#C41E2A]'}`}>
                    {isActive ? 'Skrýt' : 'Zobrazit'} <ChevronRight size={12} className={`transition-transform ${isActive ? 'rotate-90' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamický obsah — děti / junioři / dospělí */}
      {(active === 'deti' || active === 'juniori' || active === 'dospeli') && (
        <section ref={contentRef as RefObject<HTMLElement>} className="bg-[#0A0A0A] py-20 scroll-mt-20">
          <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
            {/* Rozvrh */}
            <RevealOnScroll>
              <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-3">Rozvrh</span>
              <h2 className="font-serif text-[clamp(26px,3.5vw,42px)] font-bold text-white mb-12">
                Kdy & <span className="text-[#C41E2A]">kde</span>
              </h2>
            </RevealOnScroll>

            {scheduleData[active].sections.map((section, si) => (
              <div key={si} className="mb-12">
                <h3 className="text-[11px] font-bold tracking-[4px] uppercase text-white/70 mb-5">{section.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        {['Trénink', 'Den', 'Čas', 'Místo'].map((h) => (
                          <th key={h} className="px-5 py-3 text-left text-[10px] font-bold tracking-[3px] uppercase text-white/40 border-b border-white/10">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, ri) => (
                        <tr key={ri} className="border-b border-white/[0.06] hover:bg-white/[0.03] transition-colors">
                          <td className="px-5 py-4 text-[14px] font-medium text-white">
                            {row.name}
                            {row.note && <span className="ml-2 text-[10px] text-[#C41E2A] font-bold tracking-wide uppercase">{row.note}</span>}
                          </td>
                          <td className="px-5 py-4 text-[13px] text-white/60">{row.day}</td>
                          <td className="px-5 py-4 text-[13px] text-white/60 whitespace-nowrap">
                            <Clock size={11} className="inline mr-1.5 opacity-40" />{row.time}
                          </td>
                          <td className="px-5 py-4 text-[13px] text-white/60 whitespace-nowrap">
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(row.place + ', Brno')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-white transition-colors"
                            >
                              <MapPin size={11} className="inline mr-1.5 opacity-40" />{row.place}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {section.note && (
                  <p className="mt-3 text-[12px] text-white/35 italic">{section.note}</p>
                )}
              </div>
            ))}

            {/* Ceník */}
            <div className="mt-16 pt-16 border-t border-white/10">
              <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-3">Ceník</span>
              <h2 className="font-serif text-[clamp(26px,3.5vw,42px)] font-bold text-white mb-10">
                Transparentní <span className="text-[#C41E2A]">ceny</span>
              </h2>

              {/* Děti / junioři — jednoduchý ceník */}
              {(active === 'deti' || active === 'juniori') && (
                <div className="space-y-4">
                  {scheduleData[active].pricing.main?.map((item, i) => (
                    <div key={i} className="bg-white/[0.04] border border-white/[0.08] p-6 flex items-center justify-between gap-4 flex-wrap">
                      <span className="text-[15px] text-white font-medium">
                        {item.label}
                      </span>
                      <span className="font-serif text-[28px] font-bold text-[#C41E2A]">{item.price} <span className="text-[14px] text-white/40 font-sans font-normal">{item.period}</span></span>
                    </div>
                  ))}
                </div>
              )}

              {/* Dospělí — porovnání */}
              {active === 'dospeli' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2px] bg-white/[0.05] mb-8">
                  {scheduleData.dospeli.pricing.extra?.map((item, i) => (
                    <div key={i} className={`p-6 flex flex-col gap-2 ${item.featured ? 'bg-gradient-to-br from-[#C41E2A] via-[#C41E2A] to-[#8B0000]' : 'bg-[#0A0A0A]'}`}>
                      {item.featured && (
                        <span className="self-start bg-[#0A0A0A] text-white text-[9px] font-bold tracking-[2px] uppercase px-2.5 py-1 mb-1">
                          Nejvýhodnější
                        </span>
                      )}
                      <span className={`text-[13px] ${item.featured ? 'text-white/90' : 'text-white/70'}`}>{item.label}</span>
                      <span className="text-[20px] font-bold text-white whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* S sebou */}
            <div className="mt-12 bg-white/[0.03] border border-white/[0.07] p-6">
              <h4 className="text-[10px] font-bold tracking-[4px] uppercase text-white/70 mb-3">S sebou na trénink</h4>
              <p className="text-[14px] text-white/60">{scheduleData[active].gear}</p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link to="/prihlaseni" className="inline-flex items-center gap-2 bg-[#C41E2A] hover:bg-[#A01822] text-white px-9 py-4 text-[12px] font-bold tracking-[2px] uppercase transition-colors">
                Rezervovat trénink →
              </Link>
              <p className="text-[11px] text-white/30 mt-3">První lekce je vždy zdarma</p>
            </div>
          </div>
        </section>
      )}

      {/* Sanda */}
      {active === 'sanda' && (
        <section ref={contentRef as RefObject<HTMLElement>} className="bg-[#0A0A0A] py-20 scroll-mt-20">
          <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
            <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-3">Sportovní boj</span>
            <h2 className="font-serif text-[clamp(26px,3.5vw,42px)] font-bold text-white mb-6">
              Sanda — <span className="text-[#C41E2A]">sportovní boj</span>
            </h2>
            <p className="text-[15px] text-white/60 leading-relaxed mb-10 max-w-[700px]">
              Sanda je (plno)kontaktní sport, kombinující údery, kopy a hody. Sanda vám pomůže s vylepšením technik,
              které znáte z tréninku sebeobrany, do praxe. Pomůže vám vylepšit úderovou a kopací techniku, zlepší
              vaši práci na nohách, práci se vzdáleností. S přibývajícími schopnostmi je možné přidat řízený
              a posléze i volný sparing, který vám pomůže s načasováním a rozhodně i s odolností.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2px] bg-white/[0.05] mb-10">
              {[
                { label: 'Kdy', price: 'Pátek, 6:15 – 7:30' },
                { label: 'Kde', price: 'Tělocvična Josefská' },
                { label: 'Pro koho', price: 'Od 13 let, včetně začátečníků' },
                { label: 'Trenér', price: 'Šimon Klein' },
              ].map((item, i) => (
                <div key={i} className="bg-[#0A0A0A] p-6 border border-white/[0.07]">
                  <div className="text-[10px] font-bold tracking-[3px] uppercase text-white/30 mb-2">{item.label}</div>
                  <div className="text-[15px] text-white font-medium">{item.price}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link to="/prihlaseni" className="inline-flex items-center gap-2 bg-[#C41E2A] hover:bg-[#A01822] text-white px-9 py-4 text-[12px] font-bold tracking-[2px] uppercase transition-colors">
                Rezervovat →
              </Link>
            </div>

            {/* Rozhovor s trenérem Sandy */}
            <div className="pt-16 border-t border-white/10">
              <span className="block text-[11px] font-bold tracking-[4px] uppercase text-[#C41E2A] mb-4">
                Poznejte trenéra
              </span>
              <h3 className="font-serif text-[clamp(26px,3.5vw,38px)] font-bold text-white mb-10 leading-tight">
                Rozhovor se <span className="text-[#C41E2A]">Šimonem Kleinem</span>
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* otázky */}
                <div className="order-2 lg:order-1">
                  <ul className="space-y-7">
                    {[
                      'Představ se nám na úvod – jaké všechny disciplíny vlastně trénuješ a co tě na téhle pestré kombinaci nejvíc baví?',
                      'Hodně lidí má z bojových sportů strach. Jak u vás vypadá trénink úplného nováčka – dostane hned na první lekci „nakládačku“?',
                      'Musím mít skvělou fyzičku a drahou výbavu, než k vám vůbec poprvé přijdu, nebo mi stačí tričko a kraťasy?',
                      'Pro koho je váš trénink určen?',
                      'Když někdo nechce zápasit, ale chce se jen naučit bránit, shodit kila a vyčistit si hlavu – má smysl k vám chodit?',
                      'Co bys vzkázal lidem, kteří o tréninku už dlouho uvažují, ale pořád sbírají odvahu?',
                    ].map((q, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="font-serif text-[26px] font-bold text-[#C41E2A]/25 leading-none shrink-0 tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-[15px] text-white/60 leading-relaxed pt-1">{q}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* video */}
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-[#C41E2A]/10 blur-2xl pointer-events-none" />
                    <div className="relative aspect-video bg-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C41E2A] z-10" />
                      <iframe
                        className="w-full h-full relative z-0"
                        src="https://www.youtube.com/embed/9ePO9NbeRTg"
                        title="Rozhovor se Šimonem Kleinem"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Individuální trénink */}
      {active === 'individualni' && (
        <section ref={contentRef as RefObject<HTMLElement>} className="bg-[#0A0A0A] py-20 scroll-mt-20">
          <div className="max-w-[900px] mx-auto px-12 max-[880px]:px-5">
            <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-3">Individuální výuka</span>
            <h2 className="font-serif text-[clamp(26px,3.5vw,42px)] font-bold text-white mb-6">
              Trénink <span className="text-[#C41E2A]">na míru</span>
            </h2>
            <p className="text-[15px] text-white/60 leading-relaxed mb-10 max-w-[620px]">
              Mimo pravidelné skupinové tréninky nabízíme i individuální výuku pro 1–4 osoby. Hodí se, když
              potřebuješ doladit konkrétní techniku, řešíš specifickou situaci, nebo ti nesedí čas skupinových
              tréninků. Témata i tempo přizpůsobíme přesně tobě.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2px] bg-white/[0.05] mb-10">
              {[
                { label: 'Osobní trénink 1–4 osoby', price: '1 100 Kč / hodina' },
                { label: 'Témata', price: 'Sebeobrana, technika, modelové situace...' },
                { label: 'Místo', price: 'Dle dohody' },
                { label: 'Časy', price: 'Dle dohody' },
              ].map((item, i) => (
                <div key={i} className="bg-[#0A0A0A] p-6 border border-white/[0.07]">
                  <div className="text-[10px] font-bold tracking-[3px] uppercase text-white/30 mb-2">{item.label}</div>
                  <div className="text-[15px] text-white font-medium">{item.price}</div>
                </div>
              ))}
            </div>
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-[#C41E2A] hover:bg-[#A01822] text-white px-9 py-4 text-[12px] font-bold tracking-[2px] uppercase transition-colors">
              Kontaktujte nás →
            </Link>
          </div>
        </section>
      )}

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
