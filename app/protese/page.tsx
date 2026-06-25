import type { Metadata } from "next";
import SpecialtyLandingPage from "../components/SpecialtyLandingPage";
import { specialtyContent } from "../components/specialtyContent";

export const metadata: Metadata = {
  title: "Proteses Dentarias em Resende | Orthoflow",
  description:
    "Pagina dedicada ao tratamento com proteses dentarias da Orthoflow em Resende. Entenda as opcoes, tire duvidas e agende sua avaliacao.",
  alternates: {
    canonical: "https://protese.orthoflowresende.com.br/",
  },
  openGraph: {
    title: "Proteses Dentarias em Resende | Orthoflow",
    description:
      "Conheca as opcoes de protese dentaria da Orthoflow e descubra qual reabilitacao faz sentido para o seu caso.",
    url: "https://protese.orthoflowresende.com.br/",
  },
};

export default function ProtesePage() {
  return <SpecialtyLandingPage content={specialtyContent.protese} />;
}
