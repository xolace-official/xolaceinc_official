import {StoryHero} from "@/features/about/our-story/story-hero";
import {TheRealization} from "@/features/about/our-story/the-realization";
import {WhatWeObserved} from "@/features/about/our-story/what-we-observed";
import {ExistingPlatformsGap} from "@/features/about/our-story/exsiting-platforms-gap";
import {OurDream} from "@/features/about/our-story/our-dream";
import {OurStoryCTA} from "@/features/about/our-story/our-story-cta";
import {OurRoot} from "@/features/about/our-story/our-root";
import { SmoothScroll } from "@/layout/smooth-scroll";

const OurStoryPage = () => {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-background">
        <StoryHero />

        <TheRealization />

        <WhatWeObserved />

        <ExistingPlatformsGap />

        <OurRoot />

        <OurDream />

        <OurStoryCTA />
      </main>
    </SmoothScroll>
  )
}

export default OurStoryPage