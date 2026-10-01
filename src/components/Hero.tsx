import Pic from "./Pic";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-[76px] lg:pt-[92px]">
      <div className="wrap grid min-h-[calc(100svh-76px)] items-center gap-10 pb-20 pt-10 lg:min-h-[calc(100svh-92px)] lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:pb-24">
        <div className="relative z-10">
          <p className="eyebrow fade-up" style={{ animationDelay: "60ms" }}>
            Est. 1990 &bull; South Padre Island, TX
          </p>
          <h1 className="display fade-up mt-5 text-[clamp(2.9rem,12vw,4.6rem)] sm:text-[clamp(3.5rem,9vw,6rem)] lg:text-[clamp(3.4rem,6.4vw,6rem)]" style={{ animationDelay: "140ms" }}>
            Tattoos made
            <br />
            to last.
            <br />
            <span className="text-ember">Memories made</span>
            <br />
            on the island.
          </h1>
          <p className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-bone/80" style={{ animationDelay: "240ms" }}>
            Established in 1990, Peggy&apos;s has been creating tattoos, piercings and custom body art on South Padre Island for over 36 years.
          </p>
          <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "320ms" }}>
            <a href="#book" className="btn btn-primary">Book a Tattoo</a>
            <a href="#gallery" className="btn btn-ghost">View Our Work</a>
          </div>
        </div>

        {/* Real tattoo work, shown near native size so the artwork stays sharp */}
        <div
          className="fade-up relative mx-auto grid aspect-[5/6] w-full max-w-[34rem] grid-cols-5 grid-rows-6 gap-3 lg:max-w-none"
          style={{ animationDelay: "200ms" }}
        >
          <div className="relative col-span-3 row-span-6 overflow-hidden bg-char">
            <Pic slug="phoenix" sizes="(min-width:1024px) 30vw, 60vw" priority position="50% 40%" />
          </div>
          <div className="relative col-span-2 row-span-3 overflow-hidden bg-char">
            <Pic slug="koi" sizes="(min-width:1024px) 20vw, 40vw" priority />
          </div>
          <div className="relative col-span-2 row-span-3 overflow-hidden bg-char">
            <Pic slug="dagger-rose" sizes="(min-width:1024px) 20vw, 40vw" priority position="50% 35%" />
          </div>
        </div>
      </div>

      <a
        href="#services-strip"
        aria-label="Scroll down"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-mute lg:flex"
      >
        Scroll
        <span className="block h-10 w-px overflow-hidden bg-line">
          <span className="block h-full w-full bg-ember [animation:drip_2s_ease-in-out_infinite]" />
        </span>
      </a>
    </section>
  );
}
