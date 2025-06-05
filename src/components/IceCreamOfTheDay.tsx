'use client'

import { useState, useEffect } from 'react'

export default function KugelKontoCard() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShownOnce, setHasShownOnce] = useState(false) // Sorgt dafür, dass die Karte nur einmal gezeigt wird

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

  return (
    <div className={`
      fixed bottom-8 right-8 z-50 
      transform transition-all duration-700
      ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      hidden md:block 
    `}>
      <div className="bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-2xl p-6 shadow-2xl max-w-sm relative overflow-hidden">
        {/* Animiertes Hintergrundmuster für visuellen Flair - bleibt weiß für Kontrast */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 -translate-y-16 animate-pulse"></div>
        </div>
        
        {/* Inhalt der Bonuskarte */}
        <div className="relative z-10 flex flex-col justify-between h-full"> {/* Flexbox für bessere Textverteilung */}
          <div className="mb-4"> {/* Erhöhter Abstand für den Titel */}
            <h3 className="text-2xl font-extrabold text-white mb-2">🍦 Dein Kugel Konto</h3> {/* Größer und kräftiger */}
            <h4 className="text-xl font-playfair text-white mb-2 leading-tight">Sammle Kugeln, erhalte gratis Eis!</h4> {/* Weißer Text */}
            <p className="text-white text-sm opacity-90">Deine Treue wird belohnt – einfach bei jedem Besuch stempeln lassen.</p> {/* Weißer Text, leicht transparent */}
          </div>
          
          <div className="flex items-center justify-center pt-4 border-t border-white/30"> {/* Trennlinie und zentrierter Button */}
            <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors shadow-md">
              Mehr Infos
            </button>
          </div>
        </div>
        
        {/* Schließen-Button für die Karte */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-white/80 hover:text-white text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  )
}