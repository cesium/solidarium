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
        poppins_light: ["Poppins-light"],
        poppins_regular: ["Poppins-regular"],
      },
      colors: {
        primary: "#9f1d26",
        secondary: "#ffe4d9",
        tertiary: "#ffe4d9"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
