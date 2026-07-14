"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FooterSection from "./FooterSection";
import type { SpecialtyContent } from "./specialtyContent";

const WA_LINK = "https://wa.me/552421091671";
const SITE_URL = "https://orthoflowresende.com.br";

type SpecialtyLandingPageProps = {
  content: SpecialtyContent;
};

export default function SpecialtyLandingPage({
  content,
}: SpecialtyLandingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const whatsappMessage = `Olá, gostaria de tirar duvidas sobre ${content.whatsappSubject}!`;
  const whatsappLink = `${WA_LINK}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="overflow-x-hidden bg-white">
      <section className="relative min-h-[88vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/caroline-lm-uqveD8dYPUM-unsplash.jpg')" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(91,211,243,0.9) 0%, rgba(116,243,216,0.82) 55%, rgba(255,255,255,0.7) 100%)" }}
        />

        <div className="relative z-10">
          <nav className="flex items-center justify-between px-6 py-5 md:px-12">
            <Image
              src="/Orthoflow - MonoPRETOHorizontal.png"
              alt="Orthoflow"
              width={180}
              height={50}
              style={{ height: "44px", width: "auto" }}
              priority
            />
            <div className="flex items-center gap-3">
              <a
                href={SITE_URL}
                className="hidden md:inline-flex text-sm font-medium text-[#383d41]/80 hover:text-[#383d41] transition-colors"
              >
                Site principal
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#383d41] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Falar no WhatsApp
              </a>
            </div>
          </nav>

          <div className="px-6 pb-16 pt-10 md:px-12 md:pb-24 md:pt-14">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] md:items-end">
              <div className="max-w-2xl">
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#383d41]/75"
                >
                  {content.eyebrow}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                  className="text-4xl font-bold leading-tight text-[#383d41] md:text-6xl"
                >
                  {content.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12 }}
                  className="mt-6 max-w-xl text-lg leading-relaxed text-[#383d41]/85"
                >
                  {content.subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18 }}
                  className="mt-4 max-w-xl text-base leading-relaxed text-[#383d41]/70"
                >
                  {content.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.25 }}
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#383d41] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:opacity-90 active:scale-[0.99]"
                  >
                    {content.ctaLabel}
                  </a>
                  <span className="text-sm font-medium text-[#383d41]/65">
                    Resposta rapida, sem compromisso
                  </span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.18 }}
                className="rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-[0_30px_80px_rgba(56,61,65,0.14)] backdrop-blur-md"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#383d41]/55">
                  O que voce encontra aqui
                </p>
                <div className="mt-6 flex flex-col gap-4">
                  {content.heroHighlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#383d41]/8 bg-white/80 px-4 py-4 text-sm font-medium text-[#383d41]"
                    >
                      <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#5bd3f3]/20 text-[#383d41]">
                        +
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#383d41] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#74f3d8]">
              Indicacao e confianca
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
              Uma pagina pensada para quem quer clareza antes de decidir.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.trustPoints.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/6 p-7"
              >
                <p className="text-sm font-semibold text-[#74f3d8]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#5bd3f3]">
              Beneficios
            </p>
            <h2 className="text-3xl font-bold leading-tight text-[#383d41] md:text-4xl">
              O tratamento precisa fazer sentido na sua vida real.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.benefits.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-gray-100 bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5bd3f3]/15 text-xl font-bold text-[#383d41]">
                  ✓
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#383d41]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 py-20 md:px-12"
        style={{ background: "linear-gradient(135deg, rgba(91,211,243,0.14) 0%, rgba(116,243,216,0.28) 100%)" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#383d41]/60">
              Como funciona
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#383d41] md:text-4xl">
              O proximo passo e simples: entender seu caso e montar um plano claro.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.process.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[1.75rem] bg-white p-7 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#383d41]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#5bd3f3]">
              Perguntas frequentes
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#383d41] md:text-4xl">
              O que geralmente o paciente quer saber antes de agendar.
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            {content.faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-[#383d41]">
                    {faq.question}
                  </span>
                  <span
                    className="text-2xl text-[#5bd3f3] transition-transform duration-300"
                    style={{ transform: openFaq === index ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === index ? (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-gray-500">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection whatsappLink={whatsappLink} />
    </main>
  );
}
