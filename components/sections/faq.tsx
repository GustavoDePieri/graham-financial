import { content } from "@/lib/content";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQPageJsonLd } from "@/components/schema/faq-page";

export function FAQ() {
  const { faq } = content;

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="section bg-[var(--color-surface)] border-y border-[var(--color-border)]"
    >
      <div className="container-prose">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow">{faq.eyebrow}</span>
            <h2
              id="faq-title"
              className="heading-h1 mt-3 text-[var(--color-foreground)]"
            >
              {faq.headline}
            </h2>
            {faq.subheadline && (
              <p className="mt-5 text-[var(--color-muted-foreground)] leading-relaxed">
                {faq.subheadline}
              </p>
            )}
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faq.items.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <FAQPageJsonLd />
    </section>
  );
}
