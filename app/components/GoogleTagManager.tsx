"use client";

import { useEffect } from "react";
import { useMarketingConsent } from "@/lib/use-cookie-consent";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GTM_SCRIPT_ID = "google-tag-manager";

function getGtmScript(id: string) {
  return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`;
}

export default function GoogleTagManager() {
  const enabled = useMarketingConsent();

  useEffect(() => {
    if (!GTM_ID) return;

    if (!enabled) {
      document.getElementById(GTM_SCRIPT_ID)?.remove();
      return;
    }

    if (document.getElementById(GTM_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = GTM_SCRIPT_ID;
    script.textContent = getGtmScript(GTM_ID);
    document.head.insertBefore(script, document.head.firstChild);
  }, [enabled]);

  if (!GTM_ID || !enabled) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
