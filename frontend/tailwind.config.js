/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purple': '#6300FF',
      'black': '#171717',
      'white': '#fff'
    },
    fontFamily: {
      'main': ['Chakra Petch', 'sans-serif'],
      'second': ['Rubik', 'sans-serif'],
    },
    borderRadius: {
      'main': '25px',
      'mobile': '20px',
      'input': '16px',
    },
    boxShadow: {
      'main': '0 0px 0px 15px #0000001A',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  plugins: [],
}

