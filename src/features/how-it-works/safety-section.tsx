"use client";

import { Flag, ShieldCheck, BookOpen } from "lucide-react";
import FeatureSection from "@/features/how-it-works/feature-section";

const features = [
  {
    icon: Flag,
    label: "Reporting",
    description:
      "See something off? Flag it. Every report is reviewed to keep the space safe.",
  },
  {
    icon: ShieldCheck,
    label: "Blue Teams",
    description:
      "Trusted community members who moderate with empathy, not authority.",
  },
  {
    icon: BookOpen,
    label: "Community Guidelines",
    description:
      "Clear, simple rules that protect honesty and discourage toxicity.",
  },
];

const SafetySection = () => {
  return (
    <FeatureSection
      title="Safety & Moderation"
      subtitle="Your safety isn't an afterthought — it's the foundation."
      mascotSrc="/assests/mascot/mascot-wave.png"
      mascotAlt="Xolace mascot holding a shield"
      features={features}
      accentColor="destructive"
      bgClass="bg-linear-to-b from-muted/20 to-background"
    />
  );
};

export default SafetySection;
