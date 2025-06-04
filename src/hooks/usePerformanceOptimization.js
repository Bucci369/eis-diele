'use client'

import { useEffect } from 'react'

export function usePerformanceOptimization() {
  useEffect(() => {
    // Detect device capabilities
    const isLowEndDevice = () => {
      return (
        navigator.hardwareConcurrency <= 2 || // 2 or fewer CPU cores
        navigator.deviceMemory <= 2 || // 2GB or less RAM
        window.innerWidth <= 768 // Mobile device
      )
    }

    // Performance-based class toggling
    const optimizeForDevice = () => {
      const body = document.body
      
      if (isLowEndDevice()) {
        body.classList.add('low-end-device')
        
        // Disable heavy animations on low-end devices
        const heavyAnimations = document.querySelectorAll('.floating-3d, .element-3d')
        heavyAnimations.forEach(el => {
          el.classList.add('reduced-motion')
        })
        
        // Reduce particle count
        const particleElements = document.querySelectorAll('[class*="particle"]')
        particleElements.forEach(el => {
          el.style.display = 'none'
        })
      }
    }

    // Optimize scroll performance
    const optimizeScrolling = () => {
      let ticking = false
      
      const updateScrollElements = () => {
        const scrollY = window.scrollY
        const parallaxElements = document.querySelectorAll('.parallax-element')
        
        parallaxElements.forEach(el => {
          const speed = parseFloat(el.getAttribute('data-speed') || '0.5')
          const yPos = -(scrollY * speed)
          
          // Use transform3d for better performance
          el.style.transform = `translate3d(0, ${yPos}px, 0)`
        })
        
        ticking = false
      }
      
      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollElements)
          ticking = true
        }
      }
      
      window.addEventListener('scroll', onScroll, { passive: true })
      
      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }

    // Battery optimization
    const optimizeForBattery = () => {
      if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
          if (battery.level < 0.2) { // Low battery
            document.body.classList.add('battery-save')
            
            // Disable non-essential animations
            const animations = document.querySelectorAll('.animate-sparkle, .animate-confetti')
            animations.forEach(el => {
              el.style.animationPlayState = 'paused'
            })
          }
        })
      }
    }

    // Connection-based optimization
    const optimizeForConnection = () => {
      if ('connection' in navigator) {
        const connection = navigator.connection
        
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          document.body.classList.add('slow-connection')
          
          // Disable heavy visual effects
          const heavyEffects = document.querySelectorAll('.glass-effect')
          heavyEffects.forEach(el => {
            el.style.backdropFilter = 'none'
            el.style.background = 'rgba(255, 255, 255, 0.9)'
          })
        }
      }
    }

    // Initialize optimizations
    optimizeForDevice()
    const cleanupScroll = optimizeScrolling()
    optimizeForBattery()
    optimizeForConnection()

    return cleanupScroll
  }, [])
}