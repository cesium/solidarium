module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#D53932",
        secondary: "#C44545",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
