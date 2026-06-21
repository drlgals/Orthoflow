"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WA_LINK = "https://wa.me/5524999999999"; // TODO: substituir pelo número real da clínica

export default function FooterSection() {
  return (
    <footer className="bg-[#383d41] text-white">
      {/* CTA final */}
      <section
        className="py-20 px-6 md:px-12 text-center"
        style={{ background: "linear-gradient(135deg, #5bd3f3 0%, #74f3d8 100%)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#383d41] mb-4 leading-tight">
            Dê o primeiro passo hoje.
          </h2>
          <p className="text-[#383d41]/80 text-lg mb-8">
            Agende sua avaliação gratuita e descubra em poucas horas qual é o melhor
            tratamento para o seu caso.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#383d41] text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl hover:opacity-90 active:scale-95 transition-all"
          >
            <WhatsAppIcon />
            Quero Agendar Minha Avaliação
          </a>
          <p className="mt-4 text-[#383d41]/60 text-sm">
            Resposta rápida · Sem compromisso · 100% gratuito
          </p>
        </motion.div>
      </section>

      {/* Mapa e info */}
      <div className="py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/Orthoflow - MonoBRANCOHorizontal.png"
              alt="Orthoflow"
              width={180}
              height={50}
              style={{ height: "44px", width: "auto" }}
              className="mb-6"
            />

            <div className="flex flex-col gap-5 text-white/80 text-sm">
              <div>
                <p className="text-white font-semibold mb-1">📍 Endereço</p>
                {/* TODO: substituir pelo endereço completo da clínica */}
                <p>[ENDEREÇO COMPLETO]</p>
                <p>Resende – RJ</p>
              </div>

              <div>
                <p className="text-white font-semibold mb-1">📞 Contato</p>
                <a href={WA_LINK} className="hover:text-[#5bd3f3] transition-colors">
                  {/* TODO: substituir pelo número real */}
                  (24) 9XXXX-XXXX · WhatsApp
                </a>
              </div>

              <div>
                <p className="text-white font-semibold mb-1">🕐 Horário de Funcionamento</p>
                {/* TODO: substituir pelos horários reais */}
                <p>[HORÁRIO DE FUNCIONAMENTO]</p>
              </div>

              <div className="pt-4 border-t border-white/10 text-white/50 text-xs leading-relaxed">
                {/* TODO: substituir pelo CRO e CNPJ reais */}
                <p>Responsável Técnico: Dr. Ricardo [SOBRENOME] · CRO-RJ [NÚMERO]</p>
                <p className="mt-1">CNPJ: [XX.XXX.XXX/XXXX-XX]</p>
              </div>
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden h-64 md:h-auto min-h-[250px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.6592298896617!2d-44.46350492470269!3d-22.461805979570777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e78dd1add713d%3A0x2d8090028de2cff3!2sOrthoflow!5e1!3m2!1spt-BR!2sbr!4v1782068016258!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Orthoflow"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Orthoflow. Todos os direitos reservados.</p>
          <p>Viva a Liberdade De Sorrir.</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
