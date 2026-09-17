/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pilkades: {
          navy: '#0b192c',
          navyDark: '#060d17',
          gold: '#d4af37',
          goldLight: '#f3e5ab',
          goldDark: '#aa820a',
          red: '#c9182b',
          maroon: '#800000',
          cream: '#fffdf5',
          creamDark: '#f7f4ea',
          slate: '#1e293b',
          blueBorder: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        montserrat: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        cinzel: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif']
      }
    },
  },
  plugins: [],
}
