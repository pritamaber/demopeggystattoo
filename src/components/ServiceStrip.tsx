const items = ["Permanent Tattoos", "Piercings", "Henna + Jagua", "Custom Body Art", "Permanent Jewelry"];

export default function ServiceStrip() {
  return (
    <div id="services-strip" className="border-y border-line bg-char">
      <ul className="no-scrollbar wrap flex snap-x overflow-x-auto lg:justify-between" aria-label="Services at a glance">
        {items.map((t, i) => (
          <li key={t} className="flex shrink-0 snap-start items-center">
            <span className="display px-5 py-5 text-lg tracking-wider text-bone/90 sm:text-xl lg:px-0 lg:py-6 lg:text-2xl">{t}</span>
            {i < items.length - 1 && (
              <span aria-hidden className="text-ember lg:mx-6">
                ✦
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
