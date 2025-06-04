export default function About() {
  const values = [
    { title: "Nachhaltigkeit", desc: "Regionale Bio-Zutaten" },
    { title: "Handwerk", desc: "Traditionelle Rezepte" },
    { title: "Leidenschaft", desc: "Für perfekten Geschmack" }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 via-rose-25 to-pink-100 relative overflow-hidden section-animate animate-wipe">
      <div className="absolute inset-0 parallax-element overflow-visible" data-speed="0.3" style={{zIndex: 1}}>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-300/40 to-pink-400/30 rounded-full opacity-60 floating-3d animate-gentle-float animate-pulse shadow-lg"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-rose-200/60 to-pink-300/50 rounded-full opacity-50 floating-3d animate-gentle-float animate-delay-800 shadow-sm"></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-pink-200/40 to-rose-300/30 rounded-full opacity-40 floating-3d animate-gentle-float animate-delay-600 shadow-md"></div>
        <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-rose-300/30 to-pink-400/20 rounded-full opacity-30 floating-3d animate-gentle-float animate-delay-1000 shadow-lg"></div>
        
        {/* New floating images extending to Products section - better distributed */}
        <div className="absolute -bottom-24 left-16 w-36 h-36 opacity-20 floating-3d animate-gentle-float animate-delay-400 morph-rotate-1 overflow-visible" style={{zIndex: 1}}>
          <div className="w-full h-full rounded-full overflow-hidden backdrop-blur-sm border border-white/20 shadow-lg">
            <img src="/images/image14.jpeg" alt="Floating Element" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        
        <div className="absolute -bottom-36 right-32 w-32 h-32 opacity-15 floating-3d animate-gentle-float animate-delay-800 morph-rotate-2 overflow-visible" style={{zIndex: 1}}>
          <div className="w-full h-full rounded-full overflow-hidden backdrop-blur-sm border border-white/20 shadow-lg">
            <img src="/images/image15.jpeg" alt="Floating Element" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        
        <div className="absolute -bottom-20 left-2/3 w-28 h-28 opacity-25 floating-3d animate-gentle-float animate-delay-1200 morph-rotate-3 overflow-visible" style={{zIndex: 1}}>
          <div className="w-full h-full rounded-full overflow-hidden backdrop-blur-sm border border-white/20 shadow-lg">
            <img src="/images/image16.jpeg" alt="Floating Element" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-gray-900 mb-6 element-3d">
            Über Uns
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed animate-on-load animate-fade-in-up animate-delay-800">
              Mein Name ist Maria, und ich lebe meinen Traum: Die Herstellung von authentischem, handgemachtem Eis. 
              Was als kleine Leidenschaft in meiner Küche begann, ist heute eine Manufaktur geworden, 
              die für Qualität und Geschmack steht.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed animate-on-load animate-fade-in-up animate-delay-1200">
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