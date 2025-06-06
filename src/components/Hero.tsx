'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ParticleBackground from './ParticleBackground'
import FloatingElements from './FloatingElements'
import MorphingBackground from './MorphingBackground'
import OptimizedImage from './OptimizedImage'

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  return (
    <section id="home" className="min-h-screen bg-soft-pink ice-crystal-pattern flex items-center pt-16 relative overflow-hidden">
      <MorphingBackground />
      <ParticleBackground />
      <FloatingElements />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-playfair text-gray-900 leading-tight mb-8">
        <span className={`block ${isMounted ? 'animate-melt-smooth' : 'opacity-0'}`}>
          Schleckwerk
          </span>
          {/* Füge die größeren Schriftklassen zu diesem span hinzu: */}
          <span className={`block gradient-text ${isMounted ? 'animate-melt-smooth-delay' : 'opacity-0'} text-5xl sm:text-6xl lg:text-8xl`}>
            Manufaktur
          </span>
          </h1>
          <p className={`text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed font-light transition-all duration-700 ${
            isMounted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
          }`}>
            Handgefertigtes Eis • Natürliche Zutaten • Täglich frisch
          </p>
          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-500 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Link 
              href="#products" 
              className={`inline-flex items-center justify-center px-10 py-4 text-lg font-medium rounded-full text-white bg-primary-500 shadow-lg transition-all duration-300 ${
                isMounted ? 'hover:bg-primary-600' : ''
              }`}
            >
              Eis entdecken
            </Link>
            </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className={isMounted ? 'animate-bounce' : 'opacity-0'}>
            <svg className="w-5 h-5 text-primary-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}