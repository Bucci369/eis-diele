'use client'

import OptimizedImage from './OptimizedImage'

export default function AnimatedIceCreamCone() {
  return (
    <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
      <div className="relative w-80 h-80">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Ice Cream Cone */}
        <div className="relative animate-gentle-float">
          <div className="transform rotate-12 hover:rotate-6 transition-transform duration-700">
            <OptimizedImage
              src="/images/hero-ice-cream.png"
              alt="Delicious Ice Cream"
              className="w-full h-full object-contain drop-shadow-2xl"
              priority
            />
          </div>
          
          {/* Sparkles */}
          <div className="absolute top-10 left-10">
            <span className="text-3xl animate-sparkle">✨</span>
          </div>
          <div className="absolute bottom-20 right-5">
            <span className="text-2xl animate-sparkle animate-delay-600">✨</span>
          </div>
        </div>
      </div>
    </div>
  )
}