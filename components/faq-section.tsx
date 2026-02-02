"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How will my business receive orders that SmartConvo takes?",
    answer:
      "SmartConvo can place orders directly through an API connection to your POS system or printer. You can also receive orders through our dashboard. All orders are processed in real-time and sent to your existing systems seamlessly.",
  },
  {
    question: "Can SmartConvo process payments over the phone?",
    answer:
      "Yes, SmartConvo can send secure payment links via SMS or process card details directly through your POS using an encrypted connection. This ensures safe payment processing for all phone orders while maintaining PCI compliance.",
  },
  {
    question: "How will SmartConvo handle customers who struggle to speak English?",
    answer:
      "SmartConvo is trained to understand many accents, including South Asian, East Asian, Caribbean, and more. It ensures clear communication for customers whose first language isn't English, making your service accessible to diverse communities.",
  },
  {
    question: "Which industries and businesses does Pentagon AI currently serve?",
    answer:
      "We are currently serving government agencies and expanding to restaurants, healthcare clinics, automotive service centers, and legal firms. More industries are being added regularly as we grow our AI capabilities and integrations.",
  },
  {
    question: "How would you provide us with support, and do we need to pay for it?",
    answer:
      "The complete onboarding process takes 5 days and requires only 45 minutes of your time. This includes filling out an onboarding form, a clarity call with your AI engineer, and 3 days of training and integration. Ongoing support is included in all plans.",
  },
  {
    question: "Will I be able to see a report of how SmartConvo is doing?",
    answer:
      "You'll get a lifetime private chat with our team as soon as you sign up. This lets you ask questions, give feedback, or schedule direct calls with our developers for free - no chatbots or long wait times. Plus, you'll have access to detailed analytics dashboards.",
  },
  {
    question: "How quickly can I get started with SmartConvo?",
    answer:
      "You can be up and running in as little as 5 days. After signing up, our team will configure your AI voice agent, integrate with your existing systems, and train it on your specific business needs. We offer a free trial so you can experience the benefits risk-free.",
  },
  {
    question: "Can I customize the AI voice and conversation style?",
    answer:
      "Yes! You can customize your AI agent's voice, tone, personality, and conversation style to match your brand. Choose from multiple voice options, set response patterns, and define how the AI should handle different scenarios to create the perfect customer experience.",
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
