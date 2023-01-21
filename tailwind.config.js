/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--poppins-font)", ...fontFamily.sans],
      },
      dropShadow:{
        'pk': '0 0 5px rgba(0,0,0,.6)'
      },
      colors:{
        normal: "var(--normal-color)",
        fighting: "var(--fighting-color)",
        flying: "var(--flying-color)",
        poison: "var(--poison-color)",
        ground: "var(--ground-color)",
        rock: "var(--rock-color)",
        bug: "var(--bug-color)",
        ghost: "var(--ghost-color)",
        steel: "var(--steel-color)",
        fire: "var(--fire-color)",
        water: "var(--water-color)",
        grass: "var(--grass-color)",
        electric: "var(--electric-color)",
        psychic: "var(--psychic-color)",
        ice: "var(--ice-color)",
        dragon: "var(--dragon-color)",
        dark: "var(--dark-color)",
        fairy: "var(--fairy-color)",
        unknown: "var(--unknown-color)",
        shadow: "var(--shadow-color)"
      }
    },
  },
  plugins: [],
}
