import { z } from "zod";

export const inviteEventSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "A valid email is required" }),
  organisation: z.string().min(2, { message: "Organisation or institution is required" }),
  location: z.string().min(2, { message: "Location is required" }),
  preferredDate: z.string().optional(),
  estimatedAttendees: z.string().optional(),
  message: z.string().min(10, { message: "Please tell us a bit more - at least 10 characters." }),
});

export type InviteEventFormState = {
  values?: z.infer<typeof inviteEventSchema>;
  errors: null | Partial<Record<keyof z.infer<typeof inviteEventSchema>, string[]>>;
  success: boolean;
};