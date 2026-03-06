"use client";

import { motion } from "motion/react";
import Form from "next/form";
import { useActionState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription, DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldGroup } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import {
  IconUser,
  IconMail,
  IconBuilding,
  IconBriefcase,
  IconMessage,
  IconWorld,
} from "@tabler/icons-react";
import { Handshake } from "lucide-react";
import {PartnerInquiryFormState} from "@/helpers/validations/partner-schema";
import {partnerInquiryAction} from "@/helpers/actions/partner-action";
import {FormInput} from "@/components/shared/form-input";
import {FormTextarea} from "@/components/shared/form-textarea";
import {CTAButton} from "@/layout/cta-button";

function PartnerForm({ defaultPartnerType }: { defaultPartnerType?: string }) {
  const [formState, formAction] = useActionState<PartnerInquiryFormState, FormData>(
    partnerInquiryAction,
    {
      values: {
        fullName: "",
        email: "",
        organisation: "",
        role: "",
        partnerType: defaultPartnerType ?? "",
        website: "",
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
        className="flex flex-col items-center justify-center text-center py-14 px-6 gap-4"
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
          style={{ background: "hsl(var(--primary)/0.12)" }}
        >
          <Handshake size={24} style={{ color: "hsl(var(--primary))" }} />
        </div>
        <h3 className="text-2xl font-black tracking-tight">
          Let's build this together.
        </h3>
        <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs">
          Your inquiry has been received. We'll reach out within 48 hours to start the conversation — no pitch deck required.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <Card className="w-full mx-auto p-0 m-0 border-0 shadow-none">
        <CardHeader className="bg-muted/50 px-6 py-4 border-b border-border">
          <CardTitle className="text-base">Partnership Inquiry</CardTitle>
          <CardDescription className="text-sm font-light">
            Tell us who you are and what you're hoping to build with Xolace.
          </CardDescription>
        </CardHeader>

        <CardContent className="px-6 pb-6 pt-2">
          <Form action={formAction} id="partner-inquiry-form">
            <FieldGroup>

              <FormInput
                id="fullName"
                name="fullName"
                type="text"
                label="Your Full Name"
                placeholder="Ama Mensah"
                required
                defaultValue={formState.values?.fullName}
                leftAddon={<IconUser className="size-4 text-muted-foreground" />}
                error={formState.errors?.fullName}
              />

              <FormInput
                id="email"
                name="email"
                type="email"
                label="Work Email"
                placeholder="ama@organisation.org"
                required
                defaultValue={formState.values?.email}
                leftAddon={<IconMail className="size-4 text-muted-foreground" />}
                error={formState.errors?.email}
              />

              <FormInput
                id="organisation"
                name="organisation"
                type="text"
                label="Organisation Name"
                placeholder="University of Ghana, WHO, etc."
                required
                defaultValue={formState.values?.organisation}
                leftAddon={<IconBuilding className="size-4 text-muted-foreground" />}
                error={formState.errors?.organisation}
              />

              <FormInput
                id="role"
                name="role"
                type="text"
                label="Your Role / Title"
                placeholder="Director of Partnerships, Dean of Students..."
                required
                defaultValue={formState.values?.role}
                leftAddon={<IconBriefcase className="size-4 text-muted-foreground" />}
                error={formState.errors?.role}
              />

              {/* Partner type select */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Type of Partnership</label>
                <Select name="partnerType" defaultValue={defaultPartnerType ?? ""}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a partnership type…" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Universities & Campuses">Universities & Campuses</SelectItem>
                    <SelectItem value="NGOs & Health Organisations">NGOs & Health Organisations</SelectItem>
                    <SelectItem value="Corporates & Workplaces">Corporates & Workplaces</SelectItem>
                    <SelectItem value="Media & Creatives">Media & Creatives</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {formState.errors?.partnerType && (
                  <p className="text-destructive text-xs">{formState.errors.partnerType[0]}</p>
                )}
              </div>

              <FormInput
                id="website"
                name="website"
                type="url"
                label="Website (optional)"
                placeholder="https://yourorganisation.org"
                defaultValue={formState.values?.website}
                leftAddon={<IconWorld className="size-4 text-muted-foreground" />}
                error={formState.errors?.website}
              />

              <FormTextarea
                name="message"
                label="What are you hoping to build?"
                placeholder="Tell us about your organisation, who you serve, and what a partnership with Xolace could look like for you…"
                rows={4}
                required
                defaultValue={formState.values?.message}
                leftAddon={<IconMessage className="size-4 text-muted-foreground" />}
                error={formState.errors?.message}
              />

            </FieldGroup>

            <CTAButton
              label="Submit Inquiry"
              //form="partner-inquiry-form"
              type="submit"
              className="w-full mt-6"
            />

            <Separator className="opacity-50 mt-4" />

            <p className="text-muted-foreground/50 text-xs text-center mt-3 font-light">
              We respond within 48 hours. No pitch decks needed.
            </p>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface PartnerFormModalProps {
  trigger?: React.ReactNode;
  partnerType?: string;
}

export function PartnerFormModal({ trigger, partnerType }: PartnerFormModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <button
            className="px-10 py-4 font-bold uppercase tracking-widest text-xs text-white hover:opacity-85 transition-opacity"
            style={{ background: "hsl(var(--primary))" }}
          >
            Partner with us
          </button>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-lg w-full max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Partnership Inquiry</DialogTitle>
          <DialogDescription>
            Submit a partnership inquiry to work with Xolace.
          </DialogDescription>
        </DialogHeader>
        <PartnerForm defaultPartnerType={partnerType} />
      </DialogContent>
    </Dialog>
  );
}

export default PartnerFormModal;