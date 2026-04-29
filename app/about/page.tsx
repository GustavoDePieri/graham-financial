import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { ThenAndNow } from "@/components/sections/then-and-now";
import { About } from "@/components/sections/about";
import { RightChoice } from "@/components/sections/right-choice";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "About — Family-Owned Medicare Brokers in Lake Worth Beach, FL",
  description:
    "Graham Financial Group is a family-owned, independent insurance agency serving Medicare clients since 1992. Three decades of expertise, a personal approach, and clients across the country.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About our agency"
        headline="Family-owned. Independent. Since 1992."
        subheadline="Three decades of guiding individuals, families, and retirees through Medicare and insurance — with clarity, patience, and zero pressure."
      />
      <ThenAndNow />
      <About showHeader={false} />
      <RightChoice />
      <section className="section">
        <div className="container-prose">
          <div className="rounded-[var(--radius-xl)] bg-[var(--color-cream-50)] border border-[var(--color-border)] p-8 md:p-12 flex flex-col md:flex-row gap-6 md:gap-10 md:items-center">
            <div className="flex-1">
              <span className="eyebrow">Meet the team</span>
              <h2 className="heading-h2 mt-3 text-[var(--color-foreground)]">
                Three generations of Grahams — plus the licensed pros we trust alongside them.
              </h2>
            </div>
            <Link
              href="/staff"
              className="inline-flex items-center gap-2 self-start md:self-auto rounded-[var(--radius-md)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] h-12 px-6 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
            >
              See the team →
            </Link>
          </div>
        </div>
      </section>
      <CTABanner
        headline="Let's talk."
        subheadline="Whether you have questions, want a second opinion on your current policy, or are just starting the process — we're here to guide you every step of the way."
      />
    </>
  );
}
