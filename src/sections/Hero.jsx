// 🔧 Hero spacer height — how much vertical space the hero section takes
// before the books section starts. Values are in "vw" (% of viewport WIDTH),
// not vh, because the background image's height scales with viewport width.
// Using vw keeps the spacer in lockstep with the image's natural rendered
// height across every device and orientation.
//
// One knob per layout (same split as the BG_Y_* knobs in App.jsx).
// Tune until the books section starts exactly where the visual hero scene
// ends in your background image.
//   - Bigger number = bigger gap before books appears.
//   - Smaller number = books appears sooner.
const HERO_HEIGHT_PHONE          = 100; // phones in portrait                 — mobile composite
const HERO_HEIGHT_IPAD_PORTRAIT  = 103; // iPad portrait                      — mobile composite
const HERO_HEIGHT_IPAD_LANDSCAPE = 55; // iPad landscape (1024-1279px)       — desktop composite
const HERO_HEIGHT_DESKTOP        = 45; // phone landscape + laptop + desktop — desktop composite

export default function Hero() {
  // Hero visual lives on the wrapper in App.jsx. This section is just a
  // spacer that controls where the books section starts.
  return (
    <section
      id="hero"
      style={{
        "--hero-h-phone":   `${HERO_HEIGHT_PHONE}vw`,
        "--hero-h-ipad":    `${HERO_HEIGHT_IPAD_PORTRAIT}vw`,
        "--hero-h-ipad-l":  `${HERO_HEIGHT_IPAD_LANDSCAPE}vw`,
        "--hero-h-desktop": `${HERO_HEIGHT_DESKTOP}vw`,
      }}
      className="
        relative w-full
        h-[var(--hero-h-phone)]
        md:portrait:h-[var(--hero-h-ipad)]
        landscape:h-[var(--hero-h-desktop)]
        lg:landscape:h-[var(--hero-h-ipad-l)]
        xl:landscape:h-[var(--hero-h-desktop)]
      "
    />
  );
}
