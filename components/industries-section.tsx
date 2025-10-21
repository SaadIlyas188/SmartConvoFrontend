"use client"

import { useEffect, useRef, useState } from "react"
import { UtensilsCrossed, Car, Scale, Heart } from "lucide-react"

const industries = [
  {
    id: 1,
    icon: UtensilsCrossed,
    title: "Restaurants",
    subtitle: "Hospitality Excellence",
    description:
      "Handle orders, reservations, and customer inquiries 24/7 with intelligent AI that understands your menu and service style.",
    features: ["Order taking", "Table reservations", "Menu inquiries", "Special requests"],
    gradient: "from-cyan-500/20 via-transparent to-transparent",
  },
  {
    id: 2,
    icon: Car,
    title: "Automotive",
    subtitle: "Service Innovation",
    description:
      "Book service appointments and handle customer support seamlessly, keeping your customers informed and satisfied.",
    features: ["Service bookings", "Oil change appointments", "Parts inquiries", "Maintenance reminders"],
    gradient: "from-cyan-600/20 via-transparent to-transparent",
  },
  {
    id: 3,
    icon: Scale,
    title: "Legal",
    subtitle: "Professional Services",
    description:
      "Schedule consultations and provide initial client screening with confidentiality and professionalism built-in.",
    features: ["Consultation booking", "Client screening", "Case inquiries", "Appointment management"],
    gradient: "from-cyan-400/20 via-transparent to-transparent",
  },
  {
    id: 4,
    icon: Heart,
    title: "Healthcare",
    subtitle: "Patient Care",
    description:
      "Manage patient appointments and provide basic information while maintaining HIPAA compliance and care standards.",
    features: ["Appointment scheduling", "Patient inquiries", "Insurance verification", "Follow-up reminders"],
    gradient: "from-cyan-500/20 via-transparent to-transparent",
  },
]

export function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % industries.length)
          return 0
        }
        return prev + 1.67 // 60 frames per second, 6 seconds total
      })
    }, 100)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    setProgress(0)
  }

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + industries.length) % industries.length)
    setProgress(0)
  }

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % industries.length)
    setProgress(0)
  }

  const currentIndustry = industries[activeIndex]
  const Icon = currentIndustry.icon

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Cyan glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-500/5" />

      <div className="relative h-full w-full flex flex-col lg:flex-row items-center justify-center px-8 md:px-16 lg:px-24 gap-12 pt-24">
        {/* LEFT SIDE: TEXT CONTENT */}
        <div
          key={activeIndex}
          className="max-w-2xl space-y-8 text-center lg:text-left animate-in fade-in slide-in-from-left-10 duration-700"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-sm shadow-lg shadow-cyan-500/20">
            <Icon className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />
          </div>

          <p className="text-cyan-300/70 text-sm md:text-base uppercase tracking-[0.3em] font-light">
            {currentIndustry.subtitle}
          </p>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
            {currentIndustry.title}
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">{currentIndustry.description}</p>

          <ul className="space-y-3 pt-6">
            {currentIndustry.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center justify-center lg:justify-start text-lg text-gray-200 animate-in fade-in slide-in-from-left-5 duration-500"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-4 shadow-lg shadow-cyan-400/50" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE: VISUAL ELEMENT */}
        <div
          key={`visual-${activeIndex}`}
          className="relative w-full max-w-lg h-96 lg:h-[32rem] rounded-3xl overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent backdrop-blur-sm shadow-2xl shadow-cyan-500/10 animate-in fade-in slide-in-from-right-10 duration-700"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${currentIndustry.gradient}`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-48 h-48 text-cyan-400/20" strokeWidth={0.5} />
          </div>
        </div>
      </div>

      {/* CUSTOM PAGINATION */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`relative transition-all duration-300 ${
                index === activeIndex ? "scale-110" : "scale-100 hover:scale-105"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  index === activeIndex
                    ? "border-cyan-400 bg-cyan-400 shadow-lg shadow-cyan-400/50"
                    : "border-cyan-400/40 hover:border-cyan-400/60"
                }`}
              />
              {index === activeIndex && (
                <div className="absolute inset-0 -m-2">
                  <svg className="w-7 h-7 transform -rotate-90" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1.5" fill="none" />
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="rgb(34, 211, 238)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 10}`}
                      strokeDashoffset={`${2 * Math.PI * 10 * (1 - progress / 100)}`}
                      className="transition-all duration-100"
                    />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="text-center mt-6">
          <span className="text-cyan-100/60 text-sm font-light tracking-wider">
            {String(activeIndex + 1).padStart(2, "0")} / {String(industries.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* NAVIGATION ARROWS */}
      <button onClick={handlePrev} className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 group">
        <div className="w-14 h-14 border border-cyan-400/20 rounded-full flex items-center justify-center hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300 backdrop-blur-sm">
          <svg
            className="w-6 h-6 text-cyan-100/60 group-hover:text-cyan-400 transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </button>

      <button onClick={handleNext} className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 group">
        <div className="w-14 h-14 border border-cyan-400/20 rounded-full flex items-center justify-center hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300 backdrop-blur-sm">
          <svg
            className="w-6 h-6 text-cyan-100/60 group-hover:text-cyan-400 transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    </section>
  )
}
