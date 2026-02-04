"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollText } from "@/components/scroll-text"
import BackgroundPaths from "@/components/background-paths"
import CyanInteractiveBackground from "@/components/interactive-background"
import Link from "next/link";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -15% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* === BACKGROUND LAYERS === */}
      {/* Cyan wave background from Code A (below everything) */}
      <div className="absolute inset-0 z-0 opacity-[0.35] mix-blend-screen">
        <BackgroundPaths title="" />
      </div>

      {/* Cyan glowing particle background from Code B (above waves) */}
      <div className="absolute inset-0 z-10">
        <CyanInteractiveBackground />
      </div>

      {/* Floating cyan circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)`,
              animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Side navigation */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "story", "mission", "team", "values"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16 relative">
        {/* Hero Section */}
        <header
          id="intro"
          ref={(el) => {
  sectionsRef.current[0] = el
}}

          className="min-h-screen flex items-center opacity-0 pt-20"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-white/50 font-mono tracking-wider">ABOUT US / 2025</div>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight">
                  Pentagon AI
                  <br />
                  {/* <span className="text-white/50">by Pentagon AI</span> */}
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                  Revolutionizing customer communication with
                  <span className="text-cyan-400"> AI-powered voice agents</span> that understand, engage, and convert
                  24/7.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-base text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
                    Industry-agnostic AI solutions
                  </div>
                  <div>Toronto, Canada</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-white/50 font-mono">FOUNDED</div>
                <div className="space-y-2">
                  <div className="text-lg text-white">2023</div>
                  <div className="text-base text-white/60">Toronto, Canada</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-white/50 font-mono">INDUSTRIES</div>
                <div className="flex flex-wrap gap-2">
                  {["Government", "Enterprise", "Restaurants", "Healthcare", "Hospitality", "Automotive"].map((industry) => (
                    <span
                      key={industry}
                      className="px-3 py-1 text-sm border border-white/20 rounded-full hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Company Story Timeline */}
        <section id="story" ref={(el) => {
  sectionsRef.current[1] = el
}}
className="min-h-0 py-10 sm:py-16 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-4xl sm:text-5xl font-light">Our Journey</h2>
              <div className="text-sm text-white/50 font-mono">2023 — PRESENT</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2025",
                  milestone: "Expansion",
                  title: "Multi-Industry Growth",
                  description:
                    "Expanded to serve healthcare, legal, and automotive sectors with specialized AI voice solutions.",
                  metrics: [],
                },
                {
                  year: "2024",
                  milestone: "Scale",
                  title: "Restaurant Revolution",
                  description:
                    "Launched industry-first AI reservation and ordering system, transforming restaurant operations.",
                  metrics: [],
                },
                {
                  year: "2023",
                  milestone: "Launch",
                  title: "Pentagon AI Founded",
                  description: "Started with a vision to make AI-powered communication accessible to every business.",
                  metrics: [],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-white/10 hover:border-cyan-500/30 transition-all duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-2xl sm:text-3xl font-light text-white/50 group-hover:text-cyan-400 transition-colors duration-500">
                      {item.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div className="text-sm text-cyan-400 font-mono">{item.milestone.toUpperCase()}</div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{item.title}</h3>
                    </div>
                    <p className="text-base text-white/60 leading-relaxed max-w-lg">{item.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {item.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-2 py-1 text-sm text-white/50 border border-white/10 rounded group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all duration-500"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ScrollText Section */}
        <section className="min-h-0 py-20 sm:py-24">
  <ScrollText
    leftText="Pentagon AI"
    rightPhrases={[
      "Builds Intelligence",
      "Powers Solutions", 
      "Transforms Business",
      "Delivers Innovation",
      "Serves Excellence"
    ]}
  />
</section>


        {/* Mission & Vision */}
        {/* Mission & Vision */}
<section id="mission" ref={(el) => {
  sectionsRef.current[2] = el
}}
 className="min-h-0 py-24 sm:py-32 opacity-0">
  <div className="space-y-12 sm:space-y-16">
    <h2 className="text-4xl sm:text-5xl font-light">Mission & Vision</h2>

    <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
      {[
        {
          title: "Our Mission",
          content:
            "To empower organizations with cutting-edge AI solutions that transform operations, enhance customer experiences, and drive measurable business outcomes across every industry.",
        },
        {
          title: "Our Vision",
          content:
            "A world where artificial intelligence is accessible to all, enabling businesses of every size to compete globally with enterprise-grade AI tools that were once reserved for Fortune 500 companies.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative p-8 sm:p-10 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] bg-gradient-to-br from-white/5 to-transparent overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="relative space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full" />
              <h3 className="text-xl sm:text-2xl font-medium group-hover:text-cyan-400 transition-colors duration-300">
                {item.title}
              </h3>
            </div>
            <p className="text-base text-white/70 leading-relaxed pl-7">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Team Capabilities */}
        <section id="team" ref={(el) => {
  sectionsRef.current[3] = el
}}
className="min-h-0 py-20 sm:py-28 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-light">What We Bring</h2>
              <p className="text-base text-white/60 max-w-2xl">
                A team of AI engineers, voice technology experts, and customer experience specialists dedicated to
                transforming business communication.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "AI Engineering",
                  description: "Advanced natural language processing and machine learning models",
                  tech: ["GPT-4", "Custom NLP", "Voice Recognition"],
                },
                {
                  title: "Voice Technology",
                  description: "Crystal-clear, human-like voice synthesis and real-time processing",
                  tech: ["Neural TTS", "Low Latency", "Multi-Language"],
                },
                {
                  title: "Integration Expertise",
                  description: "Seamless connection with your existing business systems",
                  tech: ["CRM", "POS", "Booking Systems"],
                },
                {
                  title: "24/7 Reliability",
                  description: "Enterprise-grade infrastructure with 99.9% uptime guarantee",
                  tech: ["Cloud Native", "Auto-Scaling", "Monitoring"],
                },
                {
                  title: "Data Security",
                  description: "Bank-level encryption and compliance with industry standards",
                  tech: ["SOC 2", "GDPR", "HIPAA Ready"],
                },
                {
                  title: "Continuous Learning",
                  description: "AI that gets smarter with every conversation",
                  tech: ["ML Pipeline", "A/B Testing", "Analytics"],
                },
              ].map((capability, index) => (
                <div
                  key={index}
                  className="group p-5 border border-white/10 rounded-lg hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                >
                  <div className="space-y-3">
                    <h3 className="text-base font-medium group-hover:text-cyan-400 transition-colors duration-300">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">{capability.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {capability.tech.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-xs text-white/40 border border-white/10 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section id="values" ref={(el) => {
  sectionsRef.current[4] = el
}}
 className="py-20 sm:py-28 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-4xl sm:text-5xl font-light">Our Values</h2>

            <div className="space-y-6">
              {[
                {
                  value: "Innovation First",
                  description:
                    "We push the boundaries of what's possible with AI, constantly exploring new ways to enhance customer communication.",
                },
                {
                  value: "Customer Success",
                  description:
                    "Your growth is our success. We're committed to delivering measurable results and exceptional support.",
                },
                {
                  value: "Transparency",
                  description: "Clear pricing, honest communication, and open about our capabilities and limitations.",
                },
                {
                  value: "Accessibility",
                  description:
                    "Enterprise-grade AI should be available to businesses of all sizes, not just Fortune 500 companies.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 py-5 border-b border-white/10 hover:border-cyan-500/30 transition-all duration-500"
                >
                  <div className="lg:col-span-4">
                    <h3 className="text-lg font-medium group-hover:text-cyan-400 transition-colors duration-300">
                      {item.value}
                    </h3>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-base text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-28">
          <div className="text-center space-y-8 border border-white/10 rounded-2xl p-12 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]">
            <h2 className="text-4xl sm:text-5xl font-light">Ready to Transform Your Communication?</h2>
            <p className="text-base text-white/60 max-w-2xl mx-auto">
              Join hundreds of businesses already using SmartConvo to deliver exceptional customer experiences 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/">
  <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] text-base">
    Schedule a Demo
  </button>
</Link>

<Link href="/contact">
  <button className="px-6 py-3 border border-white/20 hover:border-cyan-500/50 text-white rounded-lg transition-all duration-300 text-base">
    Contact Us
  </button>
</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
