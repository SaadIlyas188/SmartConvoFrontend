"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactGradientBackground } from "@/components/contact-gradient-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import MetawareLogoParticles from "@/components/metaware-logo-particles"

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)
    setSent(false)
    setError(false)

    emailjs
      .sendForm(
        "service_0wptkk6",
        "template_0x1wzok",
        formRef.current!,
        "1nvz4SCWKMu2KkTvT"
      )
      .then(
        () => {
          setIsSending(false)
          setSent(true)
          formRef.current?.reset()
          setTimeout(() => setSent(false), 4000)
        },
        () => {
          setIsSending(false)
          setError(true)
          setTimeout(() => setError(false), 4000)
        }
      )
  }

  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ContactGradientBackground />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <Header />

      <main className="flex-grow relative pt-28 pb-10 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <span className="text-xs text-cyan-400 font-mono tracking-wider">
                CONTACT / 2025
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4 tracking-tight">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                Touch
              </span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your customer communication? Let's talk about how{" "}
              <span className="text-cyan-400 whitespace-nowrap">Pentagon AI</span> can help your business grow with
              AI-powered voice agents.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            {/* Contact Form */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500 flex flex-col">
              <h2 className="text-2xl font-light text-white mb-5">Send us a message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col flex-1">
                <div className="space-y-4 flex-1">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1.5">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-black/40 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500/50 transition-colors h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1.5">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-black/40 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500/50 transition-colors h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-1.5">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      className="bg-black/40 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500/50 transition-colors h-11"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1.5">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your needs..."
                      required
                      className="bg-black/40 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500/50 transition-colors resize-none flex-1 min-h-[120px]"
                    />
                  </div>
                </div>

                {/* ELEGANT INFO BADGE - FILLS NEGATIVE SPACE */}
                <div className="mt-4 mb-4 flex items-center justify-between bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                      <Clock className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-white/90 font-medium">Response Time</p>
                      <p className="text-xs text-white/60">We'll reply within 24 hours</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-xs text-cyan-400">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span>Available now</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] h-11"
                >
                  {isSending ? "Sending..." : sent ? "Message Sent!" : error ? "Error!" : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", detail: "info@pentagonai.co" },
                { icon: Phone, title: "Phone", detail: "+1 (416) 876-3223" },
                { icon: MapPin, title: "Location", detail: "150 King St W Suite 200, M5H 1J9, Toronto, Ontario, Canada" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
                      <p className="text-white/60">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* CINEMATIC MAP */}
              <div className="relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 h-[280px] group">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10 pointer-events-none" />
                
                {/* Cyan Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                
                {/* Map iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.8276729474805!2d-79.38569492346621!3d43.64860735110451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d1eced3c73%3A0x96a1c3b6d6b6d6b6!2s150%20King%20St%20W%2C%20Toronto%2C%20ON%20M5H%201J9%2C%20Canada!5e0!3m2!1sen!2s!4v1706865600000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                />
                
                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/80 backdrop-blur-md border border-cyan-500/30 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-white">Our Office</h3>
                      <p className="text-xs text-white/60 mt-0.5">Toronto, Canada</p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=150+King+St+W+Suite+200+Toronto+Ontario+Canada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-md text-xs text-cyan-400 transition-colors"
                    >
                      View
                    </a>
                  </div>
                </div>

                {/* Animated Pulse Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative">
                    <div className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75" />
                    <div className="relative w-3 h-3 bg-cyan-500 border-2 border-white rounded-full shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="relative w-full h-[60vh] flex items-center justify-center -mt-10 mb-0">
        <MetawareLogoParticles />
      </section>

      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  )
}
