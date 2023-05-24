/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purple': '#6300FF',
      'black': '#171717',
      'white': '#fff',
      DEFAULT: '#171717'
    },
    fontFamily: {
      'main': ['Chakra Petch', 'sans-serif'],
      'second': ['Rubik', 'sans-serif'],
      'sans': ['Rubik', 'sans-serif', defaultTheme.fontFamily.sans]
    },
    borderRadius: {
      'main': '25px',
      'mobile': '20px',
      'input': '16px',
    },
    boxShadow: {
      'main': '0px 0px 15px #0000001A',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.2rem',
      '2xl': '1.5rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}

