import Link from 'next/link'
import ParticleBackground from './ParticleBackground'
import FloatingElements from './FloatingElements'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-soft-pink ice-crystal-pattern flex items-center pt-16 relative overflow-hidden">
      <ParticleBackground />
      <FloatingElements />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-gray-900 leading-tight mb-6">
            <span className="block animate-melt-down animate-delay-200">Eis Diele</span>
            <span className="block gradient-text animate-melt-down animate-delay-400 animate-pulse-glow">Manufaktur</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed animate-on-load animate-fade-in-up animate-delay-200">
            Handgefertigtes Eis aus natürlichen Zutaten – mit Leidenschaft und Tradition hergestellt. 
            Jede Sorte wird in kleinen Chargen frisch produziert für den perfekten Geschmack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-on-load animate-fade-in-up animate-delay-400">
            <Link 
              href="#products" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-500 hover:bg-primary-600 transition-all duration-300 shadow-md hover-lift hover-glow liquid-button-enhanced confetti-button click-burst"
            >
              Unsere Sorten
            </Link>
            <Link 
              href="#about" 
              className="inline-flex items-center justify-center px-8 py-3 border border-primary-300 text-base font-medium rounded-full text-primary-600 bg-white hover:bg-primary-50 transition-all duration-300 shadow-md hover-lift liquid-button-enhanced sparkle-on-hover"
            >
              Unsere Geschichte
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center animate-on-load animate-fade-in-scale animate-delay-600">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 hover-pop sparkle-on-hover element-3d">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm text-gray-600 font-medium">Natürliche Zutaten</p>
            </div>
            <div className="text-center animate-on-load animate-fade-in-scale animate-delay-600">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 hover-pop sparkle-on-hover element-3d">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm text-gray-600 font-medium">Handgefertigt</p>
            </div>
            <div className="text-center animate-on-load animate-fade-in-scale animate-delay-800">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 hover-pop sparkle-on-hover element-3d">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm text-gray-600 font-medium">Regional & Bio</p>
            </div>
            <div className="text-center animate-on-load animate-fade-in-scale animate-delay-800">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 hover-pop sparkle-on-hover element-3d">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm text-gray-600 font-medium">Mit Liebe gemacht</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}