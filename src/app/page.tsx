import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Products from '@/components/Products'
import About from '@/components/About'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Products />
      <About />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}