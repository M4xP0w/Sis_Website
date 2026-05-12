import { useEffect, useState } from "react";

import treesnhills from "../assets/treesnhills.png";
import gigiGardenCutout from "../assets/gigigardencutout.png";
import stella from "../assets/sustainablestellacutout.png";
import friend from "../assets/sustainablestellaothergirl.png";
import facpath from "../assets/backdropv2.png";

export default function Hero() {
  const [phoneHeightTier, setPhoneHeightTier] = useState("base");

  useEffect(() => {
    const updatePhoneHeightTier = () => {
      if (window.innerWidth >= 640) {
        setPhoneHeightTier("base");
        return;
      }

      const phoneHeight = window.screen?.height ?? window.innerHeight;

      if (phoneHeight >= 800) {
        setPhoneHeightTier("tall");
        return;
      }

      if (phoneHeight <= 700) {
        setPhoneHeightTier("short");
        return;
      }

      setPhoneHeightTier("base");
    };

    updatePhoneHeightTier();
    window.addEventListener("orientationchange", updatePhoneHeightTier);

    return () => {
      window.removeEventListener("orientationchange", updatePhoneHeightTier);
    };
  }, []);

  // Phone-only Stella layout:
  // use screen height chosen on load/orientation change instead of live viewport height,
  // so mobile browser bars hiding/showing during scroll does not switch Stella layouts.
  const stellaPhoneHeightClass =
    phoneHeightTier === "tall"
      ? "w-[330px] translate-y-[5%]"
      : phoneHeightTier === "short"
        ? "w-[210px] translate-y-[10%]"
        : "w-[280px] translate-y-[10%]";

  return (
    <section
      id="hero"
      className="scene overflow-visible bg-gradient-to-b from-skyStart to-skyEnd text-white"
    >
      {/* Breakpoint reminder for the hero cutouts:
          1440x1080 uses xl, not lg. Edit xl:w to change cutout size at 1440.
          1920x1080 uses 2xl. Edit 2xl:w to change cutout size at 1920.
          These cutouts use max-w-none so the w classes are the only size controls. */}

      {/* Factory/background path layer:
          PHONE ONLY:
          - Edit the no-prefix values below for screens under 640px.
          - Edit the two [@media(...)] lines only if you want different phone heights to behave differently.
          X/Y/SIZE GUIDE:
          - [object-position:X_Y] = x and y position inside the image.
          - translate-y = extra up/down nudge after the image is placed.
          - scale = zoom/size.
          BREAKPOINT GUIDE:
          - sm = 640px-767px
          - md = 768px-1023px
          - lg = 1024px-1279px
          - xl = 1280px-1535px
          - 2xl = 1536px+ */}
      <img
        src={facpath}
        alt=""
        aria-hidden="true"
        className="
          absolute inset-0 h-full w-full object-cover
          origin-top will-change-transform

          [object-position:clamp(15%,30vw,40%)]
          translate-y-[clamp(-18%,-60%,-100%)]
          translate-x-[clamp(-15%,-10%,-5%)]
          scale-[1.2]

          sm:[object-position:50%_0%] sm:scale-[1.02]
          md:[object-position:20%_50%] md:scale-[1.4] md:translate-y-[clamp(-20%,-40%,-60%)] md:translate-x-[clamp(5%,5%,30%)]
          lg:[object-position:35%_50%] lg:translate-y-[clamp(-10%,-20%,-30%)]
          lg:scale-[1.2]
          xl:[object-position:10%_50%] xl:translate-y-[clamp(-20%,-30%,-30%)]
          xl:scale-[1.3]
          2xl:[object-position:35%_50%] 2xl:scale-[1.3] 2xl:translate-y-[clamp(-12%,-30%,-40%)] 2xl:translate-x-[clamp(5%,15%,30%)]
        "
      />

      {/* Trees and hills layer:
          PHONE ONLY:
          - Edit the no-prefix values below for screens under 640px.
          - Keep using object-position instead of translate-x so the background does not reveal blank space.
          X/Y/SIZE GUIDE:
          - [object-position:X_Y] = x and y position inside the image.
          - scale = zoom/size.
          - Smaller x shows more of the left side. Bigger x shows more of the right side. */}
      <img
        src={treesnhills}
        alt=""
        aria-hidden="true"
        className="
          absolute inset-0 h-full w-full object-cover
          origin-center will-change-transform

          [object-position:30%_0%] scale-[1.06]

          sm:[object-position:50%_18%] sm:scale-[1.08]
          md:[object-position:clamp(22%,calc(56%-4vw),50%)_0%] md:scale-[1]
          lg:[object-position:35%_0%] lg:scale-[1.08]
          xl:[object-position:35%_0%] xl:scale-[1.08]
          2xl:[object-position:35%_0%] 2xl:scale-[1.08]
        "
      />

      {/* Gigi garden cutout:
          PHONE/no-prefix = under 640px, SM = 640px+, MD = 768px+, LG = 1024px+, XL = 1280px+.
          For 768x1080 tablet size, edit the md:* lines.
          For 1440x1080 size, edit xl:w.
          bottom moves up/down, left moves sideways, w/max-w change size,
          translate-x/translate-y fine-tune the final placement. */}
      <img
        src={gigiGardenCutout}
        alt="Gigi and Stella gardening"
        className="
          absolute z-20 hidden max-w-none drop-shadow-lg
          lg:block
          bottom-[clamp(8%,10vw,12%)] left-[clamp(48%,50vw,52%)]
          w-[clamp(210px,58vw,250px)]
          -translate-x-1/2 translate-y-0
          sm:bottom-[clamp(8%,10vw,11%)] sm:left-[clamp(50%,52vw,54%)]
          sm:w-[clamp(300px,48vw,340px)]
          md:bottom-[clamp(55px,calc(35px+4vw),90px)]
          md:left-[clamp(42%,calc(40%+2vw),58%)]
          md:w-[clamp(420px,calc(340px+16vw),560px)]
          md:translate-x-[clamp(-5%,-12%,-15%)] md:translate-y-[clamp(-10%,-15%,-20%)]
          lg:bottom-[clamp(25%,5vw,25%)] lg:left-[clamp(8%,30vw,100%)]
          lg:w-[clamp(520px,42vw,780px)]
          xl:bottom-[clamp(4%,5vw,6%)] xl:left-[clamp(40%,60vw,78%)]
          xl:w-[clamp(540px,46vw,780px)]
          2xl:bottom-[clamp(0%,-5vw,50%)] 2xl:left-[clamp(40%,58vw,88%)]
          2xl:w-[clamp(600px,40vw,900px)]
        "
      />

      {/* Friend cutout:
          PHONE/no-prefix = under 640px, SM = 640px+, MD = 768px+, LG = 1024px+, XL = 1280px+.
          This one is hidden on phones right now, so its first visible breakpoint is md.
          For 768x1080 tablet size, edit the md:* lines.
          For 1440x1080 size, edit xl:w.
          bottom moves up/down, left moves sideways, w/max-w change size,
          translate-x/translate-y fine-tune the final placement. */}
      <img
        src={friend}
        alt="Sustainable Stella friend"
        className="
          absolute z-20 hidden max-w-none drop-shadow-lg
          md:block
          bottom-[clamp(10%,12vw,14%)] left-[clamp(60%,64vw,68%)]
          w-[clamp(200px,56vw,240px)]
          -translate-x-1/2 translate-y-0
          sm:bottom-[clamp(8%,9vw,10%)] sm:left-[clamp(55%,58vw,61%)]
          sm:w-[clamp(280px,44vw,320px)]
          md:bottom-[clamp(50px,calc(30px+4vw),85px)]
          md:left-[clamp(28%,calc(24%+2vw),42%)]
          md:w-[clamp(300px,38vw,400px)]
          md:translate-x-[-30%]
          lg:bottom-[clamp(7%,8vw,10%)] lg:left-[clamp(26%,33vw,38%)]
          lg:w-[clamp(520px,70vw,700px)]
          lg:translate-x-[-35%] lg:translate-y-[clamp(6%,8%,12%)]
          xl:bottom-[clamp(7%,8vw,10%)] xl:left-[clamp(28%,33vw,38%)]
          xl:w-[clamp(560px,56vw,720px)]
          xl:translate-x-[clamp(-45%,-34%,-28%)] xl:translate-y-[clamp(6%,8%,12%)]
          2xl:bottom-[clamp(7%,8vw,10%)] 2xl:left-[clamp(28%,33vw,38%)]
          2xl:w-[clamp(680px,38vw,820px)]
          2xl:translate-x-[clamp(-45%,-34%,-28%)] 2xl:translate-y-[clamp(6%,8%,12%)]
        "
      />

      {/* Stella cutout:
          PHONE ONLY:
          - Edit the no-prefix values below for normal phones under 640px.
          - Edit the [@media(max-width:639px)...] lines if you want tall phones and short phones to behave differently.
          PHONE X/Y/SIZE GUIDE:
          - left = main x position.
          - bottom = main y position.
          - w = size.
          - translate-x = final left/right nudge.
          - translate-y = final up/down nudge.
          BREAKPOINT GUIDE:
          - sm = 640px-767px
          - md = 768px-1023px
          - lg = 1024px-1279px
          - xl = 1280px-1535px
          - 2xl = 1536px+ */}
      <img
        src={stella}
        alt="Sustainable Stella"
        className={`
          absolute z-20 max-w-none drop-shadow-lg

          bottom-[clamp(70px,13vw,100px)]
          left-[clamp(32%,36vw,46%)]
          translate-x-[clamp(-48%,-35%,-20%)]
          ${stellaPhoneHeightClass}

          sm:bottom-[clamp(9%,10vw,11%)] sm:left-[clamp(31%,34vw,37%)]
          sm:w-[clamp(200px,34vw,220px)]
          md:bottom-[clamp(55px,calc(35px+4vw),90px)]
          md:left-[clamp(18%,calc(20%+1vw),30%)]
          md:w-[clamp(300px,calc(240px+16vw),480px)]
          md:translate-x-[-45%]
          lg:bottom-[clamp(8%,9vw,11%)] lg:left-[clamp(20%,25vw,30%)]
          lg:w-[clamp(300px,40vw,360px)]
          lg:translate-x-[-70%] lg:translate-y-[clamp(3%,5%,7%)]
          xl:bottom-[clamp(8%,9vw,11%)] xl:left-[clamp(20%,24vw,30%)]
          xl:w-[clamp(320px,26vw,390px)]
          xl:translate-x-[clamp(-105%,-94%,-80%)] xl:translate-y-[clamp(3%,5%,7%)]
          2xl:bottom-[clamp(8%,9vw,11%)] 2xl:left-[clamp(20%,24vw,30%)]
          2xl:w-[clamp(360px,20vw,430px)]
          2xl:translate-x-[clamp(-105%,-94%,-80%)] 2xl:translate-y-[clamp(3%,5%,7%)]
        `}
      />
    </section>
  );
}
