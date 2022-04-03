const colors = require('tailwindcss/colors');
const typography = require("@tailwindcss/typography");
const scrollbar = require("tailwind-scrollbar");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts,zine}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      mono: ['IBM Plex Mono', 'monospace'],
      sans: ['IBM Plex Sans', 'sans-serif'],
      serif: ['IBM Plex Serif', 'serif'],
    },
    extend: {
      colors: {
        'core': colors.zinc,
        'primary': colors.blue
      }
    },
  },
  plugins: [
    typography,
    scrollbar
  ],
};

module.exports = config;