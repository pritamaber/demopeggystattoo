/** Cream spade with PEGGY'S inside + red TATTOO lettering, modelled on the storefront sign. */
export function Spade({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 108" className={className} role="img" aria-label="Peggy's">
      <path
        d="M50 2 C60 26 94 42 94 70 C94 85 80 92 66 88 C62 87 58 85 56 82 C57 92 60 100 68 104 L32 104 C40 100 43 92 44 82 C42 85 38 87 34 88 C20 92 6 85 6 70 C6 42 40 26 50 2 Z"
        fill="#efe9d6"
      />
      <text x="50" y="68" textAnchor="middle" fontFamily="var(--font-barlow), sans-serif" fontWeight="700" fontSize="16" fill="#9c2a22">
        PEGGY&apos;S
      </text>
    </svg>
  );
}

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Spade className={compact ? "h-14 w-auto" : "h-14 w-auto lg:h-[4.25rem]"} />
      <span
        className="display text-[2.1rem] leading-none lg:text-[2.6rem] tracking-[0.04em] text-[#ee2a2a]"
        style={{ textShadow: "0 0 14px rgb(238 42 42 / 0.55)" }}
      >
        Tattoo
      </span>
      <Spade className={compact ? "h-14 w-auto" : "h-14 w-auto lg:h-[4.25rem]"} />
    </span>
  );
}
