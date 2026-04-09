// src/sections/Hero.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import treesnhills from "../assets/treesnhills.png";
import midHill from "../assets/hills.png";
import stella from "../assets/sustainablestellacutout.png";
import friend from "../assets/sustainablestellaothergirl.png";
import paper from "../assets/paper.webm";
import sign from "../assets/EmnStella.webm";
import facpath from "../assets/backdropv2.png";
import hedge from "../assets/hedge.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef(null);

  // light parallax on the hill
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#midHill", {
        y: 30,
        scrollTrigger: { trigger: root.current, start: "top top", scrub: true },
      });

      /* paper video pop-in */
      gsap.from("#paperVid", {
        opacity: 0,
        y: -60,
        scale: 0.8,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" }, // fires once
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="hero"
      className="scene text-white bg-gradient-to-b from-skyStart to-skyEnd"
    >
      {/* ── 1 ▸ factory backdrop ─────────────────────── */}
      <img
        src={facpath}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* ── 1 ▸ treesnhills fills every pixel ─────────────────────── */}
      <img
        src={treesnhills}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* paper video */}
      <video
        id="paperVid"
        src={paper}
        autoPlay
        muted
        playsInline
        className="
          absolute top-[-2%] left-[66%]
          -translate-x-1/3
          w-[100vw] max-w-[1110px] object-cover z-10
        "
      />

      {/* Signature of Emilee & Stella */}
      <video
        id="sign"
        src={sign}
        autoPlay
        muted
        playsInline
        className="
          absolute top-[-5%] left-[64%] 
          -translate-x-1/4
          w-[100vw] max-w-[920px] object-cover z-10
        "
      />

      {/* mid-ground hill with responsive heights */}
      <div
        id="midHill"
        className={`
    absolute bottom-0 w-full overflow-hidden
    bg-bottom bg-no-repeat bg-[length:100%_auto]
    h-[60vh]      /* phones: 60% of viewport height */
    md:h-[45vh]   /* tablets and up: 45% of viewport height */
    lg:h-[70vh]   /* desktops and up: 70% of viewport height */
    lg:bottom-[-17vh]       /* desktops slide a percent of the view below */
`}
        style={{ backgroundImage: `url(${midHill})` }}
      />
      {/* ── 3 ▸ Stella cut-out on the hill ─────────────────────── */}
      <img
        src={stella}
        alt="Sustainable Stella"
        className="
          absolute bottom-[8%] left-1/4 -translate-x-1/2
          w-[40vw] max-w-[480px] sm:w-[50vw] sm:max-w-[350px]
          drop-shadow-lg z-20
        "
      />
      {/* ── 3 ▸ Stella cut-out on the hill ─────────────────────── */}
      <img
        src={friend}
        alt="Sustainable Stella"
        className="
          absolute bottom-[8%] left-1/3 -translate-x-1/1
          w-[40vw] max-w-[480px] sm:w-[50vw] sm:max-w-[800px]
          drop-shadow-lg z-20
        "
      />

      {/* ── 1 ▸ hedge ─*/}
      <img
        src={hedge}
        alt=""
        aria-hidden="true"
        className=" absolute inset-0          /* pin to edges of parent  */
         w-full h-full             /* parent’s full size      */
         object-contain            /* fit whole video, no crop*/

         z-10
       translate-y-[-35%]
         pointer-events-none
"
      />
    </section>
  );
}
