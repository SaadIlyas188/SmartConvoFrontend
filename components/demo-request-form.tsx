"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import emailjs from "@emailjs/browser"
import { CheckCircle, X, AlertCircle } from "lucide-react"
import ReCAPTCHA from "react-google-recaptcha"

// ✅ Initialize EmailJS
emailjs.init("RGuDK_jrvNo2eCndE")

interface DemoRequestFormProps {
  onClose: () => void
}

interface Message {
  id: number
  type: "success" | "error"
  text: string
}

export function DemoRequestForm({ onClose }: DemoRequestFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    emailVerified: false,
    captchaVerified: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showDemo, setShowDemo] = useState(false)

  // OTP states
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState("")
  const [enteredOtp, setEnteredOtp] = useState("")
  const [otpExpiry, setOtpExpiry] = useState<number | null>(null)

  // Message Queue
  const [messages, setMessages] = useState<Message[]>([])
  const pushMessage = (type: "success" | "error", text: string) => {
    const id = Date.now()
    setMessages((prev) => [...prev, { id, type, text }])
    setTimeout(() => setMessages((prev) => prev.filter((m) => m.id !== id)), 4000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // ✅ Send OTP
  const sendOtp = async () => {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString()
    setOtp(generatedOtp)
    setOtpExpiry(Date.now() + 10 * 60 * 1000)

    try {
      await emailjs.send("service_u6pur7e", "template_wgw996f", {
        to_email: formData.email,
        otp: generatedOtp,
        title: "PentagonAI Verification Code",
      })
      setOtpSent(true)
      pushMessage("success", "OTP sent! Please check your email.")
    } catch (error) {
      console.error(error)
      pushMessage("error", "Failed to send OTP. Try again.")
    }
  }

  // ✅ Verify OTP
  const verifyOtp = () => {
    if (!otp || !otpExpiry) {
      pushMessage("error", "No OTP was sent. Please request again.")
      return
    }
    if (Date.now() > otpExpiry) {
      pushMessage("error", "OTP has expired. Please request a new one.")
      setOtp("")
      setOtpSent(false)
      return
    }
    if (enteredOtp === otp) {
      setFormData((prev) => ({ ...prev, emailVerified: true }))
      pushMessage("success", "Email verified successfully!")
    } else {
      pushMessage("error", "Invalid OTP. Try again.")
    }
  }

  // ✅ Captcha Verify
  const handleCaptchaVerification = async (token: string | null) => {
    if (!token) return
    try {
      const res = await fetch("/api/verify-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      })
      const data = await res.json()
      if (data.success) {
        setFormData((prev) => ({ ...prev, captchaVerified: true }))
        pushMessage("success", "Security verification complete.")
      } else {
        pushMessage("error", "Captcha verification failed.")
      }
    } catch (err) {
      console.error(err)
      pushMessage("error", "Captcha error. Try again.")
    }
  }

  // ✅ Submit Final Form
  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      await emailjs.send("service_u6pur7e", "template_7jjcy5m", {
        company_name: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        to_email: "info@pentagonai.co",
      })
      setIsSubmitting(false)
      setShowDemo(true)
      pushMessage("success", "Your demo request has been submitted.")
    } catch (error) {
      console.error(error)
      setIsSubmitting(false)
      pushMessage("error", "Something went wrong. Please try again.")
    }
  }

  const resetForm = () => {
    setStep(1)
    setFormData({ companyName: "", email: "", phone: "", emailVerified: false, captchaVerified: false })
    setIsSubmitting(false)
    setShowDemo(false)
    setOtpSent(false)
    setOtp("")
    setEnteredOtp("")
    setOtpExpiry(null)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  return (
    <>
      {/* ✅ Message Toasts */}
      <div className="fixed bottom-4 right-4 z-[1000] space-y-2">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg shadow-lg border text-sm ${
                msg.type === "success"
                  ? "bg-white text-black border-gray-300"
                  : "bg-black text-white border-gray-600"
              }`}
            >
              {msg.type === "success" ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-500" />
              )}
              <span>{msg.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ✅ Form Container */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-black/70 backdrop-blur-xl border border-cyan-400/30 rounded-2xl shadow-2xl w-[90%] md:w-[600px] mx-auto p-8 text-white"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">
            Request Your <span className="text-cyan-400">Exclusive Demo</span>
          </h1>
          <Button variant="ghost" size="sm" onClick={handleClose} className="h-8 w-8 p-0 text-neutral-400 hover:text-white">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {showDemo ? (
          <div className="text-center space-y-4 py-6">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
            <h2 className="text-xl font-bold">Request Submitted</h2>
            <p className="text-neutral-400 text-sm">
              Thank you for your interest. Our representative will contact you shortly.
            </p>
            <Button onClick={handleClose} className="bg-cyan-500 hover:bg-cyan-400 text-black">
              Close
            </Button>
          </div>
        ) : (
          <>
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-3">
                {[1, 2, 3].map((num) => (
                  <React.Fragment key={num}>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        step >= num
                          ? "bg-cyan-500 text-black"
                          : "bg-neutral-700 text-neutral-400"
                      }`}
                    >
                      {num}
                    </div>
                    {num !== 3 && (
                      <div
                        className={`w-12 h-1 ${
                          step > num ? "bg-cyan-500" : "bg-neutral-700"
                        }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-lg font-semibold text-center mb-6">
                  Company Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="companyName" className="mb-2 block text-neutral-300">
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      placeholder="Enter your company name"
                      className="bg-neutral-900 border-neutral-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2 block text-neutral-300">
                      Company Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your company email"
                      className="bg-neutral-900 border-neutral-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2 block text-neutral-300">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className="bg-neutral-900 border-neutral-700 text-white"
                    />
                  </div>
                </div>
                <Button
                  onClick={() => setStep(2)}
                  disabled={!formData.companyName || !formData.email || !formData.phone}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black mt-6"
                >
                  Continue to Verification
                </Button>
              </motion.div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="text-center space-y-4">
                <h2 className="text-lg font-semibold">Email Verification</h2>
                {!otpSent ? (
                  <Button onClick={sendOtp} className="mt-3 bg-cyan-500 hover:bg-cyan-400 text-black">
                    Send OTP
                  </Button>
                ) : (
                  <div className="space-y-3">
                    <Input
                      placeholder="Enter OTP"
                      value={enteredOtp}
                      onChange={(e) => setEnteredOtp(e.target.value)}
                      className="text-center bg-neutral-900 border-neutral-700 text-white"
                    />
                    <Button onClick={verifyOtp} className="bg-green-500 hover:bg-green-600 px-6 text-black">
                      Verify OTP
                    </Button>
                  </div>
                )}
                {formData.emailVerified && (
                  <p className="text-green-400">Email Verified Successfully</p>
                )}
                <Button
                  onClick={() => setStep(3)}
                  disabled={!formData.emailVerified}
                  className="w-full mt-4 bg-cyan-500 hover:bg-cyan-400 text-black"
                >
                  Continue to Security Check
                </Button>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="text-center space-y-4">
                <h2 className="text-lg font-semibold">Security Verification</h2>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={handleCaptchaVerification}
                />
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.captchaVerified || isSubmitting}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black"
                >
                  {isSubmitting ? "Preparing Your Demo..." : "Access Demo Now"}
                </Button>
              </div>
            )}
          </>
        )}
      </motion.div>
    </>
  )
}
