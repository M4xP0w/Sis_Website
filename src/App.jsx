import useLenis from "./lenis";

import Nav from "./components/Nav";
import Hero from "./sections/Hero";

const featuredBooks = [
  {
    badge: "Sample Layout",
    title: "Book Title One",
    description:
      "A short description can live here so visitors quickly understand the tone, age range, or theme of the story.",
    tone: "from-rose-100 via-white to-sky-100",
  },
  {
    badge: "Sample Layout",
    title: "Book Title Two",
    description:
      "This card is ready for real cover art, a polished blurb, and a link to buy or learn more about the book.",
    tone: "from-amber-100 via-white to-orange-50",
  },
  {
    badge: "Sample Layout",
    title: "Book Title Three",
    description:
      "You can also use this space for launch copy, classroom notes, or a quick hook that makes the book feel inviting.",
    tone: "from-blue-100 via-white to-cyan-50",
  },
];

export default function App() {
  useLenis();

  return (
    <main className="text-white">
      <Nav />
      <Hero />

      <section
        id="books"
        className="relative min-h-screen overflow-hidden bg-brandBlue px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="inline-flex rounded-full bg-white/85 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-brandBlue">
            Books
          </p>

          <div className="mt-6 max-w-3xl">
            <h2 className="text-4xl font-black text-white md:text-6xl">
              Books Available
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-50">
              I swapped the placeholder out for a real section layout so we can
              drop in your sister&apos;s actual titles, cover art, and
              descriptions next.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featuredBooks.map((book) => (
              <article
                key={book.title}
                className="rounded-[30px] bg-white p-6 text-slate-900 shadow-[0_25px_80px_rgba(15,23,42,0.18)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-2"
              >
                <div
                  className={`flex aspect-[4/5] items-end rounded-[24px] bg-gradient-to-b p-5 ${book.tone}`}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brandBlue">
                      {book.badge}
                    </p>
                    <h3 className="mt-3 text-3xl font-black leading-tight">
                      {book.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  {book.description}
                </p>

                <button
                  type="button"
                  className="mt-6 rounded-full bg-brandBlue px-5 py-3 font-semibold text-white transition hover:bg-slate-900"
                >
                  Learn More
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="flex min-h-[70vh] items-center bg-dirt px-6 py-20 text-slate-900"
      >
        <div className="mx-auto max-w-4xl rounded-[32px] bg-white/85 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.14)] backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brandBlue">
            About
          </p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            This section can introduce your sister as the author.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            I kept this part simple for now so the main focus stays on the hero
            and the new book cards. When you&apos;re ready, we can turn this into
            a full author story with a photo, short bio, and contact links.
          </p>
        </div>
      </section>
    </main>
  );
}
