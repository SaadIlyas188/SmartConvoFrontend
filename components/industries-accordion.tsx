// =====================================================================
// PREVIOUS INDUSTRIES ACCORDION — COMMENTED OUT FOR REVERT
// =====================================================================
// "use client"
//
// import type React from "react"
// import { useState } from "react"
// import { Building2, Utensils, Briefcase, Heart, Hotel } from "lucide-react"
//
// interface IndustryData {
//   id: number
//   background: string
//   icon: React.ReactNode
//   main: string
//   sub: string
//   defaultColor: string
//   features: string[]
// }
//
// const IndustriesAccordion: React.FC = () => {
//   const [activeIndustry, setActiveIndustry] = useState<number>(0)
//
//   const industriesData: IndustryData[] = [
//     {
//       id: 0,
//       background: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
//       icon: <Building2 className="w-8 h-8 text-white" />,
//       main: "Government Agencies",
//       sub: "Serving public sectors with AI excellence",
//       defaultColor: "#1e3a8a",
//       features: ["Secure & Compliant", "24/7 Citizen Services", "Multi-Language Support"],
//     },
//     {
//       id: 1,
//       background: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
//       icon: <Utensils className="w-8 h-8 text-white" />,
//       main: "Restaurants",
//       sub: "Automate reservations & orders seamlessly",
//       defaultColor: "#dc2626",
//       features: ["Smart Reservations", "Order Automation", "Menu Assistance"],
//     },
//     {
//       id: 2,
//       background: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80",
//       icon: <Briefcase className="w-8 h-8 text-white" />,
//       main: "Enterprise",
//       sub: "Scale your customer engagement globally",
//       defaultColor: "#7c3aed",
//       features: ["Global Scale", "CRM Integration", "Custom Workflows"],
//     },
//     {
//       id: 3,
//       background: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&q=80",
//       icon: <Heart className="w-8 h-8 text-white" />,
//       main: "Healthcare",
//       sub: "HIPAA-compliant patient scheduling & care",
//       defaultColor: "#0ea5e9",
//       features: ["HIPAA Compliant", "Smart Scheduling", "Patient Support"],
//     },
//     {
//       id: 4,
//       background: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1600&q=80",
//       icon: <Hotel className="w-8 h-8 text-white" />,
//       main: "Hospitality",
//       sub: "Elevate guest experiences with AI concierge",
//       defaultColor: "#f59e0b",
//       features: ["24/7 Concierge", "Multi-Property Management", "Guest Personalization"],
//     },
//   ]
//
//   const handleIndustryClick = (industryId: number) => {
//     setActiveIndustry(industryId)
//   }
//
//   return (
//     <>
//       <style jsx>{`
//         .industries-container { display: flex; flex-direction: column; justify-content: center; align-items: center; overflow: hidden; font-family: var(--font-geist-sans); padding: 1rem 2rem; margin-top: -1rem; }
//         .industries-wrapper { display: flex; flex-direction: row; width: 100%; max-width: 1400px; height: 520px; overflow: hidden; gap: 10px; }
//         .industry-item { position: relative; flex-grow: 1; border-radius: 20px; cursor: pointer; overflow: hidden; transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); display: flex; justify-content: center; align-items: center; color: white; }
//         .industry-item.closed { background: linear-gradient(135deg, var(--color) 0%, var(--color-dark) 100%); }
//         .industry-item.open { background-size: cover; background-position: center; }
//         .industry-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.75)); opacity: 0; transition: opacity 0.8s ease; }
//         .industry-item.open .industry-overlay { opacity: 1; }
//         .industry-icon-only { transition: all 0.6s ease; display: flex; flex-direction: column; align-items: center; gap: 10px; }
//         .industry-item.open .industry-icon-only { transform: scale(0) rotate(90deg); opacity: 0; }
//         .industry-item.closed .industry-icon-only { transform: scale(1) rotate(0deg); opacity: 1; }
//         .industry-icon-text { font-size: 0.85rem; font-weight: 500; text-align: center; letter-spacing: 0.3px; }
//         .industry-content { position: absolute; bottom: 30px; left: 30px; right: 30px; z-index: 10; opacity: 0; transform: translateY(20px); transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
//         .industry-item.open .industry-content { opacity: 1; transform: translateY(0); }
//         .industry-main { font-size: 2.5rem; font-weight: 700; margin-bottom: 8px; background: linear-gradient(135deg, #ffffff 0%, #06b6d4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
//         .industry-sub { font-size: 1rem; opacity: 0.9; margin-bottom: 20px; }
//         .industry-features { display: flex; flex-wrap: wrap; gap: 10px; }
//         .feature-tag { background: rgba(6,182,212,0.2); backdrop-filter: blur(10px); border: 1px solid rgba(6,182,212,0.4); border-radius: 20px; padding: 8px 16px; font-size: 0.85rem; font-weight: 500; transition: all 0.3s ease; }
//         .feature-tag:hover { background: rgba(6,182,212,0.35); border-color: rgba(6,182,212,0.7); transform: translateY(-2px); }
//         @media (max-width: 768px) { .industries-wrapper { flex-direction: column; height: auto; } .industry-content { padding: 20px; } .industry-main { font-size: 1.8rem; } }
//       `}</style>
//
//       <div className="text-center mb-6 mt-4">
//         <h2 className="text-4xl md:text-5xl font-light text-white mb-2">
//           Explore Our{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Solutions</span>
//         </h2>
//         <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
//           Click on each industry to discover how <span className="text-cyan-400 font-medium">Pentagon AI</span> revolutionizes communication in your sector.
//         </p>
//       </div>
//
//       <div className="industries-container">
//         <div className="industries-wrapper">
//           {industriesData.map((industry) => {
//             const isActive = activeIndustry === industry.id
//             return (
//               <div key={industry.id} className={`industry-item ${isActive ? "open" : "closed"}`} style={{ backgroundImage: isActive ? `url(${industry.background})` : "none", "--color": industry.defaultColor, "--color-dark": industry.defaultColor + "cc", flexGrow: isActive ? 9 : 1 } as React.CSSProperties} onClick={() => handleIndustryClick(industry.id)}>
//                 <div className="industry-icon-only">{industry.icon}<div className="industry-icon-text">{industry.main}</div></div>
//                 <div className="industry-overlay" />
//                 <div className="industry-content">
//                   <div className="industry-main">{industry.main}</div>
//                   <div className="industry-sub">{industry.sub}</div>
//                   <div className="industry-features">{industry.features.map((feature, idx) => (<div key={idx} className="feature-tag">{feature}</div>))}</div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </>
//   )
// }
//
// export default IndustriesAccordion
// =====================================================================
// END PREVIOUS CODE
// =====================================================================

