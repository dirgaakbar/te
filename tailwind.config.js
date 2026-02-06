/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefbf3',
          100: '#fdf6e7',
          200: '#fbeccf',
          300: '#f8dbb0',
          400: '#f4c285',
          500: '#f0a855',
          600: '#e8953a',
          700: '#d17a2a',
          800: '#b06226',
          900: '#915224',
        },
        champagne: {
          50: '#fefcf9',
          100: '#fdf8f0',
          200: '#faefd9',
          300: '#f6e1b8',
          400: '#f0cc8c',
          500: '#e9b35c',
          600: '#d99a3d',
          700: '#b57a2f',
          800: '#94622a',
          900: '#7a5127',
        },
        warm: {
          white: '#faf8f5',
          cream: '#f5f1eb',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
