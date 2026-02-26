import { SmoothScroll } from "@/layout/smooth-scroll";
import CampfireHero from "@/features/community/campfires/campfire-hero";
import WhatIsACampfire from "@/features/community/campfires/what-is-a-campfire";
import CampfireRoles from "@/features/community/campfires/campfire-roles";
import CampfireTypes from "@/features/community/campfires/campfire-types";
import CampfireHow from "@/features/community/campfires/campfire-how";
import CampfireCTA from "@/features/community/campfires/campfire-cta";

const CampfiresPage = () => {
  return (
    <main className="flex items-start justify-start w-full min-h-screen bg-background text-foreground font-sans">
      <SmoothScroll>
        <div className="flex w-full flex-col bg-background">

          <CampfireHero />

          <WhatIsACampfire />

          <CampfireRoles />

          <CampfireTypes />

          <CampfireHow />

          <CampfireCTA />
        </div>
      </SmoothScroll>
    </main>
  );
};

export default CampfiresPage;