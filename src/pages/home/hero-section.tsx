
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="section flex items-center justify-center bg-linear-to-b relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb)/0.1),transparent_50%)]" />

      <div className="w-full max-w-5xl mx-auto text-center space-y-6 relative z-10 px-4">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
          You don't have to
          <br />
          <span className="text-primary">struggle alone.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
          Find your people. Share your story. Feel supported.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;