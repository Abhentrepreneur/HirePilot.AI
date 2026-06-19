import { z } from "zod";

export const waitlistSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  role: z.string().min(1, "Please select your current role"),
  experience: z.string().min(1, "Please select your years of experience"),
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;
