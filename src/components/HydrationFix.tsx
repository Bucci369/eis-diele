'use client'
import { useEffect } from 'react'

export default function HydrationFix() {
  useEffect(() => {
    document.documentElement.classList.add('hydrated')
  }, [])
  
  return null  // Rendert nichts
}