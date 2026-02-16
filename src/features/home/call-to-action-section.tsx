import {CTAButton} from "@/layout/cta-button";

const CallToActionSection = () => {
  return (
    <section
      id="cta"
      className="section bg-accent text-foreground"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold">
          Ready to feel supported?
        </h2>

        <p className="text-xl md:text-2xl opacity-90">
          Join thousands finding their people on Xolace.
        </p>

        <div className="pt-4">
          <CTAButton
            label="Join Free Today"
            href="#"
            variant="default"
            className={"w-full md:w-fit"}
          />
        </div>

        <p className="text-sm opacity-75 pt-4">
          No credit card required • Free forever • Join in 30 seconds
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;