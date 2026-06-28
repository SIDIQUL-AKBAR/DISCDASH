/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#030712',
          card: '#0b0f19',
          accent: '#6366f1',
          glow: '#38bdf8'
        }
      },
    },
  },
  plugins: [],
}
