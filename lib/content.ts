/**
 * lib/content.ts
 * Single source of truth for all copy, business data, and structured content.
 * Items flagged with `todo: true` are placeholders pending client confirmation.
 */

/* ====================================================================
   Building blocks
   ==================================================================== */

export type LucideIconName =
  | "phone"
  | "arrow-right"
  | "shield-check"
  | "handshake"
  | "dollar-sign"
  | "users"
  | "stethoscope"
  | "pill"
  | "heart-pulse"
  | "file-text"
  | "star"
  | "map-pin"
  | "mail"
  | "clock"
  | "check"
  | "calendar"
  | "award";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface CTA {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
  icon?: LucideIconName;
  ariaLabel?: string;
}

export interface ImageRef {
  src: string;
  alt: string;
  width: number;
  height: number;
  todo?: boolean;
}

export interface Phone {
  display: string;
  href: string;
  e164: string;
}

export interface PostalAddress {
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: "US";
}

/* ====================================================================
   Business
   ==================================================================== */

export interface Business {
  name: string;
  legalName: string;
  foundedYear: number;
  phone: Phone;
  email: string;
  url: string;
  address: PostalAddress;
  geo: { latitude: number; longitude: number; todo?: boolean };
  hours: { day: string; opens: string; closes: string }[];
  socials: Partial<Record<"google" | "facebook" | "linkedin" | "yelp", string>>;
  bbb: { rating: string; url?: string; todo?: boolean };
  licenses: { holder: string; jurisdiction: string; number: string }[];
}

/* ====================================================================
   Sections
   ==================================================================== */

export interface TrustStat {
  value: string;
  label: string;
  todo?: boolean;
}

export interface HeroContent {
  eyebrow?: string;
  headline: { line1: string; line2: string };
  subheadline: string;
  ctas: [CTA, CTA];
  image: ImageRef;
  trustStrip: TrustStat[];
}

export interface FeatureCard {
  icon: LucideIconName;
  title: string;
  description: string;
}

export interface WhyGrahamSection {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  cards: FeatureCard[];
}

export interface ServiceCard {
  id: "medicare" | "medigap" | "part-d" | "advantage";
  icon: LucideIconName;
  title: string;
  shortLabel: string;
  description: string;
  bullets?: string[];
  learnMoreHref: string;
}

export interface ServicesSection {
  eyebrow: string;
  headline: string;
  intro: string;
  cards: ServiceCard[];
}

export interface AboutSection {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  /** Editorial pull-quote distilled from the story. */
  quote: string;
  highlights: { value: string; label: string; todo?: boolean }[];
}

export interface Testimonial {
  id: string;
  name: string;
  locality: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  source?: "google" | "facebook" | "internal";
  todo?: boolean;
}

