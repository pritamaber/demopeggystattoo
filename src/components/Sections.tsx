import { ArrowUpRight, MapPin, Star } from "lucide-react";
import { business } from "@/data/business";
import { reviews } from "@/data/reviews";
import Logo from "./Logo";
import Pic from "./Pic";
import Reveal from "./Reveal";

export function Artists() {
  const names = ["Sergio", "Russell", "Alondra", "Marisol", "Samantha", "Sam"];
  const strip = ["sunflowers", "anatomical-heart", "sea-turtle-arm", "peace-heart", "pocket-watch", "dragonflies"];
  return (
    <section className="section bg-char">
      <div className="wrap">
        <Reveal className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">The people behind the work</p>
            <h2 className="display mt-4 text-[clamp(2.6rem,6vw,5rem)]">Meet the artists</h2>
          </div>
          <p className="text-lg leading-relaxed text-bone/75">
            Our artists bring years of experience, creativity and a personal approach to every piece.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-y border-line py-6">
          {names.map((n) => (
            <span key={n} className="display text-3xl text-bone/90 sm:text-4xl">
              {n}
            </span>
          ))}
        </Reveal>

        <div className="mt-8 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
          {strip.map((s, i) => (
            <Reveal key={s} delay={i * 60}>
              <div className="relative aspect-[3/4] overflow-hidden bg-slate">
                <Pic slug={s} sizes="(min-width:768px) 16vw, 33vw" position="50% 40%" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WalkIns() {
  return (
    <section className="relative overflow-hidden bg-ember text-ink">
      <div className="wrap section grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <h2 className="display text-[clamp(3rem,8.5vw,7.5rem)]">Walk-ins always welcome</h2>
          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed">
            Sometimes the best vacation memories aren&apos;t planned. Stop by the shop and talk with our team about your tattoo, piercing or body-art idea.
          </p>
        </Reveal>
        <Reveal className="space-y-5 lg:justify-self-end">
          <p className="flex items-start gap-3 font-semibold">
            <MapPin className="mt-0.5 shrink-0" /> {business.address}
          </p>
          <p className="text-sm font-bold uppercase tracking-[0.2em]">Open daily</p>
          <a href={business.directionsHref} target="_blank" rel="noopener noreferrer" className="btn bg-ink text-bone hover:bg-bone hover:text-ink">
            Get directions <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Henna() {
  const tiles: [string, string][] = [
    ["henna-hands-pair", "50% 40%"],
    ["jagua-hibiscus", "50% 50%"],
    ["henna-turtle-leg", "50% 40%"],
    ["henna-yinyang", "50% 50%"],
    ["henna-fingers", "50% 40%"],
    ["jagua-return-to-sender", "50% 50%"],
  ];
  const tags = ["Henna", "Jagua", "Custom designs", "Vacation-friendly", "Multiple design options"];
  return (
    <section id="henna" className="section bg-bone text-ink">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal className="self-center">
          <p className="eyebrow !text-ember-dk">Henna &amp; Jagua</p>
          <h2 className="display mt-4 text-[clamp(2.6rem,6vw,5rem)]">Not ready for permanent?</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/80">
            Try temporary body art with henna or Jagua and enjoy your design without the commitment of a permanent tattoo.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li key={t} className="border border-ink/30 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em]">
                {t}
              </li>
            ))}
          </ul>
          <a href="#book" className="btn mt-9 bg-ink text-bone hover:bg-ember hover:text-ink">
            Ask about henna &amp; Jagua
          </a>
        </Reveal>

        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {tiles.map(([s, pos], i) => (
            <Reveal key={s} delay={i * 50} className={i === 0 || i === 3 ? "col-span-2" : ""}>
              <div className={`relative overflow-hidden bg-ink/10 ${i === 0 || i === 3 ? "aspect-[4/3]" : "aspect-[3/4]"}`}>
                <Pic slug={s} sizes="(min-width:1024px) 28vw, 60vw" position={pos} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Piercing() {
  return (
    <section id="piercing" className="section bg-slate">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Body piercing</p>
          <h2 className="display mt-4 text-[clamp(2.6rem,6vw,5rem)]">Piercings for all ages</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-bone/80">
            From first ear piercings to your next addition, Peggy&apos;s offers professional piercing services in a clean, welcoming environment.
          </p>
          <a href="#book" className="btn btn-primary mt-9">Ask about piercing</a>
        </Reveal>
        <Reveal className="relative flex min-h-[18rem] items-center justify-center border border-line p-8 text-center">
          <div>
            <p className="eyebrow">Our specialty</p>
            <p className="display mt-4 text-[clamp(2.4rem,6vw,4.5rem)] text-ember">Ear piercings for all ages</p>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-mute">Body jewelry &amp; fashion jewelry available</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="section bg-ink">
      <div className="wrap">
        <Reveal className="text-center">
          <p className="eyebrow">Reviews from Google</p>
          <h2 className="display mt-4 text-[clamp(2.6rem,6vw,5rem)]">What our customers say</h2>
        </Reveal>

        {reviews.length > 0 ? (
          <ul className="mt-14 columns-1 gap-4 md:columns-2 lg:columns-3">
            {reviews.map((r) => (
              <li key={r.name} className="mb-4 break-inside-avoid border border-line bg-char p-6">
                <p className="flex gap-0.5 text-ember" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </p>
                <p className="mt-4 leading-relaxed text-bone/90">{r.text}</p>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em]">— {r.name}</p>
              </li>
            ))}
          </ul>
        ) : null}

        <Reveal className="mx-auto mt-12 max-w-2xl border border-line bg-char p-8 text-center sm:p-12">
          <p className="display text-7xl text-ember">{business.google.rating}</p>
          <p className="mt-2 flex justify-center gap-0.5 text-ember" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </p>
          <p className="mt-3 text-lg">
            {business.google.count} Google reviews
          </p>
          <p className="mx-auto mt-3 max-w-md text-bone/70">Hear from visitors and locals in their own words.</p>
          <a href={business.reviewsHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-7">
            Read reviews on Google <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Vacation() {
  const tiles = ["spi-palm", "sun-wave", "sea-turtle-arm", "ohana-turtle", "hibiscus"];
  return (
    <section className="section overflow-hidden bg-char">
      <div className="wrap">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">South Padre Island</p>
          <h2 className="display mt-4 text-[clamp(2.6rem,7vw,6rem)]">Take a little piece of South Padre home.</h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-bone/80">
            Whether it&apos;s your first tattoo, a matching vacation tattoo, a meaningful piece or something spontaneous before you leave the island, Peggy&apos;s has been part of South Padre Island memories since 1990.
          </p>
          <a href="#book" className="btn btn-primary mt-9">Plan your tattoo</a>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-2 sm:grid-cols-5 md:gap-3">
          {tiles.map((s, i) => (
            <Reveal key={s} delay={i * 60} className={`${i === 4 ? "col-span-2 sm:col-span-1" : ""} ${i % 2 ? "sm:translate-y-8" : ""}`}>
              <div className={`relative overflow-hidden bg-slate ${i === 4 ? "aspect-[2/1] sm:aspect-[3/4]" : "aspect-[3/4]"}`}>
                <Pic slug={s} sizes="(min-width:640px) 20vw, 50vw" position="50% 40%" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const bg = ["phoenix", "koi", "black-roses", "peace-heart", "sea-turtle-arm", "peony", "dagger-rose", "dragonflies"];
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10 grid grid-cols-4 md:grid-cols-8" aria-hidden>
        {bg.map((s) => (
          <div key={s} className={`relative ${bg.indexOf(s) > 3 ? "hidden md:block" : ""}`}>
            <Pic slug={s} sizes="13vw" alt="" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 -z-10 bg-ink/80" />
      <div className="wrap section text-center">
        <Reveal>
          <h2 className="display text-[clamp(3.2rem,10vw,8.5rem)]">
            Your idea.
            <br />
            Your story.
            <br />
            <span className="text-ember">Your ink.</span>
          </h2>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#book" className="btn btn-primary">Book a tattoo</a>
            <a href={business.directionsHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Walk in today</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const links = [
    ["Tattoos", "#tattoos"], ["Piercing", "#piercing"], ["Henna & Jagua", "#henna"], ["Gallery", "#gallery"],
    ["Reviews", "#reviews"], ["About", "#about"], ["Book", "#book"],
  ];
  return (
    <footer className="border-t border-line bg-ink pb-24 pt-16 lg:pb-12">
      <div className="wrap grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="display mt-5 text-2xl">Peggy&apos;s Temporary &amp; Permanent Tattoos</p>
          <p className="mt-3 text-bone/70">Established 1990 &bull; South Padre Island, Texas</p>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-ember">Walk-ins always welcome &bull; Open daily</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
            {links.map(([l, h]) => (
              <li key={l}><a href={h} className="text-bone/80 transition-colors hover:text-ember">{l}</a></li>
            ))}
          </ul>
        </nav>
        <address className="space-y-2 not-italic text-bone/80">
          <p>{business.address}</p>
          <p><a href={business.phoneHref} className="font-semibold text-ember hover:text-bone">{business.phone}</a></p>
        </address>
      </div>
      <div className="wrap mt-12 border-t border-line pt-6 text-xs text-mute">
        Frontend demo — the inquiry form does not send or store any data. &copy; Peggy&apos;s Temporary &amp; Permanent Tattoos.
      </div>
    </footer>
  );
}
