import { content } from "@/lib/content";
import { Icon } from "@/components/icon";
import { ArrowRight, Check } from "lucide-react";

export function Services({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  const { services } = content;

  return (
    <section
      id="services"
      aria-labelledby={showHeader ? "services-title" : undefined}
      className="section"
    >
      <div className="container-prose">
        {showHeader && (
          <div className="max-w-3xl">
            <span className="eyebrow">{services.eyebrow}</span>
            <h2
              id="services-title"
              className="heading-h1 mt-3 text-[var(--color-foreground)]"
            >
              {services.headline}
            </h2>
            <p className="lead-text mt-5">{services.intro}</p>
          </div>
        )}

        <ul
          className={
            showHeader
              ? "mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
              : "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          }
        >
          {services.cards.map((card) => (
            <li
              key={card.id}
              className="group rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 md:p-8 transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 hover:border-[var(--color-border-strong)]"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-[var(--radius-md)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
                  <Icon name={card.icon} className="h-7 w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="heading-h3 text-[var(--color-foreground)]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] md:text-base text-[var(--color-muted-foreground)] leading-relaxed">
                    {card.description}
                  </p>
                  {card.bullets && card.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {card.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-[0.9375rem] text-[var(--color-foreground)]"
                        >
                          <Check
                            className="h-4 w-4 mt-1 shrink-0 text-[var(--color-accent)]"
                            strokeWidth={3}
                            aria-hidden="true"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href={card.learnMoreHref}
                    className="mt-5 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]"
                  >
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
