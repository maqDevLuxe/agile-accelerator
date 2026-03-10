import { AnimatedSection } from "./AnimatedSection";

const partners = ["Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix", "Spotify", "Salesforce"];

export const HiringPartners = () => (
  <section className="section-padding bg-card border-y border-border">
    <div className="container-max">
      <AnimatedSection>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
          Our Graduates Work At
        </p>
      </AnimatedSection>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
        {partners.map((name, i) => (
          <AnimatedSection key={name} delay={i * 0.05}>
            <div className="text-xl md:text-2xl font-display font-bold text-muted-foreground/40 hover:text-foreground transition-colors duration-300 cursor-default">
              {name}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);
