import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import BeamsBackground from "@/components/beams-background"
import IndustriesAccordion from "@/components/industries-accordion"
import IndustriesFeaturesSection from "@/components/industries-features-section"


export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <BeamsBackground intensity="medium">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-32 pb-4">
          <div className="text-center mb-6 max-w-4xl mx-auto">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <span className="text-xs text-cyan-400 font-mono tracking-wider">INDUSTRIES / 2025</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-white mb-4 tracking-tight leading-tight">
              Industries We
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                Transform
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-6">
              SmartConvo powers AI voice communication across multiple industries, delivering
              <span className="text-cyan-400"> 24/7 intelligent conversations</span> that drive growth and customer
              satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/60 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
                500+ Active Businesses
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
              <div>50M+ Conversations Handled</div>
              <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
              <div>99.9% Uptime</div>
            </div>
          </div>
        </div>

        {/* ⬇️ Very little gap here */}
        <div className="mt-2">
          <IndustriesFeaturesSection />
        </div>

        {/* ⬆️ Slightly more space before Accordion */}
        <div className="mt-12">
          <IndustriesAccordion />
        </div>
      </BeamsBackground>

      {/* CTA Section */}
<section className="py-20 sm:py-32">
  <div className="mx-auto max-w-3xl">
    <div className="text-center space-y-8 border border-white/10 rounded-2xl p-12 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]">
      <h2 className="text-4xl sm:text-5xl font-light">
        Ready to Transform Your Communication?
      </h2>
      <p className="text-base text-white/60 max-w-2xl mx-auto">
        Join hundreds of businesses already using SmartConvo to deliver exceptional customer experiences 24/7.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] text-base">
          Schedule a Demo
        </button>
        <button className="px-6 py-3 border border-white/20 hover:border-cyan-500/50 text-white rounded-lg transition-all duration-300 text-base">
          Contact Sales
        </button>
      </div>
    </div>
  </div>
</section>

      

      {/* ⬆️ Even more breathing room before footer */}
      <div className="mt-20">
        <Footer />
      </div>
     
    </div>
  )
}
