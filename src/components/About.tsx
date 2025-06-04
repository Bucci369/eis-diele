export default function About() {
  const stats = [
    { number: "20+", label: "Jahre Erfahrung" },
    { number: "50+", label: "Unique Sorten" },
    { number: "100%", label: "Handgemacht" }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-gray-900 mb-6">
              Unsere Geschichte
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Seit über 20 Jahren kreieren wir authentisches italienisches Gelato nach traditionellen Rezepten unserer Familie.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Unsere Leidenschaft für Qualität und Geschmack spiegelt sich in jeder Kugel wider. Wir verwenden nur die besten Zutaten aus nachhaltiger Produktion und stellen täglich frisch her.
            </p>
            
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/images/image2.jpeg" 
                  alt="Gelato Varieties" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary-400 rounded-full opacity-20"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-gelato-strawberry rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}