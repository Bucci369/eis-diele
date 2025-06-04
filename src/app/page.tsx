'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useAdvancedAnimations } from '@/hooks/useAdvancedAnimations'
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization'
import { useImagePreloader } from '@/hooks/useImagePreloader'

export default function Home() {
  useScrollAnimation()
  useAdvancedAnimations()
  usePerformanceOptimization()
  useImagePreloader()

  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}