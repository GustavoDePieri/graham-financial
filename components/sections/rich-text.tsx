interface RichTextSection {
  heading?: string;
  paragraphs: string[];
}

interface RichTextProps {
  body: RichTextSection[];
  /** Optional small note at the very top, e.g. "Last updated April 2026." */
  note?: string;
}

export function RichText({ body, note }: RichTextProps) {
  return (
    <section className="section">
      <div className="container-prose">
        <div className="max-w-3xl mx-auto">
          {note && (
            <p className="text-sm uppercase tracking-[0.12em] font-semibold text-[var(--color-muted-foreground)] mb-8">
              {note}
            </p>
          )}
          <div className="space-y-10 md:space-y-12">
            {body.map((section, idx) => (
              <section key={idx}>
                {section.heading && (
                  <h2 className="heading-h2 text-[var(--color-foreground)] mb-4">
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-5 text-[var(--color-foreground)] leading-relaxed text-[1.0625rem] md:text-[1.125rem]">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
