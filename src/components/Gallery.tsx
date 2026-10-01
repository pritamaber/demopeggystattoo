"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { src, work } from "@/data/images";
import Reveal from "./Reveal";

// Interleave permanent work and henna/jagua so the wall feels varied.
const perm = work.filter((w) => w.kind === "p");
const temp = work.filter((w) => w.kind === "t");
const items = (() => {
  const out: typeof work = [];
  let t = 0;
  perm.forEach((p, i) => {
    out.push(p);
    if (i % 5 === 3 && t < temp.length) out.push(temp[t++]);
  });
  return out.concat(temp.slice(t));
})();

const ratios = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[3/4]", "aspect-[4/5]", "aspect-square"];
const PAGE = 24;

export default function Gallery() {
  const [count, setCount] = useState(PAGE);
  const [active, setActive] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setActive(null);
    opener.current?.focus();
  }, []);
  const step = useCallback((d: number) => setActive((a) => (a === null ? a : (a + d + items.length) % items.length)), []);

  return (
    <section id="gallery" className="section bg-char">
      <div className="wrap">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">The portfolio</p>
            <h2 className="display mt-4 text-[clamp(2.6rem,7vw,6rem)]">The work speaks for itself.</h2>
          </div>
          <p className="max-w-sm text-bone/70">Real tattoos and body art done at Peggy&apos;s on South Padre Island. Tap any piece to see it larger.</p>
        </Reveal>

        <ul className="mt-12 columns-2 gap-3 md:columns-3 md:gap-4 xl:columns-4">
          {items.slice(0, count).map((img, i) => {
            const wide = img.w > img.h;
            return (
              <li key={img.slug} className="mb-3 break-inside-avoid md:mb-4">
                <button
                  type="button"
                  onClick={(e) => {
                    opener.current = e.currentTarget;
                    setActive(i);
                  }}
                  aria-label={`View larger: ${img.alt}`}
                  className="group relative block w-full overflow-hidden bg-slate focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                >
                  <div className={`relative ${wide ? "aspect-[4/3]" : ratios[i % ratios.length]}`}>
                    <Image
                      src={src(img.slug)}
                      alt={img.alt}
                      fill
                      loading={i < 4 ? "eager" : "lazy"}
                      sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      style={{ objectPosition: wide ? "center" : "50% 40%" }}
                    />
                  </div>
                  <span className="absolute inset-0 grid place-items-center bg-ink/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="flex items-center gap-2 border border-bone/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">
                      <Expand size={14} /> View
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {count < items.length && (
          <div className="mt-12 text-center">
            <button type="button" className="btn btn-ghost" onClick={() => setCount((c) => Math.min(c + PAGE, items.length))}>
              Show more work ({items.length - count} more)
            </button>
          </div>
        )}
      </div>

      {active !== null && <Lightbox index={active} onClose={close} onStep={step} />}
    </section>
  );
}

function Lightbox({ index, onClose, onStep }: { index: number; onClose: () => void; onStep: (d: number) => void }) {
  const img = items[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onStep(1);
      else if (e.key === "ArrowLeft") onStep(-1);
      else if (e.key === "Tab") {
        // keep focus inside the dialog
        const btns = document.querySelectorAll<HTMLElement>("[data-lb] button");
        const first = btns[0];
        const last = btns[btns.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", key);
    };
  }, [onClose, onStep]);

  return (
    <div
      data-lb
      role="dialog"
      aria-modal="true"
      aria-label="Tattoo gallery viewer"
      className="fade-up fixed inset-0 z-[70] flex flex-col bg-ink/[0.98]"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) onStep(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 text-sm text-mute" onClick={(e) => e.stopPropagation()}>
        <span aria-live="polite">
          {index + 1} / {items.length}
        </span>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className="grid h-11 w-11 place-items-center text-bone hover:text-ember">
          <X />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 md:px-20" >
        <button
          type="button"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            onStep(-1);
          }}
          className="absolute left-1 z-10 grid h-12 w-12 place-items-center bg-ink/70 text-bone hover:bg-ember hover:text-ink md:left-5"
        >
          <ChevronLeft />
        </button>
        <Image
          key={img.slug}
          src={src(img.slug)}
          alt={img.alt}
          width={img.w}
          height={img.h}
          sizes="90vw"
          onClick={(e) => e.stopPropagation()}
          className="fade-up max-h-full w-auto max-w-full object-contain"
          style={{ maxHeight: "calc(100dvh - 140px)", minHeight: "min(70dvh, 560px)" }}
        />
        <button
          type="button"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            onStep(1);
          }}
          className="absolute right-1 z-10 grid h-12 w-12 place-items-center bg-ink/70 text-bone hover:bg-ember hover:text-ink md:right-5"
        >
          <ChevronRight />
        </button>
      </div>
      <p className="px-6 py-4 text-center text-sm text-bone/70" onClick={(e) => e.stopPropagation()}>
        {img.alt}
      </p>
    </div>
  );
}
