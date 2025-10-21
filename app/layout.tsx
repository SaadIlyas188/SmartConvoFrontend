import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "SmartConvo - by Pentagon AI",
  description: "Jab sb aapki le rahe ho to aap bhi khuch lelo",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",       // put your favicon in public/favicon.ico
    shortcut: "/favicon.ico",   // optional, for shortcut icon
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
