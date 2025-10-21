import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ---- Left section ---- */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="SmartConvo Logo"
                width={120} // intrinsic width
                height={30} // intrinsic height
                priority
                className="w-[120px] h-auto" // Tailwind enforces width
              />
            </Link>

            <p className="text-sm text-white/70 mb-4 max-w-md">
              SmartConvo by Pentagon AI — Transforming customer communication with AI-powered voice agents.
            </p>
            <p className="text-xs text-white/50">Based in Toronto, Canada</p>
          </div>

          {/* ---- Product section ---- */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/#features" className="hover:text-cyan-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-cyan-400 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-cyan-400 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* ---- Company section ---- */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- Bottom copyright ---- */}
        <div className="border-t border-white/10 mt-8  pt-8 text-center text-sm text-white/50">
          <p>&copy; 2025 SmartConvo by Pentagon AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
