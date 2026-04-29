import { z } from "zod";

const phoneRegex = /^[\d\s().+\-]{7,20}$/;

export const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Please enter your first name.")
    .max(60, "First name is too long."),
  lastName: z
    .string()
    .trim()
    .min(2, "Please enter your last name.")
    .max(60, "Last name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .email("Please enter a valid email address.")
    .max(120, "Email is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter your phone number.")
    .max(20, "Phone number is too long.")
    .regex(phoneRegex, "Please enter a valid phone number."),
  state: z
    .string()
    .trim()
    .length(2, "Please select your state.")
    .toUpperCase(),
  reason: z.enum(["medicare", "supplement", "part-d", "advantage", "other"], {
    error: () => ({ message: "Please select a topic." }),
  }),
  message: z
    .string()
    .trim()
    .max(2000, "Message is too long (2000 characters max).")
    .optional()
    .or(z.literal("")),
  consent: z.literal(true, {
    error: () => ({
      message: "We need your permission to contact you.",
    }),
  }),
  /** Honeypot — real users won't see this field. The submit handler
   * silently drops the request when this field has any value. */
  website: z.string().max(2000).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
