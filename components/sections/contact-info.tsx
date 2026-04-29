import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { content } from "@/lib/content";

const DAY_ORDER = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function formatHourRange(opens: string, closes: string) {
  const fmt = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hh = ((h + 11) % 12) + 1;
    return m ? `${hh}:${m.toString().padStart(2, "0")} ${period}` : `${hh} ${period}`;
  };
  return `${fmt(opens)} – ${fmt(closes)}`;
}

export function ContactInfo() {
  const { business } = content;

  const sortedHours = [...business.hours].sort(
    (a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day),
  );

  return (
    <section className="section">
      <div className="container-prose">
        <div className="grid lg:grid-cols-3 gap-5 md:gap-6">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] text-[var(--color-primary)]">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="heading-h3 mt-5 text-[var(--color-foreground)]">
              Office
            </h3>
            <address className="not-italic mt-3 text-[var(--color-muted-foreground)] leading-relaxed">
              {business.address.street}
              <br />
              {business.address.city}, {business.address.region}{" "}
              {business.address.postalCode}
            </address>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-[0.9375rem] font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]"
            >
              Get directions →
            </a>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] text-[var(--color-primary)]">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="heading-h3 mt-5 text-[var(--color-foreground)]">
              Call us
            </h3>
            <a
              href={business.phone.href}
              className="mt-3 block font-display text-2xl md:text-3xl font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]"
            >
              {business.phone.display}
            </a>
            <p className="mt-2 text-[var(--color-muted-foreground)] flex items-center gap-2 text-[0.9375rem]">
              <Mail className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
              <a
                href={`mailto:${business.email}`}
                className="hover:text-[var(--color-primary)] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]"
              >
                {business.email}
              </a>
            </p>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] text-[var(--color-primary)]">
              <Clock className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="heading-h3 mt-5 text-[var(--color-foreground)]">
              Office hours
            </h3>
            <dl className="mt-3 space-y-1.5 text-[0.9375rem] text-[var(--color-muted-foreground)]">
              {sortedHours.map((h) => (
                <div key={h.day} className="flex justify-between gap-3">
                  <dt className="font-medium text-[var(--color-foreground)]">
                    {h.day}
                  </dt>
                  <dd>{formatHourRange(h.opens, h.closes)}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-3 pt-1">
                <dt className="font-medium text-[var(--color-foreground)]">
                  Sat – Sun
                </dt>
                <dd>By appointment</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
