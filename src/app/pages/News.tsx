import { Link } from 'react-router';
import { Calendar } from 'lucide-react';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { newsArticles, newsSidebarExtras } from '../data/newsArticles';

const sidebarItems = [
  ...newsArticles.map((a) => ({ title: a.title, date: a.date, link: `/aktuality/${a.slug}` })),
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
                <Link
                  key={article.slug}
                  to={`/aktuality/${article.slug}`}
                  className="bg-white border-l-[4px] border-[#C41E2A] overflow-hidden block group hover:shadow-lg transition-all duration-300"
                >
                  <div className={`aspect-video flex items-center justify-center relative overflow-hidden ${article.imageFit === 'contain' ? 'bg-[#C41E2A]' : 'bg-[#0A0A0A]'}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className={`w-full h-full group-hover:scale-105 transition-transform duration-300 ${article.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                    />
                    {/* Červená linka jako brand element */}
                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#C41E2A]" />
                  </div>
                  <div className="p-8">
                    <span className="inline-block mb-3 text-[9px] font-bold tracking-[4px] uppercase text-[#C41E2A] bg-[rgba(196,30,42,0.09)] px-2.5 py-1">
                      {article.tag}
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-3 leading-tight group-hover:text-[#C41E2A] transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-5">
                      {article.excerpt}
                    </p>
                    <div className="text-[11px] text-[#0A0A0A]/40 tracking-wide">
                      {article.date}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <div>
              <div className="text-[10px] font-bold tracking-[4px] uppercase text-[#C41E2A] mb-5">
                Nejnovější
              </div>

              <div className="space-y-0">
                {sidebarItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className="flex items-start gap-4 py-5 border-b border-[#0A0A0A]/10 px-4 -mx-4 group hover:bg-[#0A0A0A]/[0.03] transition-colors"
                  >
                    <div className="text-[32px] font-bold text-[#C41E2A]/10 leading-none group-hover:text-[#C41E2A]/25 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-bold text-[#0A0A0A] mb-1 leading-tight group-hover:text-[#C41E2A] transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#0A0A0A]/40">
                        <Calendar size={12} />
                        {item.date}
                      </div>
                    </div>
                  </Link>
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

      {/* Sticky CTA Bar - sticks while scrolling through news content, releases before the footer */}
      <div className="sticky bottom-0 left-0 right-0 bg-[#0A0A0A] border-t-[3px] border-[#C41E2A] py-4 px-6 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.25)]">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-5 max-[768px]:flex-col max-[768px]:gap-3">
          <div>
            <p className="text-[13px] font-bold text-white mb-0.5">
              Zaujal tě nějaký článek?
            </p>
            <p className="text-[11px] text-white/50">
              Přijď si vyzkoušet trénink na vlastní kůži — první lekce je <span className="text-[#C41E2A]">zdarma</span>
            </p>
          </div>
          <Link
            to="/prihlaseni"
            className="inline-flex items-center gap-2 bg-[#C41E2A] hover:bg-[#A01822] text-white px-7 py-3.5 text-xs font-bold tracking-[2px] uppercase transition-colors whitespace-nowrap"
          >
            Rezervovat lekci →
          </Link>
        </div>
      </div>
    </div>
  );
}
