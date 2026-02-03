import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Pentagon AI",
  description: "Revolutionizing Communication with AI-Powered Voice Agents",
  generator: "v0.app",
  icons: {
    icon: "/favicon.jpeg",       // put your favicon in public/favicon.ico
    shortcut: "/favicon.jpeg",   // optional, for shortcut icon
    apple: "/apple-touch-icon.png" // optional, for iOS devices
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
