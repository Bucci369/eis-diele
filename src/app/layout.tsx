import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
// **WICHTIG:** Sicherstellen, dass der Import-Pfad und der Name korrekt sind
import KugelKontoCard from '../components/IceCreamOfTheDay' 
import HydrationFix from '../components/HydrationFix' // NEU

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Gelato Dreams - Premium Artisan Eis',
  description: 'Handgefertigt mit Leidenschaft, serviert mit Liebe. Premium italienisches Gelato nach traditionellen Familienrezepten.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <HydrationFix />  {/* Hilft bei Client-Side Rendering Problemen */}
        {children}
        {/* **WICHTIG:** Die KugelKontoCard wird hier global gerendert */}
        <KugelKontoCard /> 
      </body>
    </html>
  )
}