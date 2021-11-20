module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ontel: ["Ontel"],
        code_light: ["Code-light"],
        code_regular: ["Code-regular"],
        code_bold: ["Code-bold"]
      },
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
