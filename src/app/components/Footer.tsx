import { Link } from 'react-router';
import rbsdLogo from '@/imports/si_la__kopie_.png';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-18 px-12 border-t-[3px] border-[#C41E2A] max-[880px]:px-5">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14 border-b border-white/[0.06] mb-9">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={rbsdLogo} alt="RBSD Combatives Brno" className="w-12 h-12 object-contain" />
              <div className="flex flex-col">
                <span className="text-[18px] font-bold tracking-[2px] uppercase text-[#C41E2A] leading-tight">
                  RBSD
                </span>
                <small className="text-[12px] font-normal tracking-[3px] uppercase text-white/40">
                  Combatives Brno
                </small>
              </div>
            </div>
            <p className="text-[13px] text-white/30 leading-relaxed mb-6">
              Reálná sebeobrana založená na systému Urban Combatives. 
              Bez kompromisů. Bez pravidel. Jen to, co funguje.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/people/RBSD-Combatives-Brno/100063558345180/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:border-[#C41E2A] hover:bg-[#C41E2A] hover:text-white transition-all"
              >
                <span className="text-sm">📱</span>
              </a>
              <a
                href="mailto:info@combatives-brno.cz"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:border-[#C41E2A] hover:bg-[#C41E2A] hover:text-white transition-all"
              >
                <span className="text-sm">📧</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[4px] uppercase text-[#C41E2A]/60 mb-5">
              Rychlé odkazy
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/o-nas"
                  className="text-[13px] text-white/45 hover:text-[#C41E2A] transition-colors"
                >
                  O nás
                </Link>
              </li>
              <li>
                <Link
                  to="/treninky"
                  className="text-[13px] text-white/45 hover:text-[#C41E2A] transition-colors"
                >
                  Rozvrh tréninků
                </Link>
              </li>
              <li>
                <Link
                  to="/aktuality"
                  className="text-[13px] text-white/45 hover:text-[#C41E2A] transition-colors"
                >
                  Aktuality
                </Link>
              </li>
              <li>
                <Link
                  to="/reference"
                  className="text-[13px] text-white/45 hover:text-[#C41E2A] transition-colors"
                >
                  Reference
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="text-[13px] text-white/45 hover:text-[#C41E2A] transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[4px] uppercase text-[#C41E2A]/60 mb-5">
              Kontakt
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <span className="text-sm mt-0.5">📍</span>
                <p className="text-[13px] text-white/45 leading-normal">
                  ZŠ Milénova<br />Brno-Líšeň
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-sm mt-0.5">📞</span>
                <p className="text-[13px] text-white/45">+420 777 123 456</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-sm mt-0.5">✉️</span>
                <p className="text-[13px] text-white/45">info@combatives-brno.cz</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/18 tracking-wide">
          <span>© 2026 RBSD Combatives Brno</span>
          <Link to="/" className="text-white/20 hover:text-[#C41E2A] transition-colors">
            ← Zpět nahoru
          </Link>
        </div>
      </div>
    </footer>
  );
}
