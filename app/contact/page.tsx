import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContactInfo } from "@/components/sections/contact-info";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact — Graham Financial Group",
  description:
    "Reach Graham Financial Group in Lake Worth Beach, FL. Call 561-547-7866, send a message, or stop by our office. Free, no-pressure Medicare consultations.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        headline="Talk to a real licensed broker."
        subheadline="Free consultation. No pressure. Most clients hear back within one business day."
      />
      <ContactInfo />
      <ContactForm />
    </>
  );
}
