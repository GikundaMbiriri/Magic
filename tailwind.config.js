/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#14002A",
        "dark-yellow": "#FF2500",
        "light-yellow": "#FFDB00",
        "magic-blue": "#00CCFF",
      },
    },
  },
  plugins: [],
};
