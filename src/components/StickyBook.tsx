"use client";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { business } from "@/data/business";

/** Mobile-only bottom bar. Hides while the booking form is on screen. */
export default function StickyBook() {
  const [show, setShow] = useState(false);
  const [atForm, setAtForm] = useState(false);

  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on, { passive: true });
    const form = document.getElementById("book");
    const io = form ? new IntersectionObserver(([e]) => setAtForm(e.isIntersecting)) : null;
    if (form && io) io.observe(form);
    return () => {
      window.removeEventListener("scroll", on);
      io?.disconnect();
    };
  }, []);

  const visible = show && !atForm;
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-px border-t border-line bg-ink transition-transform duration-300 lg:hidden ${visible ? "translate-y-0" : "translate-y-full"}`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      inert={!visible}
    >
      <a href={business.phoneHref} className="btn btn-ghost !border-0 flex-none !px-5" aria-label="Call Peggy's">
        <Phone size={18} />
      </a>
      <a href="#book" className="btn btn-primary flex-1">Book Now</a>
    </div>
  );
}
