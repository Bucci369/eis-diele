'use client'

import { useState, useRef, useEffect } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  priority?: boolean
}

export default function OptimizedImage({ 
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
      {/* Placeholder */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: getPlaceholder()
        }}
      />

      {/* Actual Image */}
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