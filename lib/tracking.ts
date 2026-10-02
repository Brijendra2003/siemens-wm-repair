"use client";

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
}

export function trackConversion(source: string) {
  track("generate_lead", { source });
  const adsId = process.env.NEXT_PUBLIC_ADS_ID;
  const label = process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL;
  if (adsId && label) window.gtag?.("event", "conversion", { send_to: `${adsId}/${label}` });
}

const ATTR_KEYS = ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_term"] as const;
const STORE = "wm_attr";

/** Save first-touch ad attribution for the session. */
export function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    const existing = JSON.parse(sessionStorage.getItem(STORE) ?? "{}");
    let changed = false;
    for (const k of ATTR_KEYS) {
      const v = params.get(k);
      if (v && !existing[k]) {
        existing[k] = v.slice(0, 200);
        changed = true;
      }
    }
    if (!existing.referrer && document.referrer) {
      existing.referrer = document.referrer.slice(0, 500);
      changed = true;
    }
    if (changed) sessionStorage.setItem(STORE, JSON.stringify(existing));
  } catch {
    /* storage unavailable */
  }
}

export function getAttribution(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(STORE) ?? "{}");
  } catch {
    return {};
  }
}
