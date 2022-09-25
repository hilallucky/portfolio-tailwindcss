/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        'color-primary': '#14b8a6',
        'color-secondary': '#64748b',
        'color-dark': '#0f172a',
      },
      screens: {
        '2xl': '3120px',
      }
    },
  },
  plugins: [],
}
