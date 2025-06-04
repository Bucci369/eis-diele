export default function About() {
  const values = [
    { title: "Nachhaltigkeit", desc: "Regionale Bio-Zutaten" },
    { title: "Handwerk", desc: "Traditionelle Rezepte" },
    { title: "Leidenschaft", desc: "Für perfekten Geschmack" }
  ]

  return (
    <section id="about" className="py-20 bg-white bubble-pattern relative overflow-hidden section-animate animate-wipe">
      <div className="absolute inset-0 parallax-element" data-speed="0.3">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-100 rounded-full opacity-20 floating-3d"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-200 rounded-full opacity-30 floating-3d"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-primary-50 rounded-full opacity-15 floating-3d"></div>
        {/* GROSSER BUBBLE VON HERO HIERHER ZURÜCKGEBRACHT */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-primary-100/10 to-primary-200/15 rounded-full opacity-25 floating-3d backdrop-blur-sm"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-gray-900 mb-6 element-3d">
            Über Uns
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed scroll-animate">
              Mein Name ist Maria, und ich lebe meinen Traum: Die Herstellung von authentischem, handgemachtem Eis. 
              Was als kleine Leidenschaft in meiner Küche begann, ist heute eine Manufaktur geworden, 
              die für Qualität und Geschmack steht.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed scroll-animate">
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