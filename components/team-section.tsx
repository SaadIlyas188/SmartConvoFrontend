"use client"

import { Code2, Palette, Rocket, Users } from "lucide-react"

const capabilities = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Python, React, Next.js, and complete MERN solutions",
  },
  {
    icon: Palette,
    title: "Mobile Applications",
    description: "React Native and hybrid platform development",
  },
  {
    icon: Rocket,
    title: "AI-Driven Systems",
    description: "Cutting-edge AI voice agents and automation",
  },
  {
    icon: Users,
    title: "Custom Solutions",
    description: "Tailored technology stacks for your business needs",
  },
]

export function TeamSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-8 space-y-20">
        <div className="text-center space-y-6">
          <h2 className="text-6xl md:text-7xl font-bold text-white">
            Our <span className="text-cyan-400">Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            While SmartConvo is our flagship product, our expertise goes far beyond it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-10 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {capability.title}
                  </h3>

                  <p className="text-lg text-gray-400 leading-relaxed">{capability.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center space-y-6 pt-12">
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            By combining strong technical foundations with innovation, we ensure our clients are equipped with the tools
            they need to succeed in the digital age.
          </p>

          <div className="pt-8">
            <p className="text-3xl md:text-4xl font-semibold text-white">
              Behind SmartConvo is an <span className="text-cyan-400">amazing, talented, and passionate team</span>
            </p>
            <p className="text-xl text-gray-400 mt-4">that makes this vision possible.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
