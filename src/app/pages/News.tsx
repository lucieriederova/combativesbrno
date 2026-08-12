import { Link } from 'react-router';
import { Calendar, ChevronRight } from 'lucide-react';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { newsArticles, newsSidebarExtras } from '../data/newsArticles';

const sidebarItems = [
  ...newsArticles.map((a) => ({ title: a.title, date: a.date })),
  ...newsSidebarExtras,
];

export default function News() {
  return (
    <div className="pt-[88px] relative">
      {/* Page Hero - ČERVENÁ */}
      <section className="bg-[#C41E2A] min-h-[35vh] flex items-end pb-10 relative overflow-hidden">
        {/* Gradient overlay */}
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
              RBSD Combatives Brno <span className="text-white">/ Aktuality</span>
            </div>
            <h1 className="font-serif text-[clamp(34px,5vw,58px)] font-bold text-white leading-tight">
              CO SE <span className="text-white/90">DĚJE</span>
            </h1>
          </div>
        </RevealOnScroll>
      </section>

      {/* News Content */}
      <section className="py-24 bg-[#F5F3F0]">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
            {/* Main Articles */}
            <div className="space-y-8">
              {newsArticles.map((article) => (
                <div key={article.slug} className="bg-white border-l-[4px] border-[#C41E2A] overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`aspect-video flex items-center justify-center relative overflow-hidden ${article.imageFit === 'contain' ? 'bg-[#C41E2A]' : 'bg-[#0A0A0A]'}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className={article.imageFit === 'contain' ? 'w-full h-full object-contain' : 'w-full h-full object-cover'}
                    />
                    {/* Červená linka jako brand element */}
                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#C41E2A]" />
                  </div>
                  <div className="p-8">
                    <span className="inline-block mb-3 text-[9px] font-bold tracking-[4px] uppercase text-[#C41E2A] bg-[rgba(196,30,42,0.09)] px-2.5 py-1">
                      {article.tag}
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-3 leading-tight">
                      {article.title}
                    </h2>
                    <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-5">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-[11px] text-[#0A0A0A]/40 tracking-wide">
                        {article.date}
                      </div>
                      <Link
                        to={`/aktuality/${article.slug}`}
                        className="text-[#C41E2A] text-[13px] font-bold flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Číst více <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div>
              <div className="text-[10px] font-bold tracking-[4px] uppercase text-[#C41E2A] mb-5">
                Nejnovější
              </div>

              <div className="space-y-0">
                {sidebarItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-5 border-b border-[#0A0A0A]/10 px-4 -mx-4"
                  >
                    <div className="text-[32px] font-bold text-[#C41E2A]/10 leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-bold text-[#0A0A0A] mb-1 leading-tight">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#0A0A0A]/40">
                        <Calendar size={12} />
                        {item.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-8 bg-[#C41E2A] p-6">
                <h3 className="text-[13px] font-bold tracking-[2px] uppercase text-white mb-3">
                  Buď v obraze
                </h3>
                <p className="text-[13px] text-white/80 mb-4">
                  Přihlas se k odběru novinek a nezmeškej žádnou událost.
                </p>
                <input
                  type="email"
                  placeholder="tvuj@email.cz"
                  className="w-full px-4 py-2.5 text-[13px] text-[#0A0A0A] mb-3 outline-none"
                />
                <button className="w-full bg-[#0A0A0A] hover:bg-[#111] text-white py-2.5 text-[11px] font-bold tracking-[2px] uppercase transition-colors">
                  Přihlásit se
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5 text-center">
          <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-bold text-white leading-tight mb-6">
            Chceš být součástí?
          </h2>
          <p className="text-[16px] text-white/60 mb-10 max-w-[600px] mx-auto">
            První lekce je zdarma. Přijď se podívat, jak vypadá skutečná sebeobrana.
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
