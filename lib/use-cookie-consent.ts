"use client";

import { useEffect, useState } from "react";
import {
  hasAnalyticsConsent,
  hasMarketingConsent,
  onConsentChange,
} from "@/lib/cookie-consent";

function useConsentFlag(check: () => boolean) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => setEnabled(check());
    sync();
    return onConsentChange(sync);
  }, [check]);

  return enabled;
}

export function useMarketingConsent() {
  return useConsentFlag(hasMarketingConsent);
}

export function useAnalyticsConsent() {
  return useConsentFlag(hasAnalyticsConsent);
}
