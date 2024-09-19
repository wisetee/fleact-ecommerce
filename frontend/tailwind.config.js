/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif']
      },
      colors: {
        gray: {
          300: '#212529bf',
          500: '#747474',
          800: '#212529'
        }
      }
    },
  },
  plugins: [],
}

