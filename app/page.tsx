import HeroSection from "./components/HeroSection";
import EmpathySection from "./components/EmpathySection";
import TreatmentsSection from "./components/TreatmentsSection";
import DifferentialsSection from "./components/DifferentialsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <EmpathySection />
      <TreatmentsSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
