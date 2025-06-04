'use client'

import { useEffect, useRef } from 'react'

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create floating 3D elements
    const createFloatingElement = (delay: number) => {
      const element = document.createElement('div')
      element.className = 'floating-3d element-3d'
      element.style.cssText = `
        position: absolute;
        width: ${Math.random() * 20 + 10}px;
        height: ${Math.random() * 20 + 10}px;
        background: linear-gradient(45deg, 
          rgba(244, 114, 182, ${Math.random() * 0.3 + 0.1}), 
          rgba(251, 207, 232, ${Math.random() * 0.2 + 0.1})
        );
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${delay}s;
        pointer-events: none;
        backdrop-filter: blur(1px);
        box-shadow: 0 4px 8px rgba(244, 114, 182, 0.2);
      `
      
      return element
    }

    // Add floating elements
    for (let i = 0; i < 8; i++) {
      const element = createFloatingElement(i * 0.5)
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