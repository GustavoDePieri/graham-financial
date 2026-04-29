import Image from "next/image";
import { content } from "@/lib/content";

export function ThenAndNow() {
  const { aboutTimeline } = content;

  return (
    <section
      aria-labelledby="timeline-title"
      className="section"
    >
      <div className="container-prose">
        {aboutTimeline.eyebrow && (
          <div className="text-center mb-10 md:mb-14">
            <span className="eyebrow">{aboutTimeline.eyebrow}</span>
            <h2 id="timeline-title" className="sr-only">
              {aboutTimeline.eyebrow}
            </h2>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-end">
          {aboutTimeline.items.map((item, idx) => (
            <figure key={item.year} className="group">
              <div className="relative aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden bg-[var(--color-cream-200)] shadow-[var(--shadow-elevated)] ring-1 ring-[var(--color-cream-300)]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, (min-width: 768px) 48vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-6 md:mt-8 text-center md:text-left">
                <div
                  aria-hidden="true"
                  className="h-px w-12 bg-[var(--color-accent)] mx-auto md:mx-0 mb-4"
                />
                <div className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-primary)] leading-none">
                  {item.year}
                </div>
                <div className="mt-2.5 font-display text-lg md:text-xl text-[var(--color-foreground)]">
                  {item.label}
                </div>
                <p className="mt-3 text-[0.9375rem] md:text-base text-[var(--color-muted-foreground)] leading-relaxed max-w-md md:max-w-none">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
