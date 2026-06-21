"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Dói para colocar implante?",
    answer:
      "Não. O procedimento é realizado sob anestesia local, e a maioria dos nossos pacientes relata sentir muito menos desconforto do que imaginava. Após a cirurgia, qualquer sensibilidade é controlada com medicação simples. A tecnologia atual tornou o processo muito mais confortável e previsível.",
  },
  {
    question: "Qual o valor do tratamento?",
    answer:
      "Cada caso é único — o valor depende do número de implantes, tipo de prótese e condições do osso, entre outros fatores. O Conselho Federal de Odontologia exige avaliação presencial para emissão de orçamentos, o que garante a seriedade e ética do atendimento. Agende sua avaliação gratuita e saia com um plano de tratamento personalizado.",
  },
  {
    question: "Quanto tempo leva o tratamento?",
    answer:
      "Depende do caso. Implantes unitários podem ter a coroa colocada em poucos meses após a osseointegração. Para o protocolo (boca toda), em muitos casos é possível sair com dentes provisórios fixos no mesmo dia da cirurgia (carga imediata). Na consulta de avaliação, traçamos um cronograma realista para o seu caso.",
  },
  {
    question: "Tenho diabetes ou hipertensão. Posso fazer implante?",
    answer:
      "Na grande maioria dos casos, sim. Diabetes e hipertensão controladas não impedem o tratamento. O Dr. Ricardo avalia seu histórico de saúde com cuidado e, se necessário, trabalha em conjunto com seu médico para garantir toda a segurança do procedimento. O mais importante é não abrir mão da sua qualidade de vida por uma dúvida que tem solução.",
  },
  {
    question: "Tem opção de parcelamento?",
    answer:
      "Sim. Trabalhamos com diversas condições de pagamento para que o investimento caiba no seu orçamento. Aceitamos cartão de crédito parcelado e outras formas que discutimos na consulta. Não deixe o sorriso que você merece para depois por questão financeira — temos opções para cada realidade.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#5bd3f3] font-semibold text-sm uppercase tracking-widest mb-3">
            Dúvidas Frequentes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#383d41]">
            Suas perguntas, respondidas
          </h2>
          <p className="mt-4 text-gray-500">
            Não deixe uma dúvida impedir você de dar o primeiro passo.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left px-6 py-5 gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#383d41] text-sm md:text-base">
                  {faq.question}
                </span>
                <span
                  className="text-[#5bd3f3] text-xl flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center bg-gray-50 rounded-3xl p-8"
        >
          <p className="text-[#383d41] font-semibold text-lg mb-2">
            Ainda ficou com alguma dúvida?
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Fale com a gente no WhatsApp agora mesmo. Respondemos rápido!
          </p>
          <a
            href="https://wa.me/552421091671"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#383d41] text-white font-bold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity text-sm"
          >
            Perguntar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
