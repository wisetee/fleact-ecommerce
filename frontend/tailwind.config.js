/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      colors: {
        gray: {
          800: '#212529'
        }
      }
    },
  },
  plugins: [],
}

