import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { StaffGrid } from "@/components/sections/staff-grid";
import { CTABanner } from "@/components/sections/cta-banner";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meet the Team — Graham Financial Group",
  description:
    "Meet the licensed Medicare brokers behind Graham Financial Group — three generations of the Graham family plus the team that supports them.",
  alternates: { canonical: "/staff" },
};

export default function StaffPage() {
  return (
    <>
      <PageHeader
        eyebrow={content.staff.eyebrow}
        headline={content.staff.headline}
        subheadline={content.staff.subheadline}
      />
      <StaffGrid showHeader={false} />
      <CTABanner
        headline="Ready to talk to one of us?"
        subheadline="Call any of our licensed brokers directly, or send a message and we'll match you with the right team member."
      />
    </>
  );
}
