'use client';

import { ArrowRight, Globe, Sparkles, Stethoscope, Users, Video } from "lucide-react";
import {CTAButton} from "@/layout/cta-button";

const OurVisionSection = () => {
  const timeline = [
    {
      phase: "Now",
      icon: Users,
      title: "Community",
      description: "Safe space to express and connect",
      details: "Anonymous sharing, Campfires, peer support",
      status: "Live",
      color: "primary",
      progress: 100,
    },
    {
      phase: "Next",
      icon: Video,
      title: "Guided support",
      description: "Live sessions with trained guides",
      details: "Facilitated groups, workshops, mental health education",
      status: "In Development",
      color: "destructive",
      progress: 60,
    },
    {
      phase: "Future",
      icon: Stethoscope,
      title: "Therapy access",
      description: "When you're ready for that step",
      details: "Licensed professionals, affordable sessions, integrated care",
      status: "Planned",
      color: "accent",
      progress: 20,
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { text: string; bg: string; border: string }> = {
      primary: { text: "text-primary", bg: "bg-primary", border: "border-primary" },
      "destructive": { text: "destructive", bg: "bg-destructive", border: "border-destructive" },
      accent: { text: "text-accent", bg: "bg-accent", border: "border-accent" },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section
      id="our-vision"
      className="section bg-linear-to-b from-background via-destructive/5 to-background relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[64px_64px]" />

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Born in Ghana, built for the world</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              We're building something
              <br />
              <span className="text-primary">bigger than a platform.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              A movement where mental health support isn't a privilege - it's woven into the fabric of community.
            </p>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-chart-2 to-accent opacity-20" />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const colors = getColorClasses(item.color);

              return (
                <div
                  key={item.phase}
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 200}ms both`,
                  }}
                >
                  {/* Card */}
                  <div className="relative h-full p-8 rounded-2xl bg-muted border-2 border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl">
                    {/* Status Badge */}
                    <div className="absolute -top-3 left-6">
                      <div className={`px-3 py-1 rounded-full ${colors.bg} text-foreground text-xs font-bold shadow-md`}>
                        {item.status}
                      </div>
                    </div>

                    {/* Icon Circle */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-2xl ${colors.bg}/10 border-2 ${colors.border}/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                          <Icon className={`w-8 h-8 ${colors.text}`} strokeWidth={2} />
                        </div>
                        {/* Connecting dot for timeline */}
                        <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${index === 0 ? '-right-32' : index === 2 ? '-left-32' : 'left-1/2 -translate-x-1/2'} w-3 h-3 rounded-full ${colors.bg} ring-4 ring-card`} />
                      </div>
                    </div>

                    {/* Phase Label */}
                    <div className="text-center mb-4">
                      <span className={`text-sm font-semibold uppercase tracking-wider ${colors.text}`}>
                        {item.phase}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-3 mb-6">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-sm text-muted-foreground/70 leading-relaxed pt-2">
                        {item.details}
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Progress</span>
                        <span className="font-semibold">{item.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${colors.bg} transition-all duration-1000 ease-out`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Arrow connector (hidden on last item) */}
                  {index < timeline.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-muted-foreground/30" strokeWidth={2} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="h-px w-32 bg-linear-to-r from-transparent via-primary to-transparent mx-auto" />

          <div className="text-center space-y-6">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed">
              Mental health support built into community.
            </p>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              That's not just a dream - it's our promise.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <CTAButton
              label="Our Full Vision"
              href="/about#impactAndVision"
              variant="default"
              icon={ArrowRight}
            />
            <CTAButton
              label="Read Our Story"
              href="/about#ourStory"
              variant="outline"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <blockquote className="relative p-8 md:p-12 rounded-2xl bg-linear-to-br from-primary/5 to-transparent border border-primary/10">
            <Sparkles className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
            <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed text-center">
              "We started Xolace because we saw too many people suffering in silence. In Ghana, across Africa, and around the world - the gap between struggle and support is too wide. We're here to close it."
            </p>
            <div className="mt-6 text-center">
              <p className="font-semibold text-foreground">- The Xolace Team</p>
              <p className="text-sm text-muted-foreground">KOFORIDUA, Ghana 🇬🇭</p>
            </div>
          </blockquote>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default OurVisionSection;