'use client'

import { useEffect, useRef, useState } from 'react'

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Check device capabilities
    const isMobile = window.innerWidth <= 768
    const isLowEnd = navigator.hardwareConcurrency <= 2 || (navigator as any).deviceMemory <= 2
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Skip floating elements on low-end devices or if user prefers reduced motion
    if (isLowEnd || prefersReducedMotion) {
      return
    }

    // Delay rendering for better initial page load
    const renderTimeout = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    // Create optimized floating elements mit verschiedenen Farben
    const createFloatingElement = (delay: number, index: number) => {
      const element = document.createElement('div')
      element.className = 'floating-3d'
      
      // Verschiedene Größen für mehr Variation
      const sizes = isMobile 
        ? [8, 10, 12, 14, 16] 
        : [10, 14, 18, 22, 26]
      const size = sizes[index % sizes.length]
      
      // Verschiedene Farben für mehr Vielfalt
      const colors = [
        'rgba(244, 114, 182, 0.15)', // Pink
        'rgba(251, 207, 232, 0.12)', // Light Pink
        'rgba(252, 231, 243, 0.10)', // Very Light Pink
        'rgba(249, 168, 212, 0.13)', // Medium Pink
        'rgba(236, 72, 153, 0.08)'   // Dark Pink
      ]
      
      const color1 = colors[index % colors.length]
      const color2 = colors[(index + 1) % colors.length]
      
      element.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: linear-gradient(${45 + (index * 30)}deg, ${color1}, ${color2});
        border-radius: 50%;
        left: ${20 + (index * 15) + Math.random() * 10}%;
        top: ${10 + (index * 20) + Math.random() * 10}%;
        animation-delay: ${delay}s;
        pointer-events: none;
        will-change: transform;
        transform: translate3d(0, 0, 0);
        opacity: 0;
        animation: floatAndFade ${15 + index * 2}s ease-in-out ${delay}s infinite;
      `
      
      return element
    }

    // CSS für die Animation hinzufügen
    const style = document.createElement('style')
    style.textContent = `
      @keyframes floatAndFade {
        0%, 100% {
          opacity: 0;
          transform: translate3d(0, 0, 0) scale(0.8);
        }
        10% {
          opacity: 1;
          transform: translate3d(10px, -10px, 0) scale(1);
        }
        50% {
          opacity: 0.7;
          transform: translate3d(-10px, -20px, 0) scale(1.1);
        }
        90% {
          opacity: 1;
          transform: translate3d(5px, -5px, 0) scale(0.95);
        }
      }
    `
    document.head.appendChild(style)

    // Weniger Elemente, aber besser verteilt
    const elementCount = isMobile ? 3 : 5
    const elements: HTMLDivElement[] = []
    
    for (let i = 0; i < elementCount; i++) {
      const element = createFloatingElement(i * 1.5, i)
      elements.push(element)
      if (isVisible) {
        container.appendChild(element)
      }
    }

    // Cleanup
    return () => {
      clearTimeout(renderTimeout)
      elements.forEach(el => el.remove())
      style.remove()
    }
  }, [isVisible])

  // Intersection Observer für lazy rendering
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      style={{ 
        filter: isVisible ? 'blur(0.3px)' : 'none',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-in'
      }}
    />
  )
}