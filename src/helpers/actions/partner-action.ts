"use server";


import {PartnerInquiryFormState, partnerInquirySchema} from "@/helpers/validations/partner-schema";

export async function partnerInquiryAction(
  _prev: PartnerInquiryFormState,
  formData: FormData,
): Promise<PartnerInquiryFormState> {
  const values = {
    fullName:    formData.get("fullName")    as string,
    email:       formData.get("email")       as string,
    organisation:formData.get("organisation")as string,
    role:        formData.get("role")        as string,
    partnerType: formData.get("partnerType") as string,
    website:     formData.get("website")     as string,
    message:     formData.get("message")     as string,
  };

  const result = partnerInquirySchema.safeParse(values);

  if (!result.success) {
    return {
      values,
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Do something with the values.
  // Call your database or API here.
  // e.g. await db.partnerInquiry.create({ data: result.data });
  // e.g. await sendPartnerEmail(result.data);

  return {
    values: {
      fullName:     "",
      email:        "",
      organisation: "",
      role:         "",
      partnerType:  "",
      website:      "",
      message:      "",
    },
    errors: null,
    success: true,
  };
}