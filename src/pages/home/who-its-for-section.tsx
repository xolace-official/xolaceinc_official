import { GraduationCap, Heart, Compass, User, Users } from "lucide-react";

const WhoItsForSection = () => {
  const audiences = [
    {
      icon: GraduationCap,
      label: "Students",
      insight: "When the pressure feels too heavy to carry alone",
      iconColor: "text-primary",
      bgGradient: "from-primary/5 to-transparent",
    },
    {
      icon: Heart,
      label: "Young adults",
      insight: "When you're building a life and questioning everything",
      iconColor: "text-chart-2",
      bgGradient: "from-chart-2/5 to-transparent",
    },
    {
      icon: Users,
      label: "Those navigating loss",
      insight: "When grief needs a witness, not a solution",
      iconColor: "text-accent",
      bgGradient: "from-accent/5 to-transparent",
    },
    {
      icon: Compass,
      label: "Seekers",
      insight: "When the old path no longer fits who you're becoming",
      iconColor: "text-destructive",
      bgGradient: "from-destructive/5 to-transparent",
    },
    {
      icon: User,
      label: "You",
      insight: "Exactly as you are, right now, in this moment",
      iconColor: "text-primary",
      bgGradient: "from-primary/10 to-primary/5",
      featured: true,
    },
  ];

  return (
    <section
      id="who-its-for"
      className="section bg-linear-to-b from-background via-muted/10 to-background relative"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              A space for everyone
            </p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              If you've ever felt{" "}
              <span className="text-primary">unseen</span>,<br />
              this is your space.
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-center text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
            Xolace exists for the moments when everything feels too much -
            and for the quiet courage it takes to reach out.
          </p>
        </div>

        {/* Audience Grid - Asymmetric Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            const isLeftAligned = index % 2 === 0;

            return (
              <div
                key={index}
                className={`group relative ${
                  audience.featured ? "md:col-span-2 " : ""
                }`}
              >
                <div
                  className={`relative h-full p-8 rounded-2xl bg-linear-to-br ${audience.bgGradient} border border-border/50 hover:border-primary/20 transition-all duration-500 ${
                    audience.featured
                      ? "md:p-12 lg:p-16 text-center"
                      : "hover:shadow-lg"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`mb-6 ${
                      audience.featured ? "flex justify-center" : ""
                    }`}
                  >
                    <div className="relative inline-flex">
                      <div
                        className={`w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ${
                          audience.featured ? "w-20 h-20" : ""
                        }`}
                      >
                        <Icon
                          className={`w-7 h-7 ${audience.iconColor} ${
                            audience.featured ? "w-10 h-10" : ""
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>
                      {/* Subtle glow effect */}
                      <div
                        className={`absolute inset-0 rounded-xl ${audience.iconColor} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`space-y-3 ${
                      audience.featured ? "max-w-3xl mx-auto" : ""
                    }`}
                  >
                    <h3
                      className={`font-bold ${
                        audience.featured
                          ? "text-3xl md:text-4xl"
                          : "text-2xl"
                      }`}
                    >
                      {audience.label}
                    </h3>
                    <p
                      className={`text-muted-foreground leading-relaxed ${
                        audience.featured
                          ? "text-xl md:text-2xl font-light"
                          : "text-base"
                      }`}
                    >
                      {audience.insight}
                    </p>
                  </div>

                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${audience.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;