/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#1a1f3c',
          900: '#0f1429',
        },
        gold: {
          400: '#d4af37',
          500: '#c5a028',
        }
      }
    },
  },
  plugins: [],
}
