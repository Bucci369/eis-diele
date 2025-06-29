'use client'

import { useState } from 'react'
import OptimizedImage from './OptimizedImage'

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
      category: "classic",
      image: "/images/Bild1.jpg"
    },
    {
      id: 2,
      category: "premium",
      image: "/images/Bild2.jpg"
    },
    {
      id: 3,
      category: "classic",
      image: "/images/Bild3.jpg"
    },
    {
      id: 4,
      category: "premium",
      image: "/images/Bild4.jpg"
    },
    {
      id: 5,
      category: "vegan",
      image: "/images/Bild5.jpg"
    },
    {
      id: 6,
      category: "premium",
      image: "/images/Bild6.jpg"
    }
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <section id="products" className="section-padding bg-primary-50 frost-pattern relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-40 h-40 bg-white rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-primary-200 rounded-full opacity-40"></div>
        <div className="absolute top-20 left-1/3 w-20 h-20 bg-primary-100 rounded-full opacity-25"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-gray-900 mb-4">
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
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="break-inside-avoid mb-8">
              <OptimizedImage 
                src={product.image} 
                alt={`Eisbecher ${product.id}`}
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                placeholder="gradient"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}