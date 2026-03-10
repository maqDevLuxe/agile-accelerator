import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const phases = [
  { week: "Week 1-2", title: "Foundation Sprint", desc: "Agile Manifesto, Scrum theory, roles & artifacts deep dive." },
  { week: "Week 3-4", title: "Execution Sprint", desc: "Sprint planning, daily scrums, backlog refinement labs." },
  { week: "Week 5-6", title: "Mastery Sprint", desc: "Scaling agile, advanced facilitation, stakeholder management." },
  { week: "Week 7-8", title: "Certification Sprint", desc: "Mock exams, exam strategies, final certification attempt." },
];

export const SprintTimeline = () => (
  <section className="section-padding bg-background">
    <div className="container-max">
      <AnimatedSection>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Timeline</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
          The Sprint Framework
        </h2>
      </AnimatedSection>
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-8 md:space-y-0">
          {phases.map(({ week, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`md:flex md:items-center md:gap-8 md:py-8 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">{week}</span>
                  <h3 className="text-xl font-display font-bold text-foreground mt-1">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-sm inline-block">{desc}</p>
                </div>
                <div className="hidden md:flex w-0 items-center justify-center relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    className="w-4 h-4 rounded-full bg-accent border-4 border-background absolute"
                  />
                </div>
                <div className="md:w-1/2" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);
