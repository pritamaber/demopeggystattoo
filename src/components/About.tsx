import { Check } from "lucide-react";
import Pic from "./Pic";
import Reveal from "./Reveal";

const points = [
  "Established 1990",
  "Licensed, professional environment",
  "Family friendly",
  "American owned and operated",
  "Walk-ins welcome",
  "Open daily",
];

export default function About() {
  return (
    <section id="about" className="section bg-bone text-ink">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-last pb-6 lg:order-first">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-char lg:max-w-none">
            <Pic slug="back-piece" sizes="(min-width:1024px) 40vw, 90vw" position="50% 30%" />
          </div>
          <div className="absolute bottom-0 right-0 hidden w-2/5 border-[10px] border-bone bg-bone sm:block">
            <div className="relative aspect-[3/4]">
              <Pic slug="sunflowers" sizes="20vw" position="50% 35%" />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="eyebrow !text-ember-dk">Our legacy</p>
          <h2 className="display mt-4 text-[clamp(2.6rem,6vw,5rem)]">36+ years on South Padre Island</h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/80">
            Since 1990, Peggy&apos;s has been part of the South Padre Island experience, welcoming locals and visitors looking to leave the island with something permanent — or something that lasts just a little while.
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 font-semibold">
                <Check size={18} className="mt-1 shrink-0 text-ember-dk" /> {p}
              </li>
            ))}
          </ul>
          <blockquote className="mt-10 max-w-xl border-l-4 border-ember pl-5 text-[1.05rem] italic leading-relaxed text-ink/75">
            We are grateful for all our artists, staff members, friends, family and community that have supported us through this long journey. Thank you for your support as we navigate into 2026.
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
