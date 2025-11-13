"use client"

export default function AnimatedAccent() {
  return (
    <>
      {/* Softer, more organic floating accent - less code-like, more artistic */}
      <div className="fixed top-0 right-0 w-96 h-96 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-5 dark:opacity-10">
          {/* Organic flowing pattern */}
          <g stroke="url(#gradient)" strokeWidth="1" fill="none">
            {/* Gentle curves */}
            <path d="M30 50 Q 100 30, 170 70" strokeLinecap="round" />
            <path d="M20 80 Q 80 100, 170 90" strokeLinecap="round" />
            <path d="M30 120 Q 110 140, 180 110" strokeLinecap="round" />

            {/* Scattered dots for warmth */}
            <circle cx="100" cy="100" r="3" />
            <circle cx="60" cy="80" r="2" />
            <circle cx="140" cy="120" r="2" />
            <circle cx="80" cy="140" r="2" />

            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4d0f28" />
                <stop offset="100%" stopColor="#a8a9ad" />
              </linearGradient>
            </defs>
          </g>
        </svg>
      </div>

      {/* Bottom left organic accent - flowing shapes instead of geometric */}
      <div className="fixed bottom-0 left-0 w-80 h-80 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-5 dark:opacity-10">
          <g stroke="url(#gradientLeft)" strokeWidth="1.5" fill="none">
            {/* Organic shapes */}
            <path d="M30 50 Q 60 40, 90 50 Q 120 60, 90 80 Q 60 90, 30 80 Z" />
            <circle cx="100" cy="100" r="35" opacity="0.5" />
            <path d="M140 70 Q 170 60, 180 100 Q 170 140, 140 150 Q 120 140, 130 100 Z" />

            <defs>
              <linearGradient id="gradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a8a9ad" />
                <stop offset="100%" stopColor="#4d0f28" />
              </linearGradient>
            </defs>
          </g>
        </svg>
      </div>
    </>
  )
}
