"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is SmartConvo and how does it work?",
    answer:
      "SmartConvo is Pentagon AI's flagship AI voice communication platform that uses advanced natural language processing to handle customer calls, bookings, and inquiries 24/7. It integrates seamlessly with your existing systems and learns from every interaction to provide increasingly personalized customer experiences.",
  },
  {
    question: "Which industries does SmartConvo support?",
    answer:
      "SmartConvo is designed for multiple industries including restaurants (reservations and orders), automotive (service bookings), legal (client intake), and healthcare (appointment scheduling). Our AI agents are trained with industry-specific knowledge to handle specialized workflows and terminology.",
  },
  {
    question: "How quickly can I get started with SmartConvo?",
    answer:
      "You can be up and running in as little as 24 hours. After signing up, our team will help you configure your AI voice agent, integrate with your existing systems, and train it on your specific business needs. We offer a 14-day free trial so you can experience the benefits risk-free.",
  },
  {
    question: "Is my customer data secure with Pentagon AI?",
    answer:
      "Absolutely. We use bank-level encryption, comply with GDPR, HIPAA, and SOC 2 Type II standards. All customer data is encrypted in transit and at rest. We never share your data with third parties, and you maintain complete ownership of all customer interactions and information.",
  },
  {
    question: "Can SmartConvo integrate with my existing tools?",
    answer:
      "Yes! SmartConvo integrates with popular CRM systems, booking platforms, calendars, and communication tools. We support integrations with Salesforce, HubSpot, Google Calendar, Microsoft 365, Slack, and many more. Custom integrations are available for Enterprise plans.",
  },
  {
    question: "What happens if the AI can't handle a call?",
    answer:
      "SmartConvo is designed to handle 95%+ of routine calls autonomously. For complex situations, it can seamlessly transfer to a human agent with full context of the conversation. You can also set custom escalation rules based on keywords, sentiment, or specific scenarios.",
  },
  {
    question: "How does pricing work for SmartConvo?",
    answer:
      "We offer transparent, usage-based pricing with three tiers: Starter (up to 500 calls/month), Professional (up to 2,000 calls/month), and Enterprise (unlimited). All plans include a 14-day free trial with no credit card required. You can upgrade, downgrade, or cancel anytime.",
  },
  {
    question: "Can I customize the AI voice and personality?",
    answer:
      "Yes! You can customize your AI agent's voice, tone, personality, and conversation style to match your brand. Choose from multiple voice options, set response patterns, and define how the AI should handle different scenarios. Enterprise customers can even create fully custom AI personalities.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-neutral-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to know about SmartConvo. Can't find what you're looking for? Contact our support team.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-neutral-700/20 rounded-lg bg-neutral-800/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-neutral-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
