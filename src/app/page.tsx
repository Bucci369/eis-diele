'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import PhotoSection from '@/components/PhotoSection'
import Products from '@/components/Products'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
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
      <Navigation />
      <Hero />
      <About />
      <PhotoSection />
      <Products />
      <Contact />
      <Footer />
    </main>
  )
}