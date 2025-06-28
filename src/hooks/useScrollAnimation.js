'use client'

import { useEffect, useState } from 'react'

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Trigger initial animations with faster fallback
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-load')
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = '1'
          el.classList.add('animate-fade-in-up')
        }, index * 100)
      })
      
      // Force show section-animate elements if they're still hidden
      setTimeout(() => {
        const sectionElements = document.querySelectorAll('.section-animate:not(.visible)')
        sectionElements.forEach(el => {
          if (el instanceof HTMLElement && parseFloat(window.getComputedStyle(el).opacity) < 0.5) {
            el.style.opacity = '1'
            el.style.transform = 'translate3d(0, 0, 0)'
            el.classList.add('visible')
          }
        })
      }, 300) // Show after 300ms if not already visible
    }

    // Scroll-triggered animations with better performance
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame to prevent flash
            requestAnimationFrame(() => {
              entry.target.classList.add('animate-fade-in-up')
              entry.target.style.opacity = '1'
            })
            // Unobserve to prevent re-triggering
            observer.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })

      const scrollElements = document.querySelectorAll('.scroll-animate')
      scrollElements.forEach(el => observer.observe(el))

      return () => {
        scrollElements.forEach(el => observer.unobserve(el))
      }
    }

    // Parallax effect
    const updateParallax = () => {
      const parallaxElements = document.querySelectorAll('.parallax-element')
      parallaxElements.forEach((el) => {
        const speed = el.dataset.speed || 0.5
        const yPos = -(scrollY * speed)
        el.style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', updateParallax)
    
    // Initial setup with immediate execution
    setTimeout(animateElements, 100) // Reduced from 500ms to 100ms
    const cleanup = observeElements()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', updateParallax)
      cleanup?.()
    }
  }, [scrollY])

  return { scrollY }
}