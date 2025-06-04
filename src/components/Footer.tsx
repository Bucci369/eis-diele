import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'Produkte', href: '#products' },
      { name: 'Über Uns', href: '#about' },
      { name: 'Standort', href: '#location' }
    ],
    service: [
      { name: 'Catering', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Lieferung', href: '#' },
      { name: 'Geschenkgutscheine', href: '#' }
    ],
    legal: [
      { name: 'Impressum', href: '#' },
      { name: 'Datenschutz', href: '#' },
      { name: 'AGB', href: '#' }
    ]
  }

  return (
    <footer className="bg-gradient-to-br from-rose-100 via-pink-50 to-rose-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold font-playfair mb-4 text-gray-800">
              Eis Diele
            </h3>
            <p className="text-gray-600 text-base">
              Handgemachtes Eis mit Leidenschaft seit 2020
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-primary-300 transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Service</h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-primary-300 transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Rechtliches</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-primary-300 transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-rose-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-base">
            &copy; 2024 Eis Diele Manufaktur. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}