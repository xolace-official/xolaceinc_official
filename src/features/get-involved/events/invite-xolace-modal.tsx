"use client";

import { motion } from "motion/react";
import Form from "next/form";
import { useActionState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import {
  IconUser,
  IconMail,
  IconBuilding,
  IconMapPin,
  IconCalendar,
  IconUsers,
  IconMessage,
} from "@tabler/icons-react";
import {FormInput} from "@/components/shared/form-input";
import {FormTextarea} from "@/components/shared/form-textarea";
import {CTAButton} from "@/layout/cta-button";
import {inviteEventAction} from "@/helpers/actions/invite-event-action";
import {InviteEventFormState} from "@/helpers/validations/invite-event-schema";

function InviteForm() {
  const [formState, formAction] = useActionState<InviteEventFormState, FormData>(
    inviteEventAction,
    {
      values: {
        fullName: "",
        email: "",
        organisation: "",
        location: "",
        preferredDate: "",
        estimatedAttendees: "",
        message: "",
      },
      errors: null,
      success: false,
    },
  );

  if (formState.success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center text-center py-12 px-6 gap-4"
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
          style={{ background: "hsl(var(--primary)/0.12)" }}
        >
          <span className="text-2xl">🔥</span>
        </div>
        <h3 className="text-xl font-bold tracking-tight">
          We'll bring the fire.
        </h3>
        <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs">
          Your invite request has been received. We'll reach out within 48 hours to confirm details.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <Card className="w-full mx-auto p-0 m-0 border-0 shadow-none">
        <CardHeader className="bg-muted/50 px-6 py-4 border-b border-border">
          <CardTitle className="text-base">Invite Xolace to your space</CardTitle>
          <CardDescription className="text-sm font-light">
            Tell us about your space and we'll make it happen. All events are free.
          </CardDescription>
        </CardHeader>

        <CardContent className="px-6 pb-6 pt-2">
          <Form action={formAction} id="invite-event-form">
            <FieldGroup>

              {/* Full Name */}
              <FormInput
                id="fullName"
                name="fullName"
                type="text"
                label="Your Full Name"
                placeholder="Jane Mensah"
                required
                defaultValue={formState.values?.fullName}
                leftAddon={<IconUser className="size-4 text-muted-foreground" />}
                error={formState.errors?.fullName}
              />

              {/* Email */}
              <FormInput
                id="email"
                name="email"
                type="email"
                label="Email Address"
                placeholder="you@organisation.com"
                required
                defaultValue={formState.values?.email}
                leftAddon={<IconMail className="size-4 text-muted-foreground" />}
                error={formState.errors?.email}
              />

              {/* Organisation */}
              <FormInput
                id="organisation"
                name="organisation"
                type="text"
                label="Organisation / Institution"
                placeholder="University of Ghana, NGO name, etc."
                required
                defaultValue={formState.values?.organisation}
                leftAddon={<IconBuilding className="size-4 text-muted-foreground" />}
                error={formState.errors?.organisation}
              />

              {/* Location */}
              <FormInput
                id="location"
                name="location"
                type="text"
                label="Location / City"
                placeholder="Accra, Kumasi, Lagos…"
                required
                defaultValue={formState.values?.location}
                leftAddon={<IconMapPin className="size-4 text-muted-foreground" />}
                error={formState.errors?.location}
              />

              {/* Preferred Date */}
              <FormInput
                id="preferredDate"
                name="preferredDate"
                type="text"
                label="Preferred Date (approximate)"
                placeholder="e.g. April 2025, first week of May"
                defaultValue={formState.values?.preferredDate}
                leftAddon={<IconCalendar className="size-4 text-muted-foreground" />}
                error={formState.errors?.preferredDate}
              />

              {/* Estimated Attendees */}
              <FormInput
                id="estimatedAttendees"
                name="estimatedAttendees"
                type="text"
                label="Estimated Attendees"
                placeholder="e.g. 50–100 students"
                defaultValue={formState.values?.estimatedAttendees}
                leftAddon={<IconUsers className="size-4 text-muted-foreground" />}
                error={formState.errors?.estimatedAttendees}
              />

              {/* Message */}
              <FormTextarea
                name="message"
                label="Tell us more"
                placeholder="Who is your audience? What kind of event do you have in mind? Any specific topics?"
                rows={4}
                defaultValue={formState.values?.message}
                leftAddon={<IconMessage className="size-4 text-muted-foreground" />}
                error={formState.errors?.message}
              />
            </FieldGroup>

            <CTAButton
              label="Submit Invite Request"
              //form="invite-event-form"
              type="submit"
              className="w-full mt-6"
            />

            <Separator className="opacity-50 mt-4" />

            <p className="text-muted-foreground/50 text-xs text-center mt-3 font-light">
              We respond within 48 hours. All Xolace events are free.
            </p>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface InviteXolaceModalProps {
  trigger?: React.ReactNode;
}

export function InviteXolaceModal({ trigger }: InviteXolaceModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <CTAButton
            label={"Invite us to your space"}
            type={"button"}
            onClick={() => ''}
          />
        )}
      </DialogTrigger>

      <DialogContent className="max-w-lg w-full max-h-[70vh] overflow-y-auto p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Invite Xolace to your space</DialogTitle>
          <DialogDescription>
            Submit a request to bring a Xolace event to your campus, city, or organisation.
          </DialogDescription>
        </DialogHeader>

        <InviteForm />
      </DialogContent>
    </Dialog>
  );
}

export default InviteXolaceModal;