// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Button } from "./ui/button"
// import Link from "next/link"

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isVisible, setIsVisible] = useState(true)
//   const [lastScrollY, setLastScrollY] = useState(0)
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY
//       setIsScrolled(currentScrollY > 50)
//       setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 100))
//       setLastScrollY(currentScrollY)
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true })
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [lastScrollY])

//   const navItems = [
//     {
//       label: "Industries",
//       href: "/industries",
//       gradient: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(8,145,178,0.06) 50%, rgba(21,94,117,0) 100%)",
//     },
//     {
//       label: "About",
//       href: "/about",
//       gradient: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(8,145,178,0.06) 50%, rgba(21,94,117,0) 100%)",
//     },
//     {
//       label: "Contact",
//       href: "/contact",
//       gradient: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(8,145,178,0.06) 50%, rgba(21,94,117,0) 100%)",
//     },
//   ]

//   return (
//     <header
//       className={`
//         fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out
//         ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
//       `}
//     >
//       <div
//         className={`
//           flex items-center justify-center gap-6 px-6 py-3 rounded-2xl border transition-all duration-300 relative overflow-hidden
//           ${
//             isScrolled
//               ? "bg-background/90 backdrop-blur-xl border-border/40 shadow-2xl"
//               : "bg-background/95 backdrop-blur-lg border-border/30 shadow-lg"
//           }
//         `}
//       >
//         {/* Cyan Glow on Hover */}
//         <div
//           className="absolute -inset-2 bg-gradient-radial from-transparent via-cyan-500/10 to-transparent rounded-3xl z-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//           style={{
//             opacity: hoveredItem ? 1 : 0,
//           }}
//         />

//         {/* ✅ Replaced LeLoLogo with Public Folder Logo */}
//         <Link href="/" className="transform transition-transform duration-200 hover:scale-105 relative z-10">
//           <Image
//             src="/logo.png" // 👈 place your logo file name here (e.g. /smartconvo-logo.png)
//             alt="SmartConvo Logo"
//             width={140} // tweak these for your logo size
//             height={40}
//             priority
//             className="object-contain"
//           />
//         </Link>

//         {/* Navigation */}
//         <nav className="hidden md:flex items-center gap-2 relative z-10">
//           {navItems.map((item) => (
//             <div
//               key={item.label}
//               className="relative"
//               onMouseEnter={() => setHoveredItem(item.label)}
//               onMouseLeave={() => setHoveredItem(null)}
//             >
//               <div
//                 className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 rounded-xl"
//                 style={{
//                   background: item.gradient,
//                   opacity: hoveredItem === item.label ? 1 : 0,
//                   transform: hoveredItem === item.label ? "scale(2)" : "scale(0.8)",
//                   transition: "opacity 0.5s ease, transform 0.5s ease",
//                 }}
//               />
//               <Link
//                 href={item.href}
//                 className="relative text-foreground/80 hover:text-cyan-500 transition-all duration-300 px-4 py-2 rounded-xl block"
//               >
//                 {item.label}
//               </Link>
//             </div>
//           ))}
//         </nav>

//         {/* Auth Buttons */}
//         <div className="flex items-center gap-3 relative z-10">
//           <Button
//             variant="ghost"
//             size="sm"
//             className="text-foreground/80 hover:text-foreground hover:bg-foreground/10 transition-all duration-200 rounded-xl"
//           >
//             Sign In
//           </Button>
//           <Button
//             size="sm"
//             className="bg-cyan-500 hover:bg-cyan-600 text-white transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 rounded-xl"
//           >
//             Get Started
//           </Button>
//         </div>
//       </div>
//     </header>
//   )
// }







"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Normalize country codes
  const normalizeCountryCode = (code: string) => {
    if (!code) return "OTHER"
    const upper = code.toUpperCase()
    if (upper === "PK" || upper === "PAKISTAN") return "PK"
    return upper
  }

  // Redirect based on country and action
  const redirectBasedOnCountry = (countryCode: string, action: "signin" | "signup") => {
    countryCode = normalizeCountryCode(countryCode)
    if (action === "signin") {
      window.location.href = countryCode === "PK"
        ? "https://pk.dashboard.pentagonai.co"
        : "https://dashboard.pentagonai.co"
    } else {
      window.location.href = countryCode === "PK"
        ? "https://pk.dashboard.pentagonai.co/signup"
        : "https://dashboard.pentagonai.co/signup"
    }
  }

  // Run location detection on button click
  const handleClick = (action: "signin" | "signup") => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser.")
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        try {
          const res = await fetch(
            `https://geocode.xyz/${latitude},${longitude}?geoit=json`
          )
          const data = await res.json()

          // Use country code if available, else fallback to IP
          let country = data.country
          console.log(country)
          if (!country || country === ""){

          if (action === "signin") {
            window.location.href = "https://pk.dashboard.pentagonai.co"
          } else {
              window.location.href = "https://pk.dashboard.pentagonai.co/signup"
          }
        }

        
          // if (!country || country === "") {
          //   const ipRes = await fetch("https://ipapi.co/json/")
          //   const ipData = await ipRes.json()
          //   country = ipData.country_code || "OTHER"
          // }

          else{

          redirectBasedOnCountry(country, action)}
        } catch (err) {
          // fallback to IP-based
          fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => redirectBasedOnCountry(data.country_code || "OTHER", action))
            .catch(() => alert("Unable to detect location."))
        }
      },
      () => {
        alert("Location permission is required to proceed.")
      },
      { enableHighAccuracy: true }
    )
  }


  const navItems = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-lg"
          : "bg-transparent backdrop-blur-none border-none"
      }`}
    >
      <div className="flex items-center justify-between px-10 py-4 relative">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-all ml-2 relative z-10">
          <Image
            src="/Logo.png"
            alt="SmartConvo Logo"
            width={150}
            height={45}
            priority
            className="object-contain drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 relative">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`relative text-foreground/80 px-3 py-2 font-medium transition-all duration-500 rounded-xl
                ${hoveredItem === item.label ? "text-cyan-300" : "hover:text-cyan-400"}`}
            >
              <span
                className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-xl opacity-0 transition-all duration-700 ease-out"
                style={{
                  opacity: hoveredItem === item.label ? 1 : 0,
                  boxShadow:
                    hoveredItem === item.label
                      ? "0 0 20px 6px rgba(34,211,238,0.25)"
                      : "none",
                }}
              />
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 relative z-10">
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground/80 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-xl transition-all duration-300"
            onClick={() => handleClick("signin")}
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
            onClick={() => handleClick("signup")}
          >
            Get Started
          </Button>
        </div>

        <div
          className="absolute -inset-2 bg-gradient-radial from-transparent via-cyan-500/10 to-transparent opacity-0 rounded-3xl pointer-events-none transition-all duration-700"
          style={{
            opacity: hoveredItem ? 1 : 0,
            filter: "blur(20px)",
          }}
        />
      </div>
    </header>
  )
}
