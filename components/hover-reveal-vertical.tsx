"use client"

import type React from "react"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface HoverRevealVerticalProps {
  children: React.ReactNode
  className?: string
}

export function HoverRevealVertical({ children, className }: HoverRevealVerticalProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mouseY, setMouseY] = useState<number | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleInteraction = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    if (!isHovering) setIsHovering(true)
    const rect = containerRef.current.getBoundingClientRect()
    setMouseY(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setMouseY(null)
  }

  const clipPathValue = isHovering && mouseY !== null ? `inset(${mouseY}px 0 0 0)` : `inset(100% 0 0 0)`

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleInteraction}
      onMouseMove={handleInteraction}
      onMouseLeave={handleMouseLeave}
      className={cn("relative cursor-default", className)}
    >
      {/* --- SINGLE DYNAMIC GRADIENT (Corrected) --- */}
      <div
        className="pointer-events-none absolute left-0 w-full"
        style={{
          top: mouseY !== null ? mouseY + 1 : 0,
          bottom: 0,
          background: "linear-gradient(to bottom, rgba(78, 184, 166, 0.2), transparent)",
          filter: "blur(10px)",
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.2s ease-out",
        }}
        aria-hidden="true"
      />

      {/* --- TEXT LAYERS --- */}
      <div className="text-white" aria-hidden="true">
        {children}
      </div>
      <div
        className="absolute inset-0 bg-black text-transparent"
        style={{
          WebkitTextStroke: "1px #4EB8A6",
          clipPath: clipPathValue,
          transition: "clip-path 0.2s ease-out",
        }}
      >
        {children}
      </div>

      {/* --- SEPARATOR LINE --- */}
      <div
        className="absolute h-[2px] w-full"
        style={{
          top: mouseY ?? 0,
          left: 0,
          background: "#4EB8A6",
          opacity: isHovering ? 1 : 0,
          transform: "translateY(-50%)",
          transition: "opacity 0.2s ease-out",
        }}
        aria-hidden="true"
      />
    </div>
  )
}
