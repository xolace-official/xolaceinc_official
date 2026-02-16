import HeroSection from "@/features/home/hero-section";
import ProblemSection from "@/features/home/problem-section";
import TheGapSection from "@/features/home/the-gap-section";
import MeetXolaceSection from "@/features/home/meet-xolace-section";
import HowItWorksSection from "@/features/home/how-it-works-section";
import OurVisionSection from "@/features/home/our-vision-section";
import CallToActionSection from "@/features/home/call-to-action-section";
import WhoItsForSection from "@/features/home/who-its-for-section";

export function HomePage() {
  return (
    <main className={"flex items-start justify-start w-full min-h-screen bg-background text-foreground font-sans"}>
      <div className="flex items-start justify-start w-full flex-col bg-background">
        <HeroSection />
        <ProblemSection />
        <TheGapSection />
        <MeetXolaceSection />
        <HowItWorksSection />
        <WhoItsForSection />
        <OurVisionSection />
        <CallToActionSection />
      </div>
    </main>
  );
}
