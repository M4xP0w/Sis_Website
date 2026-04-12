import treesnhills from "../assets/treesnhills.png";
import gigiGardenCutout from "../assets/gigigardencutout.png";
import stella from "../assets/sustainablestellacutout.png";
import friend from "../assets/sustainablestellaothergirl.png";
import facpath from "../assets/backdropv2.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="scene overflow-visible bg-gradient-to-b from-skyStart to-skyEnd text-white"
    >
      <img
        src={facpath}
        alt=""
        aria-hidden="true"
        className="
          absolute inset-0 h-full w-full object-cover object-top
          sm:translate-y-[-8px] sm:scale-[1.02]
          md:translate-y-[-8px]
          lg:translate-y-[-100px] lg:translate-x-[200px] lg:scale-[1.4]
          
        "
      />

      <img
        src={treesnhills}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />

      {/* Friend cutout: bottom moves up/down, left moves sideways, w/max-w control size. */}
      <img
        src={friend}
        alt="Sustainable Stella friend"
        className="
          absolute bottom-[12%] left-[64%] z-20
          w-[56vw] max-w-[240px] -translate-x-1/2 drop-shadow-lg
          sm:bottom-[9%] sm:left-[58%] sm:w-[44vw] sm:max-w-[320px]
          md:bottom-[8%] md:left-1/3 md:w-[40vw] md:max-w-[480px] md:-translate-x-1/1
          lg:w-[70vw] lg:max-w-[700px] lg:-translate-x-[35%] lg:-translate-y-[-10%]
        "
      />

      {/* Gigi garden cutout: bottom moves up/down, left moves sideways, w/max-w control size. */}
      <img
        src={gigiGardenCutout}
        alt="Gigi and Stella gardening"
        className="
          absolute bottom-[10%] left-[50%] z-20
          w-[58vw] max-w-[250px] -translate-x-1/2 drop-shadow-lg
          sm:bottom-[7%] sm:left-[52%] sm:w-[48vw] sm:max-w-[340px]
          md:bottom-[7%] md:left-[55%] md:w-[42vw] md:max-w-[520px]
          lg:bottom-[5%] lg:left-[75%] lg:w-[42vw] lg:max-w-[780px]
        "
      />

      {/* Stella cutout: bottom moves up/down, left moves sideways, w/max-w control size. */}
      <img
        src={stella}
        alt="Sustainable Stella"
        className="
          absolute bottom-[13%] left-[36%] z-20
          w-[42vw] max-w-[170px] -translate-x-1/2 drop-shadow-lg
          sm:bottom-[10%] sm:left-[34%] sm:w-[34vw] sm:max-w-[220px]
          md:bottom-[8%] md:left-1/4 md:w-[40vw] md:max-w-[480px]
          lg:w-[40vw] lg:max-w-[360px] lg:-translate-x-[95%] lg:-translate-y-[-5%]
        "
      />
    </section>
  );
}
