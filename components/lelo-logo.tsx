export function LeLoLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L28 9.5V22.5L16 30L4 22.5V9.5L16 2Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M16 10L22 13.5V19.5L16 23L10 19.5V13.5L16 10Z" fill="white" />
        </svg>
      </div>
      <span className="text-xl font-bold text-white">Pentagon AI</span>
    </div>
  )
}
