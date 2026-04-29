import { content } from "@/lib/content";

function AboutBody() {
  const { about } = content;
  return (
    <>
      <div className="space-y-5 text-[var(--color-foreground)] leading-relaxed text-[1.0625rem] md:text-[1.1875rem]">
        {about.paragraphs.slice(0, 1).map((p, i) => (
          <p key={`pre-${i}`}>{p}</p>
        ))}
      </div>

      <figure className="mt-10 md:mt-12 relative pl-6 md:pl-8 border-l-[3px] border-[var(--color-accent)]">
        <span
          aria-hidden="true"
          className="absolute -left-[2px] -top-3 text-5xl md:text-6xl leading-none font-display font-semibold text-[var(--color-accent)] select-none"
        >
          &ldquo;
        </span>
        <blockquote className="font-display text-2xl md:text-[1.75rem] leading-snug font-medium text-[var(--color-primary)]">
          {about.quote}
        </blockquote>
        <figcaption className="mt-4 text-sm uppercase tracking-[0.14em] font-semibold text-[var(--color-muted-foreground)]">
          — The Graham Family
        </figcaption>
      </figure>

      <div className="mt-10 md:mt-12 space-y-5 text-[var(--color-foreground)] leading-relaxed text-[1.0625rem] md:text-[1.1875rem]">
        {about.paragraphs.slice(1).map((p, i) => (
          <p key={`post-${i}`}>{p}</p>
        ))}
      </div>
    </>
  );
}

export function About({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  const { about } = content;

  return (
    <section
      id="about"
      aria-labelledby={showHeader ? "about-title" : undefined}
      className="section bg-[var(--color-surface)] border-y border-[var(--color-border)]"
    >
      <div className="container-prose">
        {showHeader ? (
          <div className="grid lg:grid-cols-12 gap-y-10 gap-x-12 lg:gap-x-16">
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
              <span className="eyebrow">{about.eyebrow}</span>
              <h2
                id="about-title"
                className="heading-display-xl mt-4 text-[var(--color-foreground)]"
              >
                {about.headline}
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <AboutBody />
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <AboutBody />
          </div>
        )}

        {/* Highlights — full-width feature row */}
        <div
          aria-hidden="true"
          className="mt-16 md:mt-20 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent"
        />
        <dl className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
          {about.highlights.map((h, i) => (
            <div
              key={h.label}
              className={
                i > 0
                  ? "sm:border-l sm:border-[var(--color-border)] sm:pl-8 md:sm:pl-10"
                  : ""
              }
            >
              <dt className="text-sm md:text-[0.9375rem] uppercase tracking-[0.12em] font-semibold text-[var(--color-muted-foreground)]">
                {h.label}
              </dt>
              <dd className="mt-3 font-display font-semibold text-[var(--color-primary)] leading-none text-[2.5rem] md:text-[3.25rem]">
                {h.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
