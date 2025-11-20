"use client"

import {
  useMotionValue,
  motion,
  useTransform,
  useMotionTemplate
} from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface HoverRevealVerticalProps {
  children: string
  className?: string
}

export function HoverRevealVertical({ children, className = "" }: HoverRevealVerticalProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseY = useMotionValue(0)
  const [isHovered, setIsHovered] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const revealProgress = useTransform(mouseY, [0, dimensions.height], [0, 100])

  // FIX #1 — useMotionTemplate for clipPath
  const clipPath = useMotionTemplate`inset(0 0 ${100 - revealProgress}% 0)`

  // FIX #2 — top: revealProgress - 40 cannot subtract motionValue; transform instead
  const glowTop = useTransform(revealProgress, (v) => v - 40)

  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect()
      setDimensions({ width, height })
    }
  }, [children])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const y = e.clientY - rect.top
    mouseY.set(y)
  }

  return (
    <div
      ref={ref}
      className={`relative inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base text */}
      <span className="relative z-10">{children}</span>

      {/* Revealed text with stroke */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              clipPath,
            }}
          >
            <span
              className="absolute inset-0"
              style={{
                WebkitTextStroke: "1px rgba(6, 182, 212, 0.8)",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              {children}
            </span>
          </motion.div>

          {/* Horizontal line */}
          <motion.div
            className="absolute left-0 right-0 h-[1px] bg-cyan-500/60"
            style={{
              top: mouseY,
            }}
          />

          {/* Glow effect */}
          <motion.div
            className="absolute left-0 right-0 h-20 pointer-events-none"
            style={{
              top: glowTop,
              background:
                "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
            }}
          />
        </motion.div>
      )}
    </div>
  )
}
