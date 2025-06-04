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
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
        },
        gelato: {
          strawberry: '#F472B6',
          chocolate: '#8B5A3C',
          pistachio: '#86EFAC',
          vanilla: '#FEF7ED',
          mango: '#FDE047',
          mint: '#A7F3D0',
        },
        accent: {
          pink: '#F472B6',
          yellow: '#FDE047',
          orange: '#FB923C',
          green: '#86EFAC',
          blue: '#7DD3FC',
          purple: '#C084FC',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gelato-gradient': 'linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 25%, #FBCFE8 50%, #F9A8D4 75%, #F472B6 100%)',
        'soft-pink': 'linear-gradient(135deg, #FFFFFF 0%, #FDF2F8 50%, #FCE7F3 100%)',
      },
    },
  },
  plugins: [],
};
