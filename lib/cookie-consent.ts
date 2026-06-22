export type ConsentState = {
  analytics: boolean;
  marketing: boolean;
};

export const COOKIE_CONSENT_STORAGE_KEY = "orthoflow_cookie_consent";
export const COOKIE_CONSENT_UPDATED_EVENT = "cookieConsentUpdated";
export const COOKIE_CONSENT_RESET_EVENT = "cookieConsentReset";

export function loadConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

export function saveConsent(consent: ConsentState) {
  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event(COOKIE_CONSENT_UPDATED_EVENT));
}

export function hasMarketingConsent(): boolean {
  return loadConsent()?.marketing === true;
}

export function hasAnalyticsConsent(): boolean {
  return loadConsent()?.analytics === true;
}

export function onConsentChange(listener: () => void) {
  window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, listener);
  window.addEventListener(COOKIE_CONSENT_RESET_EVENT, listener);

  return () => {
    window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, listener);
    window.removeEventListener(COOKIE_CONSENT_RESET_EVENT, listener);
  };
}
