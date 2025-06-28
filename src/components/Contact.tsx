'use client'


export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 relative overflow-hidden">
            
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-gray-900 mb-4">
            Besuchen Sie uns
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beispiel-Standort für Portfolio-Demonstration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Spalte 1: Interaktive Karte */}
          <div className="rounded-2xl shadow-xl overflow-hidden relative w-full h-[400px] md:h-[500px]">
            <iframe
              // Annahme: '.../6' ist die korrekte "eingebettete" URL von Google Maps "Teilen" -> "Karte einbetten"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.632950917617!2d13.410731077079818!3d52.52198137206168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1edb11286f%3A0x30fc01c366e4166e!2sAlexanderplatz!5e0!3m2!1sde!2sde!4v1749121069942!5m2!1sde!2sde"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Spalte 2: Kombinierte Kontaktinformationen & Öffnungszeiten */}
          <div className="space-y-8">
            
            {/* Block 1: Kontakt & Standort */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Kontakt & Standort</h3>
              <div className="space-y-6">
                {/* Adresse */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center text-pink-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Muster Standort</p>
                    <p className="text-gray-600">Beispielstraße 123</p>
                    <p className="text-gray-600">12345 Musterstadt</p>
                    <p className="text-sm text-gray-500 mt-1">Zentrale Lage in der Innenstadt</p>
                  </div>
                </div>
                {/* Telefon */}
                <a 
                  href="tel:+49XXXXXXXXX" 
                  className="flex items-center space-x-4 text-gray-700 hover:text-pink-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">+49 XXX XXXXXXX</p>
                    <p className="text-sm text-gray-500">Kontakt für Anfragen</p>
                  </div>
                </a>
                {/* Social Media */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">Folgen Sie uns:</p>
                  <div className="flex space-x-3">
                    <a href="#" className="w-11 h-11 sm:h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-200 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> {/* Instagram Icon */}
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-11 h-11 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> {/* Facebook Icon */}
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: Öffnungszeiten */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Öffnungszeiten</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2.5">
                  <span className="text-gray-700">Montag</span>
                  <span className="text-gray-900 font-medium">Geschlossen</span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-gray-700">Dienstag - Donnerstag</span>
                  <span className="text-gray-900 font-medium">12:00 - 22:00</span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-gray-700">Freitag - Samstag</span>
                  <span className="text-gray-900 font-medium">11:00 - 23:00</span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-gray-700">Sonntag</span>
                  <span className="text-gray-900 font-medium">11:00 - 22:00</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Barrierefreier Zugang • Außenbereich vorhanden
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}