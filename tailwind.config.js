/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {extend:{
    fontFamily:{
    'inter':'var(--font-inter)',
    'montserrat':'var(--font-montserrat)'
  }}
  },
  variants: {},
  plugins: [require('@tailwindcss/aspect-ratio')],
};