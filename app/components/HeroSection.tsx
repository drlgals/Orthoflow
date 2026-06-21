"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WA_LINK = "https://wa.me/5524999999999"; // TODO: substituir pelo número real da clínica

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://placehold.co/1440x900/d4f5f8/383d41?text=Foto+Paciente+Sorrindo')" }}
      />
      {/* Overlay gradiente da marca */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(91,211,243,0.88) 0%, rgba(116,243,216,0.82) 100%)" }}
      />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12">
        <Image
          src="/Orthoflow - Completa Horizontal.png"
          alt="Orthoflow"
          width={180}
          height={50}
          style={{ height: "44px", width: "auto" }}
          priority
        />
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#383d41] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Agendar Avaliação
        </a>
      </nav>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-1 items-center px-6 md:px-12 py-16">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#383d41] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Implantes & Próteses em Resende
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#383d41] leading-tight mb-6"
          >
            Volte a Mastigar com Segurança e a{" "}
            <span className="text-white">Sorrir sem Medo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#383d41]/90 text-lg leading-relaxed mb-10"
          >
            Descubra como os tratamentos de implantes e próteses da Orthoflow
            podem devolver sua autoestima e qualidade de vida.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#383d41] text-white font-bold text-base md:text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 active:scale-95 transition-all"
          >
            <WhatsAppIcon />
            Quero Agendar Minha Avaliação
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-4 text-[#383d41]/70 text-sm"
          >
            Resposta rápida · Sem compromisso
          </motion.p>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <div className="w-6 h-10 border-2 border-[#383d41]/40 rounded-full flex items-start justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="w-1.5 h-1.5 bg-[#383d41]/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
