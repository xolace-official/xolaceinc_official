import RadialStats from "@/features/about/our-story/radial-stats";
import {StoryHero} from "@/features/about/our-story/story-hero";
import {TheRealization} from "@/features/about/our-story/the-realization";
import {WhatWeObserved} from "@/features/about/our-story/what-we-observed";
import {ExistingPlatformsGap} from "@/features/about/our-story/exsiting-platforms-gap";
import {OurDream} from "@/features/about/our-story/our-dream";
import {OurStoryCTA} from "@/features/about/our-story/our-story-cta";
import {OurRoot} from "@/features/about/our-story/our-root";

const OurStoryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <StoryHero />

      <TheRealization />

      <WhatWeObserved />

      <ExistingPlatformsGap />

      <OurDream />

      <OurRoot />

      <OurStoryCTA />
    </div>
  )
}

export default OurStoryPage