import { content } from "@/lib/content";
import { Star } from "lucide-react";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? "h-4 w-4 fill-[var(--color-accent)] text-[var(--color-accent)]"
              : "h-4 w-4 text-[var(--color-ink-200)]"
          }
          strokeWidth={1.5}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  const { testimonials } = content;

  return (
    <section
      id="testimonials"
      aria-labelledby={showHeader ? "testimonials-title" : undefined}
      className="section"
    >
      <div className="container-prose">
        {showHeader && (
          <div className="max-w-3xl">
            <span className="eyebrow">{testimonials.eyebrow}</span>
            <h2
              id="testimonials-title"
              className="heading-h1 mt-3 text-[var(--color-foreground)]"
            >
              {testimonials.headline}
            </h2>
            {testimonials.subheadline && (
              <p className="lead-text mt-5">{testimonials.subheadline}</p>
            )}
          </div>
        )}

        <ul
          className={
            showHeader
              ? "mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
              : "grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          }
        >
          {testimonials.items.map((t) => (
            <li
              key={t.id}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 flex flex-col"
            >
              <Stars rating={t.rating} />
              <blockquote className="mt-4 text-[1.0625rem] leading-relaxed text-[var(--color-foreground)]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 pt-5 border-t border-[var(--color-border)] flex items-center gap-3">
                <div
                  className="h-11 w-11 rounded-full bg-[var(--color-cream-200)] text-[var(--color-primary)] inline-flex items-center justify-center font-display text-lg font-semibold"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[0.9375rem] text-[var(--color-foreground)]">
                    {t.name}
                  </div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">
                    {t.locality}
                  </div>
                </div>
              </footer>
            </li>
          ))}
        </ul>

        {/* TODO: Replace placeholders with real reviews from Google or hardcoded with permission. */}
      </div>
    </section>
  );
}
