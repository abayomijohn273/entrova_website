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
            sans:    ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
            display: ["var(--font-space-grotesk)", ...defaultTheme.fontFamily.sans],
            serif:   [...defaultTheme.fontFamily.serif],
            mono:    [...defaultTheme.fontFamily.mono],
          },
          fontSize: {
            "sm-15": "0.9375rem", //15px
          },
          colors: {
            primary:  "var(--color-primary)",
            secondary: "var(--color-secondary)",
            textColor: "var(--color-text)",
            'conf-bg':      '#0C0C0F',
            'conf-surface': '#16161C',
            'conf-card':    '#1E1E27',
            'conf-amber':   '#F5A623',
            'conf-coral':   '#E8553E',
            'conf-cream':   '#F0EDE6',
          },
    },
  },
  plugins: [],
}
