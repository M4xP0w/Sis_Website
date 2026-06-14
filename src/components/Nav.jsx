import { useEffect, useState } from "react";

import clouds from "../assets/clouds.webp";
import mobileSignFull from "../assets/Emilee and Stella_full.apng";
import mobileSignWritten from "../assets/Emilee and Stella_written.apng";

// 🔧 Emilee & Stella sign Y position (px). Negative = HIGHER on screen.
// One knob per width tier — no clamp/calc math, just a plain pixel number.
//   no prefix = phones                       (under 640px)
//   sm        = large phones                 (640-767px)
//   md        = tablets / iPad portrait      (768-1023px)
//   lg        = iPad landscape               (1024-1279px)
//   xl        = laptops / small displays     (1280-1535px)
//   2xl       = 1080p monitors               (1536-1999px)
//   3xl       = 1440p+ monitors (incl. 4K)   (2000px and up)
const SIGN_Y_PHONE = -10;
const SIGN_Y_SM    = -12;
const SIGN_Y_MD    = -55;
const SIGN_Y_LG    = -65;
const SIGN_Y_XL    = -90;
const SIGN_Y_2XL   = -115;
const SIGN_Y_3XL   = -165;
// Exact 2560x1600 laptop override. This only applies when the real screen
// reports 2560x1600 and the browser viewport is also wide.
const SIGN_Y_2560_1600 = -100;
function NavButton({ label, onClick, delayClass = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        animate-fade bg-transparent px-1 py-1 font-skyCur leading-none
        text-[clamp(3.1rem,15vw,4.1rem)] text-[#4f7b3a]
        drop-shadow-[0_2px_2px_rgba(255,255,255,0.75)]
        transition hover:scale-105
        sm:text-[clamp(3.6rem,8vw,4.4rem)]
        md:text-[clamp(3.1rem,7vw,4.8rem)]
        lg:text-[clamp(4.4rem,5vw,5.5rem)]
        xl:text-[clamp(5.4rem,4.2vw,6.2rem)]
        ${delayClass}
      `}
    >
      {label}
    </button>
  );
}

export default function Nav() {
  const [showWrittenSign, setShowWrittenSign] = useState(false);
  const [use2560SignY, setUse2560SignY] = useState(false);

  useEffect(() => {
    const signTimer = window.setTimeout(() => {
      setShowWrittenSign(true);
    }, 5000);

    return () => {
      window.clearTimeout(signTimer);
    };
  }, []);

  useEffect(() => {
    const update2560SignY = () => {
      const screenWidth = window.screen?.width ?? 0;
      const screenHeight = window.screen?.height ?? 0;
      const screenMatches2560 =
        (screenWidth === 2560 && screenHeight === 1600) ||
        (screenWidth === 1600 && screenHeight === 2560);

      setUse2560SignY(screenMatches2560 && window.innerWidth >= 2400);
    };

    update2560SignY();
    window.addEventListener("resize", update2560SignY);

    return () => {
      window.removeEventListener("resize", update2560SignY);
    };
  }, []);

  const getScrollOffset = (id) => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    // Mobile has the tallest fixed cloud/nav stack, so sections need to stop earlier.
    if ((id === "books" || id === "author") && isMobile) {
      return -170;
    }

    return 0;
  };

  // Smooth ease-out curve — fast at the start, gentle deceleration at the end.
  const scrollEasing = (t) => 1 - Math.pow(1 - t, 3);

  const jump = (id) => {
    const offset = getScrollOffset(id);

    // Lenis path — consistent duration + easing for every nav target.
    if (window.lenis) {
      const target = id === "hero" ? 0 : document.getElementById(id);
      if (target !== null) {
        window.lenis.scrollTo(target, {
          duration: 1.2,
          easing: scrollEasing,
          offset,
        });
      }
      return;
    }

    // Fallback for environments without Lenis (server-rendered, no-JS, etc.)
    if (id === "hero") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY + offset,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const links = [
    { id: "hero", label: "Home", delayClass: "delay-500" },
    { id: "books", label: "Books", delayClass: "delay-900" },
    { id: "author", label: "Author", delayClass: "delay-1500" },
  ];

  return (
    <header
      id="nav"
      className="
        pointer-events-none fixed inset-x-0 top-0 z-50
        h-[clamp(295px,48vw,430px)]
        md:h-[clamp(300px,35vw,430px)]
        lg:h-[clamp(360px,28vw,430px)]
      "
    >
      {/* Cloud bar:
          top moves it up/down, h controls the nav's cloud area height,
          bg-[length] controls how zoomed-in the cloud image looks. */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bg-bottom bg-repeat-x
          top-[clamp(-90px,calc(-48px-4vw),-70px)]
          h-[clamp(345px,64vw,470px)]
          bg-[length:auto_clamp(360px,70vw,500px)]
          drop-shadow-[0_18px_35px_rgba(15,23,42,0.12)]
          md:top-[clamp(-16px,calc(20px-3vw),12px)]
          md:h-[clamp(280px,38vw,430px)]
          md:bg-[length:auto_clamp(280px,38vw,430px)]
          lg:top-[clamp(-20px,calc(22px-3vw),-10px)]
          lg:h-[clamp(360px,28vw,430px)]
          lg:bg-[length:auto_clamp(430px,32vw,500px)]
        "
        style={{ backgroundImage: `url(${clouds})` }}
      />

      {/* Button group: */}
      <nav
        className="
          pointer-events-auto absolute z-10 flex items-center
          left-1/2 top-[clamp(10px,26vw,126px)] -translate-x-1/2 -translate-y-[clamp(10%,80%,200%)]
          gap-[clamp(1.5rem,1.5vw,1.95rem)]
          sm:top-[clamp(110px,21vw,146px)] sm:gap-[clamp(0.8rem,2vw,1.25rem)]
          md:left-auto md:right-[clamp(1rem,4vw,3.5rem)]
          md:top-[clamp(1.5rem,20vw,5rem)] md:gap-[clamp(1rem,2.5vw,2rem)] md:translate-x-0
          lg:right-[clamp(1.25rem,3vw,4rem)] lg:top-[clamp(1rem,1.6vw,2rem)]
          lg:gap-[clamp(1.5rem,2vw,3rem)] lg:translate-y-[clamp(-10%,0%,-20%)]
          xl:right-[clamp(2rem,3vw,5rem)] xl:top-[clamp(0.75rem,1.2vw,1.75rem)]
          xl:gap-[clamp(1.75rem,2vw,3.25rem)]
          2xl:right-[clamp(2rem,3vw,5rem)] 2xl:top-[clamp(0.75rem,1.2vw,1.75rem)] 2xl:gap-[clamp(1.75rem,2vw,3.25rem)]
        "
      >
        {links.map((link) => (
          <NavButton
            key={link.id}
            label={link.label}
            delayClass={link.delayClass}
            onClick={() => jump(link.id)}
          />
        ))}
      </nav>

      {/* Emilee/Stella sign:
          Y position uses the SIGN_Y_* knobs at the top of this file — one
          plain pixel value per width tier. Edit those to move the sign up
          or down per layout. Left/width still use clamp() for now. */}
      <div
        style={{
          "--sign-y-phone": `${SIGN_Y_PHONE}px`,
          "--sign-y-sm":    `${SIGN_Y_SM}px`,
          "--sign-y-md":    `${SIGN_Y_MD}px`,
          "--sign-y-lg":    `${SIGN_Y_LG}px`,
          "--sign-y-xl":    `${SIGN_Y_XL}px`,
          "--sign-y-2xl":   `${SIGN_Y_2XL}px`,
          "--sign-y-3xl":   `${SIGN_Y_3XL}px`,
          "--sign-y-2560-1600": `${SIGN_Y_2560_1600}px`,
          top: use2560SignY ? "var(--sign-y-2560-1600)" : undefined,
        }}
        className="
          pointer-events-none absolute z-10 object-contain
          left-1/2 top-[var(--sign-y-phone)] w-[90vw] max-w-[420px] -translate-x-1/2 translate-y-[clamp(-35%,-80%,-300%)]
          sm:top-[var(--sign-y-sm)] sm:w-[72vw] sm:max-w-[430px]
          md:left-[clamp(0.75rem,2vw,2.5rem)] md:top-[var(--sign-y-md)]
          md:w-[clamp(390px,52vw,620px)] md:max-w-[620px] md:translate-x-0 md:translate-y-0
          lg:left-10 lg:top-[var(--sign-y-lg)]
          lg:w-[clamp(390px,32vw,580px)] lg:max-w-[800px]
          xl:left-[clamp(2.5rem,3vw,4rem)] xl:top-[var(--sign-y-xl)]
          xl:w-[clamp(530px,30vw,720px)] xl:max-w-[720px]
          2xl:left-10 2xl:top-[var(--sign-y-2xl)]
          2xl:w-[30vw] 2xl:max-w-[800px]
          3xl:top-[var(--sign-y-3xl)]
        "
      >
        {/* Mobile uses APNG because some phone browsers render transparent WebM as black.
            Both mobile APNGs stay mounted so the transition can overlap without a blank frame. */}
        <div className="relative">
          <img
            src={mobileSignFull}
            alt="Emilee and Stella"
            className={`
              block h-auto w-full object-contain transition-opacity duration-300
              ${showWrittenSign ? "opacity-0" : "opacity-100"}
            `}
          />
          <img
            src={mobileSignWritten}
            alt=""
            aria-hidden="true"
            className={`
              absolute inset-0 h-auto w-full object-contain transition-opacity duration-300
              ${showWrittenSign ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>
      </div>

    </header>
  );
}