export interface TestimonialsSection {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  items: Testimonial[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSection {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  items: FAQItem[];
}

export interface ContactReason {
  value: "medicare" | "supplement" | "part-d" | "advantage" | "other";
  label: string;
}

export interface UsState {
  code: string;
  name: string;
}

export interface ContactSection {
  eyebrow: string;
  headline: string;
  subheadline: string;
  consentLabel: string;
  reasons: ContactReason[];
  states: UsState[];
  successMessage: string;
  errorMessage: string;
}

export interface FooterSection {
  navColumns: { title: string; links: NavLink[] }[];
  legalLinks: NavLink[];
  medicareDisclaimer: { text: string; todo?: boolean };
  copyright: string;
}

/* ============== About — extended (timeline + right-choice) ============== */

export interface AboutTimelineItem {
  year: string;
  label: string;
  caption: string;
  image: ImageRef;
}

export interface AboutTimelineSection {
  eyebrow?: string;
  items: [AboutTimelineItem, AboutTimelineItem];
}

export interface AboutChoiceItem {
  title: string;
  description: string;
}

export interface AboutChoiceSection {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  items: AboutChoiceItem[];
}

/* ============== Staff ============== */

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: Phone;
  bio?: string;
}

export interface StaffSection {
  eyebrow: string;
  headline: string;
  subheadline: string;
  members: StaffMember[];
}

/* ============== Forms ============== */

export interface FormItem {
  id: string;
  title: string;
  description: string;
  formCode?: string;        // e.g. "CMS-40B"
  href: string;             // PDF or external URL
  source: "CMS" | "SSA" | "agency" | "carrier";
  external: boolean;
}

export interface FormGroup {
  title: string;
  items: FormItem[];
}

export interface FormsSection {
  eyebrow: string;
  headline: string;
  subheadline: string;
  groups: FormGroup[];
}

/* ============== Resources ============== */

export interface ResourceGuide {
  id: string;
  title: string;
  description: string;
  href: string;             // PDF
  source: string;           // "CMS / Medicare.gov"
}

export interface ResourceVideo {
  id: string;
  title: string;
  description?: string;
  /** YouTube video ID. */
  youTubeId: string;
}

export interface ResourcesSection {
  eyebrow: string;
  headline: string;
  subheadline: string;
  guides: ResourceGuide[];
  videos: ResourceVideo[];
  externalLinks: { label: string; href: string; description?: string }[];
}

/* ============== Legal / informational ============== */

export interface LegalSection {
  eyebrow: string;
  headline: string;
  /** Each section has an h2 heading and an array of paragraphs. */
  body: { heading?: string; paragraphs: string[] }[];
  lastUpdated?: string;
}

export interface AccessibilitySection {
  eyebrow: string;
  headline: string;
  body: { heading?: string; paragraphs: string[] }[];
  contactMethods: { label: string; value: string; href: string }[];
}

export interface SiteContent {
  business: Business;
  nav: NavLink[];
  primaryCta: CTA;
  hero: HeroContent;
  whyGraham: WhyGrahamSection;
  services: ServicesSection;
  about: AboutSection;
  aboutTimeline: AboutTimelineSection;
  aboutChoice: AboutChoiceSection;
  testimonials: TestimonialsSection;
  faq: FAQSection;
  contact: ContactSection;
  footer: FooterSection;
  staff: StaffSection;
  forms: FormsSection;
  resources: ResourcesSection;
  privacyPolicy: LegalSection;
  accessibility: AccessibilitySection;
}

/* ====================================================================
   Data
   ==================================================================== */

const US_STATES: UsState[] = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "DC", name: "District of Columbia" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
];

