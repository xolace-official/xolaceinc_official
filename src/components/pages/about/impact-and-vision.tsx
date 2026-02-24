import ImpactHero from "@/features/about/impact-and-vision/impact-hero";
import ImpactNumbers from "@/features/about/impact-and-vision/impact-numbers";
import WhereWeAreNow from "@/features/about/impact-and-vision/where-we-are-now";
import RoadmapTimeline from "@/features/about/impact-and-vision/roadmap-timeline";
import GlobalVision from "@/features/about/impact-and-vision/global-vision";
import ImpactCTA from "@/features/about/impact-and-vision/impact-cta";
import ImpactShowcase from "@/features/about/impact-and-vision/impact-showcase";


const ImpactAndVisionPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ImpactHero />

      <ImpactNumbers />

      <WhereWeAreNow />

      <ImpactShowcase />

      <GlobalVision />

      <ImpactCTA />

    </div>
  );
};

export default ImpactAndVisionPage;