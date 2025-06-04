/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F8F5',
          100: '#B3EDE5',
          200: '#7DDDD2',
          300: '#4DCDBE',
          400: '#26BDA8',
          500: '#0A9B8A',
          600: '#087B6F',
          700: '#065B54',
          800: '#043D3A',
          900: '#021F1F',
        },
        gelato: {
          strawberry: '#E91E63',
          chocolate: '#5D4037',
          pistachio: '#4CAF50',
          vanilla: '#FFF8DC',
          mango: '#FF9800',
          mint: '#81C784',
        },
        accent: {
          pink: '#E91E63',
          yellow: '#FFC107',
          orange: '#FF9800',
          green: '#4CAF50',
          blue: '#0A9B8A',
          purple: '#9C27B0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gelato-gradient': 'linear-gradient(135deg, #E8F8F5 0%, #B3EDE5 25%, #7DDDD2 50%, #4DCDBE 75%, #0A9B8A 100%)',
      },
    },
  },
  plugins: [],
}
