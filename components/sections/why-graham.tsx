import { content } from "@/lib/content";
import { Icon } from "@/components/icon";

export function WhyGraham({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  const { whyGraham } = content;

  return (
    <section
      id="why"
      aria-labelledby={showHeader ? "why-title" : undefined}
      className="section bg-[var(--color-surface)] border-y border-[var(--color-border)]"
    >
      <div className="container-prose">
        {showHeader && (
          <div className="max-w-3xl">
            <span className="eyebrow">{whyGraham.eyebrow}</span>
            <h2
              id="why-title"
              className="heading-h1 mt-3 text-[var(--color-foreground)]"
            >
              {whyGraham.headline}
            </h2>
            {whyGraham.subheadline && (
              <p className="lead-text mt-5">{whyGraham.subheadline}</p>
            )}
          </div>
        )}

        <ul
          className={
            showHeader
              ? "mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          }
        >
          {whyGraham.cards.map((card) => (
            <li
              key={card.title}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-cream-50)] p-6 md:p-7 transition-shadow duration-200 hover:shadow-[var(--shadow-card)]"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] text-[var(--color-primary)]">
                <Icon name={card.icon} className="h-6 w-6" />
              </div>
              <h3 className="heading-h3 mt-5 text-[var(--color-foreground)]">
                {card.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] md:text-base text-[var(--color-muted-foreground)] leading-relaxed">
                {card.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
