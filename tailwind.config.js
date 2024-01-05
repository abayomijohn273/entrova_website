/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        './src/*.{js,jsx,ts,tsx,mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
  theme: {
    extend: {
        fontFamily: {
            sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
            serif: [...defaultTheme.fontFamily.serif],
            mono: [...defaultTheme.fontFamily.mono],
          },
          fontSize: {
            "sm-15": "0.9375rem", //15px
          },
          colors: {
            primary: "var(--color-primary)",
            secondary: "var(--color-secondary)",
            textColor: "var(--color-text)",
          },
    },
  },
  plugins: [],
}
