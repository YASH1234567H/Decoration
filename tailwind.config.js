/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F5F0',
        charcoal: '#171717',
        gold: '#B88A5A',
        'gold-deep': '#8A6238', // darker gold for small text on light backgrounds (contrast)
        beige: '#D8C7B0',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
