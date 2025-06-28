'use client'
import { useEffect } from 'react'

export default function HydrationFix() {
  useEffect(() => {
    // Mark as hydrated immediately
    document.documentElement.classList.add('hydrated')
    
    // Force visibility of section-animate elements if they're still hidden after 500ms
    const fallbackTimer = setTimeout(() => {
      const hiddenElements = document.querySelectorAll('.section-animate:not(.visible)')
      hiddenElements.forEach(el => {
        if (el instanceof HTMLElement && el.style.opacity !== '1') {
          el.style.opacity = '1'
          el.style.transform = 'none'
          el.classList.add('visible')
        }
      })
    }, 500)
    
    return () => clearTimeout(fallbackTimer)
  }, [])
  
  return null  // Rendert nichts
}