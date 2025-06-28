'use client'

import { useState, useEffect } from 'react'

export default function KugelKontoCard() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShownOnce, setHasShownOnce] = useState(false) // Sorgt dafür, dass die Karte nur einmal gezeigt wird
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    // Sicherstellen, dass der Code nur im Browser ausgeführt wird (wichtig für Next.js SSR)
    if (typeof window === 'undefined') {
      return;
    }

    // Wenn die Karte bereits einmal eingeblendet wurde, beenden wir den Effekt
    if (hasShownOnce) {
      return;
    }

    // Das Element, das wir beobachten wollen (deine Kontakt-Sektion)
    const contactSection = document.getElementById('contact');

    // Wenn die Kontakt-Sektion nicht gefunden wird, gib eine Warnung aus und beende den Effekt
    if (!contactSection) {
      console.warn("KugelKontoCard: Element with ID 'contact' not found. The card will not appear on scroll.");
      return;
    }

    // Erstelle einen neuen Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Wenn der Kontaktbereich sichtbar ist UND die Karte noch nicht gezeigt wurde
          if (entry.isIntersecting && !hasShownOnce) {
            setIsVisible(true); // Karte sichtbar machen
            setHasShownOnce(true); // Status setzen, dass die Karte gezeigt wurde
            observer.unobserve(contactSection); // Beobachtung stoppen, um weitere Einblendungen zu verhindern
          }
        });
      },
      {
        rootMargin: '0px',   // Standard-Root (Viewport)
        threshold: 0.1,      // Karte einblenden, wenn 10% der Sektion sichtbar sind
      }
    );

    // Starte die Beobachtung des Kontaktbereichs
    observer.observe(contactSection);

    // Cleanup-Funktion: Stoppe die Beobachtung, wenn die Komponente unmounted wird
    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, [hasShownOnce]); // Effekt neu ausführen, wenn 'hasShownOnce' sich ändert

  // Touch-Funktionen für Wisch-Geste
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isRightSwipe) {
      setIsVisible(false) // Karte durch Wischen nach rechts schließen
    }
  }

  const closeCard = () => {
    setIsVisible(false)
  }

  return (
    <div className={`
      fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 
      transform transition-all duration-700
      ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
    `}>
      <div 
        className="bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-2xl p-4 sm:p-6 shadow-2xl max-w-xs sm:max-w-sm relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Animiertes Hintergrundmuster für visuellen Flair - bleibt weiß für Kontrast */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 -translate-y-16 animate-pulse"></div>
        </div>
        
        {/* Inhalt der Innovationskarte */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="mb-3 sm:mb-4 text-center">
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2">Innovation trifft Tradition</h3>
            <h4 className="text-sm sm:text-xl font-playfair text-white mb-2 leading-tight">Moderne Technologie für authentischen Geschmack</h4>
            <p className="text-white text-xs sm:text-sm opacity-90">Digitale Lösungen, die das Eis-Erlebnis revolutionieren – von der Bestellung bis zur Kundenbindung.</p>
            {/* Mobile Schließen-Hinweis - nur auf Touch-Geräten */}
            <p className="text-white/70 text-xs mt-2 sm:hidden">← Wischen zum Schließen</p>
          </div>
          
          <div className="flex items-center justify-center pt-3 sm:pt-4 border-t border-white/30">
            <button 
              onClick={closeCard}
              className="text-white/80 hover:text-white text-sm sm:text-base underline hover:no-underline transition-all duration-200 px-2 py-1 rounded"
            >
              Schließen
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}