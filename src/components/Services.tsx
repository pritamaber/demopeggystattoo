import Pic from "./Pic";
import Reveal from "./Reveal";

type Svc = { title: string; text: string; slug?: string; pos?: string; href: string };

const services: Svc[] = [
  { title: "Permanent Tattoos", text: "Custom artwork, vacation tattoos, meaningful pieces, coverups and more.", slug: "peony", href: "#gallery" },
  { title: "Temporary Tattoos", text: "Fun designs for visitors who want island memories without the commitment.", slug: "ladybug", pos: "50% 25%", href: "#henna" },
  { title: "Henna", text: "Traditional temporary body art.", slug: "henna-hand-flowers", href: "#henna" },
  { title: "Jagua", text: "Dark temporary body art with custom designs.", slug: "jagua-hibiscus", href: "#henna" },
  { title: "Body Piercing", text: "Professional piercing services, including ear piercings for all ages.", href: "#piercing" },
  { title: "Custom Body Art", text: "Work with the artists to turn your idea into a unique design.", slug: "line-portrait", href: "#book" },
  { title: "Permanent Jewelry", text: "Jewelry designed to become part of your everyday style.", href: "#book" },
  { title: "Toe Rings", text: "Custom fitted toe rings.", href: "#book" },
  { title: "Hair Wraps", text: "Fun vacation-ready hair wraps.", href: "#book" },
  { title: "Body & Fashion Jewelry", text: "A selection of jewelry and accessories.", href: "#book" },
];

export default function Services() {
  return (
    <section id="tattoos" className="section bg-ink">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">What we do</p>
          <h2 className="display mt-4 text-[clamp(2.6rem,6vw,5rem)]">Tattoos, piercings &amp; body art</h2>
          <p className="mt-5 text-lg text-bone/70">
            Offering quality artwork &amp; piercings in a licensed, professional and family friendly environment.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3 [&>li]:bg-ink">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 70}>
              <a href={s.href} className="group relative flex h-full min-h-[18rem] flex-col justify-end overflow-hidden p-6 lg:min-h-[22rem]">
                {s.slug ? (
                  <>
                    <div className="absolute inset-0 opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80">
                      <Pic slug={s.slug} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" position={s.pos ?? "center"} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                  </>
                ) : (
                  <span aria-hidden className="display absolute right-5 top-4 text-7xl text-line transition-colors group-hover:text-ember/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <div className="relative">
                  <h3 className="display text-3xl">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-[0.97rem] leading-snug text-bone/75">{s.text}</p>
                  <span className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-ember transition-transform group-hover:translate-x-1">
                    {s.href === "#book" ? "Ask about it" : "Learn more"} →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
