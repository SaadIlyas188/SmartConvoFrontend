// =====================================================================
// PREVIOUS INDUSTRIES FEATURES SECTION — COMMENTED OUT FOR REVERT
// =====================================================================
// "use client"
//
// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { X, Plus } from "lucide-react"
//
// const features = [
//   {
//     id: 1,
//     title: "AI-Powered Voice Intelligence",
//     shortDescription: "Natural conversations that understand context",
//     fullContent: {
//       paragraphs: [
//         "SmartConvo was built with a singular focus: to deliver the most natural, intelligent voice conversations possible. Every feature is designed to help businesses connect with customers in meaningful ways that feel genuinely human.",
//         "Our AI doesn't just respond—it understands context, remembers preferences, and adapts to each unique conversation. From simple inquiries to complex problem-solving, SmartConvo handles it all with remarkable accuracy and empathy.",
//         "More than 500 businesses across industries trust SmartConvo to represent their brand 24/7, delivering consistent, high-quality customer experiences that drive satisfaction and loyalty.",
//       ],
//       testimonial:
//         "We've tried multiple AI voice solutions, but SmartConvo is in a league of its own. The conversations feel natural, the accuracy is incredible, and our customers actually prefer it to traditional support.",
//       company: "Leading Healthcare Provider",
//     },
//     illustration: (
//       <div className="relative w-full h-64 flex items-center justify-center">
//         <img
//           src="/ai-voice-intelligence.png"
//           alt="AI-Powered Voice Intelligence"
//           className="w-full h-full object-contain"
//         />
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     title: "Built for Scale & Speed",
//     shortDescription: "Handle unlimited conversations simultaneously",
//     fullContent: {
//       paragraphs: [
//         "Scale is at the heart of SmartConvo's architecture. Whether you're handling 10 calls or 10,000 simultaneously, our infrastructure ensures every conversation receives the same level of attention and quality.",
//         "With sub-second response times and 99.9% uptime, SmartConvo eliminates wait times and ensures your customers always get immediate assistance. No more busy signals, no more hold music—just instant, intelligent support.",
//         "Our platform grows with your business, seamlessly handling peak periods, seasonal spikes, and unexpected surges without any degradation in performance or quality.",
//       ],
//       testimonial:
//         "During our busiest season, SmartConvo handled a 400% increase in call volume without breaking a sweat. What would have required hiring dozens of agents was handled flawlessly by the AI.",
//       company: "E-commerce Leader",
//     },
//     illustration: (
//       <div className="relative w-full h-64 flex items-center justify-center">
//         <img src="/scale-speed.png" alt="Built for Scale & Speed" className="w-full h-full object-contain" />
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     title: "Crafted for Every Industry",
//     shortDescription: "Tailored solutions for your unique needs",
//     fullContent: {
//       paragraphs: [
//         "Every industry has unique communication needs, and SmartConvo is designed to adapt perfectly to yours. From healthcare compliance to real estate lead qualification, our AI understands the nuances that matter.",
//         "We've spent years refining industry-specific conversation flows, terminology, and best practices. The result is an AI that doesn't just work—it excels in your specific domain, speaking your language and understanding your customers' needs.",
//         "This commitment to industry specialization means faster deployment, better results, and conversations that truly represent your brand's expertise and values.",
//       ],
//       testimonial:
//         "SmartConvo understood our industry from day one. The AI speaks our language, follows our protocols, and delivers results that exceed what we achieved with traditional call centers.",
//       company: "Financial Services Firm",
//     },
//     illustration: (
//       <div className="relative w-full h-64 flex items-center justify-center">
//         <img
//           src="/industry-tailored.png"
//           alt="Crafted for Every Industry"
//           className="w-full h-full object-contain"
//         />
//       </div>
//     ),
//   },
// ]
//
// export default function IndustriesFeaturesSection() {
//   const [selectedFeature, setSelectedFeature] = useState<number | null>(null)
//
//   return (
//     <div className="py-20">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         {/* <div className="text-center mb-16 max-w-3xl mx-auto">
//           <div className="mb-6 flex items-center justify-center gap-3">
//             <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
//             <span className="text-xs text-cyan-400 font-mono tracking-wider">WHY SMARTCONVO</span>
//             <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
//             Built Different,
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
//               Built Better
//             </span>
//           </h2>
//           <p className="text-lg text-white/70 leading-relaxed">
//             Discover what makes SmartConvo the preferred choice for businesses across industries
//           </p>
//         </div> */}
//
//         {/* Feature Cards */}
//         <div className="grid md:grid-cols-3 gap-y-8 gap-x-0">
//           {features.map((feature) => (
//             <div key={feature.id} className="mx-6">
//               {selectedFeature !== feature.id && (
//                 <motion.div
//                   layoutId={`feature-${feature.id}`}
//                   className="relative bg-white/[0.02] hover:bg-white/[0.04] p-8 cursor-pointer group transition-all duration-300 h-full border border-white/5 hover:border-cyan-500/30 rounded-3xl max-w-sm mx-auto"
//                   onClick={() => setSelectedFeature(feature.id)}
//                   transition={{ type: "spring", stiffness: 120, damping: 20, duration: 1.2 }}
//                 >
//                   <button className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-colors group-hover:border-cyan-500/50">
//                     <Plus className="w-4 h-4 text-white/40 group-hover:text-cyan-400" />
//                   </button>
//                   <motion.div layoutId={`illustration-${feature.id}`}>{feature.illustration}</motion.div>
//                   <div className="mt-6">
//                     <motion.h3
//                       layoutId={`title-${feature.id}`}
//                       className="text-xl leading-tight h-14 flex items-center text-balance font-medium text-white"
//                     >
//                       {feature.title}
//                     </motion.h3>
//                   </div>
//                 </motion.div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//
//       <AnimatePresence>
//         {selectedFeature && (
//           <>
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="fixed inset-0 bg-black/95 backdrop-blur-sm z-40" onClick={() => setSelectedFeature(null)} />
//             <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pb-0 pt-16">
//               <motion.div layoutId={`feature-${selectedFeature}`} className="bg-[#0a0a0a] border border-white/10 rounded-t-2xl p-12 max-w-3xl w-full h-full relative overflow-y-auto" onClick={(e) => e.stopPropagation()} transition={{ type: "spring", stiffness: 120, damping: 20, duration: 1.2 }}>
//                 <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: 0.3, duration: 0.3 }} onClick={() => setSelectedFeature(null)} className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-cyan-500/50 transition-colors">
//                   <X className="w-4 h-4 text-white/60 hover:text-cyan-400" />
//                 </motion.button>
//                 {features.find((f) => f.id === selectedFeature) && (
//                   <>
//                     <motion.div layoutId={`illustration-${selectedFeature}`} className="relative w-full h-64 flex items-center justify-center mb-8">
//                       <img src={selectedFeature === 1 ? "/images/ai-voice-intelligence.jpg" : selectedFeature === 2 ? "/images/scale-speed.jpg" : "/images/industry-tailored.jpg"} alt={`${features.find((f) => f.id === selectedFeature)?.title} illustration`} className="w-full h-full object-contain" />
//                     </motion.div>
//                     <div className="mb-8">
//                       <motion.h2 layoutId={`title-${selectedFeature}`} className="text-4xl lg:text-5xl tracking-tight font-light leading-tight text-white" transition={{ type: "spring", stiffness: 120, damping: 20, duration: 1.2 }}>
//                         {features.find((f) => f.id === selectedFeature)?.title}
//                       </motion.h2>
//                     </div>
//                     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ delay: 0.4, duration: 0.4 }} className="space-y-8 text-left max-w-2xl">
//                       {features.find((f) => f.id === selectedFeature)?.fullContent.paragraphs.map((paragraph, index) => (
//                         <p key={index} className="text-white/60 text-lg leading-relaxed text-pretty">{paragraph}</p>
//                       ))}
//                       <div className="text-center space-y-6 py-8 border-t border-white/10">
//                         <blockquote className="text-xl text-white font-light leading-relaxed text-balance">
//                           "{features.find((f) => f.id === selectedFeature)?.fullContent.testimonial}"
//                         </blockquote>
//                         <div className="flex justify-center">
//                           <div className="text-cyan-400 font-medium text-lg">{features.find((f) => f.id === selectedFeature)?.fullContent.company}</div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </>
//                 )}
//               </motion.div>
//             </div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }
// =====================================================================
// END PREVIOUS CODE
// =====================================================================

