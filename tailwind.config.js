/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // <-- all React files
  ],
  theme: {
    extend: {
      // Extra breakpoint above the default 2xl (1536px) so 1440p+ monitors
      // can be tuned separately from 1080p screens.
      //   2xl: 1536-1999 (catches 1080p / 1920×1080)
      //   3xl: 2000+     (catches 1440p / 2560×1440 and 4K / 3840×2160)
      screens: {
        "3xl": "2000px",
      },
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
