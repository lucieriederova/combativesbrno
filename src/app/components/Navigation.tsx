import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import rbsdLogo from '@/imports/si_la__kopie_.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links = [
    { to: '/', label: 'Domů' },
    { to: '/o-nas', label: 'O nás' },
    { to: '/treninky', label: 'Tréninky' },
    { to: '/aktuality', label: 'Aktuality' },
    { to: '/reference', label: 'Reference' },
    { to: '/kontakt', label: 'Kontakt' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[88px] backdrop-blur-md bg-[#0A0A0A]/90 border-b border-white/[0.06]">
      <div className="w-full px-12 h-full flex items-center justify-between max-[880px]:px-5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={rbsdLogo} alt="RBSD Combatives Brno" className="w-24 h-24 object-contain" />
          <div className="flex flex-col">
            <span className="text-[18px] font-bold tracking-[2px] uppercase leading-tight text-white transition-colors">
              RBSD
            </span>
            <small className="text-[12px] font-normal tracking-[3px] uppercase text-white/40 transition-colors">
              Combatives Brno
            </small>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[11px] font-medium tracking-[2px] uppercase transition-colors ${
                isActive(link.to) 
                  ? 'text-white' 
                  : 'text-white/40 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* CTA Button */}
          <Link
            to="/prihlaseni"
            className="bg-[#C41E2A] hover:bg-[#A01822] text-white px-6 py-2.5 rounded-sm text-[10px] font-bold tracking-[2px] uppercase transition-colors"
          >
            Zkus si trénink
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[68px] left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/[0.06]">
          <div className="px-5 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block text-[13px] font-medium tracking-[2px] uppercase transition-colors ${
                  isActive(link.to) 
                    ? 'text-white' 
                    : 'text-white/40'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/prihlaseni"
              className="block w-full bg-[#C41E2A] hover:bg-[#A01822] text-white px-6 py-3 rounded-sm text-center text-[11px] font-bold tracking-[2px] uppercase transition-colors mt-4"
            >
              Zkus si trénink
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}