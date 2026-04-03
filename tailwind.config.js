/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        md: '4rem',
        lg: '6rem',
        xl: '10rem',
        '2xl': '14rem',
      },
    },
    extend: {
      colors: {
        primary: '#2dd4bf', // Teal/Cyan from target site
        secondary: '#a78bfa', // Lavender from target site
        accent: '#f43f5e', // Rose from target site
        dark: '#000000',
        card: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
