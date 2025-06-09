export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',  // <-- Add this line to enable dark mode using the 'dark' class
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')], 
}
