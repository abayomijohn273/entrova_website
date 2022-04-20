const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "sm-15": "0.9375rem", //15px
      },
      colors: {
        default: "var(--color-default)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        grey: "var(--color-gray)"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
