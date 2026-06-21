import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | OrthoFlow",
  description: "Entenda como a OrthoFlow utiliza cookies e tecnologias de rastreamento.",
};

export default function PoliticaDeCookies() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div
        className="py-16 px-6 md:px-12 text-center"
        style={{ background: "linear-gradient(135deg, #5bd3f3 0%, #74f3d8 100%)" }}
      >
        <Link href="/" className="inline-block mb-8 text-[#383d41]/70 hover:text-[#383d41] text-sm transition-colors">
          ← Voltar ao site
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-[#383d41]">Política de Cookies</h1>
        <p className="mt-3 text-[#383d41]/70 text-sm">Última atualização: 21 de junho de 2025</p>
      </div>

      {/* Conteúdo */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        <div className="prose prose-gray max-w-none text-[#383d41]">

          <p className="text-gray-600 leading-relaxed mb-10">
            A presente Política de Cookies explica como utilizamos cookies e tecnologias semelhantes para
            reconhecer você quando visita nosso site. Ela explica o que são essas tecnologias, por que as
            usamos, bem como os seus direitos de controlar o uso que fazemos delas, em conformidade com as
            leis de proteção de dados (como a LGPD no Brasil).
          </p>

          <Section title="1. O que são cookies?">
            <p>
              Cookies são pequenos arquivos de dados que são colocados no seu computador ou dispositivo
              móvel quando você visita um site. Eles são amplamente utilizados pelos proprietários de sites
              para fazer com que seus sites funcionem de maneira mais eficiente e para fornecer informações
              de relatórios e marketing.
            </p>
          </Section>

          <Section title="2. Quais tecnologias e ferramentas utilizamos?">
            <p className="mb-6">
              Para garantir o melhor funcionamento da nossa plataforma e entender o perfil de navegação dos
              nossos usuários, integramos serviços de terceiros que podem armazenar cookies no seu dispositivo:
            </p>

            <SubSection title="Vercel Analytics (Cookies de Desempenho e Estatística)">
              Utilizamos a Vercel Analytics para monitorar o tráfego e a performance do nosso site. Esta
              ferramenta coleta dados de forma agregada, como visualizações de página, tempo de carregamento
              e o tipo de dispositivo utilizado, ajudando-nos a otimizar a velocidade e a estabilidade da
              sua navegação.
            </SubSection>

            <SubSection title="Google Tag Manager (Gerenciamento de Tags)">
              Utilizamos o Google Tag Manager (GTM) para gerenciar e implantar scripts e tags de
              acompanhamento em nosso site. O GTM em si não coleta dados pessoais diretamente, mas é a
              infraestrutura que permite o acionamento de outras ferramentas de análise e marketing (como
              o Pixel da Meta e o Google Analytics, se aplicável), gerenciando como e quando essas tags
              são disparadas.
            </SubSection>

            <SubSection title="Pixel da Meta / Facebook (Cookies de Marketing e Publicidade)">
              <p>O Pixel da Meta é um trecho de código que nos permite rastrear o comportamento dos visitantes
              em nosso site. Ele rastreia ações específicas (como cliques e conversões) e é utilizado para:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Medir a eficácia de nossas campanhas de publicidade.</li>
                <li>Construir públicos personalizados para direcionamento de anúncios.</li>
                <li>Exibir anúncios relevantes para você no Facebook, Instagram e outras plataformas da Meta,
                    com base nas páginas que você visitou em nosso site.</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="3. Como você pode controlar os cookies?">
            <p className="mb-4">Você tem o direito de decidir se aceita ou rejeita os cookies não essenciais.</p>
            <ul className="list-none space-y-4 text-gray-600">
              <li>
                <strong className="text-[#383d41]">No nosso site:</strong> Você pode alterar suas preferências
                a qualquer momento clicando no botão{" "}
                <ManageCookiesButton /> {" "}
                disponível no rodapé desta página.
              </li>
              <li>
                <strong className="text-[#383d41]">No seu navegador:</strong> A maioria dos navegadores
                permite que você visualize, gerencie, exclua e bloqueie cookies de um site. Lembre-se de
                que, se você excluir ou bloquear cookies, algumas funcionalidades do nosso site podem não
                funcionar corretamente.
              </li>
              <li>
                <strong className="text-[#383d41]">Opt-out de anúncios:</strong> Para desativar a exibição
                de anúncios direcionados da Meta, você pode acessar as configurações de anúncios do seu
                perfil no Facebook/Instagram.
              </li>
            </ul>
          </Section>

          <Section title="4. Contato">
            <p>
              Se você tiver dúvidas sobre o uso de cookies ou sobre como tratamos seus dados, entre em
              contato conosco:
            </p>
            <div className="mt-4 bg-gray-50 rounded-2xl p-5 text-sm text-gray-600">
              <p><strong className="text-[#383d41]">Responsável pelo tratamento de dados:</strong></p>
              <p className="mt-1">Dr. Luís Gustavo Amorim · CRO-RJ 44731</p>
              <p>Av. Rita Maria Ferreira da Rocha, 893 – Nova Liberdade, Resende-RJ</p>
              <p className="mt-2">
                {/* TODO: substituir pelo e-mail real do responsável/DPO */}
                <strong className="text-[#383d41]">E-mail:</strong>{" "}
                <span className="text-[#5bd3f3]">[EMAIL DO RESPONSÁVEL]</span>
              </p>
              <p>
                <strong className="text-[#383d41]">WhatsApp:</strong>{" "}
                <a href="https://wa.me/552421091671" className="text-[#5bd3f3] hover:underline">
                  (24) 2109-1671
                </a>
              </p>
            </div>
          </Section>

        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-[#383d41] mb-4 pb-2 border-b border-gray-100">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 pl-4 border-l-2 border-[#5bd3f3]">
      <h3 className="font-semibold text-[#383d41] text-base mb-2">{title}</h3>
      <div className="text-gray-600 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function ManageCookiesButton() {
  return (
    <span className="inline-flex items-center gap-1 bg-gray-100 text-[#383d41] text-xs font-medium px-2.5 py-1 rounded-full">
      🍪 Gerenciar Cookies
    </span>
  );
}
