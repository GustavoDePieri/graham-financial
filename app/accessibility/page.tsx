import type { Metadata } from "next";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { RichText } from "@/components/sections/rich-text";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Accessibility — Graham Financial Group",
  description:
    "Our commitment to making grahamfinancial.org accessible to everyone, including how to reach us if you encounter difficulty.",
  alternates: { canonical: "/accessibility" },
};

const ICONS = { Phone, Mail, MessageSquare };

export default function AccessibilityPage() {
  const { accessibility } = content;

  return (
    <>
      <PageHeader
        eyebrow={accessibility.eyebrow}
        headline={accessibility.headline}
      />
      <RichText body={accessibility.body} />

      <section className="section bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="container-prose">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-h2 text-[var(--color-foreground)]">
              How to reach us
            </h2>
            <p className="lead-text mt-4">
              If something on this site is hard to use, please tell us through
              any of these channels. We&rsquo;ll respond promptly.
            </p>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {accessibility.contactMethods.map((m, i) => {
                const Icon = i === 0 ? ICONS.Phone : i === 1 ? ICONS.Mail : ICONS.MessageSquare;
                return (
                  <li key={m.label}>
                    <a
                      href={m.href}
                      className="flex items-start gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-cream-50)] p-5 md:p-6 transition-all hover:shadow-[var(--shadow-card)] hover:border-[var(--color-border-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
                    >
                      <Icon
                        className="h-5 w-5 mt-1 shrink-0 text-[var(--color-accent)]"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-[0.12em] font-semibold text-[var(--color-muted-foreground)]">
                          {m.label}
                        </div>
                        <div className="mt-1 font-semibold text-[var(--color-foreground)] break-all">
                          {m.value}
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
