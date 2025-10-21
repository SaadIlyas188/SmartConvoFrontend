"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Car, Scale, Heart, Briefcase } from "lucide-react"

interface IndustryData {
  id: number
  background: string
  icon: React.ReactNode
  main: string
  sub: string
  defaultColor: string
  features: string[]
}

const IndustriesAccordion: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<number>(0)

  const industriesData: IndustryData[] = [
    {
      id: 0,
      background: "/restaurant-interior-modern.jpg",
      icon: <Phone className="w-8 h-8 text-white" />,
      main: "Restaurants",
      sub: "24/7 reservation & order automation",
      defaultColor: "#562C2C",
      features: ["Smart Booking", "Order Taking", "Customer Support"],
    },
    {
      id: 1,
      background: "/automotive-dealership-modern.jpg",
      icon: <Car className="w-8 h-8 text-white" />,
      main: "Automotive",
      sub: "AI-powered test drive scheduling",
      defaultColor: "#F2542D",
      features: ["Service Booking", "Test Drives", "Sales Inquiries"],
    },
    {
      id: 2,
      background: "/law-office-modern.jpg",
      icon: <Scale className="w-8 h-8 text-white" />,
      main: "Legal",
      sub: "Automated client consultation booking",
      defaultColor: "#F5DFBB",
      features: ["Case Intake", "Consultations", "Document Requests"],
    },
    {
      id: 3,
      background: "/healthcare-clinic-modern.jpg",
      icon: <Heart className="w-8 h-8 text-white" />,
      main: "Healthcare",
      sub: "Patient scheduling & AI reminders",
      defaultColor: "#0E9594",
      features: ["Appointments", "Reminders", "Patient Support"],
    },
    {
      id: 4,
      background: "/corporate-office-modern.jpg",
      icon: <Briefcase className="w-8 h-8 text-white" />,
      main: "Corporate",
      sub: "Enterprise-grade customer engagement",
      defaultColor: "#127475",
      features: ["HR Queries", "Internal Chatbots", "Client Handling"],
    },
  ]

  const handleIndustryClick = (industryId: number) => {
    setActiveIndustry(industryId)
  }

  return (
    <>
      <style jsx>{`
        .industries-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          font-family: var(--font-geist-sans);
          padding: 1rem 2rem;
          margin-top: -1rem; /* Tighten spacing under heading */
        }

        .industries-wrapper {
          display: flex;
          flex-direction: row;
          width: 100%;
          max-width: 1200px;
          height: 500px;
          overflow: hidden;
        }

        .industry-item {
          position: relative;
          flex-grow: 1;
          margin: 8px;
          border-radius: 30px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.05, 0.61, 0.41, 0.95);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }

        .industry-item.closed {
          background-color: var(--color);
        }

        .industry-item.open {
          background-size: cover;
          background-position: center;
        }

        .industry-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .industry-item.open .industry-overlay {
          opacity: 1;
        }

        .industry-content {
          position: absolute;
          bottom: 30px;
          left: 30px;
          z-index: 10;
          transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
        }

        .industry-item.closed .industry-content {
          opacity: 0;
          transform: translateY(20px);
        }

        .industry-item.open .industry-content {
          opacity: 1;
          transform: translateY(0);
        }

        .industry-icon-only {
          transition: transform 0.4s ease;
        }

        .industry-item.open .industry-icon-only {
          transform: scale(0);
        }

        .industry-item.closed .industry-icon-only {
          transform: scale(1);
        }

        .industry-main {
          font-size: 1.75rem;
          font-weight: 600;
        }

        .industry-sub {
          font-size: 1rem;
          opacity: 0.9;
          margin-top: 4px;
        }
      `}</style>

      {/* ✅ Cyan-accented heading */}
      <div className="text-center mb-6 mt-4">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-2">
          Explore Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
            Solutions
          </span>
        </h2>
        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
          Click on each industry to discover how{" "}
          <span className="text-cyan-400 font-medium">SmartConvo</span> revolutionizes communication in your sector.
        </p>
      </div>

      <div className="industries-container">
        <div className="industries-wrapper">
          {industriesData.map((industry) => {
            const isActive = activeIndustry === industry.id
            return (
              <div
                key={industry.id}
                className={`industry-item ${isActive ? "open" : "closed"}`}
                style={{
                  backgroundImage: isActive ? `url(${industry.background})` : "none",
                  "--color": industry.defaultColor,
                  flexGrow: isActive ? 8 : 1,
                } as React.CSSProperties}
                onClick={() => handleIndustryClick(industry.id)}
              >
                <div className="industry-icon-only">{industry.icon}</div>
                <div className="industry-overlay" />
                <div className="industry-content">
                  <div className="industry-main">{industry.main}</div>
                  <div className="industry-sub">{industry.sub}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default IndustriesAccordion
