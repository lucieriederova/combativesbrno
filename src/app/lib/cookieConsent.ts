export type ConsentChoices = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = 'rbsd-cookie-consent';
const CONSENT_UPDATED_EVENT = 'rbsd-consent-updated';
export const OPEN_COOKIE_SETTINGS_EVENT = 'rbsd-open-cookie-settings';

export function getStoredConsent(): ConsentChoices | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentChoices) : null;
  } catch {
    return null;
  }
}

export function storeConsent(choices: { analytics: boolean; marketing: boolean }): ConsentChoices {
  const consent: ConsentChoices = { necessary: true, ...choices };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent<ConsentChoices>(CONSENT_UPDATED_EVENT, { detail: consent }));
  return consent;
}

export function onConsentChange(callback: (consent: ConsentChoices) => void) {
  const handler = (event: Event) => callback((event as CustomEvent<ConsentChoices>).detail);
  window.addEventListener(CONSENT_UPDATED_EVENT, handler);
  return () => window.removeEventListener(CONSENT_UPDATED_EVENT, handler);
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}
