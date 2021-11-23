module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./sections/**/*.{js,ts,jsx,tsx}' ,'./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'xl': '24px',
    },

    extend: {
      fontFamily: {
        ontel: ["Ontel"],
        code_light: ["Code-light"],
        code_regular: ["Code-regular"],
        code_bold: ["Code-bold"]
      },
      colors: {
        primary: "#D53932",
        secondary: "#9c191b",
        tertiary: "#1c6131"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
