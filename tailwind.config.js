/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: {
        light: colors.zinc[300],
        dark: colors.zinc[700]
      },
      secondary: {
        light: colors.slate[300],
        dark: colors.slate[700]
      },
      accent: {
        light: colors.indigo[300],
        dark: colors.indigo[700]
      },
      background: {
        light: colors.gray[100],
        dark: colors.gray[900]
      },
      text: {
        light: colors.zinc[800],
        dark: colors.zinc[200]
      }
    },
    minWidth: {
      96: '24rem'
    }
  },
  plugins: []
};
