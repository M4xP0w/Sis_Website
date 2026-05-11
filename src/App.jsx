import useLenis from "./lenis";

import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import longHills from "./assets/longhills.png";
import emileePortrait from "./assets/emilee.png";
import gigiGardenCover from "./assets/gigigarden.jpg";
import sustainableStellaCover from "./assets/sustainablestella.png";

const featuredBooks = [
  {
    badge: "Book 1",
    title: "Sustainable Stella",
    description:
      "Meet Stella, a curious young learner who discovers sustainability through reusable products, recycling, sustainable fashion, and more.",
    details: "Hardcover | Ages 6-8 | 34 pages | Published October 11, 2022",
    link: "https://www.barnesandnoble.com/w/sustainable-stella-emilee-powell/1142636418",
    cover: sustainableStellaCover,
  },
  {
    badge: "Book 2",
    title: "Gigi's Golden Garden",
    description:
      "Stella learns about gardening, patience, love, and faith while creating a garden with her Gigi and a few helpful friends.",
    details: "Paperback | Ages 4-8 | 44 pages | Published April 15, 2024",
    link: "https://www.barnesandnoble.com/w/gigis-golden-garden-emilee-powell/1145395618",
    cover: gigiGardenCover,
  },
];

export default function App() {
  useLenis();

  return (
    <main className="overflow-x-hidden text-white">
      <Nav />

      <div className="relative overflow-hidden bg-[#d6cf77]">
        <img
          id="midHill"
          src={longHills}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none absolute left-0 z-[5] w-full object-cover object-top
            top-[40vh] h-[calc(100%-40vh)]
            md:top-[55vh] md:h-[calc(100%-55vh)]
            lg:top-[47vh] lg:h-[calc(100%-47vh)]
          "
        />

        <Hero />

        <div className="relative z-10 text-slate-900">
          <section
            id="books"
            className="relative scroll-mt-28 overflow-hidden px-6 pb-24 pt-28 md:pb-32 md:pt-36"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-lime-200/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-10rem] top-36 h-80 w-80 rounded-full bg-amber-200/25 blur-3xl"
            />
            <div className="relative z-10 mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <h2 className="font-skyCur text-5xl leading-none text-emerald-950 drop-shadow-[0_2px_0_rgba(255,255,255,0.55)] md:text-7xl">
                  Books Available
                </h2>
                <p className="mt-5 max-w-2xl bg-[#fff9df]/35 py-3 pl-5 text-lg leading-8 text-emerald-950/80 backdrop-blur-[1px]">
                  Follow Stella through bright, thoughtful stories about caring
                  for the earth, growing good things, and learning from the
                  people around her.
                </p>
              </div>

              <div className="mt-16 space-y-20">
                {featuredBooks.map((book, index) => (
                  <article
                    key={book.title}
                    className={`
                      relative grid items-center gap-8
                      md:grid-cols-[330px_minmax(0,1fr)] md:gap-12
                      ${index % 2 === 1 ? "md:grid-cols-[minmax(0,1fr)_330px]" : ""}
                    `}
                  >
                    {/* Cover display: simple book-only preview without rounded boxes or extra stand shapes. */}
                    <div
                      className={`relative flex min-h-[360px] items-center justify-center ${
                        index % 2 === 1 ? "md:order-2" : ""
                      }`}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute bottom-8 h-8 w-64 rounded-full bg-emerald-900/20 blur-xl"
                      />
                      <img
                        src={book.cover}
                        alt={`${book.title} book cover`}
                        className={`relative z-10 max-h-[330px] w-auto object-contain shadow-[0_24px_42px_rgba(57,85,38,0.28)] ${
                          index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
                        }`}
                      />
                    </div>

                    {/* Info area: flat garden note, no rounded bubble/card. */}
                    <div
                      className={`relative bg-[#fff9df]/30 px-1 py-8 backdrop-blur-[1px] md:px-6 ${
                        index % 2 === 1 ? "md:order-1" : ""
                      }`}
                    >
                      {book.badge ? (
                        <p className="text-xs font-black uppercase tracking-[0.35em] text-emerald-700">
                          {book.badge}
                        </p>
                      ) : null}
                      <h3 className="mt-3 font-skyCur text-5xl leading-none text-emerald-950 md:text-6xl">
                        {book.title}
                      </h3>
                      <p className="mt-4 text-lg leading-8 text-emerald-950/75">
                        {book.description}
                      </p>
                      <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-emerald-900/60">
                        {book.details}
                      </p>

                      <div className="mt-7 flex flex-wrap items-center gap-4">
                        <a
                          href={book.link}
                          target="_blank"
                          rel="noreferrer"
                          className="border-b-4 border-emerald-950 bg-emerald-800 px-6 py-3 font-bold text-[#fff7d7] shadow-[0_14px_28px_rgba(31,79,45,0.24)] transition hover:-translate-y-1 hover:bg-emerald-950"
                        >
                          View on Barnes & Noble
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="author"
            className="relative scroll-mt-28 px-6 pb-28 pt-8 text-slate-900 md:pt-12"
          >
            <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[340px_minmax(0,1fr)] md:gap-14">
              {/* Author image: left column, styled like a garden portrait rather than a book card. */}
              <div className="relative flex min-h-[430px] items-center justify-center">
                <img
                  src={emileePortrait}
                  alt="Emilee Powell"
                  className="relative z-10 max-h-[520px] w-auto object-contain drop-shadow-[0_24px_42px_rgba(57,85,38,0.26)]"
                />
              </div>

              {/* Author note: similar open layout to books, but with a softer letter/trellis flair. */}
              <div className="relative border-y border-emerald-900/25 bg-[#fff9df]/35 px-2 py-9 backdrop-blur-[1px] md:px-8">
                <div
                  aria-hidden="true"
                  className="absolute -left-5 top-6 hidden h-[calc(100%-3rem)] w-1 bg-emerald-800/35 md:block"
                />
                <p className="text-xs font-black uppercase tracking-[0.35em] text-emerald-700">
                  Author
                </p>
                <h2 className="mt-3 font-skyCur text-5xl leading-none text-emerald-950 md:text-6xl">
                  Meet Emilee Powell
                </h2>
                <p className="mt-5 text-lg leading-8 text-emerald-950/75">
                  Emilee is the author behind Stella&apos;s stories, creating
                  bright children&apos;s books that invite young readers to care
                  for the earth, grow good things, and notice the beauty in the
                  people around them.
                </p>
                <p className="mt-4 text-lg leading-8 text-emerald-950/70">
                  This space can grow into a full author bio with her story,
                  inspiration, school visits, and contact details.
                </p>
                <div className="mt-7 h-px w-full bg-gradient-to-r from-emerald-800/40 via-amber-700/30 to-transparent" />
                <p className="mt-4 text-sm font-black uppercase tracking-[0.24em] text-emerald-900/55">
                  Stories rooted in kindness, curiosity, and care.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