export const content: SiteContent = {
  business: {
    name: "Graham Financial Group",
    legalName: "Graham Financial Group, Inc.",
    foundedYear: 1992,
    phone: {
      display: "561-547-7866",
      href: "tel:+15615477866",
      e164: "+15615477866",
    },
    email: "info@grahamfinancial.org",
    url: "https://www.grahamfinancial.org",
    address: {
      street: "1528 N Dixie Highway, Ste 1",
      city: "Lake Worth Beach",
      region: "FL",
      postalCode: "33460",
      country: "US",
    },
    geo: { latitude: 26.6234, longitude: -80.0537, todo: true },
    hours: [
      { day: "Monday", opens: "09:00", closes: "17:00" },
      { day: "Tuesday", opens: "09:00", closes: "17:00" },
      { day: "Wednesday", opens: "09:00", closes: "17:00" },
      { day: "Thursday", opens: "09:00", closes: "17:00" },
      { day: "Friday", opens: "09:00", closes: "17:00" },
    ],
    socials: {},
    bbb: { rating: "A+", todo: true },
    licenses: [
      {
        holder: "Christopher N Graham",
        jurisdiction: "CA",
        number: "0H16211",
      },
      {
        holder: "Graham Financial Group, Inc.",
        jurisdiction: "CA",
        number: "6007720",
      },
    ],
  },

  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],

  primaryCta: {
    label: "Free Consultation",
    href: "/contact",
    variant: "primary",
    icon: "arrow-right",
  },

  hero: {
    eyebrow: "Family-owned · Licensed nationwide",
    headline: {
      line1: "Medicare made simple.",
      line2: "Family-owned guidance since 1992.",
    },
    subheadline:
      "Personalized, no-cost consultations from licensed brokers who treat every client like family. We help you understand your options and find the right plan — without the pressure.",
    ctas: [
      {
        label: "Call 561-547-7866",
        href: "tel:+15615477866",
        variant: "primary",
        icon: "phone",
        ariaLabel: "Call Graham Financial Group at 561-547-7866",
      },
      {
        label: "Get a free consultation",
        href: "/contact",
        variant: "secondary",
        icon: "arrow-right",
      },
    ],
    image: {
      src: "/images/family.png",
      alt: "The Graham family — owners and team behind Graham Financial Group",
      width: 1170,
      height: 780,
    },
    trustStrip: [
      { value: "33+", label: "years guiding families", todo: true },
      { value: "Thousands", label: "of clients served", todo: true },
      { value: "Nationwide", label: "licensed brokers" },
      { value: "A+", label: "BBB rating", todo: true },
    ],
  },

  whyGraham: {
    eyebrow: "Why Graham",
    headline: "Independent guidance, the way it should be.",
    subheadline:
      "We're not tied to a single carrier and we're not paid by you. Our only job is to find the plan that fits your needs — and to be here when life changes.",
    cards: [
      {
        icon: "users",
        title: "Personalized 1-on-1 service",
        description:
          "Every client works directly with a licensed broker who learns your situation and stays with you for life.",
      },
      {
        icon: "handshake",
        title: "Independent — all major carriers",
        description:
          "We compare plans across the carriers we represent so you see real options, not a single sales pitch.",
      },
      {
        icon: "dollar-sign",
        title: "No cost to you",
        description:
          "Our services are free. We're paid by the insurance carriers, never out of your pocket.",
      },
      {
        icon: "shield-check",
        title: "Family-owned since 1992",
        description:
          "Three decades of helping families navigate Medicare with clarity, patience, and no pressure.",
      },
    ],
  },

  services: {
    eyebrow: "Services",
    headline: "What we help you with.",
    intro:
      "Medicare can feel overwhelming. Here's a simple breakdown of the coverages we help our clients understand and enroll in every day.",
    cards: [
      {
        id: "medicare",
        icon: "stethoscope",
        title: "Medicare (Parts A & B)",
        shortLabel: "Medicare",
        description:
          "Original Medicare covers hospital stays (Part A) and doctor visits and outpatient care (Part B). It's the foundation of your coverage at age 65.",
        bullets: [
          "Part A: hospital and inpatient care",
          "Part B: doctor visits and outpatient",
          "Help with enrollment timing and penalties",
        ],
        learnMoreHref: "#contact",
      },
      {
        id: "medigap",
        icon: "shield-check",
        title: "Medicare Supplements (Medigap)",
        shortLabel: "Medicare Supplement",
        description:
          "Medigap helps cover deductibles, copays, and coinsurance that Original Medicare doesn't pay — protecting you from large out-of-pocket costs.",
        bullets: [
          "Standardized plans across carriers",
          "See any doctor that accepts Medicare",
          "Predictable monthly costs",
        ],
        learnMoreHref: "#contact",
      },
      {
        id: "part-d",
        icon: "pill",
        title: "Medicare Part D",
        shortLabel: "Part D — Prescription drug",
        description:
          "Prescription drug coverage that pairs with Original Medicare or a Supplement. We compare plans against your specific medications to find the best fit.",
        bullets: [
          "Plan-by-plan medication lookup",
          "Avoid late enrollment penalties",
          "Annual review when your meds change",
        ],
        learnMoreHref: "#contact",
      },
      {
        id: "advantage",
        icon: "heart-pulse",
        title: "Medicare Advantage (Part C)",
        shortLabel: "Medicare Advantage",
        description:
          "An all-in-one private alternative that bundles Parts A, B, and usually D — often with extras like dental, vision, and fitness benefits.",
        bullets: [
          "Bundled medical, hospital, and drug coverage",
          "Often includes dental, vision, hearing",
          "Network and county-by-county plan comparison",
        ],
        learnMoreHref: "#contact",
      },
    ],
  },

  about: {
    eyebrow: "Our story",
    headline: "Three decades. Thousands of families. One promise.",
    paragraphs: [
      "Graham Financial Group is a family-owned insurance brokerage founded in 1992, headquartered in Lake Worth Beach, Florida and serving clients across the country.",
      "Every client works directly with a licensed professional — not a call center — and we stay with you long after enrollment. That's the way it should be.",
      "Whether you're approaching 65, switching plans during the Annual Enrollment Period, or simply trying to understand what you already have, we're here to walk you through it. No cost to talk with us. No pressure to enroll.",
    ],
    quote:
      "Medicare decisions should be made with calm, clarity, and a real human on the other end of the phone.",
    highlights: [
      { value: "1992", label: "Family-owned since" },
      { value: "All 50", label: "States licensed", todo: true },
      { value: "Lifetime", label: "Client support" },
    ],
  },

  aboutTimeline: {
    eyebrow: "From then to now",
    items: [
      {
        year: "1992",
        label: "Just Christopher and a desk.",
        caption:
          "Christopher Graham founded the agency in 1992, working one client at a time from a small office.",
        image: {
          src: "/images/1992.jpg",
          alt:
            "Christopher Graham at his original Graham Financial Group office in 1992, black-and-white photograph",
          width: 1200,
          height: 900,
        },
      },
      {
        year: "Today",
        label: "A family team. Thousands of clients served.",
        caption:
          "Three decades later, the Graham family team now trains agents and serves Medicare clients nationwide.",
        image: {
          src: "/images/today.jpg",
          alt:
            "Graham Financial Group annual training event, with a packed room of agents and a presentation on stage",
          width: 1600,
          height: 900,
        },
      },
    ],
  },

  aboutChoice: {
    eyebrow: "Why Graham Financial Group",
    headline: "Three decades of know-how, applied to your situation.",
    subheadline:
      "What our clients tell us, again and again, sets us apart from going direct or working with a national call center.",
    items: [
      {
        title: "Decades of expertise",
        description:
          "We've been guiding clients through Medicare and Medicare Supplement choices since 1992 — giving us unmatched knowledge of how the system actually works.",
      },
      {
        title: "Comprehensive solutions",
        description:
          "From simple first-time enrollments to complex multi-state scenarios, we handle it all. No case is too challenging.",
      },
      {
        title: "Mastery of Medicare rules",
        description:
          "Our team knows the rules, deadlines, penalties, and procedures inside and out — so you avoid costly missteps.",
      },
      {
        title: "Nationwide recognition",
        description:
          "Trusted by clients across the country. We're known for our dedication, integrity, and follow-through long after enrollment.",
      },
    ],
  },

  testimonials: {
    eyebrow: "What clients say",
    headline: "Real reviews from families we've helped.",
    subheadline:
      "We earn our reputation one conversation at a time. Here's what some of our clients have shared.",
    items: [
      {
        id: "t1",
        name: "Margaret S.",
        locality: "Boca Raton, FL",
        rating: 5,
        quote:
          "Chris and his team walked me through every option without any pressure. I finally understood my Medicare choices for the first time. I recommend them to all my friends.",
        source: "google",
        todo: true,
      },
      {
        id: "t2",
        name: "Robert T.",
        locality: "Lake Worth Beach, FL",
        rating: 5,
        quote:
          "Graham Financial saved us hundreds of dollars a year by finding a Part D plan that matched my wife's medications. Honest, patient, and always available when we have questions.",
        source: "google",
        todo: true,
      },
      {
        id: "t3",
        name: "Linda H.",
        locality: "West Palm Beach, FL",
        rating: 5,
        quote:
          "I'd been with the same Medicare Supplement for 12 years and assumed I was stuck. They reviewed everything and got me a better plan with the same coverage. Wonderful family business.",
        source: "google",
        todo: true,
      },
    ],
  },

  faq: {
    eyebrow: "Medicare basics",
    headline: "Common questions, answered simply.",
    subheadline:
      "If you don't see your question here, give us a call — we'll answer it in plain English.",
    items: [
      {
        id: "when-can-i-enroll",
        question: "When can I enroll in Medicare?",
        answer:
          "Most people enroll during their Initial Enrollment Period — a seven-month window that begins three months before the month you turn 65. There are also Special Enrollment Periods if you're losing employer coverage, and the Annual Enrollment Period each fall (Oct 15–Dec 7) for plan changes. We'll help you figure out the right window for your situation.",
      },
      {
        id: "supplement-vs-advantage",
        question:
          "What's the difference between Medicare Supplement and Medicare Advantage?",
        answer:
          "A Medicare Supplement (Medigap) works alongside Original Medicare to fill the gaps in deductibles and copays, and lets you see any doctor that accepts Medicare. A Medicare Advantage plan replaces Original Medicare with a private plan that bundles your benefits — often including drug coverage and extras — but typically uses a network of doctors. Which is right depends on your health, doctors, budget, and how much you travel.",
      },
      {
        id: "do-i-need-part-d",
        question: "Do I really need Part D if I don't take medications?",
        answer:
          "In most cases, yes. Medicare charges a permanent late enrollment penalty if you go without creditable drug coverage and try to add it later. Even very low-cost Part D plans can protect you from that penalty and from unexpected prescription costs down the road.",
      },
      {
        id: "switching-plans-cost",
        question: "Will switching plans cost me anything?",
        answer:
          "Reviewing your options with us is always free. If we find a plan that's a better fit, switching during the right enrollment window typically has no fee. Some plans require medical underwriting outside of guaranteed-issue periods — we'll explain exactly what applies to you before you decide.",
      },
      {
        id: "keep-my-doctor",
        question: "Can I keep my doctor?",
        answer:
          "Usually, yes — especially with Original Medicare and Medicare Supplements, which let you see any provider that accepts Medicare. With Medicare Advantage, your doctor needs to be in the plan's network. We always check your doctors against any plan we recommend before you enroll.",
      },
      {
        id: "why-a-broker",
        question: "Why work with a broker instead of going direct?",
        answer:
          "A broker compares plans across the carriers we represent so you see real options instead of a single company's pitch. Our service costs you nothing — we're paid by the carriers — and you get one trusted point of contact for life, not a different call center every year.",
      },
      {
        id: "do-you-serve-my-state",
        question: "Do you only serve Florida?",
        answer:
          "We're headquartered in Lake Worth Beach, FL, but our brokers are licensed across the country. We help clients from many states find the right Medicare coverage. Tell us where you live and we'll let you know what's available in your area.",
      },
    ],
  },

  contact: {
    eyebrow: "Free consultation",
    headline: "Let's find the right plan for you.",
    subheadline:
      "Free consultation. No obligation. Talk to a real licensed broker — usually within one business day.",
    consentLabel:
      "I agree to be contacted by Graham Financial Group regarding Medicare and insurance options.",
    reasons: [
      { value: "medicare", label: "Medicare (Parts A & B)" },
      { value: "supplement", label: "Medicare Supplement" },
      { value: "part-d", label: "Part D — Prescription drug" },
      { value: "advantage", label: "Medicare Advantage" },
      { value: "other", label: "Something else" },
    ],
    states: US_STATES,
    successMessage:
      "Thank you. A licensed broker will be in touch within one business day.",
    errorMessage:
      "Something went wrong sending your message. Please call us at 561-547-7866 or try again.",
  },

  footer: {
    navColumns: [
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Meet the team", href: "/staff" },
          { label: "Reviews", href: "/reviews" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Medicare", href: "/services#medicare" },
          { label: "Medicare Supplement", href: "/services#medigap" },
          { label: "Medicare Part D", href: "/services#part-d" },
          { label: "Medicare Advantage", href: "/services#advantage" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Resources", href: "/resources" },
          { label: "Forms", href: "/forms" },
          {
            label: "Medicare.gov",
            href: "https://www.medicare.gov",
            external: true,
          },
          {
            label: "1-800-MEDICARE",
            href: "tel:+18006334227",
            external: true,
          },
        ],
      },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
    medicareDisclaimer: {
      text: "We do not offer every plan available in your area. Currently we represent [N] organizations which offer [X] products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options.",
      todo: true,
    },
    copyright: "© 2026 Graham Financial Group, Inc. All rights reserved.",
  },

  staff: {
    eyebrow: "Meet the team",
    headline: "The people behind every recommendation.",
    subheadline:
      "Three generations of the Graham family, plus the licensed professionals we trust alongside them. Every client works directly with one of us — no call centers.",
    members: [
      {
        id: "chris-graham",
        name: "Christopher Graham, CLU",
        role: "Founder, CEO & Licensed Agent",
        email: "chris@grahamfinancial.org",
        phone: {
          display: "561-714-5678",
          href: "tel:+15617145678",
          e164: "+15617145678",
        },
        bio: "Christopher founded Graham Financial Group in 1992 and has been guiding families through Medicare ever since. CLU-designated, with deep expertise across Medicare Supplement, Part D, and Advantage plans.",
      },
      {
        id: "susan-swaner",
        name: "Susan B. Swaner",
        role: "Executive Assistant & Licensed Agent",
        email: "susan@grahamfinancial.org",
        phone: {
          display: "561-385-5405",
          href: "tel:+15613855405",
          e164: "+15613855405",
        },
        bio: "Susan keeps the agency running and works directly with clients on enrollment, plan reviews, and the everyday questions that come up after sign-up.",
      },
      {
        id: "chris-graham-jr",
        name: "Christopher Graham Jr.",
        role: "Licensed Agent, Medicare Specialist",
        email: "chrisjr@grahamfinancial.org",
        phone: {
          display: "561-351-7475",
          href: "tel:+15613517475",
          e164: "+15613517475",
        },
        bio: "Second-generation Graham. Specializes in helping clients turning 65 understand their first-time enrollment and avoid late penalties.",
      },
      {
        id: "mary-mankamyer",
        name: "Mary T. Mankamyer",
        role: "Licensed Agent, Medicare Specialist",
        email: "mary@grahamfinancial.org",
        phone: {
          display: "561-635-5315",
          href: "tel:+15616355315",
          e164: "+15616355315",
        },
        bio: "Mary brings years of Medicare experience and a patient, plain-English approach to plan comparisons.",
      },
      {
        id: "kylie-graham",
        name: "Kylie R. Graham",
        role: "Licensed Agent, Medicare Specialist",
        email: "kylie@grahamfinancial.org",
        phone: {
          display: "561-889-5285",
          href: "tel:+15618895285",
          e164: "+15618895285",
        },
        bio: "Third-generation Graham. Focused on Annual Enrollment Period reviews and helping clients adjust coverage as their needs change.",
      },
      {
        id: "chloe-graham",
        name: "Chloe E. Graham",
        role: "Licensed Agent, Medicare Specialist",
        email: "chloe@grahamfinancial.org",
        phone: {
          display: "561-628-9340",
          href: "tel:+15616289340",
          e164: "+15616289340",
        },
        bio: "Third-generation Graham. Works with clients on Medicare Advantage, Part D, and supplemental coverage.",
      },
    ],
  },

  forms: {
    eyebrow: "Medicare forms",
    headline: "Forms our clients ask for most.",
    subheadline:
      "Direct links to the official CMS and SSA forms you'll need at common Medicare milestones, plus carrier and agency forms for everyday account changes. Call us if you need help filling any of them out.",
    groups: [
      {
        title: "Sign up & life changes",
        items: [
          {
            id: "cms-40b",
            title: "Application for Enrollment in Medicare Part B",
            description:
              "Use this form to sign up for Part B (Medical Insurance) when you already have Part A.",
            formCode: "CMS-40B",
            href: "https://www.cms.gov/medicare/cms-forms/cms-forms/downloads/cms40b-e.pdf",
            source: "CMS",
            external: true,
          },
          {
            id: "cms-l564",
            title: "Request for Employment Information",
            description:
              "Used to give the Social Security Administration proof you're eligible to sign up for Part B if you're still working, retired within the last 8 months, or recently lost job-based health coverage.",
            formCode: "CMS-L564",
            href: "https://www.cms.gov/medicare/cms-forms/cms-forms/downloads/cms-l564e.pdf",
            source: "CMS",
            external: true,
          },
          {
            id: "ssa-44",
            title:
              "Medicare Income-Related Monthly Adjustment Amount — Life-Changing Event",
            description:
              "If you've had a major life-changing event and your income has gone down, use this form to request a reduction in your income-related monthly adjustment amount (IRMAA).",
            formCode: "SSA-44",
            href: "https://www.ssa.gov/forms/ssa-44.pdf",
            source: "SSA",
            external: true,
          },
        ],
      },
      {
        title: "Account changes",
        items: [
          {
            id: "ua-banking",
            title: "Change banking information — United American",
            description:
              "Update the banking information on file for your United American policy.",
            href: "https://webtricity-assets-2.wbtcdn.com/af09d715-b4da-4977-8025-692e5cd3e825/files/upload/bank-draft-change.15d86ab1332af0d83f11e4f70b4ec8a8c0933a2520c1c4d11978a5ba73dcd551.pdf",
            source: "carrier",
            external: true,
          },
          {
            id: "frs",
            title: "Florida Retirement System form",
            description:
              "Florida Retirement System–related insurance form for FRS retirees.",
            href: "https://webtricity-assets-2.wbtcdn.com/af09d715-b4da-4977-8025-692e5cd3e825/files/upload/florida-retirement-system.4bd71ce71d5b8a1bff0321d5cd8b83747093ae35473226fd2646c530afe4ebfa.pdf",
            source: "agency",
            external: true,
          },
          {
            id: "rfa",
            title: "Reserve Fund Annuity Transaction Form",
            description:
              "Make a deposit to or withdrawal from your Reserve Fund Annuity.",
            href: "https://webtricity-assets-2.wbtcdn.com/af09d715-b4da-4977-8025-692e5cd3e825/files/upload/reserve-fund-annuity-transaction-form.2adff574f3d2b2a0f8730bd2822732e5a0c59bc245149b74c41e5b026446ae28.pdf",
            source: "carrier",
            external: true,
          },
        ],
      },
    ],
  },

  resources: {
    eyebrow: "Medicare resources",
    headline: "Helpful guides, in plain English.",
    subheadline:
      "Trusted reference material from CMS and Medicare.gov, plus short videos to walk you through the basics. Save these for later — and call us when you have questions.",
    guides: [
      {
        id: "medicare-and-you-2026",
        title: "Medicare & You 2026",
        description:
          "The official U.S. government Medicare handbook for 2026 — your complete reference for benefits, costs, and how Medicare works.",
        href: "https://webtricity-assets-2.wbtcdn.com/af09d715-b4da-4977-8025-692e5cd3e825/files/upload/medicare-and-you-2026.5689bc630b6b7ba4309e353502ee0f08f610b3d62fb4e47b35ba736a87e2e321.pdf",
        source: "CMS / Medicare.gov",
      },
      {
        id: "ab-chart-2026",
        title: "Medicare A-B Chart 2026",
        description:
          "A side-by-side breakdown of what Part A and Part B cover, with current premiums, deductibles, and coinsurance amounts.",
        href: "https://webtricity-assets-2.wbtcdn.com/af09d715-b4da-4977-8025-692e5cd3e825/files/upload/ab-chart-2026.9df19c76014f97fece264acbe4d41a1e5188da45faf88c68035d31ed1100a768.pdf",
        source: "CMS / Medicare.gov",
      },
      {
        id: "choosing-medigap",
        title: "Choosing a Medigap Policy",
        description:
          "A guide to Medicare Supplement (Medigap) plans — what they cover, how plans compare, and what to think about before enrolling.",
        href: "https://webtricity-assets-2.wbtcdn.com/af09d715-b4da-4977-8025-692e5cd3e825/files/upload/choosing-a-medigap-policy-0625.09b7a05683c0f55c8450e87a90d96ded013fcd17675481c813917755d91f717e.pdf",
        source: "CMS / Medicare.gov",
      },
    ],
    videos: [
      {
        id: "diff-original-vs-advantage",
        title:
          "What's the difference between Original Medicare and Medicare Advantage?",
        description:
          "A short overview of how Original Medicare and Medicare Advantage compare.",
        youTubeId: "2ikOdAeZboY",
      },
      {
        id: "parts-of-medicare",
        title: "The parts of Medicare",
        description:
          "An introduction to Parts A, B, C, and D — what each covers and how they fit together.",
        youTubeId: "MlNw4LovNjE",
      },
      {
        id: "initial-enrollment-period",
        title: "Your Initial Enrollment Period",
        description:
          "When you can first sign up for Medicare and what to do during that window.",
        youTubeId: "XBeROFrweXU",
      },
      {
        id: "part-b-late-penalty",
        title: "The Part B late enrollment penalty",
        description: "How the Part B penalty works and how to avoid it.",
        youTubeId: "t885XZC6HmQ",
      },
    ],
    externalLinks: [
      {
        label: "Medicare.gov",
        href: "https://www.medicare.gov",
        description:
          "The official U.S. government Medicare website — plan finder, eligibility, and more.",
      },
      {
        label: "1-800-MEDICARE",
        href: "tel:+18006334227",
        description:
          "Call Medicare directly. Available 24/7 (TTY: 1-877-486-2048).",
      },
      {
        label: "Social Security Administration",
        href: "https://www.ssa.gov/medicare",
        description:
          "Sign up for Medicare and manage your enrollment through the SSA.",
      },
      {
        label: "State Health Insurance Programs (SHIP)",
        href: "https://www.shiphelp.org",
        description:
          "Free local Medicare counseling in your state — independent of insurance companies.",
      },
    ],
  },

  privacyPolicy: {
    eyebrow: "Legal",
    headline: "Privacy Policy",
    lastUpdated: "Last updated April 2026.",
    body: [
      {
        heading: "What we collect",
        paragraphs: [
          "When you request a quote, contact us, or sign up to be a client, we collect the personal information you give us — typically your name, address, phone, and email — along with any details about the coverage you're asking about.",
          "When you browse our website, we automatically receive standard technical information (such as your IP address, browser, and operating system) to help us understand how the site is used and keep it secure.",
          "With your permission, we may send you periodic emails about our agency, plan changes, and Medicare deadlines that may affect you.",
        ],
      },
      {
        heading: "Consent",
        paragraphs: [
          "When you provide us with personal information for a specific purpose — for example, to request a Medicare plan comparison — we treat that as your consent to use the information for that purpose.",
          "If we ask for your information for a secondary reason such as marketing, we will either ask for your express consent or give you a clear opportunity to say no.",
          "You can withdraw your consent at any time by contacting us at info@grahamfinancial.org or calling 561-547-7866.",
        ],
      },
      {
        heading: "How we use and share information",
        paragraphs: [
          "We use the information you give us to recommend plans, place applications with insurance carriers, service your policies, and stay in touch about your coverage.",
          "Insurance carriers we represent receive the information needed to issue and administer your policy. They have their own privacy policies. We encourage you to review those policies, since they describe how each carrier handles your data.",
          "We may also share information when required by law or to protect our rights, but we never sell your personal information.",
        ],
      },
      {
        heading: "Third-party services",
        paragraphs: [
          "We use third-party tools — such as our website host, email provider, and analytics — that may receive limited information to provide their services. These providers act on our behalf and are not permitted to use your information for their own purposes beyond what's needed to operate the service.",
          "If you click a link that takes you to another website, that site's privacy practices apply. We're not responsible for content or privacy practices on sites we don't operate.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "We take reasonable precautions and follow industry best practices to protect your information from loss, misuse, unauthorized access, and disclosure.",
          "Our website may use cookies, including those required for analytics. You can control cookies through your browser settings.",
        ],
      },
      {
        heading: "Age",
        paragraphs: [
          "By using this site, you confirm that you are at least the age of majority in your state of residence.",
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          "We may update this policy from time to time. Material changes will be posted here, and the updated date will reflect the change.",
        ],
      },
      {
        heading: "Questions",
        paragraphs: [
          "If you would like to access, correct, or delete the information we have about you — or if you have any questions about this policy — please contact us at info@grahamfinancial.org or 561-547-7866.",
        ],
      },
    ],
  },

  accessibility: {
    eyebrow: "Accessibility",
    headline: "Accessibility statement",
    body: [
      {
        paragraphs: [
          "Graham Financial Group is committed to making our website usable by everyone, regardless of ability or technology.",
          "We've designed this site to meet the recommendations of the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. Pages support keyboard navigation, screen readers, and high-contrast text. We respect your operating system's reduced-motion preference, and we test on commonly used assistive technologies.",
        ],
      },
      {
        heading: "If something isn't working for you",
        paragraphs: [
          "If any part of our website is hard to use or understand — or if you'd prefer to talk with a person — please tell us. We'll do our best to help you and to fix the issue.",
        ],
      },
      {
        heading: "Continuing to improve",
        paragraphs: [
          "Accessibility is an ongoing effort. We review the site regularly and welcome feedback that helps us improve.",
        ],
      },
    ],
    contactMethods: [
      {
        label: "Phone",
        value: "561-547-7866",
        href: "tel:+15615477866",
      },
      {
        label: "Email",
        value: "info@grahamfinancial.org",
        href: "mailto:info@grahamfinancial.org",
      },
      {
        label: "Contact form",
        value: "Send us a message",
        href: "/contact",
      },
    ],
  },
} satisfies SiteContent;

export type { SiteContent as Content };
