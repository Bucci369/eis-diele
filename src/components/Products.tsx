'use client'

import { useState } from 'react'
import TiltCard from './TiltCard'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Alle' },
    { id: 'classic', name: 'Klassisch' },
    { id: 'premium', name: 'Premium' },
    { id: 'vegan', name: 'Vegan' }
  ]

  const products = [
    {
      id: 1,
      name: "Erdbeere Deluxe",
      description: "Cremiges Gelato mit frischen Erdbeeren",
      price: "€4.50",
      category: "classic",
      image: "/images/image1.jpeg"
    },
    {
      id: 2,
      name: "Pistazie Sizilien",
      description: "Luxuriöses Gelato mit sizilianischen Pistazien",
      price: "€6.50",
      category: "premium",
      image: "/images/image5.jpeg"
    },
    {
      id: 3,
      name: "Schokolade Noir",
      description: "Intensives Gelato mit 70% Valrhona Schokolade",
      price: "€5.00",
      category: "classic",
      image: "/images/image3.jpeg"
    },
    {
      id: 4,
      name: "Gelato Varietäten",
      description: "Vielfältige Geschmackskombinationen in eleganten Gläsern",
      price: "€5.50",
      category: "premium",
      image: "/images/image2.jpeg"
    },
    {
      id: 5,
      name: "Bunte Eiskreation",
      description: "Fröhliche Mischung mit bunten Streuseln",
      price: "€4.80",
      category: "vegan",
      image: "/images/image6.png"
    },
    {
      id: 6,
      name: "Premium Gelato Turm",
      description: "Spektakulärer Turm aus verschiedenen Gelato-Sorten",
      price: "€8.20",
      category: "premium",
      image: "/images/image4.jpeg"
    }
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <section id="products" className="section-padding bg-primary-50 frost-pattern relative overflow-hidden section-animate animate-left">
      <div className="absolute inset-0 parallax-element" data-speed="0.2">
        <div className="absolute top-40 right-20 w-40 h-40 bg-white rounded-full opacity-30 floating-3d"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-primary-200 rounded-full opacity-40 floating-3d"></div>
        <div className="absolute top-20 left-1/3 w-20 h-20 bg-primary-100 rounded-full opacity-25 floating-3d"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-gray-900 mb-4 element-3d sparkle-on-hover">
            Unsere Eis Sorten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handgefertigt aus den besten natürlichen Zutaten
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-pop click-burst ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg sparkle-on-hover'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <TiltCard key={product.id} className="scroll-animate group">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 border border-primary-100 hover-lift h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary-600">
                      {product.price}
                    </span>
                    <button className="px-4 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 text-sm font-medium hover-glow hover-pop liquid-button-enhanced confetti-button click-burst">
                      Bestellen
                    </button>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}