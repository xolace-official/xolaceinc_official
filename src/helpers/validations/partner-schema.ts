import { z } from "zod";

export const partnerInquirySchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email(),
  organisation: z.string().min(2, { message: "Organisation name is required" }),
  role: z.string().min(2, { message: "Your role is required" }),
  partnerType: z.string().min(1, { message: "Please select a partnership type" }),
  website: z.string().optional(),
  message: z
    .string()
    .min(20, { message: "Please tell us a bit more - at least 20 characters." }),
});

export type PartnerInquiryFormState = {
  values?: z.infer<typeof partnerInquirySchema>;
  errors:  null | Partial<Record<keyof z.infer<typeof partnerInquirySchema>, string[]>>;
  success: boolean;
};