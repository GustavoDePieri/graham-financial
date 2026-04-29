"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { content } from "@/lib/content";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const firstMobileLinkRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    firstMobileLinkRef.current?.focus();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const { nav, business } = content;
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-200",
        scrolled
          ? "bg-[color-mix(in_srgb,var(--color-cream-100)_88%,transparent)] backdrop-blur-md border-b border-[var(--color-border)] shadow-[0_1px_0_rgba(15,44,74,0.04)]"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container-prose flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Graham Financial Group home"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]"
        >
          <Logo />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-8"
        >
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[0.9375rem] font-medium transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]",
                  active
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-foreground)] hover:text-[var(--color-primary)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={business.phone.href}
            aria-label={`Call ${business.phone.display}`}
            className="hidden md:inline-flex items-center gap-2 text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors text-[0.9375rem] font-semibold rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phone.display}
          </a>

          <a
            href={business.phone.href}
            aria-label={`Call ${business.phone.display}`}
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full bg-[var(--color-primary)] text-[var(--color-primary-foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>

          <Button
            asChild
            variant="primary"
            size="md"
            className="hidden md:inline-flex"
          >
            <Link href="/contact">Free Consultation</Link>
          </Button>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-md border border-[var(--color-border-strong)] text-[var(--color-foreground)] hover:bg-[var(--color-cream-200)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-surface)]"
      >
        <nav aria-label="Mobile" className="container-prose py-6">
          <ul className="flex flex-col gap-1">
            {nav.map((item, idx) => (
              <li key={item.href}>
                <Link
                  ref={idx === 0 ? firstMobileLinkRef : undefined}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-lg font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-1 gap-3">
            <Button asChild variant="primary" size="lg">
              <a
                href={business.phone.href}
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {business.phone.display}
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Free Consultation
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
