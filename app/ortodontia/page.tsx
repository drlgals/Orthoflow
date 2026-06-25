import type { Metadata } from "next";
import SpecialtyLandingPage from "../components/SpecialtyLandingPage";
import { specialtyContent } from "../components/specialtyContent";

export const metadata: Metadata = {
  title: "Ortodontia em Resende | Orthoflow",
  description:
    "Pagina dedicada ao tratamento ortodontico da Orthoflow em Resende. Entenda indicacoes, beneficios e como funciona a avaliacao.",
  alternates: {
    canonical: "https://ortodontia.orthoflowresende.com.br/",
  },
  openGraph: {
    title: "Ortodontia em Resende | Orthoflow",
    description:
      "Conheca a landing page de ortodontia da Orthoflow e veja como funciona a avaliacao para alinhamento dental e mordida.",
    url: "https://ortodontia.orthoflowresende.com.br/",
  },
};

export default function OrtodontiaPage() {
  return <SpecialtyLandingPage content={specialtyContent.ortodontia} />;
}
