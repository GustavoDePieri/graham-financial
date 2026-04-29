import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  headline?: string;
  subheadline?: string;
}

export function CTABanner({
  headline = "Have a question? Talk to a real licensed broker.",
  subheadline = "Free consultation. No pressure. We respond within one business day.",
}: CTABannerProps) {
  const { business } = content;
  return (
    <section
      aria-labelledby="cta-banner-title"
      className="section bg-[var(--color-inverse)] text-[var(--color-inverse-foreground)]"
    >
      <div className="container-prose">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2">
            <h2
              id="cta-banner-title"
              className="heading-display-xl text-[var(--color-inverse-foreground)]"
            >
              {headline}
            </h2>
            <p className="lead-text mt-4 text-[var(--color-inverse-muted-foreground)]">
              {subheadline}
            </p>
          </div>
          <div className="md:col-span-1 flex flex-col gap-3">
            <Button asChild variant="invertedPrimary" size="lg">
              <a
                href={business.phone.href}
                aria-label={`Call ${business.phone.display}`}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {business.phone.display}
              </a>
            </Button>
            <Button asChild variant="invertedSecondary" size="lg">
              <Link href="/contact">
                Send a message
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
