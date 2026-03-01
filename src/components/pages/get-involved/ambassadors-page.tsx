import { SmoothScroll } from "@/layout/smooth-scroll";
import AmbassadorHero from "@/features/get-involved/ambassadors/ambassador-hero";
import WhatYouGet from "@/features/get-involved/ambassadors/what-you-get";
import AmbassadorCTA from "@/features/get-involved/ambassadors/ambassador-cta";
import AmbassadorDomains from "@/features/get-involved/ambassadors/ambassador-domain";
import WhyItMatters from "@/features/get-involved/ambassadors/why-it-matter";

const AmbassadorsPage = () => {
  return (
    <main className="flex items-start justify-start w-full min-h-screen bg-background text-foreground font-sans">
      <SmoothScroll>
        <div className="flex w-full flex-col bg-background">

          <AmbassadorHero />

          <WhyItMatters />

          <AmbassadorDomains />

          <WhatYouGet />

          <AmbassadorCTA />

        </div>
      </SmoothScroll>
    </main>
  );
};

export default AmbassadorsPage;