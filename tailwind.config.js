/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontSize: {
        '3xl': '2rem',
        '4xl': '3rem',
        '5xl': '4rem',
      },
      colors: {
        skin:{
          transparent: 'var(--transparent)',
        },
      },
    },
  },
  plugins: [],
}

