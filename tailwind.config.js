/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"
    , "./hi/*.{html,js}",
    "./hi/*/*.{html,js}",
    "./hi/*/*/*.{html,js}",
    "./en/*.{html,js}",
    "./en/*/*.{html,js}",
    "./en/*/*/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}