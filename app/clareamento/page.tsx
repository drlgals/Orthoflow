import type { Metadata } from "next";
import SpecialtyLandingPage from "../components/SpecialtyLandingPage";
import { specialtyContent } from "../components/specialtyContent";

export const metadata: Metadata = {
  title: "Clareamento Dental em Resende | Orthoflow",
  description:
    "Pagina dedicada ao clareamento dental da Orthoflow em Resende. Entenda indicacoes, cuidados e como funciona a avaliacao.",
  alternates: {
    canonical: "https://clareamento.orthoflowresende.com.br/",
  },
  openGraph: {
    title: "Clareamento Dental em Resende | Orthoflow",
    description:
      "Conheca a landing page de clareamento dental da Orthoflow e veja como funciona a avaliacao para um sorriso mais luminoso e natural.",
    url: "https://clareamento.orthoflowresende.com.br/",
  },
};

export default function ClareamentoPage() {
  return <SpecialtyLandingPage content={specialtyContent.clareamento} />;
}
