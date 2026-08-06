import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { RevealOnScroll } from '../components/RevealOnScroll';
import rbsdLogo from '@/imports/si_la__kopie_.png';
import jiriPhoto from '@/imports/image-1.png';

export default function About() {
  return (
    <div className="pt-[88px]">
      {/* Page Hero - ČERVENÁ S ČERNÝM GRADIENTEM */}
      <section className="bg-[#C41E2A] min-h-[35vh] flex items-end pb-10 relative overflow-hidden">
        {/* Tmavší gradient overlay */}
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
              RBSD Combatives Brno <span className="text-white">/ O nás</span>
            </div>
            <h1 className="font-serif text-[clamp(34px,5vw,58px)] font-bold text-white leading-tight">
              KDO <span className="text-white/90">JSME</span>
            </h1>
          </div>
        </RevealOnScroll>
      </section>

      {/* About Content */}
      <section className="py-24 bg-[#F5F3F0]">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-18">
            <RevealOnScroll>
              <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-3">
                Naše mise
              </span>
              <h3 className="font-serif text-[26px] font-bold text-[#0A0A0A] mb-5">
                Proč trénovat s námi
              </h3>
              
              <p className="text-[15px] text-[#0A0A0A]/70 leading-relaxed mb-3.5">
                Klub RBSD Combatives Brno byl založen s jasným cílem — naučit lidi reálné sebeobrance
                bez kompromisů. Žádné okázalé techniky, žádné kata, žádný sport. Jen to, co funguje na ulici.
              </p>

              <p className="text-[15px] text-[#0A0A0A]/70 leading-relaxed mb-3.5">
                Náš systém je postaven na Urban Combatives od Lee Morrisona, což je jeden z nejrespektovanějších 
                systémů reálné sebeobrany na světě. Kombinujeme ho s 15 lety praktických zkušeností 
                našich instruktorů.
              </p>

              <p className="text-[15px] text-[#0A0A0A]/70 leading-relaxed mb-3.5">
                Věříme, že 90% je v hlavě — mentální nastavení, vůle přežít a schopnost jednat pod stresem. 
                Proto se u nás neučíte jen techniky, ale hlavně psychologii konfliktu a jak zvládat strach.
              </p>

              <h3 className="font-serif text-[26px] font-bold text-[#0A0A0A] mb-5 mt-12">
                Co je Combatives
              </h3>

              <p className="text-[15px] text-[#0A0A0A]/70 leading-relaxed mb-3.5">
                Combatives je mezinárodně uznávaný systém, který učí dovednosti osobní bezpečnosti
                a sebeobrany jako účinnou odpověď na násilí. Byl vytvořen především pro běžné civilisty,
                díky své přizpůsobivosti ho ale využívají i bezpečnostní složky, policie a armádní jednotky.
              </p>

              <p className="text-[15px] text-[#0A0A0A]/70 leading-relaxed mb-3.5">
                Combatives se vyučuje úplným začátečníkům až po elitní speciální jednotky po celém
                světě — pravidla nasazení i cíl výcviku se samozřejmě liší podle toho, komu je určen.
              </p>

              <p className="text-[15px] text-[#0A0A0A]/70 leading-relaxed mb-3.5">
                RBSD Combatives Brno je součástí{' '}
                <a
                  href="https://rbsd.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C41E2A] underline underline-offset-2 hover:text-[#0A0A0A] transition-colors"
                >
                  sítě RBSD škol
                </a>{' '}
                po celé České republice, které sdílí stejnou filozofii a metodiku výcviku. Nejsme
                v tom sami, čerpáme ze zkušeností celé sítě a jsme s ní v pravidelném kontaktu.
              </p>
            </RevealOnScroll>

            <div className="space-y-3.5">
              <div className="bg-[#0A0A0A] border-l-[3px] border-[#C41E2A] p-6">
                <h4 className="text-[11px] tracking-[3px] font-bold uppercase text-[#C41E2A] mb-2.5">
                  CO VÁS NAUČÍME
                </h4>
                <ul className="space-y-2.5 text-[14px] text-white/60">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C41E2A] font-bold">▸</span>
                    Prevenci a vyhýbání se konfliktům
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C41E2A] font-bold">▸</span>
                    Slovní deeskalaci
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C41E2A] font-bold">▸</span>
                    Bojovat, pokud není jiná možnost
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C41E2A] font-bold">▸</span>
                    Co dělat po skončení konfliktu
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C41E2A] font-bold">▸</span>
                    Boj se zbraní a proti zbrani
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C41E2A] font-bold">▸</span>
                    Právní stránku konfliktu
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C41E2A] font-bold">▸</span>
                    Psychologii konfliktu
                  </li>
                </ul>
              </div>

              <div className="bg-[#C41E2A] p-6">
                <h4 className="text-[11px] tracking-[3px] font-bold uppercase text-white mb-2.5">
                  PRVNÍ LEKCE ZDARMA
                </h4>
                <p className="text-[13px] text-white/90 mb-4 leading-relaxed">
                  Přijď se podívat bez závazku. První trénink je vždy zdarma.
                </p>
                <Link
                  to="/prihlaseni"
                  className="inline-flex items-center justify-center bg-[#0A0A0A] hover:bg-[#111] text-white px-6 py-2.5 rounded-sm text-[11px] font-bold tracking-[2px] uppercase transition-colors w-full"
                >
                  Rezervovat →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instruktor */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        {/* background accent */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#C41E2A]/5 pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5 relative z-10">
          <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-4">
            Hlavní instruktor
          </span>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight text-white mb-16">
            NÁŠ <span className="text-[#C41E2A]">TÝM</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
            {/* foto */}
            <div className="relative overflow-hidden aspect-[592/570] bg-[#111]">
              <ImageWithFallback
                src={jiriPhoto}
                alt="Jiří Holáň - hlavní instruktor RBSD Combatives Brno"
                className="w-full h-full object-cover"
              />
              {/* gradient overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              {/* red accent line left */}
              <div className="absolute top-0 left-0 w-[4px] h-full bg-[#C41E2A]" />
            </div>

            {/* info */}
            <div className="bg-[#111] border border-white/5 border-l-0 p-10 flex flex-col justify-center">
              <div className="text-[10px] tracking-[4px] uppercase text-[#C41E2A] mb-3">
                Zakladatel & hlavní instruktor
              </div>
              <h3 className="font-serif text-[36px] font-bold text-white mb-6 leading-tight">
                Jiří Holáň
              </h3>

              <p className="text-[14px] text-white/60 leading-relaxed mb-6">
                Tréninku bojových sportů a umění se věnuje již 15 let. Začínal s karate a kung-fu,
                ve kterém byl i úspěšným závodníkem. Od roku 2010 se začal věnovat tréninkům reálné
                sebeobrany. Od té doby si vyzkoušel mnoho sebeobranných systémů jak českých, tak
                zahraničních. Nejvíce ho zaujal systém Urban Combatives Lee Morrisona, převážně pro
                svou komplexnost a účinnost, a tento systém teď tvoří valnou část jeho tréninkové
                náplně. Tréninku Urban Combatives se nyní intenzivně věnuje přímo s Lee Morrisonem,
                případně s jeho zástupci v České republice – Martinem Mikoláškem a Lukášem Wolfem.
                Mimo Combatives se věnuje i tréninku úpolových sportů – zejména boxu a graplingu.
                Reálné zkušenosti sbírá při práci, kdy působí jako ostraha na různých akcích.
              </p>

              <blockquote className="border-l-[3px] border-white/20 pl-5 mb-8">
                <p className="text-[15px] font-serif italic text-white/80 leading-relaxed">
                  „Combatives je systém, jehož základ najdeme ve výcviku jednotek Comandos za druhé
                  světové války. Je z 90&nbsp;% postaven na správném nastavení hlavy, nasazení a vůli
                  zvítězit. To byl pro mne obrovský rozdíl mezi drilováním technik v jiných systémech
                  a mezi komplexním přístupem Combatives. Trénink „hlavy“ posunul úžasným způsobem moje
                  výkony jak v sebeobraně, tak i v dalších oblastech života.“
                </p>
              </blockquote>

              <div className="border-t border-white/10 pt-8 space-y-3">
                {[
                  'Instruktor Urban Combatives pod vedením Lee Morrisona',
                  'Instruktor systému RED ZONE (Level 1)',
                  'Instruktor RBSD',
                  'Vede pravidelné tréninky sebeobrany pro děti a dospělé v Brně',
                  'Zkušenost se systémy Red Zone, Crazy Monkey Defense Program, Krav Maga a další',
                  'Zkušenosti s ochranou osob a majetku',
                  'Trenérská licence 2. třídy (FTVS – UK Praha)',
                  'Certifikovaný DNS trenér',
                  'Zdravotnická školení ZDrSEM, CACM a další',
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 text-[13px] text-white/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C41E2A] shrink-0" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A0A0A] border-t border-white/10">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5 text-center">
          <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-bold text-white leading-tight mb-6">
            Připraven začít?
          </h2>
          <p className="text-[16px] text-white/60 mb-10 max-w-[600px] mx-auto">
            První lekce je zdarma. Žádné závazky, žádné smlouvy. Jen ty a realita.
          </p>
          <Link
            to="/prihlaseni"
            className="inline-flex items-center justify-center bg-[#C41E2A] hover:bg-[#A01822] text-white px-12 py-5 text-[14px] font-bold tracking-[3px] uppercase transition-colors"
          >
            Rezervovat lekci →
          </Link>
        </div>
      </section>
    </div>
  );
}
