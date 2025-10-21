"use client"
import { cn } from "@/lib/utils"
import type React from "react"
import { useRef, useEffect, useState } from "react"
import { motion } from "motion/react"
import { default as useMeasure } from "react-use-measure"

type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  duration?: number
  durationOnHover?: number
  direction?: "horizontal" | "vertical"
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [size, setSize] = useMeasure()

  useEffect(() => {
    if (durationOnHover && isHovered) {
      setCurrentDuration(durationOnHover)
    } else {
      setCurrentDuration(duration)
    }
  }, [isHovered, duration, durationOnHover])

  const hoverProps = durationOnHover
    ? {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      }
    : {}

  return (
    <div className={cn("overflow-hidden", className)} {...hoverProps}>
      <motion.div
        ref={containerRef}
        className="flex w-max"
        style={{
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
          animation: `${reverse ? "scroll-reverse" : "scroll"} ${currentDuration}s linear infinite`,
        }}
      >
        {children}
        {children}
      </motion.div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: ${direction === "horizontal" ? "translateX(0)" : "translateY(0)"};
          }
          100% {
            transform: ${direction === "horizontal" ? "translateX(-50%)" : "translateY(-50%)"};
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: ${direction === "horizontal" ? "translateX(-50%)" : "translateY(-50%)"};
          }
          100% {
            transform: ${direction === "horizontal" ? "translateX(0)" : "translateY(0)"};
          }
        }
      `}</style>
    </div>
  )
}
