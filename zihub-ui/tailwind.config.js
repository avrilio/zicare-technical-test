/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zihub-background': '#171a2a',
        'zihub-border': '#2c3149',
      },
    },
  },
  plugins: [],
}

