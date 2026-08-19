import { useEffect } from 'react';
import { getStoredConsent, onConsentChange } from '../lib/cookieConsent';

const GTM_ID = 'GTM-MTNKRNZ';
const GA4_MEASUREMENT_ID = 'G-JPC6RSPGBB';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let gtmLoaded = false;
let gaLoaded = false;

function loadGTM() {
  if (gtmLoaded) return;
  gtmLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

function loadGoogleAnalytics() {
  if (gaLoaded) return;
  gaLoaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID);
}

/**
 * Mount once (in Root) — loads GTM/GA4 only after the visitor has consented
 * via CookieConsent, and reacts live if they change their choice.
 */
export default function Analytics() {
  useEffect(() => {
    const consent = getStoredConsent();
    if (consent?.analytics) {
      loadGTM();
      loadGoogleAnalytics();
    }

    return onConsentChange((updated) => {
      if (updated.analytics) {
        loadGTM();
        loadGoogleAnalytics();
      }
    });
  }, []);

  return null;
}
