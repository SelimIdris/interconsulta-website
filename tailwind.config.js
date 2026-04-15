/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', /* Warmer cream from Furnispace */
        surface: '#FFFFFF',
        textDark: '#1E242B',
        accent: '#DDA15E',     
        darkContrast: '#393939', 
        borderAccent: 'rgba(30, 36, 43, 0.08)'
      },
      fontFamily: {
        heading: ['Switzer', 'sans-serif'],
        sans: ['Switzer', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(64, 50, 38, 0.05)',
        'premium': '0 20px 60px -10px rgba(64, 50, 38, 0.08)',
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
      }
    },
  },
  plugins: [],
}
