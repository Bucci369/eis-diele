'use client'

import { useState } from 'react'
import Link from 'next/link'

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
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-gray-900 mb-4">
            Unsere Signature Kollektion
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie unsere handgefertigten Gelato-Kreationen
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-600">
                    {product.price}
                  </span>
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                    Bestellen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}