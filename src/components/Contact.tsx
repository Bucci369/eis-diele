'use client'

import { useState } from 'react'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Nachricht gesendet! Wir melden uns bald bei Ihnen.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-rose-50 via-pink-25 to-rose-100 section-animate animate-pop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-gray-900 mb-6 element-3d sparkle-on-hover">
              Lassen Sie uns sprechen
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Haben Sie Fragen oder möchten Sie eine private Verkostung buchen?
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:info@eisdiele.de" 
                className="flex items-center space-x-4 text-gray-700 hover:text-primary-600 transition-all duration-300 hover-pop"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-primary-600 glass-effect sparkle-on-hover">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg">info@eisdiele.de</span>
              </a>

              <a 
                href="tel:+4930123456789" 
                className="flex items-center space-x-4 text-gray-700 hover:text-primary-600 transition-all duration-300 hover-pop"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-primary-600 glass-effect sparkle-on-hover">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-lg">+49 30 12345678</span>
              </a>

              <div className="flex space-x-4 pt-4">
                <a href="#" className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-200 transition-all duration-300 hover-pop glass-effect confetti-button">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.747-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-all duration-300 hover-pop glass-effect confetti-button">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-all duration-300 hover-pop glass-effect confetti-button">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
              
              
              
            </div>
          </div>
          

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-rose-200">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ihr Name"
                required
                className="w-full px-4 py-3 bg-white/80 border border-rose-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 outline-none transition-all duration-300 shadow-sm backdrop-blur-sm"
              />
            </div>            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ihre E-Mail"
                required
                className="w-full px-4 py-3 bg-white/80 border border-rose-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 outline-none transition-all duration-300 shadow-sm backdrop-blur-sm"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Ihre Nachricht"
                rows={5}
                required
                className="w-full px-4 py-3 bg-white/80 border border-rose-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 outline-none transition-all duration-300 resize-none shadow-sm backdrop-blur-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-xl hover:bg-primary-700 transition-all duration-300 font-medium liquid-button-enhanced confetti-button hover-pop"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}