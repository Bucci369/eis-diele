'use client'

import { useEffect, useRef } from 'react'

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Check device capabilities
    const isMobile = window.innerWidth <= 768
    const isLowEnd = navigator.hardwareConcurrency <= 2 || navigator.deviceMemory <= 2
    
    // Skip floating elements on low-end devices or if user prefers reduced motion
    if (isLowEnd || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    // Create optimized floating elements
    const createFloatingElement = (delay: number) => {
      const element = document.createElement('div')
      element.className = 'floating-3d'
      const size = isMobile ? Math.random() * 12 + 8 : Math.random() * 16 + 10
      
      element.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: linear-gradient(45deg, 
          rgba(244, 114, 182, ${Math.random() * 0.2 + 0.05}), 
          rgba(251, 207, 232, ${Math.random() * 0.15 + 0.05})
        );
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${delay}s;
        pointer-events: none;
        will-change: transform;
        transform: translate3d(0, 0, 0);
      `
      
      return element
    }

    // Fewer elements on mobile
    const elementCount = isMobile ? 4 : 6
    for (let i = 0; i < elementCount; i++) {
      const element = createFloatingElement(i * 0.8)
      container.appendChild(element)
    }

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      style={{ filter: 'blur(0.5px)' }}
    />
  )
}