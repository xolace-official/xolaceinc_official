import HeroSection from "@/features/how-it-works/hero-section";
import CoreFeaturesSection from "@/features/how-it-works/core-features-section";
import AiSupportSection from "@/features/how-it-works/ai-support-section";
import SafetySection from "@/features/how-it-works/safety-section";
import { SmoothScroll } from "@/layout/smooth-scroll";

export const HowItWorksPage = () => {
  return (
    <SmoothScroll>
      <main>
        <HeroSection />
        <CoreFeaturesSection />
        <AiSupportSection />
        <SafetySection />
      </main>
    </SmoothScroll>
  );
};
