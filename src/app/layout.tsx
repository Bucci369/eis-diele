import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import IceCreamOfTheDay from '../components/IceCreamOfTheDay'  // HIER IMPORTIEREN

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
        {children}
        <IceCreamOfTheDay />  {/* HIER EINFÜGEN - nach {children} */}
      </body>
    </html>
  )
}