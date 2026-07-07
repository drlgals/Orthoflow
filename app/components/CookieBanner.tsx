"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  COOKIE_CONSENT_RESET_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
  type ConsentState,
  loadConsent,
  saveConsent,
} from "@/lib/cookie-consent";

export function useCookieConsent() {
  const reset = () => {
    localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
    window.dispatchEvent(new Event(COOKIE_CONSENT_RESET_EVENT));
  };
  return { reset };
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => loadConsent() === null);
  const [showPreferences, setShowPreferences] = useState(false);
  const [prefs, setPrefs] = useState<ConsentState>({ analytics: true, marketing: true });

  useEffect(() => {
    const onReset = () => setVisible(true);
    window.addEventListener(COOKIE_CONSENT_RESET_EVENT, onReset);
    return () => window.removeEventListener(COOKIE_CONSENT_RESET_EVENT, onReset);
  }, []);

  function acceptAll() {
    saveConsent({ analytics: true, marketing: true });
    setVisible(false);
    setShowPreferences(false);
  }

  function rejectNonEssential() {
    saveConsent({ analytics: false, marketing: false });
    setVisible(false);
    setShowPreferences(false);
  }

  function savePreferences() {
    saveConsent(prefs);
    setVisible(false);
    setShowPreferences(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Overlay para o modal de preferências */}
          {showPreferences && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowPreferences(false)}
            />
          )}

          {/* Modal de preferências */}
          <AnimatePresence>
            {showPreferences && (
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="fixed left-4 right-4 top-1/2 -translate-y-1/2 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-full md:max-w-lg z-50 bg-white rounded-3xl shadow-2xl p-7"
              >
                <h3 className="text-lg font-bold text-[#383d41] mb-1">Gerenciar Preferências</h3>
                <p className="text-gray-500 text-xs mb-6">
                  Cookies essenciais são sempre ativos pois garantem o funcionamento básico do site.
                </p>

                <div className="flex flex-col gap-4">
                  {/* Essenciais — sempre ligado */}
                  <div className="flex items-start justify-between gap-4 py-4 border-b border-gray-100">
                    <div>
                      <p className="font-semibold text-[#383d41] text-sm">Cookies Essenciais</p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        Necessários para o funcionamento do site. Não podem ser desativados.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-xs font-semibold text-[#74f3d8] bg-[#74f3d8]/15 px-3 py-1 rounded-full">
                        Sempre ativo
                      </span>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-start justify-between gap-4 py-4 border-b border-gray-100">
                    <div>
                      <p className="font-semibold text-[#383d41] text-sm">Cookies de Desempenho</p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        Vercel Analytics e Google Tag Manager — coleta dados agregados de tráfego e performance.
                      </p>
                    </div>
                    <Toggle
                      checked={prefs.analytics}
                      onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
                    />
                  </div>

                  {/* Marketing */}
                  <div className="flex items-start justify-between gap-4 py-4">
                    <div>
                      <p className="font-semibold text-[#383d41] text-sm">Cookies de Marketing</p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        Meta Pixel — rastreamento de campanhas e anúncios relevantes.
                      </p>
                    </div>
                    <Toggle
                      checked={prefs.marketing}
                      onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button
                    onClick={savePreferences}
                    className="flex-1 bg-[#383d41] text-white font-semibold text-sm py-3 rounded-full hover:opacity-90 transition-opacity"
                  >
                    Salvar preferências
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 border border-[#383d41] text-[#383d41] font-semibold text-sm py-3 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Aceitar todos
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Banner principal */}
          {!showPreferences && (
            <motion.div
              key="banner"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 bg-white rounded-3xl shadow-2xl p-6"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">🍪</span>
                <div>
                  <p className="font-bold text-[#383d41] text-base mb-1">Aviso de Cookies e Privacidade</p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Utilizamos cookies e tecnologias de rastreamento (Vercel Analytics, Google Tag Manager e Meta Pixel)
                    para melhorar a experiência e oferecer campanhas relevantes.{" "}
                    <Link href="/politica-de-cookies" className="text-[#5bd3f3] underline hover:text-[#383d41] transition-colors">
                      Política de Cookies
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={acceptAll}
                  className="w-full bg-[#383d41] text-white font-semibold text-sm py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  Aceitar todos
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="flex-1 border border-gray-200 text-[#383d41] font-medium text-xs py-2.5 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Gerenciar preferências
                  </button>
                  <button
                    onClick={rejectNonEssential}
                    className="flex-1 border border-gray-200 text-gray-400 font-medium text-xs py-2.5 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Recusar não essenciais
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative flex-shrink-0 w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5bd3f3] focus:ring-offset-2 ${
        checked ? "bg-[#5bd3f3]" : "bg-gray-200"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}
