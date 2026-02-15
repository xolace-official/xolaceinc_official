import { X, DollarSign, Heart } from "lucide-react";

const TheGapSection = () => {
  const problems = [
    {
      icon: X,
      title: "Social media",
      description: "Loud. Public. Performative. Not safe for real struggles.",
      variant: "problem" as const,
    },
    {
      icon: DollarSign,
      title: "Traditional therapy",
      description: "Helpful. But expensive, hard to access, and intimidating.",
      variant: "problem" as const,
    },
  ];

  const solution = {
    icon: Heart,
    title: "You need something in between.",
    description: "Real support. Safe space. No judgment. Free to access.",
  };

  return (
    <section id="the-gap" className="section bg-card">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">There's a gap.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Between struggling alone and paying for therapy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-destructive/5 border-2 border-destructive/20"
              >
                <Icon className="w-12 h-12 mb-4 text-destructive" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center p-8 rounded-2xl bg-primary/5 border-2 border-primary/20">
          <solution.icon className="w-16 h-16 mb-4 text-primary mx-auto" strokeWidth={2} />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            {solution.title}
          </h3>
          <p className="text-lg text-muted-foreground">
            {solution.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheGapSection;