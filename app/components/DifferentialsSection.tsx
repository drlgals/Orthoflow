"use client";

import { motion } from "framer-motion";

const differentials = [
  {
    icon: "🖥️",
    title: "Tecnologia e Previsibilidade",
    description:
      "Utilizamos fluxo digital completo: escaneamento intraoral, planejamento virtual 3D e guias cirúrgicas precisas. Menos surpresas, mais resultados previsíveis e um tratamento mais rápido.",
  },
  {
    icon: "🏆",
    title: "Equipe Especializada",
    description:
      "Dr. Ricardo possui formação específica em Implantodontia, com centenas de casos realizados. Você está nas mãos de quem escolheu essa especialidade como vocação.",
  },
  {
    icon: "🤝",
    title: "Atendimento Humanizado",
    description:
      "Sabemos que ir ao dentista pode gerar ansiedade. Nossa clínica foi pensada para ser acolhedora e tranquila, com tempo para tirar todas as suas dúvidas sem pressa.",
  },
];

export default function DifferentialsSection() {
  return (
    <section
      className="py-20 px-6 md:px-12"
      style={{ background: "linear-gradient(135deg, #5bd3f3 0%, #74f3d8 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#383d41]/70 font-semibold text-sm uppercase tracking-widest mb-3">
            Por que a Orthoflow?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#383d41] leading-tight">
            O que nos diferencia
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentials.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-start"
            >
              <span className="text-4xl mb-5">{d.icon}</span>
              <h3 className="text-xl font-bold text-[#383d41] mb-3">{d.title}</h3>
              <p className="text-[#383d41]/80 text-sm leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
