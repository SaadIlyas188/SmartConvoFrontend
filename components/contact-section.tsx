"use client"

import { useState, useEffect, useRef } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "./ui/button"

export function ContactSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-24"
    >
      {/* Animated gradient following mouse */}
      <div
        className="absolute w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl transition-all duration-300 pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Contact Info */}
          <div className="space-y-12 animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
                Get in <span className="text-cyan-400">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                Ready to transform your customer communication? Let's talk about how SmartConvo can help your business.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                  <MapPin className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-lg text-gray-400">Toronto, Canada</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                  <Mail className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-lg text-gray-400">hello@pentagonai.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                  <Phone className="w-7 h-7 text-cyan-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-lg text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-transparent" />

              <form className="relative space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Your company"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-cyan-500/20 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-6 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
