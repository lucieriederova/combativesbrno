import { Link } from 'react-router';
import { useState } from 'react';
import rbsdLogo from '@/imports/si_la__kopie_.png';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { Swords, Trophy, ShieldCheck, Briefcase } from 'lucide-react';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-[88px]">
      {/* Hero Section - VIDEO POZADÍ S RBSD */}
      <section className="min-h-screen bg-[#0A0A0A] flex items-center relative overflow-hidden">
        {/* YouTube Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none grayscale"
            style={{ width: '177.78vh', height: '100vh', minWidth: '100%', minHeight: '56.25vw' }}
            src="https://www.youtube.com/embed/SEXxYrSSfsY?autoplay=1&mute=1&loop=1&playlist=SEXxYrSSfsY&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0"
            title="RBSD Training Background"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Červený gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_80%_at_75%_50%,rgba(196,30,42,0.2)_0%,transparent_60%)]" />

        {/* Scan lines texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.08) 3px, rgba(255,255,255,0.08) 4px)' }}
        />

        {/* Gradient transition na spodku */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-black/60 to-[#F5F3F0] z-[1]" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-[880px]:text-center">
            <RevealOnScroll delay={0.2}>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-7 h-px bg-[#C41E2A]" />
                <span className="text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A]">
                  Reality Based Self Defense
                </span>
              </div>

              <h1 className="font-serif text-[clamp(40px,5.5vw,68px)] font-bold leading-none text-white mb-2">
                REÁLNÁ <span className="text-[#C41E2A]">SEBEOBRANA</span>
              </h1>

              <p className="text-[13px] font-light tracking-[6px] uppercase text-white/50 mb-8">
                Combatives Brno
              </p>

              <p className="text-base leading-relaxed text-white/80 mb-10 max-w-[440px] max-[880px]:mx-auto">
                Naučíme tě, jak se dostat domů v pořádku.
              </p>

              <div className="flex gap-4 flex-wrap max-[880px]:justify-center">
                <Link
                  to="/prihlaseni"
                  className="inline-flex items-center gap-2 bg-[#C41E2A] hover:bg-[#A01822] text-white px-7 py-3.5 rounded-sm text-xs font-bold tracking-[2px] uppercase transition-colors shadow-lg shadow-[#C41E2A]/20"
                >
                  První lekce zdarma →
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <div className="flex items-center justify-center max-[880px]:order-first relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[1700px] h-[1700px] rounded-full border border-[#C41E2A] opacity-[0.08]" />
                </div>
                <img
                  src={rbsdLogo}
                  alt="RBSD Combatives Brno Logo"
                  className="w-full max-w-[2200px] h-auto drop-shadow-2xl relative z-10"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Co je Combatives */}
      <section className="py-24 bg-[#F5F3F0]">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-4">
                01 — O SYSTÉMU
              </span>
              <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight text-[#0A0A0A] mb-6">
                CO JE <span className="text-[#C41E2A]">COMBATIVES</span>
              </h2>
              <p className="text-[15px] leading-relaxed text-[#0A0A0A]/70 mb-6">
                <strong className="text-[#0A0A0A] font-bold">Urban Combatives</strong> je mezinárodně uznávaná organizace, která vyučuje dovednosti v oblasti osobní bezpečnosti a sebeobrany jako metodu boje proti násilí. Byla vytvořena primárně pro běžné civilisty, ale je přizpůsobitelná i pro potřeby bezpečnostních služeb, policie a vojenských jednotek. Systém Urban Combatives se vyučuje napříč všemi úrovněmi, a to až po elitní speciální jednotky po celém světě, kde se samozřejmě pravidla boje i samotné cíle budou lišit.
              </p>
              <p className="text-[15px] leading-relaxed text-[#0A0A0A]/70">
                Nejde o sport ani tradiční bojové umění s pravidly, ale o čistě „pouliční“ metodu zaměřenou na osobní bezpečnost a obranu proti skutečnému násilí. Vše je postaveno na budování odolné psychiky a schopnosti fungovat i pod obrovským stresem, zmatkem a návalem adrenalinu.
              </p>
            </div>

            <div className="bg-[#0A0A0A] p-10 relative overflow-hidden">
              {/* Diagonální accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C41E2A]/30 to-transparent" />
              
              <div className="relative z-10">
                <div className="text-[11px] font-bold tracking-[4px] uppercase text-[#C41E2A] mb-6">
                  KLÍČOVÉ PRINCIPY
                </div>
                <ul className="space-y-4">
                  {[
                    'Prevence a vyhýbání se konfliktům',
                    'Slovní deeskalace',
                    'Boj, pokud není jiná možnost',
                    'Co dělat po skončení konfliktu',
                    'Boj se zbraní a proti zbrani',
                    'Právní stránka konfliktu',
                    'Psychologie konfliktu',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-[14px]">
                      <span className="text-[#C41E2A] font-bold text-[16px] mt-[-2px]">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pilíře RBSD */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.1) 3px, rgba(255,255,255,0.1) 4px)',
          }}
        />

        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5 relative z-10">
          <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-4">
            02 — NAŠE METODA
          </span>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight text-white mb-16">
            3 PILÍŘE <span className="text-[#C41E2A]">VÝCVIKU</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-white/10">
            {[
              {
                number: '01',
                title: 'URBAN COMBATIVES',
                subtitle: 'LEE MORRISON',
                desc: 'Souhrn technik, principů a taktik, které se osvědčily v boji nebo při trénincích v situacích s nespolupracujícím soupeřem.',
              },
              {
                number: '02',
                title: 'MENTÁLNÍ PŘÍPRAVA & TEORIE',
                subtitle: '90% JE HLAVA',
                desc: '90% je mentální nastavení — nasazení a vůle zvítězit. Součástí výcviku jsou modelové situace, právní stránka sebeobrany a první pomoc.',
              },
              {
                number: '03',
                title: 'SPORTOVNÍ BOJ',
                subtitle: 'PRAXE V BEZPEČNÉM PROSTŘEDÍ',
                desc: 'Vyzkoušej techniky v reálném, ale stále bezpečném prostředí. Trénink ti dá fyzickou kondici, zlepší ti techniku a dá ti zkušenost z práce pod tlakem — přesně to, co na ulici potřebuješ.',
              },
            ].map((pillar, i) => (
              <div key={i} className="bg-[#0A0A0A] p-8 border-l-[3px] border-transparent hover:border-[#C41E2A] transition-all duration-300 group">
                <div className="text-[72px] font-bold text-white/5 leading-none mb-4 group-hover:text-[#C41E2A]/10 transition-colors">
                  {pillar.number}
                </div>
                <div className="text-[11px] font-bold tracking-[3px] uppercase text-[#C41E2A] mb-2">
                  {pillar.subtitle}
                </div>
                <h3 className="text-[20px] font-bold text-white mb-4 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-[13px] text-white/50 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro koho */}
      <section className="py-24 bg-[#F5F3F0]">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-4">
            03 — PRO KOHO
          </span>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight text-[#0A0A0A] mb-6">
            KOMU JE <span className="text-[#C41E2A]">COMBATIVES URČENO</span>
          </h2>
          <p className="text-[15px] text-[#0A0A0A]/70 leading-relaxed max-w-[700px] mb-16">
            Combatives je pro každého, kdo chce být připraven na reálnou konfrontaci. Bez ohledu na věk, pohlaví nebo fyzickou kondici.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                Icon: Swords,
                title: 'Začátečníci',
                desc: 'Žádné předchozí zkušenosti nejsou potřeba. Začínáme od nuly.',
              },
              {
                Icon: Trophy,
                title: 'Sportovci',
                desc: 'Sportuješ? Super, jen tvé dovednosti lehce upravíme pro ulici.',
              },
              {
                Icon: ShieldCheck,
                title: 'Ženy',
                desc: 'Necítíš se sama na ulici v bezpečí? Naučíme tě rozpoznat hrozbu včas a ubránit se, i když je útočník fyzicky silnější.',
              },
              {
                Icon: Briefcase,
                title: 'Firmy & školy',
                desc: 'Firemní klientela, přednášky a workshopy pro školy i organizace.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border-l-[3px] border-[#C41E2A] hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <item.Icon size={36} className="text-[#C41E2A]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-bold text-[#0A0A0A] mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#0A0A0A]/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-4">
            04 — ČASTÉ OTÁZKY
          </span>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight text-white mb-16">
            MÁTE <span className="text-[#C41E2A]">DOTAZY?</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                question: 'Potřebuji předchozí zkušenosti?',
                answer: 'Ne — výcvik je pro každého. V září začíná nábor a sejdou se tam lidé, kteří už nějakou zkušenost se sebeobranou mají, i tací, kteří to vidí poprvé. Tréninky jsou přizpůsobené tak, aby daly něco každému.',
              },
              {
                question: 'Jak vypadá typický trénink?',
                answer: 'Přednáška/diskuse na dané téma (psychologie konfliktu, právní či zdravotní minimum,…), dále zahřátí, technika, trénink různých modelových situací. Každý trénink je intenzivní a praktický.',
              },
              {
                question: 'Je RBSD sport nebo bojové umění?',
                answer: 'Ani jedno. RBSD je systém reálné sebeobrany. Není to sport s pravidly ani tradiční bojové umění. Jde o praktické dovednosti pro ulici.',
              },
              {
                question: 'Kolik stojí trénink?',
                answer: (
                  <>
                    První lekce je vždy zdarma. Ceny za pravidelný trénink najdete v sekci{' '}
                    <Link to="/treninky" className="text-[#C41E2A] underline hover:text-white transition-colors">
                      Tréninky
                    </Link>{' '}
                    nebo nás kontaktujte.
                  </>
                ),
              },
            ].map((faq, i) => (
              <div key={i} className="border border-white/10 overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-[16px] font-bold text-white">
                    {faq.question}
                  </span>
                  <span className={`text-[#C41E2A] text-[24px] transition-transform ${openFaqIndex === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaqIndex === i && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[14px] text-white/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#C41E2A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A01822] via-[#C41E2A] to-[#8B0000] opacity-50" />
        
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5 text-center relative z-10">
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-bold text-white leading-tight mb-6">
            Připraven na <br className="md:hidden" />
            <span className="text-[#F5F3F0]">první lekci?</span>
          </h2>
          <p className="text-[16px] text-white/80 mb-10 max-w-[600px] mx-auto">
            První trénink je vždy zdarma a bez závazku. Přijď se podívat, jak vypadá reálná sebeobrana.
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