"use client"

import { useState } from "react"
import {
  Droplets,
  Trash2,
  Construction,
  TreePine,
  Zap,
  Bus,
} from "lucide-react"

const municipalDepartments = [
  {
    id: 0,
    icon: Droplets,
    title: "Water & Sewage",
    description:
      "Handle billing inquiries, report leaks, schedule meter reads, and manage service connection requests — all automated.",
    capabilities: [
      "Billing & Payment Support",
      "Leak & Burst Reporting",
      "New Connection Requests",
      "Meter Read Scheduling",
    ],
  },
  {
    id: 1,
    icon: Trash2,
    title: "Waste Management",
    description:
      "Residents can check pickup schedules, report missed collections, and request special bulk pickups through natural conversation.",
    capabilities: [
      "Pickup Schedule Info",
      "Missed Collection Reports",
      "Bulk Waste Requests",
      "Recycling Guidelines",
    ],
  },
  {
    id: 2,
    icon: Construction,
    title: "Roads & Infrastructure",
    description:
      "Pothole reporting, road closure info, sidewalk repairs, and construction updates — captured and routed automatically.",
    capabilities: [
      "Pothole & Damage Reports",
      "Road Closure Updates",
      "Sidewalk Repair Requests",
      "Construction Schedules",
    ],
  },
  {
    id: 3,
    icon: TreePine,
    title: "Parks & Recreation",
    description:
      "Facility bookings, program registration, park maintenance requests, and event info — all handled conversationally.",
    capabilities: [
      "Facility Reservations",
      "Program Registration",
      "Maintenance Requests",
      "Event Information",
    ],
  },
  {
    id: 4,
    icon: Zap,
    title: "Utilities & Energy",
    description:
      "Outage reporting, billing questions, energy efficiency programs, and service transfers — instant AI responses.",
    capabilities: [
      "Outage Reporting",
      "Bill Inquiries",
      "Efficiency Programs",
      "Service Transfers",
    ],
  },
  {
    id: 5,
    icon: Bus,
    title: "Transit & Transport",
    description:
      "Route information, pass purchases, accessibility inquiries, and service alerts — delivered in real-time by AI.",
    capabilities: [
      "Route & Schedule Info",
      "Pass & Fare Inquiries",
      "Accessibility Support",
      "Service Alerts",
    ],
  },
]

const IndustriesAccordion = () => {
  const [activeDept, setActiveDept] = useState<number>(0)
  const active = municipalDepartments[activeDept]
  const ActiveIcon = active.icon

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs text-cyan-400 font-mono tracking-[0.3em] uppercase">
            Departments
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight text-white mt-4 tracking-tight leading-tight">
            Every Department,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              Connected
            </span>
          </h2>
          <p className="text-base text-white/50 mt-4 leading-relaxed max-w-xl mx-auto">
            Pentagon AI plugs into each municipal department — automating citizen interactions from first ring to resolution.
          </p>
        </div>

        {/* Two-column layout: tabs left, detail right */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Left: department tabs */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
            {municipalDepartments.map((dept) => {
              const Icon = dept.icon
              const isActive = activeDept === dept.id
              return (
                <button
                  key={dept.id}
                  onClick={() => setActiveDept(dept.id)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-left transition-all duration-400 shrink-0 ${
                    isActive
                      ? "bg-cyan-500/10 border border-cyan-500/30 text-white"
                      : "bg-transparent border border-white/[0.05] text-white/50 hover:text-white/70 hover:border-white/10"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 shrink-0 ${isActive ? "text-cyan-400" : "text-white/30"}`}
                    strokeWidth={1.5}
                  />
                  <span className="text-sm font-medium whitespace-nowrap">{dept.title}</span>
                </button>
              )
            })}
          </div>

          {/* Right: detail card */}
          <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 lg:p-14 overflow-hidden min-h-[340px]">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <ActiveIcon className="w-6 h-6 text-cyan-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight">
                  {active.title}
                </h3>
              </div>

              <p className="text-base text-white/50 leading-relaxed mb-8 max-w-lg">
                {active.description}
              </p>

              {/* Capability tags */}
              <div className="flex flex-wrap gap-3">
                {active.capabilities.map((cap, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-full bg-white/[0.04] border border-white/[0.08] text-white/70 transition-all duration-300 hover:border-cyan-500/30 hover:text-white"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesAccordion
