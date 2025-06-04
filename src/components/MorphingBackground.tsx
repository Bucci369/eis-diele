'use client'

import { useEffect, useRef } from 'react'
import OptimizedImage from './OptimizedImage'

export default function MorphingBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scroll effect removed for better performance

    // Mouse movement effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      
      const moveX = (clientX - centerX) * 0.005
      const moveY = (clientY - centerY) * 0.005
      
      const elements = container.querySelectorAll('.morph-element')
      elements.forEach((el, index) => {
        if (el instanceof HTMLElement) {
          const multiplier = (index + 1) * 0.2
          el.style.setProperty('--mouse-x', `${moveX * multiplier}px`)
          el.style.setProperty('--mouse-y', `${moveY * multiplier}px`)
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* Floating Morphing Image 1 */}
      <div 
        className="morph-element absolute w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 opacity-40"
        style={{
          top: '10%',
          right: '15%',
          transform: 'translate3d(var(--mouse-x, 0px), var(--mouse-y, 0px), 0)'
        }}
      >
        <div className="w-full h-full rounded-full overflow-hidden backdrop-blur-sm border border-white/20 morph-shape-1">
          <OptimizedImage
            src="/images/image15.png"
            alt="Background Element"
            className="w-full h-full object-cover"
            placeholder="blur"
          />
        </div>
      </div>

      {/* Image7 unten links */}
      <div 
        className="morph-element absolute w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 opacity-45"
        style={{
          bottom: '10%',
          left: '15%',
          transform: 'translate3d(var(--mouse-x, 0px), var(--mouse-y, 0px), 0)'
        }}
      >
        <div className="w-full h-full rounded-full overflow-hidden backdrop-blur-sm border border-white/20 morph-shape-2">
          <div className="morph-rotate-1 w-full h-full">
            <OptimizedImage
              src="/images/image13.png"
              alt="Background Element"
              className="w-full h-full object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      {/* Image11 oben links */}
      <div 
        className="morph-element absolute w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 opacity-70"
        style={{
          bottom: '60%',
          left: '30%',
          transform: 'translate3d(var(--mouse-x, 0px), var(--mouse-y, 0px), 0)'
        }}
      >
        <div className="w-full h-full rounded-full overflow-hidden backdrop-blur-sm border border-white/20 morph-shape-2">
          <div className="morph-rotate-2 w-full h-full">
            <OptimizedImage
              src="/images/image11.png"
              alt="Background Element"
              className="w-full h-full object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      {/* Image12 unten rechts */}
      <div 
        className="morph-element absolute w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 opacity-40"
        style={{
          bottom: '5%',
          right:'30%',
          transform: 'translate3d(var(--mouse-x, 0px), var(--mouse-y, 0px), 0)'
        }}
      >
        <div className="w-full h-full rounded-full overflow-hidden backdrop-blur-sm border border-white/20 morph-shape-2">
          <OptimizedImage
            src="/images/image12.png"
            alt="Background Element"
            className="w-full h-full object-cover"
            placeholder="blur"
          />
        </div>
      </div>

      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-primary-100/20 pointer-events-none"></div>
    </div>
  )
}