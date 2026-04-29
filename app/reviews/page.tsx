import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Testimonials } from "@/components/sections/testimonials";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Reviews & Testimonials — Graham Financial Group",
  description:
    "Real stories from the Medicare clients we've helped. See why families across the country trust Graham Financial Group.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews & Testimonials"
        headline="Real stories from our clients."
        subheadline="Don't just take our word for it — hear directly from the families we've helped navigate Medicare with confidence."
      />
      <Testimonials showHeader={false} />
      <CTABanner
        headline="Ready to be our next success story?"
        subheadline="Most of our new clients come from referrals. There's a reason."
      />
    </>
  );
}
