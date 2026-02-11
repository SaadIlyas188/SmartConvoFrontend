"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import BackgroundPaths from "@/components/background-paths"
import CyanInteractiveBackground from "@/components/interactive-background"
import Link from "next/link"
import { Shield, Lock, Eye, Globe, UserCheck, FileText, Mail, AlertTriangle } from "lucide-react"

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -30% 0px" }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const sections = [
    { id: "scope", title: "Scope and Roles", icon: Shield },
    { id: "collection", title: "Information We Collect", icon: Eye },
    { id: "legal-basis", title: "Legal Basis for Processing", icon: FileText },
    { id: "usage", title: "How We Use Information", icon: UserCheck },
    { id: "disclosure", title: "Disclosure of Information", icon: Globe },
    { id: "retention", title: "Data Retention", icon: Lock },
    { id: "security", title: "Data Security", icon: Shield },
    { id: "transfers", title: "International Data Transfers", icon: Globe },
    { id: "rights", title: "Your Privacy Rights", icon: UserCheck },
    { id: "exercising-rights", title: "Exercising Your Rights", icon: FileText },
    { id: "children", title: "Data from Children", icon: AlertTriangle },
    { id: "no-sale", title: "No Sale of Personal Information", icon: Shield },
    { id: "third-party", title: "Third-Party Links", icon: Globe },
    { id: "changes", title: "Changes to This Policy", icon: FileText },
    { id: "contact", title: "Contact Information", icon: Mail },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 opacity-[0.35] mix-blend-screen">
        <BackgroundPaths title="" />
      </div>

      {/* <div className="absolute inset-0 z-10">
        <CyanInteractiveBackground />
      </div> */}

      {/* Floating gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-15 blur-3xl"
            style={{
              width: `${Math.random() * 300 + 150}px`,
              height: `${Math.random() * 300 + 150}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)`,
              animation: `drift ${Math.random() * 20 + 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Vertical Navigation Bar */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-30 hidden xl:block">
        <div className="flex flex-col items-end gap-4 max-h-[70vh] overflow-y-auto scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
              className={`group flex items-center gap-3 transition-all duration-300 ${
                activeSection === section.id ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
              aria-label={`Navigate to ${section.title}`}
            >
              <span className={`text-xs font-mono text-right transition-all duration-300 ${
                activeSection === section.id ? "text-cyan-400 opacity-100" : "text-white opacity-0 group-hover:opacity-100"
              }`}>
                {section.title}
              </span>
              <div className={`h-8 w-1 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                  : "bg-white/30"
              }`} />
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-30">
        {/* Hero Section */}
        <header className="min-h-[65vh] flex items-center pt-20 pb-12">
          <div className="w-full space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-cyan-400" />
                <div className="text-sm text-white/50 font-mono tracking-wider">LEGAL / PRIVACY</div>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-tight">
                Privacy
                <br />
                <span className="text-cyan-400">Policy</span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Effective Date: August 25, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Last Updated: November 20, 2025</span>
              </div>
            </div>

            {/* Trust Banner */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
                <Lock className="w-5 h-5 text-cyan-400 mb-2" />
                <p className="text-xs text-white/70">Encrypted & Secure</p>
              </div>
              <div className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
                <Shield className="w-5 h-5 text-cyan-400 mb-2" />
                <p className="text-xs text-white/70">GDPR Compliant</p>
              </div>
              <div className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
                <UserCheck className="w-5 h-5 text-cyan-400 mb-2" />
                <p className="text-xs text-white/70">No Data Selling</p>
              </div>
            </div>

            {/* Introduction Notice */}
            <div className="mt-10 p-6 border border-purple-500/30 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/5 backdrop-blur-sm">
              <div className="flex gap-4">
                <Shield className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <p className="text-purple-300 font-medium">Your Privacy Matters</p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Pentagon AI respects your privacy and is committed to protecting personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you interact with our AI-powered voice and conversational services. By accessing or using the Services, you acknowledge that you have read and understood this Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Quick Navigation Cards */}
        <section className="py-12 border-t border-white/10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.slice(0, 6).map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
                  className="p-5 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group text-left"
                >
                  <Icon className="w-5 h-5 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-white/80 group-hover:text-cyan-400 transition-colors">{section.title}</p>
                </button>
              )
            })}
          </div>
        </section>

        {/* Section 1: Scope and Roles */}
        <section id="scope" ref={(el) => { sectionsRef.current[0] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">1. Scope and Roles</h2>
              <p className="text-sm text-white/50">Understanding our data responsibilities</p>
            </div>
          </div>
          
          <div className="space-y-4 text-white/70 leading-relaxed pl-11">
            <p>Depending on the context:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 border border-cyan-500/30 rounded-lg bg-cyan-500/5">
                <p className="text-cyan-300 font-medium mb-2">Data Controller</p>
                <p className="text-sm">Pentagon AI acts as a data controller for website visitors, prospects, and direct users.</p>
              </div>
              <div className="p-5 border border-purple-500/30 rounded-lg bg-purple-500/5">
                <p className="text-purple-300 font-medium mb-2">Data Processor</p>
                <p className="text-sm">Pentagon AI acts as a data processor/service provider when providing Services on behalf of customers such as municipalities, enterprises, and restaurants.</p>
              </div>
            </div>
            <p className="text-sm pt-2">
              Customers remain responsible for determining how end-user data is collected and used within their deployments.
            </p>
          </div>
        </section>

        {/* Section 2: Information We Collect */}
        <section id="collection" ref={(el) => { sectionsRef.current[1] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <Eye className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">2. Information We Collect</h2>
              <p className="text-sm text-white/50">What data we process</p>
            </div>
          </div>
          
          <div className="space-y-6 pl-11">
            <div>
              <h3 className="text-xl text-white mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                2.1 Information Collected Automatically
              </h3>
              <p className="text-white/70 mb-3">When you access our website or Services, we may collect:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "IP address",
                  "Browser type and version",
                  "Operating system",
                  "Device identifiers",
                  "Access times and pages viewed",
                  "Referring URLs"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                    <div className="w-1 h-1 rounded-full bg-cyan-400/50" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/60 mt-3">This information is used for security, analytics, and performance optimization.</p>
            </div>

            <div>
              <h3 className="text-xl text-white mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                2.2 Information You Provide Directly
              </h3>
              <p className="text-white/70 mb-3">We may collect personal information that you voluntarily provide, including:</p>
              <div className="p-4 border border-white/10 rounded-lg bg-white/5">
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Name</li>
                  <li>• Email address</li>
                  <li>• Phone number</li>
                  <li>• Company or organization name</li>
                  <li>• Business contact details</li>
                  <li>• Information submitted through forms, demos, or inquiries</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-white mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                2.3 Voice, Call, and AI Interaction Data
              </h3>
              <div className="space-y-3 text-white/70">
                <p>Our Services may process voice calls, transcripts, or conversational data.</p>
                <div className="p-5 border border-green-500/30 rounded-lg bg-green-500/5">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div className="space-y-2 text-sm">
                      <p className="text-green-300 font-medium">Call Recording Policy:</p>
                      <ul className="space-y-1.5 text-white/70">
                        <li>• Call recording is <strong className="text-white">disabled by default</strong></li>
                        <li>• Recordings or transcripts are processed or stored only if explicitly enabled by the customer</li>
                        <li>• Pentagon AI does not retain call recordings unless configured to do so by the customer</li>
                        <li>• Pentagon AI processes such data solely to provide the Services and in accordance with customer instructions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Legal Basis */}
        <section id="legal-basis" ref={(el) => { sectionsRef.current[2] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <FileText className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">3. Legal Basis for Processing (GDPR)</h2>
              <p className="text-sm text-white/50">How we justify data processing</p>
            </div>
          </div>
          
          <div className="pl-11 text-white/70 leading-relaxed space-y-3">
            <p>Where applicable under GDPR, we process personal data based on one or more of the following legal bases:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Performance of a contract",
                "Legitimate business interests",
                "Compliance with legal obligations",
                "Consent, where required"
              ].map((basis, idx) => (
                <div key={idx} className="p-4 border border-white/10 rounded-lg bg-white/5 text-sm">
                  {basis}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Usage */}
        <section id="usage" ref={(el) => { sectionsRef.current[3] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <UserCheck className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">4. How We Use Information</h2>
              <p className="text-sm text-white/50">Purpose of data processing</p>
            </div>
          </div>
          
          <div className="pl-11">
            <p className="text-white/70 mb-4">We use personal information to:</p>
            <div className="space-y-2">
              {[
                "Provide, operate, and maintain the Services",
                "Create and manage user accounts",
                "Communicate service updates and support messages",
                "Improve system performance, reliability, and security",
                "Analyze usage trends and improve functionality",
                "Respond to inquiries and requests",
                "Comply with legal and regulatory obligations"
              ].map((use, idx) => (
                <div key={idx} className="flex items-start gap-3 text-white/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>{use}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Disclosure */}
        <section id="disclosure" ref={(el) => { sectionsRef.current[4] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <Globe className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">5. Disclosure of Information</h2>
              <p className="text-sm text-white/50">When we share your data</p>
            </div>
          </div>
          
          <div className="pl-11 space-y-4">
            <p className="text-white/70">We may disclose personal information:</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• To service providers and subprocessors that support our operations</li>
              <li>• To comply with legal obligations or lawful requests</li>
              <li>• To protect rights, safety, and security</li>
              <li>• In connection with corporate transactions (e.g., merger or acquisition)</li>
            </ul>
            <div className="p-5 border border-cyan-500/30 rounded-lg bg-cyan-500/10 mt-4">
              <p className="text-cyan-300 font-semibold">We do not sell personal information.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Retention */}
        <section id="retention" ref={(el) => { sectionsRef.current[5] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <Lock className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">6. Data Retention</h2>
              <p className="text-sm text-white/50">How long we keep your data</p>
            </div>
          </div>
          
          <div className="pl-11 space-y-4 text-white/70 leading-relaxed">
            <p>We retain personal information only for as long as necessary to:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Provide the Services",
                "Fulfill contractual obligations",
                "Comply with legal requirements",
                "Resolve disputes and enforce agreements"
              ].map((reason, idx) => (
                <div key={idx} className="p-4 border border-white/10 rounded-lg bg-white/5 text-sm">
                  {reason}
                </div>
              ))}
            </div>
            <p className="text-sm">
              Retention periods vary depending on data type and legal requirements. Data is securely deleted or anonymized when no longer required.
            </p>
          </div>
        </section>

        {/* Section 7: Security */}
        <section id="security" ref={(el) => { sectionsRef.current[6] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">7. Data Security</h2>
              <p className="text-sm text-white/50">How we protect your information</p>
            </div>
          </div>
          
          <div className="pl-11 text-white/70 leading-relaxed">
            <p>
              We implement administrative, technical, and organizational safeguards designed to protect personal information. However, no system can be guaranteed to be 100% secure.
            </p>
          </div>
        </section>

        {/* Section 8: International Transfers */}
        <section id="transfers" ref={(el) => { sectionsRef.current[7] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <Globe className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">8. International Data Transfers</h2>
              <p className="text-sm text-white/50">Cross-border data processing</p>
            </div>
          </div>
          
          <div className="pl-11 text-white/70 leading-relaxed">
            <p>
              Personal information may be processed or stored outside your jurisdiction, including in Canada, the United States, or other locations where our service providers operate. Where required, we implement appropriate safeguards for cross-border transfers.
            </p>
          </div>
        </section>

        {/* Section 9: Your Rights */}
        <section id="rights" ref={(el) => { sectionsRef.current[8] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <UserCheck className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">9. Your Privacy Rights</h2>
              <p className="text-sm text-white/50">What you can control</p>
            </div>
          </div>
          
          <div className="pl-11 space-y-6">
            {/* GDPR Rights */}
            <div>
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                9.1 GDPR Rights (EU/EEA)
              </h3>
              <p className="text-white/70 mb-3">If you are located in the EU or EEA, you have the right to:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Access your personal data",
                  "Correct inaccurate data",
                  "Request deletion",
                  "Restrict or object to processing",
                  "Request data portability",
                  "Lodge a complaint with a supervisory authority"
                ].map((right, idx) => (
                  <div key={idx} className="p-4 border border-blue-500/20 rounded-lg bg-blue-500/5 text-sm text-white/70">
                    {right}
                  </div>
                ))}
              </div>
            </div>

            {/* CCPA Rights */}
            <div>
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                9.2 CCPA / CPRA Rights (California)
              </h3>
              <p className="text-white/70 mb-3">California residents have the right to:</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Know what personal information is collected</li>
                <li>• Request deletion of personal information</li>
                <li>• Correct inaccurate information</li>
                <li>• Opt out of sale or sharing (Pentagon AI does not sell data)</li>
                <li>• Not be discriminated against for exercising privacy rights</li>
              </ul>
            </div>

            {/* PIPEDA Rights */}
            <div>
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                9.3 PIPEDA Rights (Canada)
              </h3>
              <p className="text-white/70 mb-3">Canadian residents have the right to:</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Access their personal information</li>
                <li>• Request corrections</li>
                <li>• Withdraw consent, subject to legal or contractual limitations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 10: Exercising Rights */}
        <section id="exercising-rights" ref={(el) => { sectionsRef.current[9] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <FileText className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">10. Exercising Your Rights</h2>
              <p className="text-sm text-white/50">How to make a request</p>
            </div>
          </div>
          
          <div className="pl-11 space-y-4 text-white/70 leading-relaxed">
            <p>Requests to exercise privacy rights may be submitted by contacting us at:</p>
            <div className="p-5 border border-cyan-500/30 rounded-lg bg-cyan-500/5">
              <p className="text-cyan-300 mb-2">Email:</p>
              <a href="mailto:info@pentagonai.co" className="text-cyan-400 hover:underline">info@pentagonai.co</a>
            </div>
            <p className="text-sm">
              Where Pentagon AI acts as a processor, requests may be redirected to the relevant customer acting as data controller.
            </p>
          </div>
        </section>

        {/* Section 11: Children */}
        <section id="children" ref={(el) => { sectionsRef.current[10] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="w-7 h-7 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">11. Data from Children</h2>
              <p className="text-sm text-white/50">Age restrictions</p>
            </div>
          </div>
          
          <div className="pl-11 p-5 border border-yellow-500/30 rounded-lg bg-yellow-500/5">
            <p className="text-white/70 leading-relaxed">
              The Services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If such information is identified, it will be deleted promptly.
            </p>
          </div>
        </section>

        {/* Section 12: No Sale */}
        <section id="no-sale" ref={(el) => { sectionsRef.current[11] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">12. No Sale of Personal Information</h2>
              <p className="text-sm text-white/50">Our commitment to you</p>
            </div>
          </div>
          
          <div className="pl-11">
            <div className="p-6 border border-green-500/30 rounded-lg bg-green-500/10">
              <p className="text-green-300 font-semibold text-lg">
                Pentagon AI does not sell, rent, or trade personal information to third parties for monetary or commercial benefit.
              </p>
            </div>
          </div>
        </section>

        {/* Section 13: Third Party */}
        <section id="third-party" ref={(el) => { sectionsRef.current[12] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <Globe className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">13. Third-Party Links and Services</h2>
              <p className="text-sm text-white/50">External websites</p>
            </div>
          </div>
          
          <div className="pl-11 text-white/70 leading-relaxed">
            <p>
              Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices of third parties.
            </p>
          </div>
        </section>

        {/* Section 14: Changes */}
        <section id="changes" ref={(el) => { sectionsRef.current[13] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <FileText className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">14. Changes to This Privacy Policy</h2>
              <p className="text-sm text-white/50">Policy updates</p>
            </div>
          </div>
          
          <div className="pl-11 text-white/70 leading-relaxed">
            <p>
              We may update this Privacy Policy from time to time. Updates will be reflected by the "Last Updated" date. Continued use of the Services constitutes acceptance of the updated policy.
            </p>
          </div>
        </section>

        {/* Section 15: Contact */}
        <section id="contact" ref={(el) => { sectionsRef.current[14] = el }} className="py-12 border-t border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <Mail className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-light mb-2">15. Contact Information</h2>
              <p className="text-sm text-white/50">Get in touch</p>
            </div>
          </div>
          
          <div className="pl-11 space-y-4">
            <p className="text-white/70">
              If you have questions, concerns, or requests regarding this Privacy Policy, please contact:
            </p>
            <div className="p-6 border border-cyan-500/30 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/5 backdrop-blur-sm">
              <div className="space-y-3">
                <p className="text-white font-medium text-lg">Pentagon AI</p>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:info@pentagonai.co" className="text-cyan-400 hover:underline">
                    info@pentagonai.co
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 mb-12">
          <div className="p-8 border border-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 backdrop-blur-sm text-center space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-light">Questions About Your Privacy?</h3>
              <p className="text-white/60 max-w-xl mx-auto">
                We're committed to transparency. Reach out to our team for any privacy-related inquiries or concerns.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/terms-and-conditions">
                <button className="px-6 py-3 border border-white/20 hover:border-cyan-500/50 rounded-lg transition-all duration-300 hover:bg-white/5">
                  View Terms & Conditions
                </button>
              </Link>
              <a href="mailto:info@pentagonai.co">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                  Contact Support
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -20px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 30px) scale(0.9);
          }
          75% {
            transform: translate(40px, 20px) scale(1.05);
          }
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
