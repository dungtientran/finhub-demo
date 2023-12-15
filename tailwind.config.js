/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        'main-primary': '#FF8700',
        'main-secondary': '##333333',
        'grey-text': '#B9B9B9',
        'grey-bg': '#D9D9D9'
      }
    },
  },
  plugins: [],
}