"use client";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { business, nav } from "@/data/business";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [open]);

  // The scroll lock is still on during the click, so close first, then scroll.
  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/95 backdrop-blur" : "bg-gradient-to-b from-ink/80 to-transparent"
      }`}
    >
      <div className="wrap flex h-[76px] items-center justify-between gap-6 lg:h-[92px]">
        <a href="#top" aria-label="Peggy's Tattoo — back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-bone/80 transition-colors hover:text-ember">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href={business.phoneHref} className="hidden items-center gap-2 text-sm font-semibold text-bone/90 transition-colors hover:text-ember xl:flex">
            <Phone size={15} /> {business.phone}
          </a>
          <a href="#book" className="btn btn-primary hidden !min-h-[44px] !px-5 !text-[0.75rem] lg:inline-flex">
            Book a Tattoo
          </a>
          <button
            type="button"
            className="-mr-2 grid h-11 w-11 place-items-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`grid overflow-hidden bg-ink transition-[grid-template-rows] duration-300 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="min-h-0">
          <nav aria-label="Mobile" className="wrap flex h-[calc(100dvh-76px)] flex-col pb-8 pt-4">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={(e) => go(e, n.href)} className="display border-b border-line py-4 text-3xl">
                {n.label}
              </a>
            ))}
            <div className="mt-auto space-y-3 pt-8">
              <a href={business.phoneHref} className="btn btn-ghost w-full">
                <Phone size={16} /> Call {business.phone}
              </a>
              <a href="#book" onClick={(e) => go(e, "#book")} className="btn btn-primary w-full !min-h-[60px] !text-base">
                Book a Tattoo
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
