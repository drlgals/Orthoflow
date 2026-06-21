"use client";

import { motion } from "framer-motion";

// TODO: Substituir pelos depoimentos reais de pacientes (ver CONTENT_CHECKLIST.md)
const testimonials = [
  {
    name: "Maria S.",
    age: "58 anos",
    initials: "MS",
    color: "#5bd3f3",
    stars: 5,
    text: "Voltei a comer maçã sem medo depois de anos evitando. O Dr. Ricardo foi extremamente cuidadoso em cada etapa. Recomendo de olhos fechados!",
  },
  {
    name: "João C.",
    age: "63 anos",
    initials: "JC",
    color: "#74f3d8",
    stars: 5,
    text: "Minha autoestima mudou completamente. Não escondo mais a boca para rir. A equipe da Orthoflow me deixou seguro do começo ao fim do tratamento.",
  },
  {
    name: "Ana P.",
    age: "51 anos",
    initials: "AP",
    color: "#5bd3f3",
    stars: 5,
    text: "Tinha muito medo de implantar, mas não sentí quase nada. A clínica é linda, aconchegante e o atendimento é nota 10. Valeu cada centavo!",
  },
  {
    name: "Roberto M.",
    age: "70 anos",
    initials: "RM",
    color: "#74f3d8",
    stars: 5,
    text: "Usei dentadura por 15 anos. Hoje tenho dentes fixos e não troco por nada. É outra qualidade de vida. Só lamento não ter feito antes.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#5bd3f3] font-semibold text-sm uppercase tracking-widest mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#383d41]">
            A liberdade de sorrir na vida real
          </h2>
          <p className="mt-4 text-gray-500">
            Veja o que nossos pacientes dizem após o tratamento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-7 shadow-sm flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#383d41] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.age} · Paciente Orthoflow</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
