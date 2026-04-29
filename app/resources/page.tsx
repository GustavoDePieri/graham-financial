import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ResourcesList } from "@/components/sections/resources-list";
import { CTABanner } from "@/components/sections/cta-banner";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Medicare Resources — Guides, Videos, and Helpful Links",
  description:
    "Trusted Medicare reference material from CMS and Medicare.gov: official guides, short explainer videos, and links to authoritative sources.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow={content.resources.eyebrow}
        headline={content.resources.headline}
        subheadline={content.resources.subheadline}
      />
      <ResourcesList />
      <CTABanner
        headline="Have questions about anything you read?"
        subheadline="We translate Medicare jargon into plain English. Free, no pressure."
      />
    </>
  );
}
