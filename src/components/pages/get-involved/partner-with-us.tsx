import { SmoothScroll } from "@/layout/smooth-scroll";
import PartnerHero from "@/features/get-involved/partner-with-us/partner-hero";
import PartnerCase from "@/features/get-involved/partner-with-us/partner-case";
import PartnerTypes from "@/features/get-involved/partner-with-us/partner-types";
import PartnerOffer from "@/features/get-involved/partner-with-us/partner-offer";
import PartnerProcess from "@/features/get-involved/partner-with-us/partner-process";
import PartnerFAQ from "@/features/get-involved/partner-with-us/partner-faq";
import PartnerCTA from "@/features/get-involved/partner-with-us/partner-cta";

const PartnerWithUsPage = () => {
  return (
    <main className="flex items-start justify-start w-full min-h-screen bg-background text-foreground font-sans">
      <SmoothScroll>
        <div className="flex w-full flex-col bg-background">

          {/* Hero — "Some problems are too big to solve alone" */}
          <PartnerHero />

          {/* The Case — why the problem demands partnership */}
          <PartnerCase />

          {/* Partner Types — universities, NGOs, corporates, media */}
          <PartnerTypes />

          {/* What We Offer — 6 value tiles */}
          <PartnerOffer />

          {/* Process — 4-step timeline */}
          <PartnerProcess />

          {/* FAQ — common questions answered */}
          <PartnerFAQ />

          {/* CTA — Let's build this together */}
          <PartnerCTA />

        </div>
      </SmoothScroll>
    </main>
  );
};

export default PartnerWithUsPage;