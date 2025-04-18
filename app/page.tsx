import Header from "@/components/header"
import Hero from "@/components/hero"
import PainSection from "@/components/pain-section"
import SolutionSection from "@/components/solution-section"
import GainSection from "@/components/gain-section"
import PersonaSection from "@/components/persona-section"
import SecuritySection from "@/components/security-section"
import IntegrationsSection from "@/components/integrations-section"
import ComparisonSection from "@/components/comparison-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"
import StickyCTA from "@/components/sticky-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PainSection />
      <SolutionSection />
      <GainSection />
      <PersonaSection />
      <SecuritySection />
      <IntegrationsSection />
      <ComparisonSection />
      <TestimonialsSection />
      <Footer />
      <StickyCTA />
    </main>
  )
}
