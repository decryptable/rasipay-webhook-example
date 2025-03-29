"use client"

import type React from "react"
import { useState, useRef } from "react"

interface GlassmorphicCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  intensity?: number
}

export function GlassmorphicCard({
  children,
  className = "",
  glowColor = "rgba(100, 149, 237, 0.4)", // Warna cornflowerblue yang lebih soft
  intensity = 0.1, // Intensitas yang lebih rendah
}: GlassmorphicCardProps) {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate mouse position for glow effect
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMouseX(x)
    setMouseY(y)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-lg transition-all duration-300 ${className} glassmorphism`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${glowColor} 0%, transparent 40%)`, // Radius lebih kecil (40% vs 50%)
          width: "120%", // Ukuran lebih kecil (120% vs 150%)
          height: "120%", // Ukuran lebih kecil (120% vs 150%)
          left: "-10%", // Posisi yang disesuaikan (-10% vs -25%)
          top: "-10%", // Posisi yang disesuaikan (-10% vs -25%)
          opacity: isHovering ? intensity : 0,
          mixBlendMode: "screen",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

