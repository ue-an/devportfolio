/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./src/**/*.{jsx,js,ts,tsx,css,html}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 1px 1px rgba(255, 255, 255, 0.50)',
      },
      colors: {
        primary: "#030712",

        accent: "#06b6d4",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

