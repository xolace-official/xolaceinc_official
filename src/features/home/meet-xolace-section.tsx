import { Heart, MessageCircle, Shield, Flame } from "lucide-react";

const MeetXolaceSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Express yourself",
      description: "Share your story. Anonymously or not. Temporarily or forever. Your choice.",
      iconColor: "text-primary",
      hoverBorder: "hover:border-primary/50",
    },
    {
      icon: Flame,
      title: "Join Campfires",
      description: "Small groups focused on what matters to you. Anxiety. Grief. Life changes.",
      iconColor: "text-primary",
      hoverBorder: "hover:border-primary/50",
    },
    {
      icon: Heart,
      title: "Get real support",
      description: "From people who understand. And professionals who care.",
      iconColor: "text-primary",
      hoverBorder: "hover:border-primary/50",
    },
    {
      icon: Shield,
      title: "Stay safe",
      description: "Moderation. Privacy. Community guidelines. We've got your back.",
      iconColor: "text-primary",
      hoverBorder: "hover:border-primary/50",
    },
  ];

  return (
    <section
      id="meet-xolace"
      className="section bg-linear-to-b from-background to-muted/20"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">Meet Xolace.</h2>
          <p className="text-2xl text-primary font-semibold">
            Your bridge to better mental health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-card border border-border ${feature.hoverBorder} hover:shadow-xl transition-all`}
              >
                <Icon className={`w-12 h-12 ${feature.iconColor} mb-4`} />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MeetXolaceSection;