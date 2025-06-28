'use client'

import { useEffect } from 'react'

export function useAdvancedAnimations() {
  useEffect(() => {
    // Performance-optimized Intersection Observer
    const observerOptions = {
      threshold: [0.1, 0.3],
      rootMargin: '0px 0px -20px 0px'
    }

    // Throttle function for better performance
    const throttle = (func, delay) => {
      let timeoutId;
      let lastExecTime = 0;
      return function (...args) {
        const currentTime = Date.now();
        if (currentTime - lastExecTime > delay) {
          func.apply(this, args);
          lastExecTime = currentTime;
        } else {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            func.apply(this, args);
            lastExecTime = Date.now();
          }, delay - (currentTime - lastExecTime));
        }
      };
    };

    const sectionObserver = new IntersectionObserver(throttle((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          // Use double requestAnimationFrame for smoother animations and prevent flash
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              entry.target.classList.add('visible')
              
              // Add optimized animation classes
              if (entry.target.classList.contains('animate-left')) {
                entry.target.classList.add('animate-slide-left')
              } else if (entry.target.classList.contains('animate-right')) {
                entry.target.classList.add('animate-slide-right')
              } else if (entry.target.classList.contains('animate-wipe')) {
                entry.target.classList.add('animate-smooth-fade')
              } else if (entry.target.classList.contains('animate-pop')) {
                entry.target.classList.add('animate-gentle-pop')
              }
              
              // Remove will-change after animation
              setTimeout(() => {
                entry.target.style.willChange = 'auto'
              }, 1000)
            })
          })
          
          // Unobserve after animation to improve performance
          sectionObserver.unobserve(entry.target)
        }
      })
    }, 50), observerOptions) // Reduced throttle delay for faster response

    // Observe all sections with immediate fallback
    const sections = document.querySelectorAll('.section-animate')
    sections.forEach(section => sectionObserver.observe(section))
    
    // Emergency fallback: Show content after 400ms if still hidden
    const emergencyFallback = setTimeout(() => {
      const hiddenSections = document.querySelectorAll('.section-animate:not(.visible)')
      hiddenSections.forEach(section => {
        if (section instanceof HTMLElement && parseFloat(window.getComputedStyle(section).opacity) < 0.5) {
          section.style.opacity = '1'
          section.style.transform = 'translate3d(0, 0, 0)'
          section.classList.add('visible')
        }
      })
    }, 400)

    // Optimized sparkle effects with passive listeners
    const addSparkles = () => {
      const interactiveElements = document.querySelectorAll('.sparkle-on-hover')
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          if (window.innerWidth > 768) { // Only on desktop
            el.classList.add('sparkle-container')
          }
        }, { passive: true })
        
        el.addEventListener('mouseleave', () => {
          if (window.innerWidth > 768) {
            setTimeout(() => {
              el.classList.remove('sparkle-container')
            }, 1500) // Reduced time
          }
        }, { passive: true })
      })
    }

    // Optimized confetti with reduced particles for mobile
    const createConfetti = (x, y) => {
      const isMobile = window.innerWidth <= 768
      const particleCount = isMobile ? 3 : 5 // Fewer particles on mobile
      const colors = ['#F472B6', '#FBCFE8', '#F9A8D4']
      
      for (let i = 0; i < particleCount; i++) {
        const confetti = document.createElement('div')
        confetti.style.cssText = `
          position: fixed;
          left: ${x}px;
          top: ${y}px;
          width: ${isMobile ? '6px' : '8px'};
          height: ${isMobile ? '6px' : '8px'};
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          border-radius: 50%;
          pointer-events: none;
          z-index: 1000;
          animation: confettiDrop ${isMobile ? '1.5s' : '2s'} linear forwards;
          transform: translateX(${(Math.random() - 0.5) * (isMobile ? 60 : 100)}px);
        `
        document.body.appendChild(confetti)
        
        setTimeout(() => {
          if (confetti.parentNode) {
            confetti.remove()
          }
        }, isMobile ? 1500 : 2000)
      }
    }

    // Throttled confetti effect
    const addConfettiEffect = () => {
      const specialButtons = document.querySelectorAll('.confetti-button')
      let lastConfettiTime = 0
      
      specialButtons.forEach(button => {
        button.addEventListener('click', throttle((e) => {
          const now = Date.now()
          if (now - lastConfettiTime > 500) { // Throttle confetti
            createConfetti(e.clientX, e.clientY)
            lastConfettiTime = now
          }
        }, 500), { passive: true })
      })
    }

    // Initialize effects
    addSparkles()
    addConfettiEffect()

    // Cleanup
    return () => {
      sections.forEach(section => sectionObserver.unobserve(section))
      clearTimeout(emergencyFallback)
    }
  }, [])
}