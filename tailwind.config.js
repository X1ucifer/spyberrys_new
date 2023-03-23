/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#355BC0',
        secondary:'#000000',
      }
    },
  },
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    'postcss-preset-env',
  ],
}
