"use client"

import React from "react"
import { ScrollText } from "@/components/scroll-text"
import ParticlesBackground from "@/components/particles-background"

export function ScrollTextSection() {
  return (
    <ParticlesBackground className="py-32 sm:py-36 md:py-40"> {/* 👈 slightly taller now */}
      <div className="translate-x-[-4%] sm:translate-x-[-6%] text-center">
        <ScrollText
          leftText="SmartConvo AI"
          rightPhrases={[
            "Thinks Human",
            "Talks Smarter",
            "Never Sleeps",
            "Learns Fast",
            "Redefines Voice",
          ]}
        />
      </div>
    </ParticlesBackground>
  )
}
