import type { Metadata } from "next";
import SpecialtyLandingPage from "../components/SpecialtyLandingPage";
import { specialtyContent } from "../components/specialtyContent";

export const metadata: Metadata = {
  title: "Implantes Dentarios em Resende | Orthoflow",
  description:
    "Pagina dedicada aos implantes dentarios da Orthoflow em Resende. Veja indicacoes, beneficios e proximos passos para agendar sua avaliacao.",
  alternates: {
    canonical: "https://implantes.orthoflowresende.com.br/",
  },
  openGraph: {
    title: "Implantes Dentarios em Resende | Orthoflow",
    description:
      "Descubra como os implantes dentarios da Orthoflow podem devolver estabilidade, conforto e confianca para sorrir e mastigar.",
    url: "https://implantes.orthoflowresende.com.br/",
  },
};

export default function ImplantesPage() {
  return <SpecialtyLandingPage content={specialtyContent.implantes} />;
}
