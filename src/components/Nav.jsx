import clouds from "../assets/clouds.webm"; // adjust the path

function CloudButton({ label, onClick, featured = false, delayClass = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative isolate inline-flex min-w-[130px] items-center justify-center px-7 py-4 text-base font-semibold uppercase tracking-[0.2em] text-slate-900 transition duration-300 hover:-translate-y-1 sm:min-w-[150px] sm:text-lg ${featured ? "sm:min-w-[190px]" : ""} animate-fade ${delayClass}`}
    >
      <span className="absolute inset-0 rounded-full bg-white/92 shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur-sm transition duration-300 group-hover:bg-white" />
      <span className="absolute -left-3 bottom-1 h-8 w-8 rounded-full bg-white/92 shadow-[0_12px_24px_rgba(15,23,42,0.12)] transition duration-300 group-hover:bg-white" />
      <span className="absolute left-5 -top-2 h-7 w-7 rounded-full bg-white/92 shadow-[0_12px_24px_rgba(15,23,42,0.12)] transition duration-300 group-hover:bg-white" />
      <span className="absolute right-4 top-1 h-9 w-9 rounded-full bg-white/92 shadow-[0_12px_24px_rgba(15,23,42,0.12)] transition duration-300 group-hover:bg-white" />
      <span className="relative z-10 font-skyCur drop-shadow-sm">{label}</span>
    </button>
  );
}

export default function Nav() {
  const jump = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const links = [
    { id: "hero", label: "Home", featured: true, delayClass: "delay-500" },
    { id: "books", label: "Books", delayClass: "delay-900" },
    { id: "about", label: "About", delayClass: "delay-1500" },
  ];

  return (
    <header id="nav" className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="relative mx-auto h-[220px] max-w-6xl px-4 sm:h-[250px]">
        <div className="absolute inset-0">
          <video
            src={clouds}
            autoPlay
            muted
            playsInline
            className="absolute left-[6%] top-[-3%] w-[56vw] max-w-[420px] object-cover opacity-85 animate-fade"
          />
          <video
            src={clouds}
            autoPlay
            muted
            playsInline
            className="absolute left-[30%] top-[-6%] w-[56vw] max-w-[450px] object-cover opacity-85 animate-fade delay-500"
          />
          <video
            src={clouds}
            autoPlay
            muted
            playsInline
            className="absolute left-[56%] top-[-2%] w-[56vw] max-w-[400px] object-cover opacity-85 animate-fade delay-900"
          />
        </div>

        <nav className="pointer-events-auto relative z-10 flex h-full items-start justify-center gap-3 pt-6 sm:gap-6 sm:pt-10">
          {links.map((link) => (
            <CloudButton
              key={link.id}
              label={link.label}
              featured={link.featured}
              delayClass={link.delayClass}
              onClick={() => jump(link.id)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
