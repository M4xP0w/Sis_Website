import clouds from "../assets/clouds.png";
import sign from "../assets/EmnStella.webm";

// Tailwind breakpoint reminder:
// no prefix = phones / default, sm = 640px+, md = 768px+, lg = 1024px+.
// Example: "top-12 md:top-20" means top-12 on phones, then top-20 on tablets/desktops.
function NavButton({ label, onClick, delayClass = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        animate-fade bg-transparent px-1 py-1 font-skyCur leading-none
        text-[1.45rem] text-slate-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.75)]
        transition hover:scale-105
        sm:text-[1.95rem]
        md:text-[4rem]
        lg:text-[6rem]
        ${delayClass}
      `}
    >
      {label}
    </button>
  );
}

export default function Nav() {
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

    if (target && window.lenis) {
      window.lenis.scrollTo(target, { force: true });
      return;
    }

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
        h-[180px]
        sm:h-[235px]
        md:h-[315px]
        lg:h-[400px]
      "
    >
      {/* Cloud bar: top moves it up/down, h controls height, bg-[length] controls cloud scale. */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bg-bottom bg-repeat-x
          top-[-54px] h-[260px] bg-[length:auto_260px]
          drop-shadow-[0_18px_35px_rgba(15,23,42,0.12)]
          sm:top-[-70px] sm:h-[330px] sm:bg-[length:auto_330px]
          md:top-[-145px] md:h-[450px] md:bg-[length:auto_450px]
          lg:top-[-10px] lg:h-[400px] lg:bg-[length:auto_460px]
        "
        style={{ backgroundImage: `url(${clouds})` }}
      />

      {/* Button group: right moves sideways, top moves up/down, gap changes space between buttons. */}
      <nav
        className="
          pointer-events-auto absolute z-10 flex items-center
          right-5 top-12 gap-5
          sm:right-8 sm:top-14 sm:gap-7
          md:right-14 md:top-14 md:gap-12
          lg:top-4 lg:gap-8
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

      {/* Emilee/Stella sign: left moves sideways, top moves up/down, w/max-w change size. */}
      <video
        src={sign}
        autoPlay
        muted
        playsInline
        className="
          pointer-events-none absolute z-10 object-contain
          left-1 top-3 w-[58vw] max-w-[320px]
          sm:left-3 sm:top-2 sm:w-[46vw] sm:max-w-[450px]
          md:left-8 md:top-[-34px] md:w-[40vw] md:max-w-[660px]
          lg:left-10 lg:top-[-100px] lg:w-[30vw] lg:max-w-[800px]
        "
      />
    </header>
  );
}
