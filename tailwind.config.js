/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // <-- all React files
  ],
  theme: {
    extend: {
      // iPad-specific breakpoints. Each one matches an exact device viewport
      // (width AND height), so they only fire on that iPad and won't
      // accidentally apply to a regular desktop window of similar width.
      //
      // Naming: -l = landscape, -p = portrait.
      //   ipad-l    1024 x 768   (iPad / iPad Mini landscape)
      //   ipad-p     768 x 1024  (iPad / iPad Mini portrait)
      //   iair-l    1180 x 820   (iPad Air / iPad Air M2 landscape — same viewport)
      //   iair-p     820 x 1180  (iPad Air / iPad Air M2 portrait  — same viewport)
      //   ipadpro-l 1366 x 1024  (iPad Pro landscape)
      //   ipadpro-p 1024 x 1366  (iPad Pro portrait)
      //   ipadm4-l  1536 x 1152  (iPad Pro M4 landscape)
      //   ipadm4-p  1152 x 1536  (iPad Pro M4 portrait)
      //
      // These are added via `extend`, so they appear AFTER the default
      // sm/md/lg/xl/2xl in the generated CSS — that means ipad-* classes
      // win over lg/xl/2xl classes when both match the same iPad.
      // Width ranges allow ~25px of slack below the device width so a vertical
      // scrollbar in Responsively (~15-17px on Windows) doesn't drop the iframe
      // out of the query. Heights stay tighter since scrollbars don't shrink
      // the iframe vertically. Width+height pairs remain unique so the queries
      // never collide with each other or with regular desktop widths.
      screens: {
        "ipad-l":    { raw: "(min-width: 999px)  and (max-width: 1044px) and (min-height: 758px)  and (max-height: 778px)" },
        "ipad-p":    { raw: "(min-width: 743px)  and (max-width: 788px)  and (min-height: 1014px) and (max-height: 1034px)" },
        "iair-l":    { raw: "(min-width: 1155px) and (max-width: 1200px) and (min-height: 810px)  and (max-height: 830px)" },
        "iair-p":    { raw: "(min-width: 795px)  and (max-width: 840px)  and (min-height: 1170px) and (max-height: 1190px)" },
        "ipadpro-l": { raw: "(min-width: 1341px) and (max-width: 1386px) and (min-height: 1014px) and (max-height: 1034px)" },
        "ipadpro-p": { raw: "(min-width: 999px)  and (max-width: 1044px) and (min-height: 1356px) and (max-height: 1376px)" },
        "ipadm4-l":  { raw: "(min-width: 1511px) and (max-width: 1556px) and (min-height: 1142px) and (max-height: 1162px)" },
        "ipadm4-p":  { raw: "(min-width: 1127px) and (max-width: 1172px) and (min-height: 1526px) and (max-height: 1546px)" },
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
