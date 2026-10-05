import { z } from "zod";
import { INQUIRY_TYPES } from "@/data/site";

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Name is too long."),
  email: z.email("Please enter a valid email address."),
  company: z.string().trim().max(160, "Company name is too long.").optional(),
  phone: z.string().trim().max(40, "Phone number is too long.").optional(),
  inquiryType: z.enum(INQUIRY_TYPES, { message: "Please select an inquiry type." }),
  message: z
    .string()
    .trim()
    .min(20, "Please share a little more detail (at least 20 characters).")
    .max(4000, "Message is too long."),
  consent: z.boolean().refine((value) => value === true, {
    message: "Consent is required to send this inquiry.",
  }),
  website: z.string().max(0, "Invalid submission.").optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
