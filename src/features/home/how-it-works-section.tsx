import { UserPlus, MessageSquare, HeartHandshake, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: UserPlus,
      title: "Sign up for free",
      description: "No credit card. No commitment. Just your email.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      step: 2,
      icon: MessageSquare,
      title: "Share or listen",
      description: "Post what's on your mind. Or explore what others are going through.",
      color: "accent",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      step: 3,
      icon: HeartHandshake,
      title: "Feel supported",
      description: "Connect with people who get it. And professionals who guide it.",
      color: "destructive",
      gradient: "from-destructive/20 to-destructive/5",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { text: string; bg: string; ring: string }> = {
      primary: {
        text: "text-primary",
        bg: "bg-primary",
        ring: "ring-primary/20",
      },
      accent: {
        text: "text-accent",
        bg: "bg-accent",
        ring: "ring-accent/20",
      },
      destructive: {
        text: "text-destructive",
        bg: "bg-destructive",
        ring: "ring-destructive/20",
      },
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section id="how-it-works" className="section bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(var(--primary-rgb)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(var(--accent-rgb)/0.05),transparent_50%)]" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Getting started is simple.
          </h2>
          <p className="text-xl text-muted-foreground">
            Three steps to find your support system.
          </p>
        </div>

        {/* Steps */}
        <div className="relative space-y-8 md:space-y-12">
          <div className="hidden md:block absolute left-8 top-16 bottom-16 w-0.5 bg-linear-to-b from-primary via-accent to-chart-2 opacity-20" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            const colors = getColorClasses(item.color);
            const isLast = index === steps.length - 1;

            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="flex gap-6 md:gap-8 items-start">
                  {/* Icon Circle */}
                  <div className="relative shrink-0">
                    <div
                      className={`w-14 h-14 md:w-20 md:h-20 rounded-full ${colors.bg} text-primary-foreground flex items-center justify-center shadow-lg ring-8 ${colors.ring} transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                    </div>

                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold shadow-md">
                      {item.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 md:pt-4">
                    <div className={`p-4 md:p-8 rounded-2xl bg-linear-to-br ${item.gradient} border border-border group-hover:border-${item.color}/30 transition-all duration-300 group-hover:shadow-lg`}>
                      <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 flex items-center gap-2">
                        {item.title}
                        <ArrowRight className={`w-5 h-5 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector Arrow  hidden on last item */}
                {!isLast && (
                  <div className="flex justify-center my-4">
                    <div className={`w-1 h-4 md:h-8 bg-linear-to-b ${colors.bg} opacity-30`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center ">
          <p className="text-lg text-muted-foreground">
            Ready to start?{" "}
            <span className="text-primary font-semibold">
              It takes less than 30 seconds.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;