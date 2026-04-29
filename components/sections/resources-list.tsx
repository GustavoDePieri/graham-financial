import { FileText, ExternalLink, Play } from "lucide-react";
import { content } from "@/lib/content";

export function ResourcesList() {
  const { resources } = content;

  return (
    <>
      {/* Guides */}
      <section aria-labelledby="guides-title" className="section">
        <div className="container-prose">
          <h2
            id="guides-title"
            className="heading-h1 text-[var(--color-foreground)]"
          >
            Official guides
          </h2>
          <p className="lead-text mt-4 max-w-2xl">
            Trusted reference material from CMS and Medicare.gov.
          </p>

          <ul className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {resources.guides.map((g) => (
              <li
                key={g.id}
                className="flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-7 transition-all hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-[var(--radius-md)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
                  <FileText className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="heading-h3 mt-5 text-[var(--color-foreground)]">
                  {g.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] text-[var(--color-muted-foreground)] leading-relaxed flex-1">
                  {g.description}
                </p>
                <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex items-center justify-between gap-3">
                  <span className="text-xs uppercase tracking-[0.1em] text-[var(--color-muted-foreground)] font-semibold">
                    {g.source}
                  </span>
                  <a
                    href={g.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]"
                  >
                    Open PDF
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Videos */}
      <section
        aria-labelledby="videos-title"
        className="section bg-[var(--color-surface)] border-y border-[var(--color-border)]"
      >
        <div className="container-prose">
          <h2
            id="videos-title"
            className="heading-h1 text-[var(--color-foreground)]"
          >
            Get started — short videos
          </h2>
          <p className="lead-text mt-4 max-w-2xl">
            CMS-produced explainers covering the most common Medicare questions.
          </p>

          <ul className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {resources.videos.map((v) => (
              <li
                key={v.id}
                className="rounded-[var(--radius-lg)] border border-[var(--color-border)] overflow-hidden bg-[var(--color-cream-50)]"
              >
                <div className="relative aspect-video bg-[var(--color-navy-900)]">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.youTubeId}?rel=0`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="heading-h4 text-[var(--color-foreground)] flex items-start gap-2">
                    <Play
                      className="h-4 w-4 mt-1.5 shrink-0 text-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                    {v.title}
                  </h3>
                  {v.description && (
                    <p className="mt-2 text-[0.9375rem] text-[var(--color-muted-foreground)] leading-relaxed">
                      {v.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* External links */}
      <section aria-labelledby="links-title" className="section">
        <div className="container-prose">
          <h2
            id="links-title"
            className="heading-h1 text-[var(--color-foreground)]"
          >
            Helpful links
          </h2>
          <p className="lead-text mt-4 max-w-2xl">
            Trusted independent sources for Medicare information.
          </p>

          <ul className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.externalLinks.map((link) => {
              const isTel = link.href.startsWith("tel:");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={isTel ? undefined : "_blank"}
                    rel={isTel ? undefined : "noopener noreferrer"}
                    className="group flex items-start gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 md:p-6 transition-all hover:shadow-[var(--shadow-card)] hover:border-[var(--color-border-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-lg font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)]">
                        {link.label}
                      </div>
                      {link.description && (
                        <p className="mt-1 text-[0.9375rem] text-[var(--color-muted-foreground)]">
                          {link.description}
                        </p>
                      )}
                    </div>
                    <ExternalLink
                      className="h-5 w-5 shrink-0 mt-1 text-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
