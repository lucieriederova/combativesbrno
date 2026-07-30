import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import {
  getStoredConsent,
  storeConsent,
  OPEN_COOKIE_SETTINGS_EVENT,
} from '../lib/cookieConsent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) setVisible(true);

    const reopen = () => {
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  const acceptAll = () => {
    storeConsent({ analytics: true, marketing: true });
    setVisible(false);
  };

  const rejectAll = () => {
    storeConsent({ analytics: false, marketing: false });
    setVisible(false);
  };

  const saveSelection = () => {
    storeConsent({ analytics, marketing });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] bg-[#0A0A0A] border-t-[3px] border-[#C41E2A] px-6 py-6 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="max-w-[900px] mx-auto">
        <p className="text-[14px] text-white/70 leading-relaxed mb-4">
          Používáme cookies pro nezbytný chod webu a se souhlasem i pro analytiku a marketing.
          Více v{' '}
          <Link to="/ochrana-soukromi" className="text-[#C41E2A] underline underline-offset-2 hover:text-white transition-colors">
            zásadách ochrany soukromí
          </Link>
          .
        </p>

        {showDetails && (
          <div className="mb-5 space-y-2.5">
            <label className="flex items-start gap-2.5 text-[13px] text-white/50">
              <input type="checkbox" checked disabled className="mt-0.5 accent-[#C41E2A]" />
              <span><strong className="text-white/80 font-medium">Nezbytné</strong> — potřebné pro základní fungování webu, vždy aktivní.</span>
            </label>
            <label className="flex items-start gap-2.5 text-[13px] text-white/70 cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-0.5 accent-[#C41E2A] cursor-pointer"
              />
              <span><strong className="text-white font-medium">Analytické</strong> — pomáhají nám pochopit, jak web používáte (Google Analytics).</span>
            </label>
            <label className="flex items-start gap-2.5 text-[13px] text-white/70 cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-0.5 accent-[#C41E2A] cursor-pointer"
              />
              <span><strong className="text-white font-medium">Marketingové</strong> — pro cílenou reklamu (Meta Pixel).</span>
            </label>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={acceptAll}
            className="bg-[#C41E2A] hover:bg-[#A01822] text-white px-6 py-2.5 text-[11px] font-semibold tracking-[2px] uppercase transition-colors cursor-pointer"
          >
            Přijmout vše
          </button>
          <button
            onClick={rejectAll}
            className="bg-transparent border-[1.5px] border-white/25 hover:border-white/50 text-white px-6 py-2.5 text-[11px] font-semibold tracking-[2px] uppercase transition-colors cursor-pointer"
          >
            Odmítnout vše
          </button>
          {showDetails ? (
            <button
              onClick={saveSelection}
              className="text-[11px] font-semibold tracking-[2px] uppercase text-[#C41E2A] hover:text-white transition-colors cursor-pointer"
            >
              Uložit výběr
            </button>
          ) : (
            <button
              onClick={() => setShowDetails(true)}
              className="text-[11px] font-semibold tracking-[2px] uppercase text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              Nastavení
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
