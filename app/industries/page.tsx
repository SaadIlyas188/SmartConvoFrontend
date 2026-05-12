// =====================================================================
// PREVIOUS INDUSTRIES PAGE — COMMENTED OUT FOR REVERT
// =====================================================================
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import BeamsBackground from "@/components/beams-background"
// import IndustriesAccordion from "@/components/industries-accordion"
// import IndustriesFeaturesSection from "@/components/industries-features-section"
// import Link from "next/link";
//
//
// export default function IndustriesPage() {
//   return (
//     <div className="min-h-screen bg-black">
//       <Header />
//       <BeamsBackground intensity="medium">
//         {/* Hero Section */}
//         <div className="container mx-auto px-4 pt-32 pb-4">
//           <div className="text-center mb-6 max-w-4xl mx-auto">
//             <div className="mb-4 flex items-center justify-center gap-3">
//               <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
//               <span className="text-xs text-cyan-400 font-mono tracking-wider">INDUSTRIES / 2025</span>
//               <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
//             </div>
//
//             <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-white mb-4 tracking-tight leading-tight">
//               Industries We
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
//                 Transform
//               </span>
//             </h1>
//
//             <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-6">
//               SmartConvo powers AI voice communication across multiple industries, delivering
//               <span className="text-cyan-400"> 24/7 intelligent conversations</span> that drive growth and customer
//               satisfaction.
//             </p>
//
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/60 mb-2">
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
//                 500+ Active Businesses
//               </div>
//               <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
//               <div>50M+ Conversations Handled</div>
//               <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
//               <div>99.9% Uptime</div>
//             </div>
//           </div>
//         </div>
//
//         {/* ⬇️ Very little gap here */}
//         <div className="mt-2">
//           <IndustriesFeaturesSection />
//         </div>
//
//         {/* ⬆️ Slightly more space before Accordion */}
//         <div className="mt-12">
//           <IndustriesAccordion />
//         </div>
//       </BeamsBackground>
//
//       {/* CTA Section */}
//       <section className="py-20 sm:py-32">
//         <div className="mx-auto max-w-3xl">
//           <div className="text-center space-y-8 border border-white/10 rounded-2xl p-12 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]">
//             <h2 className="text-4xl sm:text-5xl font-light">
//               Ready to Transform Your Communication?
//             </h2>
//             <p className="text-base text-white/60 max-w-2xl mx-auto">
//               Join hundreds of businesses already using SmartConvo to deliver exceptional customer experiences 24/7.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <Link href="/">
//                 <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] text-base">
//                   Schedule a Demo
//                 </button>
//               </Link>
//               <Link href="/contact">
//                 <button className="px-6 py-3 border border-white/20 hover:border-cyan-500/50 text-white rounded-lg transition-all duration-300 text-base">
//                   Contact Us
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//
//       {/* ⬆️ Even more breathing room before footer */}
//       <div className="mt-20">
//         <Footer />
//       </div>
//     </div>
//   )
// }
// =====================================================================
// END PREVIOUS CODE
// =====================================================================

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import BeamsBackground from "@/components/beams-background"
import IndustriesFeaturesSection from "@/components/industries-features-section"
import IndustriesAccordion from "@/components/industries-accordion"
import Link from "next/link"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <BeamsBackground intensity="medium">
        {/* ── Hero: Municipal Services ── */}
        <div className="container mx-auto px-4 pt-36 pb-8">
          <div className="max-w-5xl mx-auto">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.7)]" />
              <span className="text-xs text-cyan-400 font-mono tracking-[0.25em] uppercase">
                Municipal Services
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extralight text-white tracking-tight leading-[1.08] mb-6">
              Smarter Cities,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600">
                Seamless Services
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              Pentagon AI transforms how municipalities communicate with residents — automating citizen inquiries, service requests, and civic engagement with{" "}
              <span className="text-cyan-400 font-medium">intelligent AI voice agents</span> available around the clock.
            </p>

            {/* Metric strip */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-white/50">
              {[
                { value: "24 / 7", label: "Citizen Support" },
                { value: "60%", label: "Call Deflection" },
                { value: "<2 s", label: "Avg. Response" },
                { value: "40+", label: "Service Categories" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-light text-white tracking-tight">{stat.value}</span>
                  <span className="text-xs tracking-wider uppercase mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Features Section ── */}
        <div className="mt-4">
          <IndustriesFeaturesSection />
        </div>

        {/* ── Deep-dive Accordion ── */}
        <div className="mt-16">
          <IndustriesAccordion />
        </div>
      </BeamsBackground>

      {/* ── CTA ── */}
      <section className="py-24 sm:py-32 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="relative text-center space-y-8 border border-white/[0.08] rounded-3xl p-14 backdrop-blur-sm bg-white/[0.02] hover:border-cyan-500/30 transition-all duration-700 hover:shadow-[0_0_60px_rgba(6,182,212,0.08)]">
            <h2 className="text-4xl sm:text-5xl font-extralight tracking-tight">
              Ready to Modernize Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                Municipal Services?
              </span>
            </h2>
            <p className="text-base text-white/50 max-w-xl mx-auto leading-relaxed">
              See how Pentagon AI can reduce call wait times, automate routine inquiries, and improve resident satisfaction for your municipality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Link href="/">
                <button className="px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_24px_rgba(6,182,212,0.45)] text-sm tracking-wide">
                  Schedule a Demo
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-7 py-3.5 border border-white/15 hover:border-cyan-500/40 text-white/80 hover:text-white rounded-xl transition-all duration-300 text-sm tracking-wide">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
