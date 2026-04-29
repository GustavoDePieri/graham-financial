import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { content } from "@/lib/content";
import { asset } from "@/lib/asset-path";
import { LocalBusinessJsonLd } from "@/components/schema/local-business";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const { business } = content;

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default:
      "Medicare Insurance Brokers in Lake Worth Beach, FL | Graham Financial Group",
    template: "%s | Graham Financial Group",
  },
  description:
    "Family-owned Medicare insurance brokers serving Lake Worth Beach, FL and clients nationwide since 1992. Free, no-pressure consultations on Medicare, Medigap, Part D, and Medicare Advantage.",
  applicationName: business.name,
  authors: [{ name: business.name, url: business.url }],
  keywords: [
    "Medicare brokers Lake Worth Beach",
    "Medicare insurance Florida",
    "Medicare Supplement",
    "Medigap",
    "Medicare Advantage",
    "Medicare Part D",
    "licensed Medicare broker",
    "free Medicare consultation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.url,
    siteName: business.name,
    title: "Medicare Insurance Brokers in Lake Worth Beach, FL",
    description:
      "Personalized, no-cost Medicare guidance from a family-owned brokerage with over 33 years of experience.",
    images: [
      {
        url: asset("/og.png"),
        width: 1200,
        height: 630,
        alt: `${business.name} — family-owned Medicare brokers since ${business.foundedYear}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Insurance Brokers | Graham Financial Group",
    description:
      "Family-owned Medicare brokers in Lake Worth Beach, FL. Licensed nationwide. Free consultation, no pressure.",
    images: [asset("/og.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [
      { url: asset("/icon.svg"), type: "image/svg+xml" },
    ],
  },
  category: "insurance",
};

export const viewport: Viewport = {
  themeColor: "#0F2C4A",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${inter.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)] antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
