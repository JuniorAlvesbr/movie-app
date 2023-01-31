/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-degrade": "linear-gradient(90deg, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.0) 45%);"
      }
    },
  },
  plugins: [],
}
