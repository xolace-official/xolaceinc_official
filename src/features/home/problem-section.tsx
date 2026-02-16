const ProblemSection = () => {
  const stats = [
    {
      value: "$200+",
      label: "Per therapy session",
      description: "Too expensive for most",
    },
    {
      value: "3-6",
      label: "Months wait time",
      description: "When you need help now",
    },
    {
      value: "70%",
      label: "Never get help",
      description: "Because of stigma & cost",
    },
  ];

  return (
    <section id="problem" className="section bg-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          Mental health care is broken.
        </h2>

        <div className="grid sm:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-5xl font-bold text-destructive">
                {stat.value}
              </div>
              <p className="text-lg text-foreground font-medium">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xl text-muted-foreground pt-4">
          But what if support didn't have to be this hard?
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;