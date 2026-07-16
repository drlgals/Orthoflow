"use client";

import Image, { getImageProps } from "next/image";
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
        <HeroBackground images={content.heroImages} />
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
                aria-label="Falar no WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#383d41] text-white shadow-sm transition-all hover:opacity-90 active:scale-95 md:h-auto md:w-auto md:gap-2 md:px-5 md:py-2.5 md:text-sm md:font-semibold"
              >
                <WhatsAppIcon className="h-5 w-5 md:hidden" />
                <span className="hidden md:inline">Falar no WhatsApp</span>
              </a>
            </div>
          </nav>

          <div className="px-6 pb-16 pt-10 md:px-12 md:pb-24 md:pt-14">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] md:items-end">
              <div className="flex max-w-2xl flex-col">
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="order-1 mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#383d41]/75"
                >
                  {content.eyebrow}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                  className="order-2 text-4xl font-bold leading-tight text-[#383d41] md:text-6xl"
                >
                  {content.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12 }}
                  className="order-4 mt-6 max-w-xl text-lg leading-relaxed text-[#383d41]/85 md:order-3"
                >
                  {content.subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18 }}
                  className="order-5 mt-4 max-w-xl text-base leading-relaxed text-[#383d41]/70 md:order-4"
                >
                  {content.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.25 }}
                  className="order-3 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center md:order-5"
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

function HeroBackground({
  images,
}: {
  images: SpecialtyContent["heroImages"];
}) {
  if (!images) {
    return (
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/caroline-lm-uqveD8dYPUM-unsplash.jpg')",
        }}
      />
    );
  }

  const common = {
    alt: "",
    fetchPriority: "high" as const,
    loading: "eager" as const,
    sizes: "100vw",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: images.desktop,
    width: 1672,
    height: 941,
    quality: 75,
  });
  const {
    props: { srcSet: mobile, alt, ...mobileProps },
  } = getImageProps({
    ...common,
    src: images.mobile,
    width: 941,
    height: 1672,
    quality: 75,
  });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop} />
      <source media="(max-width: 767px)" srcSet={mobile} />
      <img
        {...mobileProps}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </picture>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
