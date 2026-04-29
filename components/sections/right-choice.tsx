import { content } from "@/lib/content";

export function RightChoice() {
  const { aboutChoice } = content;

  return (
    <section
      aria-labelledby="right-choice-title"
      className="section bg-[var(--color-surface)] border-y border-[var(--color-border)]"
    >
      <div className="container-prose">
        <div className="max-w-3xl">
          <span className="eyebrow">{aboutChoice.eyebrow}</span>
          <h2
            id="right-choice-title"
            className="heading-h1 mt-3 text-[var(--color-foreground)]"
          >
            {aboutChoice.headline}
          </h2>
          {aboutChoice.subheadline && (
            <p className="lead-text mt-5">{aboutChoice.subheadline}</p>
          )}
        </div>

        <ul className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {aboutChoice.items.map((item, idx) => (
            <li
              key={item.title}
              className="relative pl-14 md:pl-16"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 inline-flex items-center justify-center h-11 w-11 md:h-12 md:w-12 rounded-full bg-[var(--color-primary)] text-[var(--color-gold-300)] font-display text-base md:text-lg font-semibold tabular-nums"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="heading-h3 text-[var(--color-foreground)]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] md:text-base text-[var(--color-muted-foreground)] leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
