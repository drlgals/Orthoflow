"use client";

import { useEffect } from "react";
import { useAnalyticsConsent } from "@/lib/use-cookie-consent";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GTAG_LOADER_ID = "google-gtag-loader";
const GTAG_INIT_ID = "google-gtag-init";

function removeGtagScripts() {
  document.getElementById(GTAG_LOADER_ID)?.remove();
  document.getElementById(GTAG_INIT_ID)?.remove();
}

export default function GoogleAnalytics() {
  const enabled = useAnalyticsConsent();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    if (!enabled) {
      removeGtagScripts();
      return;
    }

    if (document.getElementById(GTAG_LOADER_ID)) return;

    const loader = document.createElement("script");
    loader.id = GTAG_LOADER_ID;
    loader.async = true;
    loader.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(loader);

    const init = document.createElement("script");
    init.id = GTAG_INIT_ID;
    init.textContent = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`;
    document.head.appendChild(init);
  }, [enabled]);

  return null;
}
