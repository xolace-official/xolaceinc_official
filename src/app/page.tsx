import HeroSection from "@/pages/home/hero-section";
import ProblemSection from "@/pages/home/problem-section";
import TheGapSection from "@/pages/home/the-gap-section";
import MeetXolaceSection from "@/pages/home/meet-xolace-section";
import HowItWorksSection from "@/pages/home/how-it-works-section";
import OurVisionSection from "@/pages/home/our-vision-section";
import CallToActionSection from "@/pages/home/call-to-action-section";
import WhoItsForSection from "@/pages/home/who-its-for-section";

export default function Home() {
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
