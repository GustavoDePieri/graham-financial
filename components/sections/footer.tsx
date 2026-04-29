import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { content } from "@/lib/content";
import { Logo } from "@/components/brand/logo";

function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

function FooterLink({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const baseProps = {
    className,
    target: external ? "_blank" : undefined,
    rel: external ? "noopener noreferrer" : undefined,
  };
  if (isInternal(href)) {
    return (
      <Link href={href} {...baseProps}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...baseProps}>
      {children}
    </a>
  );
}

export function Footer() {
  const { business, footer } = content;

  return (
    <footer
      aria-labelledby="footer-heading"
      className="bg-[var(--color-inverse)] text-[var(--color-inverse-foreground)]"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container-prose pt-16 pb-10 md:pt-20 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Brand + contact */}
          <div className="md:col-span-12 lg:col-span-4">
            <Logo inverse />
            <p className="mt-5 text-[0.9375rem] text-[var(--color-inverse-muted-foreground)] leading-relaxed max-w-sm">
              Family-owned Medicare insurance brokers in Lake Worth Beach, FL —
              guiding families with clarity, since {business.foundedYear}.
            </p>
            <address className="not-italic mt-6 space-y-3 text-[0.9375rem] text-[var(--color-inverse-muted-foreground)] leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin
                  className="h-5 w-5 mt-0.5 shrink-0 text-[var(--color-gold-300)]"
                  aria-hidden="true"
                />
                <div>
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.region}{" "}
                  {business.address.postalCode}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  className="h-5 w-5 mt-0.5 shrink-0 text-[var(--color-gold-300)]"
                  aria-hidden="true"
                />
                <a
                  href={business.phone.href}
                  className="text-[var(--color-inverse-foreground)] hover:text-[var(--color-gold-300)] transition-colors font-semibold rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold-300)]"
                >
                  {business.phone.display}
                </a>
              </div>
            </address>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {footer.navColumns.map((col) => (
              <div key={col.title}>
                <div className="font-semibold text-[var(--color-inverse-foreground)] mb-4">
                  {col.title}
                </div>
                <ul className="space-y-3 text-[0.9375rem]">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <FooterLink
                        href={link.href}
                        external={link.external}
                        className="text-[var(--color-inverse-muted-foreground)] hover:text-[var(--color-inverse-foreground)] transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold-300)]"
                      >
                        {link.label}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Licenses + disclaimer */}
          <div className="md:col-span-12">
            <div className="border-t border-[var(--color-inverse-border)] pt-8 grid md:grid-cols-2 gap-6 md:gap-12">
              <div>
                <div className="text-xs uppercase tracking-[0.12em] text-[var(--color-gold-300)] font-semibold mb-3">
                  Licenses
                </div>
                <ul className="space-y-1.5 text-sm text-[var(--color-inverse-muted-foreground)]">
                  {business.licenses.map((l) => (
                    <li key={l.number}>
                      {l.holder} — {l.jurisdiction} #{l.number}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.12em] text-[var(--color-gold-300)] font-semibold mb-3">
                  Medicare disclaimer
                </div>
                <p className="text-sm text-[var(--color-inverse-muted-foreground)] leading-relaxed">
                  {footer.medicareDisclaimer.text}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--color-inverse-border)] flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <p className="text-sm text-[var(--color-inverse-muted-foreground)]">
            {footer.copyright}
          </p>
          <ul className="flex flex-wrap gap-6 text-sm">
            {footer.legalLinks.map((link) => (
              <li key={link.href + link.label}>
                <FooterLink
                  href={link.href}
                  external={link.external}
                  className="text-[var(--color-inverse-muted-foreground)] hover:text-[var(--color-inverse-foreground)] transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold-300)]"
                >
                  {link.label}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
