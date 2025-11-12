import { z } from "zod";

export const newsHeadlineSchema = z.object({
  id: z.string(),
  image: z.string(),
  headline: z.string(),
  location: z.string().optional(),
});

export type NewsHeadline = z.infer<typeof newsHeadlineSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
