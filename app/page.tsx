import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AnimatedFeaturesSection } from "@/components/animated-features-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { AnimatedCTASection } from "@/components/animated-cta-section"
import { Footer } from "@/components/footer"
import { ScrollTextSection } from "@/components/scroll-text-home"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <AnimatedFeaturesSection />
        <ScrollTextSection />



        {/* <PricingSection /> */}
        <FAQSection />
        <AnimatedCTASection />
      </main>
      <Footer />
    </div>
  )
}
