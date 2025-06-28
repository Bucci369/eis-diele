'use client'

import { useEffect } from 'react'

export function useImagePreloader(images = []) {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/images/image1.jpg',
      '/images/image5.jpg',
      '/images/image3.jpg',
      '/images/image4.jpg',
      '/images/image6.jpg',
      '/images/image11.png',
      '/images/image12.png',
      '/images/image13.png',
      '/images/image14.png',
      '/images/image15.png',
      '/images/image16.png',
      ...images
    ]

    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        
        img.onload = () => {
          resolve(img)
        }
        
        img.onerror = () => {
          reject(new Error(`Failed to load image: ${src}`))
        }
        
        // Use intersection observer for lazy preloading
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              img.src = src
              observer.disconnect()
            }
          },
          { rootMargin: '100px' }
        )
        
        // Create a dummy element for observation
        const dummyEl = document.createElement('div')
        document.body.appendChild(dummyEl)
        observer.observe(dummyEl)
        
        // Cleanup
        setTimeout(() => {
          if (document.body.contains(dummyEl)) {
            document.body.removeChild(dummyEl)
          }
          observer.disconnect()
        }, 100)
      })
    }

    // Preload images with priority
    const preloadWithPriority = async () => {
      // High priority - preload immediately
      const highPriorityImages = criticalImages.slice(0, 2)
      
      try {
        await Promise.all(
          highPriorityImages.map(src => preloadImage(src))
        )
        
        // Medium priority - preload after a delay
        setTimeout(() => {
          const mediumPriorityImages = criticalImages.slice(2, 4)
          Promise.all(
            mediumPriorityImages.map(src => preloadImage(src))
          ).catch(console.warn)
        }, 1000)
        
        // Low priority - preload when idle
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            const lowPriorityImages = criticalImages.slice(4);
            // Nur ausführen, wenn tatsächlich Bilder in dieser Kategorie vorhanden sind
            if (lowPriorityImages.length > 0) {
              Promise.all(
                lowPriorityImages.map(src => preloadImage(src))
              ).catch(console.warn);
            }
          });
        } else {
          // Fallback für Browser ohne requestIdleCallback
          setTimeout(() => {
            const lowPriorityImages = criticalImages.slice(4);
            // Nur ausführen, wenn tatsächlich Bilder in dieser Kategorie vorhanden sind
            if (lowPriorityImages.length > 0) {
              Promise.all(
                lowPriorityImages.map(src => preloadImage(src))
              ).catch(console.warn);
            }
          }, 2000); // Ein angemessener Delay für den Fallback
        }
        
      } catch (error) {
        console.warn('Image preloading failed:', error)
      }
    }

    // Only preload on good connections
    if ('connection' in navigator) {
      const connection = navigator.connection
      const isGoodConnection = 
        connection.effectiveType === '4g' || 
        connection.effectiveType === '3g'
      
      if (isGoodConnection && !connection.saveData) {
        preloadWithPriority()
      }
    } else {
      // Fallback for browsers without connection API
      preloadWithPriority()
    }

  }, [images])
}