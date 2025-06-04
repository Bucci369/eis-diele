'use client'

import { useState, useEffect } from 'react'

export default function IceCreamOfTheDay() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const todaysFlavor = {
    name: "Salzkaramell Deluxe",
    description: "Mit hausgemachtem Karamell und Fleur de Sel",
    price: "€4.90",
    discount: "-20%"
  }
  
  return (
    <div className={`
      fixed bottom-8 right-8 z-50 transform transition-all duration-700
      ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
    `}>
      <div className="bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-2xl p-6 shadow-2xl max-w-sm relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16 animate-pulse"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold">🍦 Eis des Tages</h3>
            <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-sm font-bold animate-bounce">
              {todaysFlavor.discount}
            </span>
          </div>
          
          <h4 className="text-2xl font-playfair mb-2">{todaysFlavor.name}</h4>
          <p className="text-pink-100 text-sm mb-4">{todaysFlavor.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">{todaysFlavor.price}</span>
            <button className="bg-white text-pink-600 px-4 py-2 rounded-full font-medium hover:bg-pink-50 transition-colors">
              Jetzt probieren
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white/70 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  )
}