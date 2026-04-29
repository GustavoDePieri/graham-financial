import Image from "next/image";
import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";

export function Hero() {
  const { hero, business } = content;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      {/* Decorative warm wash + soft gold glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--color-cream-50)] to-[var(--color-cream-100)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-32 -z-10 h-[480px] w-[480px] rounded-full bg-[var(--color-gold-100)] opacity-50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-32 -z-10 h-[460px] w-[460px] rounded-full bg-[var(--color-navy-100)] opacity-50 blur-3xl"
      />

      <div className="container-prose pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text — narrower so the photo can breathe */}
          <div className="lg:col-span-5 lg:order-1 order-1">
            {hero.eyebrow && <span className="eyebrow">{hero.eyebrow}</span>}
            <h1
              id="hero-title"
              className="heading-display-2xl mt-4 text-[var(--color-foreground)]"
            >
              <span className="block">{hero.headline.line1}</span>
              <span className="block text-[var(--color-primary)]">
                {hero.headline.line2}
              </span>
            </h1>
            <p className="lead-text mt-6 max-w-xl">{hero.subheadline}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              {hero.ctas.map((cta, i) => (
                <Button
                  key={cta.href}
                  asChild
                  variant={i === 0 ? "primary" : "secondary"}
                  size="lg"
                >
                  <a href={cta.href} aria-label={cta.ariaLabel}>
                    {cta.icon && (
                      <Icon name={cta.icon} className="h-5 w-5" />
                    )}
                    {cta.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Family photo — featured */}
          <div className="lg:col-span-7 lg:order-2 order-2">
            <figure className="relative">
              {/* Decorative gold rule above */}
              <div
                aria-hidden="true"
                className="hidden md:block absolute -top-3 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60"
              />

              <div className="relative aspect-[3/2] rounded-[var(--radius-xl)] overflow-hidden bg-[var(--color-cream-200)] shadow-[var(--shadow-elevated)] ring-1 ring-[var(--color-cream-300)]">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-center"
                />

                {/* Subtle bottom gradient for legibility of the badge */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[rgba(10,31,54,0.55)] via-[rgba(10,31,54,0.15)] to-transparent"
                />

                {/* Editorial badge */}
                <div className="absolute left-5 bottom-5 md:left-7 md:bottom-7 inline-flex items-center gap-3 rounded-full bg-[rgba(255,255,255,0.92)] backdrop-blur-sm border border-white/70 pl-2 pr-4 py-2 shadow-[0_4px_16px_rgba(15,44,74,0.18)]">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[var(--color-primary)] text-[var(--color-gold-300)] font-display text-[0.6875rem] font-bold tracking-wider">
                    GFG
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[0.625rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-muted-foreground)]">
                      Established
                    </span>
                    <span className="font-display text-base font-semibold text-[var(--color-primary)]">
                      {business.foundedYear}
                    </span>
                  </span>
                </div>
              </div>

              <figcaption className="mt-4 text-sm text-[var(--color-muted-foreground)] md:pl-1">
                The Graham family — three generations guiding Medicare clients
                from Lake Worth Beach, FL.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Trust strip */}
        <ul
          aria-label="Why families trust Graham Financial"
          className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)]"
        >
          {hero.trustStrip.map((stat) => (
            <li
              key={stat.label}
              className="bg-[var(--color-surface)] px-5 py-6 text-center md:text-left"
            >
              <div className="font-display text-2xl md:text-3xl font-semibold text-[var(--color-primary)] leading-none">
                {stat.value}
              </div>
              <div className="mt-1.5 text-sm md:text-[0.9375rem] text-[var(--color-muted-foreground)]">
                {stat.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
