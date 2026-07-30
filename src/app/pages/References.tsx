import { Link } from 'react-router';
import { Quote } from 'lucide-react';
import { RevealOnScroll } from '../components/RevealOnScroll';

export default function References() {
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
              RBSD Combatives Brno <span className="text-white">/ Reference</span>
            </div>
            <h1 className="font-serif text-[clamp(34px,5vw,58px)] font-bold text-white leading-tight">
              CO ŘÍKAJÍ <span className="text-white/90">STUDENTI</span>
            </h1>
          </div>
        </RevealOnScroll>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F5F3F0]">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-3">
            Reference
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,46px)] font-bold leading-tight text-[#0A0A0A] mb-6">
            Zkušenosti našich <span className="text-[#C41E2A]">studentů</span>
          </h2>
          <p className="text-base text-[#0A0A0A]/70 leading-relaxed max-w-[580px] mb-14">
            Poslechněte si, proč lidé trénují RBSD a jak jim to změnilo život.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Petra Nováková',
                age: '32 let',
                program: 'RBSD Začátečníci',
                duration: 'Trénuje 1 rok',
                quote: 'Konečně něco, co má smysl. Žádné zbytečnosti, jen praktická obrana. Cítím se mnohem bezpečněji.',
              },
              {
                name: 'Martin Svoboda',
                age: '28 let',
                program: 'Urban Combatives',
                duration: 'Trénuje 3 roky',
                quote: 'Nejlepší rozhodnutí mého života. RBSD mě naučilo, jak zvládat stres a jednat pod tlakem. To se hodí i v běžném životě.',
              },
              {
                name: 'Jana Procházková',
                age: '41 let',
                program: 'Sebeobrana pro ženy',
                duration: 'Trénuje 6 měsíců',
                quote: 'Cítím se mnohem silněji a sebevědoměji. Trenér mě naučil, jak se bránit, ale hlavně jak konfliktům předcházet.',
              },
              {
                name: 'Tomáš Dvořák',
                age: '24 let',
                program: 'Pokročilí',
                duration: 'Trénuje 2 roky',
                quote: 'Měl jsem zkušenosti s boxem a BJJ, ale RBSD mi ukázalo, jak to vypadá doopravdy. Bez pravidel, bez rozhodčích.',
              },
              {
                name: 'Lukáš Horák',
                age: '35 let',
                program: 'Privátní lekce',
                duration: 'Trénuje 1 rok',
                quote: 'Pracuji jako ochránce a RBSD mi dal nástroje, které denně používám. Praktické, efektivní, bez keců.',
              },
              {
                name: 'Kateřina Malá',
                age: '29 let',
                program: 'RBSD Všichni',
                duration: 'Trénuje 8 měsíců',
                quote: 'Nikdy jsem nesportovala, ale tady se nebojím zkoušet nové věci. Všichni jsou vstřícní a atmosféra je skvělá.',
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 border-l-[4px] border-[#C41E2A] relative">
                <Quote className="absolute top-6 right-6 text-[#C41E2A]/10" size={48} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-[20px] font-bold text-[#0A0A0A] mb-1">
                        {testimonial.name}
                      </h3>
                      <div className="text-[12px] text-[#0A0A0A]/50">
                        {testimonial.age} · {testimonial.program}
                      </div>
                    </div>
                    <div className="text-[11px] tracking-[2px] uppercase text-[#C41E2A] font-bold">
                      {testimonial.duration}
                    </div>
                  </div>
                  
                  <p className="text-[15px] text-[#0A0A0A]/70 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F5F3F0] relative overflow-hidden">
        {/* subtle divider top */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#0A0A0A]" />

        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div>
              <span className="block text-[10px] font-bold tracking-[5px] uppercase text-[#C41E2A] mb-4">
                Začít trénovat
              </span>
              <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-bold text-[#0A0A0A] leading-tight">
                PRVNÍ LEKCE <span className="text-[#C41E2A]">ZDARMA</span>
              </h2>
              <p className="text-[15px] text-[#0A0A0A]/55 mt-4 max-w-[480px] leading-relaxed">
                Přijď se podívat. Bez závazku, bez smlouvy. Uvidíš sám, jestli je RBSD to, co hledáš.
              </p>
            </div>
            <Link
              to="/prihlaseni"
              className="shrink-0 inline-flex items-center justify-center bg-[#C41E2A] hover:bg-[#A01822] text-white px-12 py-5 text-[13px] font-bold tracking-[3px] uppercase transition-colors"
            >
              Rezervovat lekci →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
