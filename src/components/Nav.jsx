import { useEffect, useState } from "react";

import clouds from "../assets/clouds.webp";
import mobileSignFull from "../assets/Emilee and Stella_full.apng";
import mobileSignWritten from "../assets/Emilee and Stella_written.apng";

// Tailwind breakpoint reminder:
// no prefix = phones / default, sm = 640px+, md = 768px+, lg = 1024px+, xl = 1280px+, 2xl = 1536px+.
// A 1440px wide screen uses xl. If xl exists, lg mostly controls 1024px-1279px.
// A 1920px wide screen uses 2xl, so you can tune it separately from 1440px.
// clamp(min, preferred, max) changes smoothly between screen sizes instead of jumping.
// Example: top-[clamp(-65px,calc(60px-8vw),34px)] moves down on small screens
// and moves up on larger screens without needing a separate value for every width.
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

  useEffect(() => {
    const signTimer = window.setTimeout(() => {
      setShowWrittenSign(true);
    }, 5000);

    return () => {
      window.clearTimeout(signTimer);
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

  const jump = (id) => {
    if (id === "hero") {
      if (window.lenis) {
        window.lenis.resize();
        window.lenis.scrollTo("top", {
          duration: 1.2,
          force: true,
          lock: true,
          onComplete: () => {
            // Tiny final correction after the smooth scroll, so Home reaches true 0.
            window.lenis?.scrollTo(0, { immediate: true, force: true });
          },
        });
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(id);
    const offset = getScrollOffset(id);

    if (target && window.lenis) {
      window.lenis.scrollTo(target, { force: true, offset });
      return;
    }

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
          top moves it up/down, left moves it sideways, w/max-w change size.
          Phones stack this centered above the buttons.
          This uses clamp so the sign moves down as the screen gets smaller
          instead of getting cut off by the top of the browser. */}
      <div
        className="
          pointer-events-none absolute z-10 object-contain
          left-1/2 top-[-8px] w-[100vw] max-w-[420px] -translate-x-1/2 translate-y-[clamp(-35%,-80%,-300%)]
          sm:top-[-12px] sm:w-[72vw] sm:max-w-[430px]
          md:left-[clamp(0.75rem,2vw,2.5rem)] md:top-[clamp(-58px,calc(42px-12vw),10px)]
          md:w-[clamp(390px,52vw,620px)] md:max-w-[620px] md:translate-x-0 md:translate-y-0
          lg:left-10 lg:top-[clamp(-65px,calc(-40px-15vw),-50px)]
          lg:w-[clamp(390px,32vw,580px)] lg:max-w-[800px]
          xl:left-[clamp(2.5rem,3vw,4rem)] xl:top-[clamp(-95px,calc(10px-7vw),-70px)]
          xl:w-[clamp(530px,30vw,720px)] xl:max-w-[720px]
          2xl:left-10 2xl:top-[clamp(-240px,calc(-70px-2vw),-50px)]
          2xl:w-[30vw] 2xl:max-w-[800px]
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
