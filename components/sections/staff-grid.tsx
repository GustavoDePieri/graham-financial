import { Mail, Phone } from "lucide-react";
import { content } from "@/lib/content";

function getInitials(name: string) {
  return name
    .replace(/[,.].*$/, "")
    .split(" ")
    .filter((part) => /^[A-Za-z]/.test(part))
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
}

export function StaffGrid({
  showHeader = true,
}: {
  /** When false, omits the eyebrow + h2 heading (use when a PageHeader is already shown). */
  showHeader?: boolean;
}) {
  const { staff } = content;

  return (
    <section
      id="team"
      aria-labelledby="team-title"
      className="section bg-[var(--color-surface)] border-y border-[var(--color-border)]"
    >
      <div className="container-prose">
        {showHeader && (
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="eyebrow">{staff.eyebrow}</span>
            <h2
              id="team-title"
              className="heading-h1 mt-3 text-[var(--color-foreground)]"
            >
              {staff.headline}
            </h2>
            <p className="lead-text mt-5">{staff.subheadline}</p>
          </div>
        )}

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {staff.members.map((m) => (
            <li
              key={m.id}
              className="flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-cream-50)] p-7 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-4">
                <div
                  aria-hidden="true"
                  className="h-14 w-14 shrink-0 rounded-full bg-[var(--color-primary)] text-[var(--color-gold-300)] inline-flex items-center justify-center font-display text-lg font-semibold tracking-wider"
                >
                  {getInitials(m.name)}
                </div>
                <div className="min-w-0">
                  <div className="font-display text-lg md:text-xl font-semibold text-[var(--color-foreground)] leading-snug">
                    {m.name}
                  </div>
                  <div className="text-sm text-[var(--color-muted-foreground)] mt-0.5">
                    {m.role}
                  </div>
                </div>
              </div>
              {m.bio && (
                <p className="mt-5 text-[0.9375rem] text-[var(--color-foreground)] leading-relaxed">
                  {m.bio}
                </p>
              )}
              <dl className="mt-6 pt-5 border-t border-[var(--color-border)] space-y-2.5 text-[0.9375rem]">
                <div className="flex items-center gap-2.5">
                  <Phone
                    className="h-4 w-4 text-[var(--color-accent)] shrink-0"
                    aria-hidden="true"
                  />
                  <dt className="sr-only">Phone</dt>
                  <dd>
                    <a
                      href={m.phone.href}
                      className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors font-medium rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]"
                    >
                      {m.phone.display}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail
                    className="h-4 w-4 text-[var(--color-accent)] shrink-0"
                    aria-hidden="true"
                  />
                  <dt className="sr-only">Email</dt>
                  <dd className="min-w-0">
                    <a
                      href={`mailto:${m.email}`}
                      className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors break-all rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]"
                    >
                      {m.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
