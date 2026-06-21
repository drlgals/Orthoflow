"use client";

import { motion } from "framer-motion";

const treatments = [
  {
    icon: "🦷",
    title: "Implantes Dentários",
    badge: "Solução Definitiva",
    description:
      "A solução permanente para dentes perdidos. O implante substitui a raiz natural, garantindo estabilidade total para mastigar qualquer alimento com segurança e conforto.",
    highlight: "Procedimentos conduzidos pelo Dr. Ricardo, com precisão e conforto em cada etapa.",
    benefit: "Durabilidade para a vida toda",
  },
  {
    icon: "😁",
    title: "Próteses Fixas (Protocolo)",
    badge: "Mais Solicitado",
    description:
      "Ideal para quem perdeu todos os dentes e quer se livrar definitivamente da dentadura móvel. Dentes fixos sobre implantes que devolvem 100% da força mastigatória.",
    highlight: "Você sai da clínica com dentes fixos no mesmo dia em muitos casos.",
    benefit: "100% da força mastigatória",
  },
  {
    icon: "✨",
    title: "Próteses Removíveis",
    badge: "Acessível",
    description:
      "Opções modernas e estéticas para reabilitação oral, planejadas individualmente para o melhor encaixe e conforto possível no seu dia a dia.",
    highlight: "Planejamento personalizado para cada paciente, focado no seu bem-estar.",
    benefit: "Conforto e estética garantidos",
  },
];

export default function TreatmentsSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#5bd3f3] font-semibold text-sm uppercase tracking-widest mb-3">
            Nossos Tratamentos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#383d41] leading-tight">
            A solução certa para o seu caso
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Cada paciente é único. Conheça as opções disponíveis e descubra qual é a mais indicada para você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-7"
            >
              <span className="absolute top-5 right-5 text-xs font-semibold bg-[#5bd3f3]/15 text-[#383d41] px-3 py-1 rounded-full">
                {t.badge}
              </span>
              <span className="text-4xl mb-5">{t.icon}</span>
              <h3 className="text-xl font-bold text-[#383d41] mb-3">{t.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{t.description}</p>
              <p className="text-[#383d41]/70 text-xs italic mb-6">{t.highlight}</p>
              <div className="mt-auto flex items-center gap-2 text-[#5bd3f3] font-semibold text-sm">
                <span>✓</span>
                <span>{t.benefit}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/5524999999999" // TODO: substituir pelo número real
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#383d41] text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Descobrir qual tratamento é ideal para mim →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
