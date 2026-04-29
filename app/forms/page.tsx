import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { FormsList } from "@/components/sections/forms-list";
import { CTABanner } from "@/components/sections/cta-banner";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Medicare Forms — Graham Financial Group",
  description:
    "Direct links to the official CMS, SSA, and carrier forms our Medicare clients need most often: Part B enrollment, employment information, IRMAA reduction, and more.",
  alternates: { canonical: "/forms" },
};

export default function FormsPage() {
  return (
    <>
      <PageHeader
        eyebrow={content.forms.eyebrow}
        headline={content.forms.headline}
        subheadline={content.forms.subheadline}
      />
      <FormsList />
      <CTABanner
        headline="Need help filling one of these out?"
        subheadline="Call us. We'll walk you through it step by step — at no cost."
      />
    </>
  );
}
