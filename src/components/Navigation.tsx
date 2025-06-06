'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 animate-slide-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold font-playfair text-gray-900 hover:scale-105 transition-transform duration-300 cursor-pointer">
              Schleckwerk
            </h2>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#about" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                Über Uns
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link href="#products" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                Eis Sorten
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link href="#location" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                Manufaktur
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link href="#contact" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-all duration-300 relative group">
                Kontakt
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <div className="space-y-1">
                <span className={`block h-0.5 w-5 bg-current transform transition ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-5 bg-current transition ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-5 bg-current transform transition ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <Link href="#about" className="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              Über Uns
            </Link>
            <Link href="#products" className="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              Eis Sorten
            </Link>
            <Link href="#location" className="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              Manufaktur
            </Link>
            <Link href="#contact" className="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}