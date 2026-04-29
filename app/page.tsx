import { Hero } from "@/components/sections/hero";
import { WhyGraham } from "@/components/sections/why-graham";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { ContactForm } from "@/components/sections/contact-form";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyGraham />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </>
  );
}
