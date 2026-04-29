interface PageHeaderProps {
  eyebrow: string;
  headline: string;
  subheadline?: string;
}

export function PageHeader({ eyebrow, headline, subheadline }: PageHeaderProps) {
  return (
    <section
      aria-labelledby="page-header-title"
      className="relative overflow-hidden border-b border-[var(--color-border)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--color-cream-50)] to-[var(--color-cream-100)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 -z-10 h-[360px] w-[360px] rounded-full bg-[var(--color-gold-100)] opacity-40 blur-3xl"
      />
      <div className="container-prose pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1
            id="page-header-title"
            className="heading-display-xl mt-4 text-[var(--color-foreground)]"
          >
            {headline}
          </h1>
          {subheadline && (
            <p className="lead-text mt-5 max-w-2xl">{subheadline}</p>
          )}
        </div>
      </div>
    </section>
  );
}
