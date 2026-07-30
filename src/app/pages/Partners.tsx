import { Link } from 'react-router';
import { ExternalLink } from 'lucide-react';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { CursorParallax } from '../components/CursorParallax';

export default function Partners() {
  return (
    <div className="pt-[88px]">
      {/* Page Hero - ČERVENÁ */}
      <section className="bg-[var(--kung-fu-red)] min-h-[35vh] flex items-end pb-10 relative overflow-hidden">
        {/* Tmavší gradient overlay pro hloubku */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[var(--kung-fu-red)] to-[#6B0000]" />
        
        {/* Jemný zlatý accent gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_80%_50%,rgba(184,146,42,0.15)_0%,transparent_60%)]" />
        
        {/* Čínské znaky jako textura */}
        <div className="absolute inset-0 flex flex-wrap items-center gap-0 overflow-hidden pointer-events-none opacity-[0.08]">
          {['洪', '家', '功', '夫', '武', '術', '力', '心'].map((char, i) => (
            <span 
              key={i} 
              className="text-[88px] font-bold text-white leading-none p-2 select-none"
              style={{ fontFamily: "'Ma Shan Zheng', cursive" }}
            >
              {char}
            </span>
          ))}
        </div>
        
        <RevealOnScroll delay={0.2}>
          <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5 relative z-10">
            <div className="text-[10px] tracking-[4px] uppercase text-white/60 mb-3.5">
              Hung Gar Kung Fu Škola Brno <span className="text-[var(--kung-fu-gold)]">/ Partneři</span>
            </div>
            <h1 className="font-serif text-[clamp(34px,5vw,58px)] font-semibold text-white leading-tight">
              Naši <span className="text-[var(--kung-fu-gold)]">partneři</span>
            </h1>
          </div>
        </RevealOnScroll>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[var(--kung-fu-g100)]">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <div className="max-w-[700px]">
            <p className="text-lg text-[var(--kung-fu-g600)] leading-relaxed mb-5">
              Naše škola by nebyla tím, čím je, bez podpory našich partnerů. Děkujeme všem firmám, 
              institucím a jednotlivcům, kteří nám pomáhají rozvíjet tradiční bojové umění v Brně.
            </p>
            <p className="text-base text-[var(--kung-fu-g400)] leading-relaxed">
              Pokud máte zájem o partnerství nebo sponzorství, neváhejte nás kontaktovat.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-[var(--kung-fu-black)]">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <span className="block text-[10px] font-semibold tracking-[5px] uppercase text-[var(--kung-fu-red)] mb-3">
            Partneři
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,46px)] font-semibold leading-tight text-white mb-14">
            Kdo nás <span className="text-[var(--kung-fu-red)]">podporuje</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[var(--kung-fu-g200)]">
            {[
              {
                category: 'Hlavní partner',
                name: 'Město Brno',
                desc: 'Podpora rozvoje sportu a bojových umění v Brně',
                type: 'Instituce',
              },
              {
                category: 'Sportovní partner',
                name: 'FitZone Brno',
                desc: 'Poskytnutí tréninkových prostor a zázemí',
                type: 'Fitness centrum',
              },
              {
                category: 'Mediální partner',
                name: 'Sport Magazín',
                desc: 'Mediální podpora akcí a seminářů',
                type: 'Média',
              },
              {
                category: 'Partner',
                name: 'Dragon Sportswear',
                desc: 'Dodavatel sportovního oblečení a vybavení',
                type: 'Obchod',
              },
              {
                category: 'Partner',
                name: 'Zdravá výživa s.r.o.',
                desc: 'Poradenství v oblasti sportovní výživy',
                type: 'Výživa',
              },
              {
                category: 'Technologický partner',
                name: 'WebStudio Brno',
                desc: 'Tvorba a správa webových stránek',
                type: 'IT služby',
              },
            ].map((partner, i) => (
              <div
                key={i}
                className="bg-white p-8 relative group overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                {/* Zlatý levý border */}
                <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[var(--kung-fu-gold)] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                
                {/* Červený top border */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--kung-fu-red)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                
                {/* Zlatý diagonální accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--kung-fu-gold)] to-transparent opacity-5 group-hover:opacity-15 transition-opacity" />
                
                {/* Čínský znak */}
                <span 
                  className="absolute bottom-3 right-3 text-[100px] font-bold text-[var(--kung-fu-gold)] opacity-3 leading-none pointer-events-none select-none group-hover:opacity-8 transition-opacity"
                  style={{ fontFamily: "'Noto Serif TC', serif" }}
                >
                  {['洪', '功', '夫', '武', '力', '心'][i]}
                </span>

                <div className="relative z-10">
                  <div className="inline-block mb-4 bg-[var(--kung-fu-red)]/5 border border-[var(--kung-fu-red)]/20 px-2.5 py-1 rounded-sm text-[9px] font-semibold tracking-[3px] uppercase text-[var(--kung-fu-red)] group-hover:bg-[var(--kung-fu-red)] group-hover:text-white transition-colors">
                    {partner.category}
                  </div>
                  
                  <h3 className="font-serif text-[22px] font-semibold text-[var(--kung-fu-black)] mb-2 group-hover:text-[var(--kung-fu-red)] transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-[13px] text-[var(--kung-fu-g600)] leading-normal mb-4">
                    {partner.desc}
                  </p>
                  
                  <div className="inline-block bg-[var(--kung-fu-g100)] px-2.5 py-1 rounded-sm text-[10px] text-[var(--kung-fu-g400)] border border-[var(--kung-fu-g200)]">
                    {partner.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Partner CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-12 text-center max-[880px]:px-5">
          <span className="block text-[10px] font-semibold tracking-[5px] uppercase text-[var(--kung-fu-red)] mb-3">
            Spolupráce
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-semibold text-[var(--kung-fu-black)] mb-6">
            Staňte se naším <span className="text-[var(--kung-fu-red)]">partnerem</span>
          </h2>
          <p className="text-base text-[var(--kung-fu-g600)] mb-10 max-w-[550px] mx-auto leading-relaxed">
            Hledáme partnery, kteří sdílejí naše hodnoty — respekt, disciplína, tradice a neustálý osobní růst. 
            Nabízíme různé formy spolupráce od sponzoringu po vzájemnou podporu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Viditelnost', desc: 'Logo na webu a propagačních materiálech' },
              { title: 'Eventy', desc: 'Prostor na našich akcích a seminářích' },
              { title: 'Komunita', desc: 'Přístup k naší aktivní komunitě sportovců' },
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--kung-fu-red)]/5 border border-[var(--kung-fu-red)]/20 flex items-center justify-center mx-auto mb-3">
                  <span className="font-serif text-[20px] font-bold text-[var(--kung-fu-red)]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-[var(--kung-fu-black)] mb-1.5">{benefit.title}</h3>
                <p className="text-[13px] text-[var(--kung-fu-g500)]">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-[var(--kung-fu-red)] hover:bg-[var(--kung-fu-red-hover)] text-white px-7 py-3.5 rounded-sm text-xs font-semibold tracking-[2px] uppercase transition-colors"
          >
            Kontaktujte nás →
          </Link>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 bg-[var(--kung-fu-black)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,30,42,0.09)_0%,transparent_60%)]" />
        
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5 relative z-10 text-center">
          <h2 className="font-serif text-[clamp(28px,4vw,46px)] font-semibold text-white mb-5">
            Děkujeme za <span className="text-[var(--kung-fu-red)]">podporu</span>
          </h2>
          <p className="text-base text-white/50 max-w-[600px] mx-auto">
            Bez vás by naše škola nemohla růst a rozvíjet tradiční bojové umění v Brně. 
            Děkujeme všem našim partnerům za dlouhodobou spolupráci a důvěru.
          </p>
          
          {/* Čínský znak jako dekorace */}
          <div className="mt-12">
            <span 
              className="text-[120px] font-bold text-[var(--kung-fu-gold)] opacity-10 leading-none select-none inline-block"
              style={{ fontFamily: "'Noto Serif TC', serif" }}
            >
              謝
            </span>
            <p className="text-[11px] tracking-[4px] uppercase text-white/30 mt-3">
              Děkujeme • 謝謝
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}