'use client'

import { useEffect } from 'react'

export function useAdvancedAnimations() {
  useEffect(() => {
    // Enhanced Intersection Observer for section animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible')
            
            // Add different animation classes based on element
            if (entry.target.classList.contains('animate-left')) {
              entry.target.classList.add('animate-slide-left')
            } else if (entry.target.classList.contains('animate-right')) {
              entry.target.classList.add('animate-slide-right')
            } else if (entry.target.classList.contains('animate-wipe')) {
              entry.target.classList.add('animate-wipe-up')
            } else if (entry.target.classList.contains('animate-pop')) {
              entry.target.classList.add('animate-pop-out')
            }
          }, index * 100) // Stagger animations
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('.section-animate')
    sections.forEach(section => sectionObserver.observe(section))

    // Add sparkle effects to interactive elements
    const addSparkles = () => {
      const interactiveElements = document.querySelectorAll('.sparkle-on-hover')
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          el.classList.add('sparkle-container')
        })
        el.addEventListener('mouseleave', () => {
          setTimeout(() => {
            el.classList.remove('sparkle-container')
          }, 2000)
        })
      })
    }

    // Create floating confetti on special interactions
    const createConfetti = (x, y) => {
      const colors = ['#F472B6', '#FBCFE8', '#F9A8D4', '#FCE7F3']
      for (let i = 0; i < 6; i++) {
        const confetti = document.createElement('div')
        confetti.style.cssText = `
          position: fixed;
          left: ${x}px;
          top: ${y}px;
          width: 8px;
          height: 8px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          border-radius: 50%;
          pointer-events: none;
          z-index: 1000;
          animation: confettiDrop 2s linear forwards;
          transform: translateX(${(Math.random() - 0.5) * 100}px);
        `
        document.body.appendChild(confetti)
        
        setTimeout(() => {
          confetti.remove()
        }, 2000)
      }
    }

    // Add confetti to special buttons
    const addConfettiEffect = () => {
      const specialButtons = document.querySelectorAll('.confetti-button')
      specialButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          createConfetti(e.clientX, e.clientY)
        })
      })
    }

    // Initialize effects
    addSparkles()
    addConfettiEffect()

    // Cleanup
    return () => {
      sections.forEach(section => sectionObserver.unobserve(section))
    }
  }, [])
}