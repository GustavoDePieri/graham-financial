import { FileText, Download } from "lucide-react";
import { content } from "@/lib/content";

export function FormsList() {
  const { forms } = content;

  return (
    <section
      aria-labelledby="forms-title"
      className="section"
    >
      <div className="container-prose">
        <h2 id="forms-title" className="sr-only">
          Medicare forms
        </h2>

        <div className="space-y-12 md:space-y-16">
          {forms.groups.map((group) => (
            <div key={group.title}>
              <h3 className="heading-h2 text-[var(--color-foreground)]">
                {group.title}
              </h3>
              <ul className="mt-6 md:mt-8 grid grid-cols-1 gap-5 md:gap-6">
                {group.items.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-7 transition-all hover:shadow-[var(--shadow-card)] hover:border-[var(--color-border-strong)]"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                      <div className="shrink-0 inline-flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-[var(--radius-md)] bg-[var(--color-accent-soft)] text-[var(--color-primary)]">
                        <FileText
                          className="h-6 w-6 md:h-7 md:w-7"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="heading-h3 text-[var(--color-foreground)]">
                            {item.title}
                          </h4>
                          {item.formCode && (
                            <span className="inline-flex items-center rounded-full bg-[var(--color-cream-200)] text-[var(--color-primary)] text-xs font-semibold tracking-wider uppercase px-2.5 py-1">
                              {item.formCode}
                            </span>
                          )}
                        </div>
                        <p className="mt-2.5 text-[0.9375rem] md:text-base text-[var(--color-muted-foreground)] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="shrink-0 md:self-center">
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={
                            item.external ? "noopener noreferrer" : undefined
                          }
                          className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] h-12 px-5 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
                        >
                          <Download className="h-4 w-4" aria-hidden="true" />
                          Download PDF
                          <span className="sr-only">
                            {" "}
                            (opens in a new tab)
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
