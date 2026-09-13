'use client'

import { useEffect, useRef, useState } from 'react'

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Don't initialize on devices without fine pointer / hover support (phones/tablets)
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!hasFinePointer) return

    // Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const glowEl = glowRef.current
    if (!glowEl) return

    let mouseX = -1000
    let mouseY = -1000
    let currentX = -1000
    let currentY = -1000
    let rafId: number | null = null
    let isMoving = false

    const updatePosition = () => {
      // Smooth lerp (0.16 ease factor for fluid trailing physics)
      const ease = 0.16
      const dx = mouseX - currentX
      const dy = mouseY - currentY

      currentX += dx * ease
      currentY += dy * ease

      if (glowEl) {
        glowEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
      }

      // Continue animating until catch-up delta is negligible
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        rafId = requestAnimationFrame(updatePosition)
      } else {
        isMoving = false
        rafId = null
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (!isMoving) {
        isMoving = true
        rafId = requestAnimationFrame(updatePosition)
      }

      setIsVisible(true)
    }

    const onMouseLeave = () => {
      setIsVisible(false)
    }

    const onMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-500 ease-out"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        ref={glowRef}
        className="cursor-glow-orb absolute top-0 left-0 h-[650px] w-[650px] rounded-full will-change-transform"
        style={{
          transform: 'translate3d(-1000px, -1000px, 0) translate(-50%, -50%)',
        }}
      />
    </div>
  )
}

