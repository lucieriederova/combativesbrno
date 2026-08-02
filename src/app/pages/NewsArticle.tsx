import { Link, useParams } from 'react-router';
import { Calendar, ArrowLeft } from 'lucide-react';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { newsArticles } from '../data/newsArticles';

export default function NewsArticle() {
  const { slug } = useParams();
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-[88px] min-h-[60vh] flex items-center justify-center bg-[#F5F3F0]">
        <div className="text-center px-5">
          <h1 className="font-serif text-[32px] font-bold text-[#0A0A0A] mb-4">
            Článek nenalezen
          </h1>
          <Link
            to="/aktuality"
            className="inline-flex items-center gap-2 text-[#C41E2A] font-bold text-[13px] tracking-[2px] uppercase hover:text-[#A01822] transition-colors"
          >
            <ArrowLeft size={16} /> Zpět na aktuality
          </Link>
        </div>
      </div>
    );
  }

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
          <div className="max-w-[800px] mx-auto px-12 max-[880px]:px-5 relative z-10">
            <div className="text-[10px] tracking-[4px] uppercase text-white/60 mb-3.5">
              RBSD Combatives Brno <span className="text-white">/ Aktuality</span>
            </div>
            <span className="inline-block mb-4 text-[9px] font-bold tracking-[4px] uppercase text-white bg-white/15 px-2.5 py-1">
              {article.tag}
            </span>
            <h1 className="font-serif text-[clamp(28px,4.5vw,48px)] font-bold text-white leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-1.5 text-[13px] text-white/70">
              <Calendar size={14} />
              {article.date}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-[#F5F3F0]">
        <div className="max-w-[800px] mx-auto px-12 max-[880px]:px-5">
          <div className="aspect-video overflow-hidden mb-14 border-l-[4px] border-[#C41E2A]">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            {article.content.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h2 className="font-serif text-[22px] font-bold text-[#0A0A0A] mb-3 mt-2">
                    {block.heading}
                  </h2>
                )}
                {block.text && (
                  <p className="text-[15px] text-[#0A0A0A]/70 leading-relaxed">
                    {block.text}
                    {block.link && (
                      <>
                        {' '}
                        <a
                          href={block.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#C41E2A] underline underline-offset-2 hover:text-[#0A0A0A] transition-colors"
                        >
                          {block.link.label}
                        </a>
                        .
                      </>
                    )}
                  </p>
                )}
                {block.list && (
                  <ul className="space-y-2.5 mt-2">
                    {block.list.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[15px] text-[#0A0A0A]/70 leading-relaxed">
                        <span className="text-[#C41E2A] font-bold shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-[#0A0A0A]/10">
            <Link
              to="/aktuality"
              className="inline-flex items-center gap-2 text-[#C41E2A] font-bold text-[13px] tracking-[2px] uppercase hover:text-[#A01822] transition-colors"
            >
              <ArrowLeft size={16} /> Zpět na aktuality
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A0A0A] text-center">
        <div className="max-w-[1100px] mx-auto px-12 max-[880px]:px-5">
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-bold text-white leading-tight mb-6">
            Chceš být součástí?
          </h2>
          <p className="text-[15px] text-white/60 mb-8 max-w-[500px] mx-auto">
            První lekce je zdarma. Přijď se podívat, jak vypadá skutečná sebeobrana.
          </p>
          <Link
            to="/prihlaseni"
            className="inline-flex items-center justify-center bg-[#C41E2A] hover:bg-[#A01822] text-white px-10 py-4 text-[13px] font-bold tracking-[3px] uppercase transition-colors"
          >
            Rezervovat lekci →
          </Link>
        </div>
      </section>
    </div>
  );
}
