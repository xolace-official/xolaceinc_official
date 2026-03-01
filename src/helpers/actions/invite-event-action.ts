"use server";


import {InviteEventFormState, inviteEventSchema} from "@/helpers/validations/invite-event-schema";

export async function inviteEventAction(
  _prev: InviteEventFormState,
  formData: FormData,
) {
  const values = {
    fullName:           formData.get("fullName")           as string,
    email:              formData.get("email")              as string,
    organisation:       formData.get("organisation")       as string,
    location:           formData.get("location")           as string,
    preferredDate:      formData.get("preferredDate")      as string,
    estimatedAttendees: formData.get("estimatedAttendees") as string,
    message:            formData.get("message")            as string,
  };

  const result = inviteEventSchema.safeParse(values);

  if (!result.success) {
    return {
      values,
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    values: {
      fullName:           "",
      email:              "",
      organisation:       "",
      location:           "",
      preferredDate:      "",
      estimatedAttendees: "",
      message:            "",
    },
    errors: null,
    success: true,
  };
}