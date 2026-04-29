import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Services } from "@/components/sections/services";
import { WhyGraham } from "@/components/sections/why-graham";
import { FAQ } from "@/components/sections/faq";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Medicare Coverage Options — Medicare, Medigap, Part D, Advantage",
  description:
    "We help you understand and compare Medicare, Medicare Supplement (Medigap), Medicare Part D, and Medicare Advantage plans — at no cost to you.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Your Medicare options simplified"
        headline="Coverage explained, side by side."
        subheadline="A simple breakdown of the four main Medicare coverages we help our clients understand and enroll in every day."
      />
      <Services showHeader={false} />
      <WhyGraham />
      <FAQ />
      <CTABanner
        headline="Not sure which option fits your situation?"
        subheadline="That's exactly what we're here for. Free consultation. No pressure."
      />
    </>
  );
}
