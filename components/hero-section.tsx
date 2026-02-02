"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { ParticleTextEffect } from "./particle-text-effect"
import { InfiniteSlider } from "./ui/infinite-slider"
import { ProgressiveBlur } from "./ui/progressive-blur"
import { DemoRequestForm } from "./demo-request-form"

export function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const toggleForm = () => setIsFormOpen((prev) => !prev)

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex flex-col justify-between bg-black">
      {/* Sticky Toggle Button (Right Side) */}
      <button
        onClick={toggleForm}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 group"
        aria-label={isFormOpen ? "Close demo form" : "Open demo form"}
      >
       <div className="bg-cyan-500/80 hover:bg-cyan-400 backdrop-blur-sm text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-cyan-400/30 flicker-float">


          <ChevronRight
            className={`h-4 w-4 transition-transform duration-300 ${
              !isFormOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Hero Center Section */}
      <div className="flex-1 flex items-start justify-center pt-20">
        {isFormOpen ? (
          <div className="transform -translate-y-8 w-[80%] max-w-3xl">
            <DemoRequestForm onClose={() => setIsFormOpen(false)} />
          </div>
        ) : (
          <ParticleTextEffect
            words={["PENTAGON AI", "VOICE AGENTS", "SMART CONVO"]}
          />
        )}
      </div>

      {/* Content */}
<div className="container mx-auto text-center relative z-10 pb-8">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-balance">
      The Future of{" "}
      <span className="text-cyan-400">Artificial Intelligence</span>
    </h2>

    <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
      Enterprise-grade AI solutions that transform operations, empower teams, and unlock new possibilities across every industry.
    </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* ✅ "Request a Demo" button now toggles same form */}
            <Button
              size="lg"
              onClick={toggleForm}
              className="bg-cyan-500 hover:bg-cyan-400 text-black group"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://dashboard.pentagonai.co/", "_blank")}
              className="border-neutral-600 text-white bg-black hover:bg-neutral-800 hover:text-white transition-colors duration-300"
            >
              Start Now
            </Button>

          </div>

          {/* Trusted By Section */}
          <div className="mt-16 mb-8">
            <div className="group relative m-auto max-w-6xl">
              <div className="flex flex-col items-center md:flex-row">
                <div className="md:max-w-44 md:border-r md:border-neutral-700 md:pr-6 mb-4 md:mb-0">
                  <p className="text-end text-sm text-neutral-500">
                    Trusted by industry leaders
                  </p>
                </div>
                <div className="relative py-6 md:w-[calc(100%-11rem)]">
                  <InfiniteSlider durationOnHover={20} duration={40} gap={112}>
                    {[
                      "nvidia(1).svg",
                      "column(1).svg",
                      "github(1).svg",
                      "nike(1).svg",
                      "lemonsqueezy(1).svg",
                      "laravel(1).svg",
                      "lilly(1).svg",
                      "openai(1).svg",
                    ].map((logo, i) => (
                      <div key={i} className="flex">
                        <img
                          className="mx-auto h-5 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                          src={`/images/design-mode/${logo}`}
                          alt={`${logo} Logo`}
                          height="20"
                          width="auto"
                        />
                      </div>
                    ))}
                  </InfiniteSlider>

                  <ProgressiveBlur
                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                    direction="left"
                    blurIntensity={1}
                  />
                  <ProgressiveBlur
                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                    direction="right"
                    blurIntensity={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
