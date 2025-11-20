"use client"

import { useRef, useEffect, useState } from "react"
import { LOGO_TEXT_WHITE, LOGO_TEXT_CYAN } from "./metaware-logo-path"

export default function SmartConvoParticleLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      // 🔹 Reduce height so it doesn’t take full viewport
      canvas.height = isMobile ? window.innerHeight * 0.45 : window.innerHeight * 0.5
      setIsMobile(window.innerWidth < 768)
    }

    updateCanvasSize()

    let particles: any[] = []
    let textImageData: ImageData | null = null

    function createTextImage() {
      if (!ctx || !canvas) return 0
      ctx.save()

      const fontSize = isMobile ? 70 : 150
      ctx.font = `bold ${fontSize}px Arial, sans-serif`
      ctx.textBaseline = "middle"
      ctx.textAlign = "center"

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Calculate width for alignment
      const whiteTextWidth = ctx.measureText(LOGO_TEXT_WHITE).width
      const cyanTextWidth = ctx.measureText(LOGO_TEXT_CYAN).width
      const totalWidth = whiteTextWidth + cyanTextWidth
      const startX = centerX - totalWidth / 2

      ctx.fillStyle = "white"
      ctx.fillText(LOGO_TEXT_WHITE, startX + whiteTextWidth / 2, centerY)
      ctx.fillStyle = "#00D9FF"
      ctx.fillText(LOGO_TEXT_CYAN, startX + whiteTextWidth + cyanTextWidth / 2, centerY)

      ctx.restore()

      textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      return 1
    }

    function createParticle(scale: number) {
      if (!ctx || !canvas || !textImageData) return null
      const data = textImageData.data

      for (let i = 0; i < 100; i++) {
        const x = Math.floor(Math.random() * canvas.width)
        const y = Math.floor(Math.random() * canvas.height)
        const index = (y * canvas.width + x) * 4
        if (data[index + 3] > 128) {
          const isCyan = data[index] < 50 && data[index + 1] > 200 && data[index + 2] > 200
          return {
            x, y, baseX: x, baseY: y,
            size: Math.random() * 1 + 0.5,
            color: isCyan ? "#00D9FF" : "white",
            scatteredColor: isCyan ? "#00D9FF" : "#FFFFFF",
            isCyan,
            life: Math.random() * 100 + 50,
          }
        }
      }
      return null
    }

    function createInitialParticles(scale: number) {
  const canvasEl = canvasRef.current
  if (!canvasEl) return

  const baseCount = 7000
  const particleCount = Math.floor(
    baseCount *
      Math.sqrt(
        (canvasEl.width * canvasEl.height) / (1920 * 1080)
      )
  )

  for (let i = 0; i < particleCount; i++) {
    const p = createParticle(scale)
    if (p) particles.push(p)
  }
}


    let frameId: number
    function animate(scale: number) {
  if (!ctx || !canvas) return
  // Clear but keep transparency
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const { x: mouseX, y: mouseY } = mousePositionRef.current
  const rect = canvas.getBoundingClientRect()
  const normalizedMouseX = mouseX - rect.left
  const normalizedMouseY = mouseY - rect.top

  const maxDist = 160 // slightly tighter for better responsiveness

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    const dx = normalizedMouseX - p.x
    const dy = normalizedMouseY - p.y
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist < maxDist && (isTouchingRef.current || !("ontouchstart" in window))) {
      const force = (maxDist - dist) / maxDist
      const angle = Math.atan2(dy, dx)
      p.x = p.baseX - Math.cos(angle) * force * 30
      p.y = p.baseY - Math.sin(angle) * force * 30
      ctx.fillStyle = p.scatteredColor
    } else {
      p.x += (p.baseX - p.x) * 0.1
      p.y += (p.baseY - p.y) * 0.1
      ctx.fillStyle = p.color
    }

    ctx.fillRect(p.x, p.y, p.size, p.size)
    p.life--
    if (p.life <= 0) {
      const newP = createParticle(scale)
      if (newP) particles[i] = newP
    }
  }

  frameId = requestAnimationFrame(() => animate(scale))
}



    const scale = createTextImage()
    createInitialParticles(scale)
    animate(scale)

    const handleResize = () => {
      updateCanvasSize()
      const newScale = createTextImage()
      particles = []
      createInitialParticles(newScale)
    }

    const handleMove = (x: number, y: number) => (mousePositionRef.current = { x, y })
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY)
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        e.preventDefault()
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      cancelAnimationFrame(frameId)
    }
  }, [isMobile])

  return (
    <div className="relative w-full h-[60vh] md:h-[55vh] flex flex-col items-center justify-center bg-transparent">

      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        aria-label="Interactive particle SmartConvo logo"
      />
      <div className="absolute bottom-8 md:bottom-10 text-center z-10">
        <p className="font-mono text-gray-400 text-xs sm:text-sm md:text-base">
        </p>
      </div>
    </div>
  )
}
