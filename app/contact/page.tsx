"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactGradientBackground } from "@/components/contact-gradient-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import MetawareLogoParticles from "@/components/metaware-logo-particles"

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      {/* Background */}
      {/* Background Layer */}
<div className="absolute inset-0 z-0">
  <ContactGradientBackground />
  {/* Optional subtle dark overlay so text stays readable */}
  <div className="absolute inset-0 bg-black/70" />
</div>

      <Header />

      <main className="flex-grow relative pt-28 pb-10 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <span className="text-xs text-cyan-400 font-mono tracking-wider">CONTACT / 2025</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4 tracking-tight">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                Touch
              </span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your customer communication? Let’s talk about how{" "}
              <span className="text-cyan-400">SmartConvo</span> can help your business grow with AI-powered voice agents.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            {/* Contact Form */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500">
              <h2 className="text-2xl font-light text-white mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-black/40 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-black/40 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    placeholder="Your company"
                    className="bg-black/40 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs..."
                    rows={5}
                    className="bg-black/40 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500/50 transition-colors resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  detail: "contact@pentagonai.ca",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  detail: "+1 (647) 123-4567",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  detail: "Toronto, Ontario, Canada",
                },
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

              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white mb-3">Business Hours</h3>
                    <div className="space-y-2 text-sm text-white/60">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="text-cyan-400">9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="text-cyan-400">10:00 AM - 4:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-white/40">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Particle Logo Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center -mt-10 mb-0">
        <MetawareLogoParticles />
      </section>

      <div className="relative z-50">
  <Footer />
</div>

    </div>
  )
}
