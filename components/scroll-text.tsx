"use client"

import { useScrollDirection } from "@/hooks/use-scroll-direction"
import { useEffect, useState, useRef } from "react"

interface ScrollTextProps {
  leftText: string
  rightPhrases: string[]
  className?: string
}

export function ScrollText({ leftText, rightPhrases, className = "" }: ScrollTextProps) {
  const { scrollDirection, scrollY } = useScrollDirection()
  const [activeIndex, setActiveIndex] = useState(0)
  const [internalScroll, setInternalScroll] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => setIsClient(true), [])

  useEffect(() => {
    if (!isClient) return

    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const componentHeight = rect.height
      const visibleTop = Math.max(0, -rect.top)
      const visibleBottom = Math.min(componentHeight, viewportHeight - rect.top)
      const visibleHeight = visibleBottom - visibleTop
      const visibilityRatio = visibleHeight / Math.min(componentHeight, viewportHeight)

      const isVisible = visibilityRatio > 0.8
      if (isVisible) {
        document.documentElement.classList.add("animation-active")

        const currentProgress = internalScroll / 100
        const maxProgress = rightPhrases.length - 1

        if ((e.deltaY > 0 && currentProgress >= maxProgress) || (e.deltaY < 0 && currentProgress <= 0)) {
          document.documentElement.classList.remove("animation-active")
          return
        }

        e.preventDefault()
        setInternalScroll((prev) => {
          const newScroll = prev + e.deltaY * 0.7
          const maxScroll = (rightPhrases.length - 1) * 100
          return Math.max(0, Math.min(maxScroll, newScroll))
        })
      } else {
        document.documentElement.classList.remove("animation-active")
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => {
      window.removeEventListener("wheel", handleWheel)
      document.documentElement.classList.remove("animation-active")
    }
  }, [rightPhrases.length, internalScroll, isClient])

  useEffect(() => {
    const newIndex = Math.floor(internalScroll / 100)
    setActiveIndex(Math.max(0, Math.min(rightPhrases.length - 1, newIndex)))
  }, [internalScroll, rightPhrases.length])

  if (!isClient) {
    return (
      <div className={`min-h-screen flex items-center gap-8 px-16 py-28 ${className}`}>
        <div className="flex-shrink-0">
          <h1 className="text-6xl max-lg:text-4xl font-semibold text-foreground leading-none">{leftText}</h1>
        </div>
        <div className="flex-1 relative h-screen max-lg:h-[80vh] overflow-x-visible overflow-y-hidden">
          <div className="absolute inset-0 flex flex-col justify-center">
            {rightPhrases.map((phrase, index) => (
              <div
                key={phrase}
                className={`text-6xl max-lg:text-4xl font-semibold absolute whitespace-nowrap transition-all duration-500 ease-in-out ${
                  index === 0 ? "text-cyan-400 opacity-100" : "text-neutral-500 opacity-50"
                }`}
                style={{ transform: `translateY(${index * 70}px)` }}
              >
                {phrase}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={`min-h-screen flex items-center gap-8 px-16 py-28 ${className}`}>
      <div className="flex-shrink-0">
        <h1 className="text-6xl max-lg:text-4xl font-semibold text-foreground leading-none">{leftText}</h1>
      </div>

      <div className="flex-1 relative h-screen max-lg:h-[80vh] overflow-visible">
        <div className="absolute inset-0 flex flex-col justify-center">
          {rightPhrases.map((phrase, index) => {
            const offset = (index - activeIndex) * (isClient && window.innerWidth < 1024 ? 60 : 70)
            const isActive = index === activeIndex

            return (
              <div
                key={phrase}
                className={`text-6xl max-lg:text-4xl font-semibold absolute transition-all duration-500 ease-in-out ${
                  isActive ? "text-cyan-400 opacity-100" : "text-neutral-500 opacity-50"
                }`}
                style={{
                  transform: `translateY(${offset}px)`,
                  whiteSpace: "nowrap",
                  overflow: "visible",
                  maxWidth: "100vw",
                }}
              >
                {phrase}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
