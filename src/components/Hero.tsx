import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gelato-gradient flex items-center pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-playfair text-gray-900 leading-tight">
              <span className="block">Artisan</span>
              <span className="block text-primary-600">Gelato</span>
              <span className="block">Excellence</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Handgefertigt mit Leidenschaft, serviert mit Liebe
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="#products" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Unsere Kreationen
              </Link>
              <Link 
                href="#location" 
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Besuchen Sie uns
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/images/image4.jpeg" 
                  alt="Colorful Gelato Stack" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent-yellow rounded-full opacity-75"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gelato-strawberry rounded-full opacity-75"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}