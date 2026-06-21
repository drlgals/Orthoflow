"use client";

import { motion } from "framer-motion";

export default function EmpathySection() {
  return (
    <section className="bg-[#383d41] py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl mb-8"
        >
          💙
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
        >
          Você não está sozinho nessa.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/80 text-lg leading-relaxed"
        >
          Sabemos que a falta de um dente ou o uso de dentaduras desadaptadas pode gerar uma
          verdadeira vergonha na hora de sorrir para uma foto, falar em público ou até mesmo
          comer perto de outras pessoas. O desconforto vai muito além da estética.{" "}
          <span className="text-[#5bd3f3] font-semibold">
            Nossa missão é devolver a sua liberdade.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { emoji: "😔", label: "Vergonha de sorrir" },
            { emoji: "😰", label: "Medo do procedimento" },
            { emoji: "💸", label: "Preocupação com o custo" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex flex-col items-center gap-3"
            >
              <span className="text-3xl">{item.emoji}</span>
              <span className="text-white/70 text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 text-[#74f3d8] font-semibold text-base"
        >
          Na Orthoflow, entendemos cada uma dessas preocupações e estamos aqui para resolvê-las.
        </motion.p>
      </div>
    </section>
  );
}
