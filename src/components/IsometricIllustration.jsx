import React from 'react'

function Dots({ cx, cy }) {
  const dots = []
  let key = 0
  for (let i = -1; i <= 2; i++) {
    for (let j = -1; j <= 2; j++) {
      if ((i === -1 && j === -1) || (i === 2 && j === 2)) continue
      const dotX = cx + 5.5 * i - 5.5 * j
      const dotY = cy + 2.75 * i + 2.75 * j
      dots.push(
        <circle
          key={key++}
          cx={dotX}
          cy={dotY}
          r="0.8"
          fill="var(--cube-dot)"
          className="animate-pulse-slow"
          style={{
            animationDelay: `${(i + j) * 0.2}s`,
            opacity: (i + j + key) % 2 === 0 ? 0.8 : 0.2,
          }}
        />
      )
    }
  }
  return <g opacity="0.9">{dots}</g>
}

export default function IsometricIllustration() {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center pointer-events-none select-none">
      <svg viewBox="0 0 500 500" className="w-full h-full">
        <defs>
          <linearGradient id="topFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--cube-top-start)" />
            <stop offset="100%" stopColor="var(--cube-top-end)" />
          </linearGradient>
          <linearGradient id="leftFace" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--cube-left-start)" />
            <stop offset="100%" stopColor="var(--cube-left-end)" />
          </linearGradient>
          <linearGradient id="rightFace" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--cube-right-start)" />
            <stop offset="100%" stopColor="var(--cube-right-end)" />
          </linearGradient>
        </defs>

        <g fill="var(--cube-floor-shadow)" stroke="none">
          <path d="M250,285 L300,310 L250,335 L200,310 Z" />
          <path d="M160,355 L210,380 L160,405 L110,380 Z" />
          <path d="M340,405 L390,430 L340,455 L290,430 Z" />
          <path d="M250,435 L300,460 L250,485 L200,460 Z" />
        </g>

        <g
          stroke="var(--cube-edge)"
          strokeWidth="0.8"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          {/* 1. BACK CUBE (Tallest) */}
          <g transform="translate(0, -10)">
            <path
              d="M250,90 L300,115 L300,255 L250,280 L200,255 L200,115 Z"
              fill="url(#rightFace)"
              stroke="none"
            />
            <path d="M250,90 L300,115 L250,140 L200,115 Z" fill="url(#topFace)" />
            <path d="M250,140 L300,115 L300,255 L250,280 Z" fill="url(#rightFace)" />
            <path d="M200,115 L250,140 L250,280 L200,255 Z" fill="url(#leftFace)" />
            <Dots cx={250} cy={115} />
          </g>

          {/* 2. LEFT CUBE (Medium Tall) */}
          <g transform="translate(0, -10)">
            <path
              d="M160,180 L210,205 L210,325 L160,350 L110,325 L110,205 Z"
              fill="url(#rightFace)"
              stroke="none"
            />
            <path d="M160,180 L210,205 L160,230 L110,205 Z" fill="url(#topFace)" />
            <path d="M160,230 L210,205 L210,325 L160,350 Z" fill="url(#rightFace)" />
            <path d="M110,205 L160,230 L160,350 L110,325 Z" fill="url(#leftFace)" />
            <Dots cx={160} cy={205} />
          </g>

          {/* 3. RIGHT CUBE - BOTTOM SOLID BASE */}
          <g transform="translate(0, -10)">
            <path
              d="M340,250 L390,275 L390,375 L340,400 L290,375 L290,275 Z"
              fill="url(#rightFace)"
              stroke="none"
            />
            <path d="M340,250 L390,275 L340,300 L290,275 Z" fill="var(--cube-base-top)" />
            <path d="M340,300 L390,275 L390,375 L340,400 Z" fill="url(#rightFace)" />
            <path d="M290,275 L340,300 L340,400 L290,375 Z" fill="url(#leftFace)" />
          </g>

          {/* 4. RIGHT CUBE - TOP FLOATING PART (Animated) */}
          <g className="animate-float accelerated-float">
            <path
              d="M340,265 L390,240 L340,255 L290,240 Z"
              fill="var(--cube-cast-vector)"
              stroke="none"
            />
            <path
              d="M340,170 L390,195 L390,225 L340,250 L290,225 L290,195 Z"
              fill="url(#rightFace)"
              stroke="none"
            />
            <path d="M340,170 L390,195 L340,220 L290,195 Z" fill="url(#topFace)" />
            <path d="M340,220 L390,195 L390,225 L340,250 Z" fill="url(#rightFace)" />
            <path d="M290,195 L340,220 L340,250 L290,225 Z" fill="url(#leftFace)" />
            <Dots cx={340} cy={195} />
          </g>

          {/* 5. FRONT CUBE (Lowest) */}
          <g transform="translate(0, -10)">
            <path
              d="M250,290 L300,315 L300,405 L250,430 L200,405 L200,315 Z"
              fill="url(#rightFace)"
              stroke="none"
            />
            <path d="M250,290 L300,315 L250,340 L200,315 Z" fill="url(#topFace)" />
            <path d="M250,340 L300,315 L300,405 L250,430 Z" fill="url(#rightFace)" />
            <path d="M200,315 L250,340 L250,430 L200,405 Z" fill="url(#leftFace)" />
            <Dots cx={250} cy={315} />
          </g>
        </g>
      </svg>
    </div>
  )
}
