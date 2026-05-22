/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // <-- all React files
  ],
  theme: {
    extend: {
      colors: {
        brandPink: "#FF4F8B",
        brandBlue: "#3C6FFF",
        skyStart: "#b8dcff",
        skyEnd: "#fff4da",
        dirt: "#d9ab76",
      },
      fontFamily: {
        cedar: ["Cedarville", "cursive"],
        skyCur: ["above-the-sky-cond-cursive", "sans-serif"],
        skyCond: ["above-the-sky-condensed", "sans-serif"],
        skyMark: ["above-the-sky-marker", "sans-serif"],
        skyScr: ["above-the-sky-script", "sans-serif"],
      },
    },
  },
  plugins: [],
};
