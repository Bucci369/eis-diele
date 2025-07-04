'use client'

import { useEffect, useRef, useState } from 'react'

// TypeScript Interfaces
interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  priority?: boolean
}

interface ValueItem {
  title: string
  desc: string
}

interface FloatingImage {
  src: string
  position: string
  size: string
  opacity: string
  morph: string
  delay: string
}

function OptimizedImage({
  src,
  alt,
  className = '',
  placeholder = 'gradient',
  priority = false
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '50px' }
    )

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const getPlaceholder = () => {
    switch (placeholder) {
      case 'gradient':
        return 'linear-gradient(135deg, #F472B6 0%, #FBCFE8 50%, #FCE7F3 100%)'
      case 'blur':
        return 'linear-gradient(135deg, rgba(244, 114, 182, 0.1) 0%, rgba(251, 207, 232, 0.1) 100%)'
      default:
        return '#F3F4F6'
    }
  }

  return (
    <div className={`relative overflow-hidden ${className}`} ref={placeholderRef}>
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: getPlaceholder()
        }}
      />
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
    </div>
  )
}

export default function About() {
  const values: ValueItem[] = [
    { title: "Nachhaltigkeit", desc: "Regionale Bio-Zutaten" },
    { title: "Handwerk", desc: "Traditionelle Rezepte" },
    { title: "Leidenschaft", desc: "Für perfekten Geschmack" }
  ]

  const floatingImages: FloatingImage[] = [
    {
      src: "/images/image14.png",
      position: "top-60 left-16",
      size: "w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36",
      opacity: "opacity-40",
      morph: "morph-rotate-1",
      delay: "animate-delay-400"
    },
    {
      src: "/images/image15.png", 
      position: "top-32 right-16",
      size: "w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32",
      opacity: "opacity-30",
      morph: "morph-rotate-2",
      delay: "animate-delay-800"
    },
    {
      src: "/images/image13.png",
      position: "top-60 right-8", 
      size: "w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32",
      opacity: "opacity-15",
      morph: "morph-rotate-3",
      delay: "animate-delay-800"
    },
    {
      src: "/images/image16.png",
      position: "top-48 left-1/3",
      size: "w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36", 
      opacity: "opacity-25",
      morph: "morph-rotate-2",
      delay: "animate-delay-1200"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 via-rose-25 to-pink-100 relative overflow-hidden section-animate animate-wipe">
      {/* Background Elements Container */}
      <div className="absolute inset-0 overflow-visible z-0">
        {/* Farbige Kreise - diese bleiben wie sie sind */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-300/40 to-pink-400/30 rounded-full opacity-60 floating-3d animate-gentle-float animate-pulse shadow-lg"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-rose-200/60 to-pink-300/50 rounded-full opacity-50 floating-3d animate-gentle-float animate-delay-800 shadow-sm"></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-pink-200/40 to-rose-300/30 rounded-full opacity-40 floating-3d animate-gentle-float animate-delay-600 shadow-md"></div>
        <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-rose-300/30 to-pink-400/20 rounded-full opacity-30 floating-3d animate-gentle-float animate-delay-1000 shadow-lg"></div>
        
        {/* SCHWEBENDE BILDER - Optimiert mit Array */}
        {floatingImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute ${image.position} ${image.size} ${image.opacity} floating-3d ${image.delay} z-10`}
          >
            <div className={`${image.morph} w-full h-full`}>
              <OptimizedImage
                src={image.src}
                alt="Floating Ice Cream"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>
        ))}

      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-gray-900 mb-6 element-3d">
            Über Uns
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mein Name ist Maria, und ich lebe meinen Traum: Die Herstellung von authentischem, handgemachtem Eis. 
              Was als kleine Leidenschaft in meiner Küche begann, ist heute eine Manufaktur geworden, 
              die für Qualität und Geschmack steht.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Jede Sorte wird mit größter Sorgfalt und nur aus den besten, natürlichen Zutaten hergestellt. 
              Ich arbeite eng mit lokalen Bauern zusammen und verwende bevorzugt Bio-Produkte aus der Region. 
              So entstehen täglich frische, kleine Chargen – für den perfekten Geschmack in jeder Kugel.
            </p>
          </div>
        </div>
            
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 glass-effect rounded-2xl hover-pop border border-primary-200 sparkle-on-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 animate-pulse shadow-lg hover-pop"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}