"use client"

import { useEffect, useRef } from "react"

export function AboutHeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(34, 211, 238, 0.3)"
        ctx.fill()
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.2 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-24 text-center space-y-12">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight">
            Pentagon <span className="text-cyan-400">AI</span>
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-300/80 font-light tracking-wide">
            Building the Future of Customer Communication
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <p>
            Welcome to <span className="text-cyan-400 font-semibold">Pentagon AI</span> — a dynamic startup that's
            reshaping how businesses connect with their customers. With our main office located in{" "}
            <span className="text-white">Toronto, Canada</span>, we're building the future of customer communication
            through our flagship product, <span className="text-cyan-400 font-semibold">SmartConvo</span>.
          </p>

          <p>
            SmartConvo is an AI-powered voice and communication platform — designed to handle calls, messages, and
            customer interactions across industries like restaurants, automotive services, legal firms, and healthcare.
            Our AI agents ensure that no opportunity is ever missed.
          </p>

          <p>
            For decades, businesses have relied on traditional call centers. But today, we stand at the edge of a
            revolution — where AI voice agents are replacing old methods with smarter, faster, and more reliable
            solutions.
          </p>

          <div className="pt-8">
            <p className="text-2xl md:text-3xl font-light text-white">This is not just automation.</p>
            <p className="text-3xl md:text-4xl font-semibold text-cyan-400 mt-2">
              This is the future of customer experience.
            </p>
          </div>
        </div>

        <div className="pt-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <div className="inline-block px-8 py-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-sm">
            <p className="text-cyan-300 text-lg">
              Based in <span className="text-cyan-400 font-semibold">Toronto, Canada</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
