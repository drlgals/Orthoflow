"use client";

import Script from "next/script";
import { useAnalyticsConsent } from "@/lib/use-cookie-consent";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? process.env.NEXT_PUBLIC_GTM_ID;

export default function GoogleAnalytics() {
  const enabled = useAnalyticsConsent();

  if (!GA_MEASUREMENT_ID || !enabled) return null;

  return (
    <>
      <Script
        id="google-gtag-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
