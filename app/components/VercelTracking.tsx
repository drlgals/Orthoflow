"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useAnalyticsConsent } from "@/lib/use-cookie-consent";

export default function VercelTracking() {
  const enabled = useAnalyticsConsent();

  if (!enabled) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
