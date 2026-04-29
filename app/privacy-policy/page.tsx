import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { RichText } from "@/components/sections/rich-text";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy — Graham Financial Group",
  description:
    "How Graham Financial Group collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  const { privacyPolicy } = content;
  return (
    <>
      <PageHeader
        eyebrow={privacyPolicy.eyebrow}
        headline={privacyPolicy.headline}
      />
      <RichText body={privacyPolicy.body} note={privacyPolicy.lastUpdated} />
    </>
  );
}
