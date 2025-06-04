import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors inspired by the gelato images
        primary: {
          50: '#E8F8F5',   // Very light teal
          100: '#B3EDE5',  // Light teal
          200: '#7DDDD2',  // Medium light teal
          300: '#4DCDBE',  // Medium teal
          400: '#26BDA8',  // Medium dark teal
          500: '#0A9B8A',  // Main teal (matching image backgrounds)
          600: '#087B6F',  // Dark teal
          700: '#065B54',  // Darker teal
          800: '#043D3A',  // Very dark teal
          900: '#021F1F',  // Darkest teal
        },
        // Secondary colors for gelato flavors
        gelato: {
          strawberry: '#E91E63',    // Pink from strawberry gelato
          chocolate: '#5D4037',     // Rich brown from chocolate
          pistachio: '#4CAF50',     // Green from pistachio
          vanilla: '#FFF8DC',       // Cream from vanilla
          mango: '#FF9800',         // Orange from mango
          mint: '#81C784',          // Light green from mint
        },
        // Accent colors from the vibrant image backgrounds
        accent: {
          pink: '#E91E63',
          yellow: '#FFC107',
          orange: '#FF9800',
          green: '#4CAF50',
          blue: '#0A9B8A',
          purple: '#9C27B0',
        }
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'Playfair Display', 'serif'],
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
export default config