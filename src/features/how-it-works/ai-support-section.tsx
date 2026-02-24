"use client";

import { Sparkles, Coins } from "lucide-react";
import FeatureSection from "@/features/how-it-works/feature-section";

const features = [
  {
    icon: Sparkles,
    label: "General Well-being Guidance",
    description:
      "AI-powered suggestions to help you reflect, breathe, and process — not diagnose.",
  },
  {
    icon: Coins,
    label: "Credit-based System",
    description:
      "Use credits to access AI tools at your own pace. No subscriptions, no pressure.",
  },
];

const AiSupportSection = () => {
  return (
    <FeatureSection
      title="AI Support"
      subtitle="Gentle guidance when you need a nudge, not a prescription."
      mascotSrc="/assests/mascot/mascot-wave.png"
      mascotAlt="Xolace mascot with a lightbulb"
      features={features}
      reversed
      accentColor="accent"
      bgClass="bg-muted/20"
    />
  );
};

export default AiSupportSection;
