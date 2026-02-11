"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import BackgroundPaths from "@/components/background-paths"
import CyanInteractiveBackground from "@/components/interactive-background"
import Link from "next/link"
import { ChevronRight, AlertCircle, FileText, Shield, Clock } from "lucide-react"

export default function TermsPage() {
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
    { id: "services", title: "The Services" },
    { id: "fees", title: "Fees and Payment" },
    { id: "term", title: "Term" },
    { id: "termination", title: "Suspension and Termination" },
    { id: "ai-limitations", title: "AI and Service Limitations" },
    { id: "call-recording", title: "Call Recording and Data" },
    { id: "confidentiality", title: "Confidentiality and Feedback" },
    { id: "accounts", title: "User Accounts" },
    { id: "privacy", title: "Privacy Compliance" },
    { id: "data-requests", title: "Data Subject Requests" },
    { id: "warranties", title: "Disclaimer of Warranties" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "indemnification", title: "Indemnification" },
    { id: "communications", title: "Communications" },
    { id: "general", title: "General Provisions" },
    { id: "governing-law", title: "Governing Law" },
    { id: "contact", title: "Contact Information" },
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

      {/* Floating circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)`,
              animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Side Navigation */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-30 hidden xl:block">
        <div className="flex flex-col gap-3 max-h-[70vh] overflow-y-auto scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)] scale-125"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Navigate to ${section.title}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-30">
        {/* Hero Section */}
        <header className="min-h-[60vh] flex items-center pt-20 pb-12">
          <div className="w-full space-y-6">
            <div className="space-y-2">
              <div className="text-sm text-white/50 font-mono tracking-wider">LEGAL / TERMS</div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight">
                Terms and
                <br />
                Conditions
              </h1>
            </div>

            <div className="flex items-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Effective Date: August 25, 2025</span>
              </div>
              <div className="text-sm">Last Updated: November 20, 2025</div>
            </div>

            {/* Important Notice */}
            <div className="mt-8 p-6 border border-cyan-500/30 rounded-lg bg-cyan-500/5">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-cyan-400 font-medium">Important Notice</p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    These Terms and Conditions constitute a legally binding agreement between Pentagon AI and you. By accessing, registering for, or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must not access or use the Services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <section className="py-12 border-t border-white/10">
          <h2 className="text-2xl font-light mb-6">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 p-3 text-left border border-white/10 rounded-lg hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300 group"
              >
                <span className="text-white/40 text-sm font-mono w-6">{index + 1}.</span>
                <span className="text-sm text-white/70 group-hover:text-cyan-400 transition-colors">{section.title}</span>
                <ChevronRight className="w-4 h-4 ml-auto text-white/20 group-hover:text-cyan-400 transition-colors" />
              </button>
            ))}
          </div>
        </section>

        {/* Section 1: The Services */}
        <section id="services" ref={(el) => { sectionsRef.current[0] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">1. The Services</h2>
          
          <div className="space-y-6 text-white/70 leading-relaxed">
            <div>
              <h3 className="text-xl text-white mb-3">1.1 Overview</h3>
              <p>
                Pentagon AI provides artificial intelligence–powered voice and conversational automation services, which may include inbound and outbound voice agents, call handling, transcription, analytics, dashboards, APIs, and integrations with third-party systems such as telephony providers, point-of-sale platforms, CRMs, or other software tools (collectively, the "Services").
              </p>
              <p className="mt-3">
                The Services may be used by municipalities, restaurants, enterprises, and individual consumers, subject to these Terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white mb-3">1.2 License Grant</h3>
              <p>
                Subject to compliance with these Terms, Pentagon AI grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services solely for your internal business or personal purposes during the term of this Agreement.
              </p>
              <div className="mt-4 p-4 border border-white/10 rounded-lg bg-white/5">
                <p className="text-sm text-white/60 mb-2">You may not:</p>
                <ul className="space-y-1 text-sm text-white/60">
                  <li>• Copy, modify, or create derivative works of the Services</li>
                  <li>• Reverse engineer, decompile, or disassemble any portion of the Services</li>
                  <li>• Resell, sublicense, lease, or otherwise commercially exploit the Services without written authorization</li>
                  <li>• Use the Services for unlawful, deceptive, abusive, or fraudulent purposes</li>
                </ul>
                <p className="text-sm text-white/60 mt-2">All rights not expressly granted are reserved by Pentagon AI.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-white mb-3">1.3 Updates and Availability</h3>
              <p>
                The Services may be updated, modified, or enhanced from time to time. Scheduled maintenance, updates, or third-party outages may result in temporary interruptions. You are responsible for maintaining compatible devices, systems, and connectivity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Fees and Payment */}
        <section id="fees" ref={(el) => { sectionsRef.current[1] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">2. Fees and Payment</h2>
          
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              You agree to pay all applicable fees according to your selected subscription, pilot, or enterprise agreement. Unless otherwise stated in writing:
            </p>
            <ul className="space-y-2 ml-6">
              <li>• Fees are billed on a recurring basis</li>
              <li>• Fees are non-refundable</li>
              <li>• You are responsible for all applicable taxes, excluding Pentagon AI's income taxes</li>
              <li>• Any billing disputes must be reported within one hundred twenty (120) days of the applicable charge</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Term */}
        <section id="term" ref={(el) => { sectionsRef.current[2] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">3. Term</h2>
          
          <div className="text-white/70 leading-relaxed">
            <p>
              These Terms commence on the date you first access or use the Services and continue on a month-to-month basis, unless otherwise agreed in writing, until terminated by either party in accordance with these Terms.
            </p>
          </div>
        </section>

        {/* Section 4: Suspension and Termination */}
        <section id="termination" ref={(el) => { sectionsRef.current[3] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">4. Suspension and Termination</h2>
          
          <div className="space-y-6 text-white/70 leading-relaxed">
            <div>
              <h3 className="text-xl text-white mb-3">4.1 Suspension or Termination by Pentagon AI</h3>
              <p className="mb-3">
                Pentagon AI may suspend or terminate your access to the Services, with or without notice, if you:
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Violate these Terms</li>
                <li>• Use the Services in a manner that harms or risks harm to Pentagon AI, its intellectual property, or reputation</li>
                <li>• Exceed normal, reasonable, or agreed-upon usage limits</li>
                <li>• Engage in unlawful, fraudulent, or abusive conduct</li>
                <li>• Become insolvent, bankrupt, or subject to similar proceedings</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-white mb-3">4.2 Termination by You</h3>
              <p>
                You may terminate your use of the Services at any time. Termination will take effect at the end of the current billing cycle. Fees already paid are non-refundable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: AI and Service Limitations */}
        <section id="ai-limitations" ref={(el) => { sectionsRef.current[4] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">5. Artificial Intelligence and Service Limitations</h2>
          
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>You acknowledge and agree that:</p>
            <div className="p-4 border border-yellow-500/30 rounded-lg bg-yellow-500/5">
              <ul className="space-y-2">
                <li>• The Services rely on artificial intelligence and automated decision-making</li>
                <li>• AI responses may be inaccurate, incomplete, delayed, or inappropriate</li>
                <li>• The Services are provided "as-is" and "as available", without guarantees of accuracy or performance</li>
                <li>• You are solely responsible for reviewing, configuring, monitoring, and validating AI behavior and outputs before relying on them</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Call Recording */}
        <section id="call-recording" ref={(el) => { sectionsRef.current[5] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">6. Call Recording, Transcription, and Data Handling</h2>
          
          <div className="space-y-6 text-white/70 leading-relaxed">
            <div>
              <h3 className="text-xl text-white mb-3">6.1 Call Recording</h3>
              <p>
                The Services may support call recording and transcription features. Pentagon AI does not retain call recordings by default. Recording and storage occur only if explicitly enabled by the Customer.
              </p>
              <p className="mt-3">
                If enabled, calls may be recorded, transcribed, and stored in accordance with Customer configuration and applicable law.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white mb-3">6.2 Customer Responsibility</h3>
              <p className="mb-3">You are solely responsible for:</p>
              <ul className="space-y-2 ml-6">
                <li>• Providing any required disclosures to callers</li>
                <li>• Obtaining lawful consent for recording or transcription</li>
                <li>• Complying with all applicable recording, privacy, and data protection laws</li>
              </ul>
              <p className="mt-3">
                Pentagon AI acts as a service provider or processor and does not control how Customers deploy the Services.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Confidentiality */}
        <section id="confidentiality" ref={(el) => { sectionsRef.current[6] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">7. Confidentiality, Data, and Feedback</h2>
          
          <div className="space-y-6 text-white/70 leading-relaxed">
            <div>
              <h3 className="text-xl text-white mb-3">7.1 Confidential Information</h3>
              <p>
                Each party agrees to protect the other party's non-public business, technical, or commercial information ("Confidential Information") and not disclose it except as required by law or permitted under these Terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white mb-3">7.2 Exceptions</h3>
              <p className="mb-3">Confidential Information does not include information that:</p>
              <ul className="space-y-2 ml-6">
                <li>• Is publicly available without breach</li>
                <li>• Was lawfully known prior to disclosure</li>
                <li>• Is independently developed</li>
                <li>• Is lawfully obtained from a third party</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-white mb-3">7.3 Aggregated and Anonymized Data</h3>
              <p>
                Pentagon AI may use aggregated or anonymized data for analytics, research, service improvement, and development, subject to applicable privacy laws.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white mb-3">7.4 Feedback</h3>
              <p>
                Any suggestions, ideas, or feedback you provide may be used by Pentagon AI without restriction or compensation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: User Accounts */}
        <section id="accounts" ref={(el) => { sectionsRef.current[7] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">8. User Accounts and Content</h2>
          
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              You retain ownership of your content and data. You grant Pentagon AI a limited license to process such data solely to provide the Services.
            </p>
            <p className="mb-3">You are responsible for:</p>
            <ul className="space-y-2 ml-6">
              <li>• Maintaining accurate account information</li>
              <li>• Safeguarding account credentials</li>
              <li>• All activity conducted under your account</li>
              <li>• Promptly notifying Pentagon AI of unauthorized access</li>
            </ul>
          </div>
        </section>

        {/* Section 9: Privacy Compliance */}
        <section id="privacy" ref={(el) => { sectionsRef.current[8] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">9. Compliance with Privacy Laws</h2>
          
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Pentagon AI processes personal data in accordance with applicable data protection laws, including PIPEDA, GDPR, and CCPA/CPRA, where applicable. Personal data handling, user rights, and retention practices are described in our Privacy Policy, which forms part of this Agreement by reference.
            </p>
            <p className="font-medium text-white">
              Pentagon AI does not sell personal information.
            </p>
          </div>
        </section>

        {/* Section 10: Data Subject Requests */}
        <section id="data-requests" ref={(el) => { sectionsRef.current[9] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">10. Data Subject Requests</h2>
          
          <div className="text-white/70 leading-relaxed">
            <p>
              Where required by law, Pentagon AI will assist Customers in responding to valid data subject requests. Requests received directly from end users may be redirected to the applicable Customer acting as data controller.
            </p>
          </div>
        </section>

        {/* Section 11: Disclaimer of Warranties */}
        <section id="warranties" ref={(el) => { sectionsRef.current[10] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">11. Disclaimer of Warranties</h2>
          
          <div className="p-4 border border-red-500/30 rounded-lg bg-red-500/5">
            <p className="text-white/70 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED "AS-IS", WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
          </div>
        </section>

        {/* Section 12: Limitation of Liability */}
        <section id="liability" ref={(el) => { sectionsRef.current[11] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">12. Limitation of Liability</h2>
          
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>To the maximum extent permitted by law:</p>
            <div className="p-4 border border-red-500/30 rounded-lg bg-red-500/5 space-y-3">
              <p>
                • Pentagon AI's total liability shall not exceed the fees paid by you in the three (3) months preceding the event giving rise to the claim
              </p>
              <p>
                • Pentagon AI shall not be liable for indirect, incidental, consequential, or special damages, including loss of profits, data, or business
              </p>
            </div>
          </div>
        </section>

        {/* Section 13: Indemnification */}
        <section id="indemnification" ref={(el) => { sectionsRef.current[12] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">13. Indemnification</h2>
          
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              You agree to indemnify and hold harmless Pentagon AI from any claims, damages, losses, or expenses arising from:
            </p>
            <ul className="space-y-2 ml-6">
              <li>• Your misuse of the Services</li>
              <li>• Your violation of applicable laws</li>
              <li>• Your deployment or configuration of AI behavior</li>
            </ul>
          </div>
        </section>

        {/* Section 14: Communications */}
        <section id="communications" ref={(el) => { sectionsRef.current[13] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">14. Communications</h2>
          
          <div className="text-white/70 leading-relaxed">
            <p>
              You authorize Pentagon AI to contact you using the contact information you provide, including by email, phone, or text, for service-related communications. You are responsible for any carrier or messaging fees.
            </p>
          </div>
        </section>

        {/* Section 15: General Provisions */}
        <section id="general" ref={(el) => { sectionsRef.current[14] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">15. General Provisions</h2>
          
          <div className="space-y-3 text-white/70 leading-relaxed">
            <p>• You represent that you have the authority to enter into these Terms</p>
            <p>• Pentagon AI may update these Terms from time to time; continued use constitutes acceptance</p>
            <p>• These Terms constitute the entire agreement between the parties and supersede prior agreements</p>
            <p>• You may not assign these Terms without prior written consent; Pentagon AI may assign freely</p>
          </div>
        </section>

        {/* Section 16: Governing Law */}
        <section id="governing-law" ref={(el) => { sectionsRef.current[15] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">16. Governing Law and Jurisdiction</h2>
          
          <div className="text-white/70 leading-relaxed">
            <p>
              These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. The courts located in Toronto, Ontario shall have exclusive jurisdiction.
            </p>
          </div>
        </section>

        {/* Section 17: Contact */}
        <section id="contact" ref={(el) => { sectionsRef.current[16] = el }} className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-light mb-6">17. Contact Information</h2>
          
          <div className="space-y-4">
            <p className="text-white/70 leading-relaxed">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="p-6 border border-cyan-500/30 rounded-lg bg-cyan-500/5">
              <div className="space-y-2">
                <p className="text-white font-medium">Pentagon AI</p>
                <p className="text-white/70">Email: <a href="mailto:info@pentagonai.co" className="text-cyan-400 hover:underline">info@pentagonai.co</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 mb-12">
          <div className="p-8 border border-cyan-500/30 rounded-lg bg-cyan-500/5 text-center space-y-4">
            <h3 className="text-2xl font-light">Have Questions About Our Terms?</h3>
            <p className="text-white/60">Our team is here to help clarify any concerns</p>
            <Link href="/contact">
              <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
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