"use client"

import { Phone, FileText, Wrench, CalendarClock, ShieldCheck, Globe } from "lucide-react"

const municipalFeatures = [
  {
    icon: Phone,
    title: "Citizen Call Handling",
    description:
      "AI agents answer resident calls instantly — handling utility inquiries, complaint logging, and general information without hold times.",
  },
  {
    icon: FileText,
    title: "Permit & License Requests",
    description:
      "Automate intake for building permits, business licenses, and zoning requests with guided conversational flows.",
  },
  {
    icon: Wrench,
    title: "Service Request Dispatch",
    description:
      "Residents report potholes, broken streetlights, or water issues. AI captures details, classifies urgency, and routes to the right department.",
  },
  {
    icon: CalendarClock,
    title: "Appointment Scheduling",
    description:
      "Book inspections, court dates, and office visits — all handled conversationally with calendar integration.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant",
    description:
      "Enterprise-grade security with data encryption, access controls, and compliance with municipal data governance standards.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description:
      "Serve diverse communities with real-time multilingual voice AI — no language barrier between government and residents.",
  },
]

export default function IndustriesFeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs text-cyan-400 font-mono tracking-[0.3em] uppercase">
            What We Automate
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-white mt-4 tracking-tight leading-tight">
            Every Call,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              Handled
            </span>
          </h2>
          <p className="text-base text-white/50 mt-4 leading-relaxed max-w-xl mx-auto">
            From routine inquiries to complex service dispatch — Pentagon AI covers the full spectrum of municipal communication.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-3xl overflow-hidden border border-white/[0.06]">
          {municipalFeatures.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="group relative bg-black p-10 transition-all duration-500 hover:bg-white/[0.03]"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-cyan-500/[0.04] via-transparent to-transparent" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:border-cyan-500/40 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg font-medium text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-white/45 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
