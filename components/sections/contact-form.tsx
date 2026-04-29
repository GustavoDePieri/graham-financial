"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { content } from "@/lib/content";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

/** Endpoint to POST submissions to (Formspree, Web3Forms, Getform, etc.).
 * Configured via NEXT_PUBLIC_CONTACT_ENDPOINT at build time. */
const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export function ContactForm() {
  const { contact, business } = content;
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      state: "",
      reason: "medicare",
      message: "",
      consent: undefined,
      website: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (values: ContactInput) => {
    // Honeypot — silently succeed without sending anything.
    if (values.website && values.website.length > 0) {
      setStatus("success");
      reset();
      return;
    }

    if (!CONTACT_ENDPOINT) {
      setErrorMessage(
        `The contact form isn't configured. Please call us at ${business.phone.display}.`,
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    // Strip honeypot before sending.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { website, ...payload } = values;

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...payload,
          // Common provider conveniences:
          _subject: `New consultation request — ${payload.firstName} ${payload.lastName} (${payload.state})`,
          _replyto: payload.email,
        }),
      });
      if (!res.ok) {
        throw new Error(contact.errorMessage);
      }
      setStatus("success");
      reset();
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : contact.errorMessage,
      );
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative bg-[var(--color-inverse)] text-[var(--color-inverse-foreground)]"
    >
      <div className="container-prose section">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">{contact.eyebrow}</span>
            <h2
              id="contact-title"
              className="heading-display-xl mt-3 text-[var(--color-inverse-foreground)]"
            >
              {contact.headline}
            </h2>
            <p className="lead-text mt-5 text-[var(--color-inverse-muted-foreground)]">
              {contact.subheadline}
            </p>

            <a
              href={business.phone.href}
              className="mt-8 inline-flex items-center gap-3 text-[var(--color-inverse-foreground)] hover:text-[var(--color-gold-300)] transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold-300)]"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[var(--color-accent)] text-[var(--color-accent-foreground)]">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm text-[var(--color-inverse-muted-foreground)]">
                  Or call us directly
                </span>
                <span className="font-display text-2xl font-semibold">
                  {business.phone.display}
                </span>
              </span>
            </a>
          </div>

          <div className="lg:col-span-7">
            {status === "success" ? (
              <SuccessCard message={contact.successMessage} />
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-describedby={errorMessage ? "form-error" : undefined}
                className="rounded-[var(--radius-xl)] bg-[var(--color-surface)] text-[var(--color-foreground)] p-6 md:p-8 shadow-[var(--shadow-elevated)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field
                    label="First name"
                    htmlFor="firstName"
                    error={errors.firstName?.message}
                    required
                  >
                    <Input
                      id="firstName"
                      autoComplete="given-name"
                      aria-invalid={!!errors.firstName}
                      aria-describedby={
                        errors.firstName ? "firstName-error" : undefined
                      }
                      {...register("firstName")}
                    />
                  </Field>
                  <Field
                    label="Last name"
                    htmlFor="lastName"
                    error={errors.lastName?.message}
                    required
                  >
                    <Input
                      id="lastName"
                      autoComplete="family-name"
                      aria-invalid={!!errors.lastName}
                      aria-describedby={
                        errors.lastName ? "lastName-error" : undefined
                      }
                      {...register("lastName")}
                    />
                  </Field>
                  <Field
                    label="Email"
                    htmlFor="email"
                    error={errors.email?.message}
                    required
                  >
                    <Input
                      id="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      {...register("email")}
                    />
                  </Field>
                  <Field
                    label="Phone"
                    htmlFor="phone"
                    error={errors.phone?.message}
                    required
                  >
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      aria-invalid={!!errors.phone}
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                      {...register("phone")}
                    />
                  </Field>

                  <Field
                    label="State"
                    htmlFor="state"
                    error={errors.state?.message}
                    required
                  >
                    <Controller
                      control={control}
                      name="state"
                      render={({ field }) => (
                        <Select
                          value={field.value || undefined}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            id="state"
                            aria-invalid={!!errors.state}
                            aria-describedby={
                              errors.state ? "state-error" : undefined
                            }
                          >
                            <SelectValue placeholder="Select your state" />
                          </SelectTrigger>
                          <SelectContent>
                            {contact.states.map((s) => (
                              <SelectItem key={s.code} value={s.code}>
                                {s.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </Field>
                  <Field
                    label="Contact me regarding"
                    htmlFor="reason"
                    error={errors.reason?.message}
                    required
                  >
                    <Controller
                      control={control}
                      name="reason"
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            id="reason"
                            aria-invalid={!!errors.reason}
                            aria-describedby={
                              errors.reason ? "reason-error" : undefined
                            }
                          >
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            {contact.reasons.map((r) => (
                              <SelectItem key={r.value} value={r.value}>
                                {r.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </Field>
                </div>

                <Field
                  label="Message"
                  htmlFor="message"
                  error={errors.message?.message}
                  className="mt-5"
                  hint="Optional — tell us a bit about your situation."
                >
                  <Textarea
                    id="message"
                    rows={4}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    {...register("message")}
                  />
                </Field>

                {/* Honeypot — must remain empty. Hidden from sighted users + AT. */}
                <div
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
                >
                  <label htmlFor="website">
                    Leave this field blank
                    <input
                      type="text"
                      id="website"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register("website")}
                    />
                  </label>
                </div>

                <div className="mt-6">
                  <Controller
                    control={control}
                    name="consent"
                    render={({ field }) => (
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="consent"
                          checked={field.value === true}
                          onCheckedChange={(v) => field.onChange(v === true)}
                          aria-invalid={!!errors.consent}
                          aria-describedby={
                            errors.consent ? "consent-error" : undefined
                          }
                        />
                        <Label
                          htmlFor="consent"
                          className="text-[0.9375rem] leading-relaxed text-[var(--color-foreground)] font-normal"
                        >
                          {contact.consentLabel}
                          <span className="text-[var(--color-destructive)]">
                            {" "}
                            *
                          </span>
                        </Label>
                      </div>
                    )}
                  />
                  {errors.consent && (
                    <p
                      id="consent-error"
                      className="mt-2 text-sm text-[var(--color-destructive)]"
                    >
                      {errors.consent.message}
                    </p>
                  )}
                </div>

                {errorMessage && (
                  <div
                    id="form-error"
                    role="alert"
                    className="mt-5 flex items-start gap-2 rounded-[var(--radius-md)] bg-[var(--color-destructive)]/10 border border-[var(--color-destructive)]/30 p-3 text-sm text-[var(--color-destructive)]"
                  >
                    <AlertCircle
                      className="h-4 w-4 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <p className="text-xs text-[var(--color-muted-foreground)]">
                    We&rsquo;ll respond within one business day. Your info stays
                    private.
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting || status === "submitting"}
                    className="min-w-[180px]"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2
                          className="h-4 w-4 animate-spin"
                          aria-hidden="true"
                        />
                        Sending…
                      </>
                    ) : (
                      "Send message"
                    )}
                  </Button>
                </div>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  hint,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={htmlFor}>
        {label}
        {required && (
          <span className="text-[var(--color-destructive)]"> *</span>
        )}
      </Label>
      {children}
      {hint && !error && (
        <p className="text-xs text-[var(--color-muted-foreground)]">{hint}</p>
      )}
      {error && (
        <p
          id={`${htmlFor}-error`}
          className="text-sm text-[var(--color-destructive)]"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessCard({ message }: { message: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-[var(--radius-xl)] bg-[var(--color-surface)] text-[var(--color-foreground)] p-8 md:p-10 shadow-[var(--shadow-elevated)] text-center"
    >
      <div className="mx-auto inline-flex items-center justify-center h-14 w-14 rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)]">
        <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
      </div>
      <h3 className="heading-h2 mt-5 text-[var(--color-foreground)]">
        Message received.
      </h3>
      <p className="mt-3 text-[var(--color-muted-foreground)]">{message}</p>
    </div>
  );
}
