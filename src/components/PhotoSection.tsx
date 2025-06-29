'use client'

import OptimizedImage from './OptimizedImage'

export default function PhotoSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-gray-900">
            <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-6 leading-tight text-gray-900">
              Meisterlich
              <span className="block text-primary-600">kreiert</span>
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Jede Kugel Eis ist ein kleines Kunstwerk. Mit Leidenschaft und jahrelanger 
              Erfahrung kreieren wir Geschmackserlebnisse, die Sie nie vergessen werden.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">100% Natürliche Zutaten</h3>
                  <p className="text-gray-600">Keine künstlichen Zusatzstoffe oder Konservierungsmittel</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Täglich frisch</h3>
                  <p className="text-gray-600">Hergestellt jeden Morgen in unserer hauseigenen Manufaktur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="relative">
            {/* Floating info cards */}
            <div className="space-y-6">
              <div className="bg-primary-100/80 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 floating-3d">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-primary-600">15+</div>
                  <div>
                    <div className="font-semibold text-gray-900">Jahre Erfahrung</div>
                    <div className="text-sm text-gray-600">Meisterliche Handwerkskunst</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-600 text-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 floating-3d ml-12">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold">50+</div>
                  <div>
                    <div className="font-semibold">Sorten im Sortiment</div>
                    <div className="text-sm opacity-90">Vielfalt für jeden Geschmack</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-100/80 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 floating-3d">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-primary-600">100%</div>
                  <div>
                    <div className="font-semibold text-gray-900">Natürlich</div>
                    <div className="text-sm text-gray-600">Ohne künstliche Zusatzstoffe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
