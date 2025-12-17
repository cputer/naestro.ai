// tailwind.config.js - Oxide Computer Design System for Naestro.ai
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: 'rgb(8, 15, 17)',
          50: 'rgb(16, 22, 24)',
          100: 'rgb(20, 27, 29)',
          200: 'rgb(28, 34, 37)',
          300: 'rgb(45, 51, 53)',
          400: 'rgb(64, 70, 71)',
          500: 'rgb(91, 95, 97)',
          600: 'rgb(126, 131, 133)',
          700: 'rgb(161, 164, 165)',
          800: 'rgb(184, 187, 188)',
          900: 'rgb(215, 216, 217)',
          1000: 'rgb(254, 255, 255)',
        },
        green: {
          100: 'rgb(19, 26, 28)',
          200: 'rgb(22, 35, 34)',
          300: 'rgb(28, 55, 46)',
          400: 'rgb(32, 77, 59)',
          500: 'rgb(35, 106, 76)',
          600: 'rgb(35, 138, 94)',
          700: 'rgb(32, 163, 108)',
          800: 'rgb(72, 213, 151)',
        },
        blue: {
          100: 'rgb(23, 24, 33)',
          200: 'rgb(30, 32, 45)',
          300: 'rgb(45, 48, 72)',
          400: 'rgb(60, 67, 102)',
          500: 'rgb(81, 91, 143)',
          600: 'rgb(103, 118, 187)',
          700: 'rgb(120, 138, 221)',
          800: 'rgb(139, 161, 255)',
        },
        red: {
          100: 'rgb(30, 19, 20)',
          200: 'rgb(35, 21, 23)',
          300: 'rgb(48, 27, 29)',
          400: 'rgb(106, 52, 60)',
          500: 'rgb(149, 69, 83)',
          600: 'rgb(195, 87, 106)',
          700: 'rgb(218, 97, 119)',
          800: 'rgb(251, 110, 136)',
        },
        yellow: {
          100: 'rgb(32, 25, 15)',
          200: 'rgb(41, 32, 19)',
          300: 'rgb(61, 48, 25)',
          400: 'rgb(85, 66, 31)',
          500: 'rgb(118, 90, 39)',
          600: 'rgb(153, 116, 48)',
          700: 'rgb(202, 153, 59)',
          800: 'rgb(245, 185, 68)',
        },
        accent: {
          DEFAULT: 'rgb(72, 213, 151)',
          hover: 'rgb(32, 163, 108)',
          light: 'rgb(22, 35, 34)',
        },
        surface: {
          DEFAULT: 'rgb(8, 15, 17)',
          raised: 'rgb(16, 22, 24)',
          secondary: 'rgb(20, 27, 29)',
        },
        content: {
          primary: 'rgb(184, 187, 188)',
          secondary: 'rgb(161, 164, 165)',
        },
        stroke: {
          DEFAULT: 'rgb(45, 51, 53)',
          hover: 'rgb(64, 70, 71)',
        },
      },
    },
  },
  plugins: [],
}
