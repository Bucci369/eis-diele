'use client'

import { useEffect, useState } from 'react'

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Trigger initial animations
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-load')
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = '1'
          el.classList.add('animate-fade-in-up')
        }, index * 100)
      })
    }

    // Scroll-triggered animations
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            entry.target.style.opacity = '1'
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
    
    // Initial setup
    setTimeout(animateElements, 500)
    const cleanup = observeElements()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', updateParallax)
      cleanup?.()
    }
  }, [scrollY])

  return { scrollY }
}