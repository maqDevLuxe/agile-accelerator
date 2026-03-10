import { KanbanCard } from "./AnimatedSection";
import { AnimatedSection } from "./AnimatedSection";
import { Rocket, ShoppingCart, HeartPulse, Building2 } from "lucide-react";

const projects = [
  { icon: Rocket, title: "SaaS Product Launch", desc: "Lead a cross-functional team through a full product release cycle using Scrum.", tag: "Tech" },
  { icon: ShoppingCart, title: "E-Commerce Migration", desc: "Manage backlog for migrating a monolith to microservices architecture.", tag: "Retail" },
  { icon: HeartPulse, title: "HealthTech Sprint", desc: "Navigate regulatory constraints while delivering patient-facing features.", tag: "Healthcare" },
  { icon: Building2, title: "Enterprise Transformation", desc: "Scale agile across 12 teams using SAFe in a Fortune 500 environment.", tag: "Enterprise" },
];

export const ProjectSimulations = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-max">
      <AnimatedSection>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Hands-On</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Real-World Project Simulations
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          No theoretical fluff. Practice with scenarios ripped from actual enterprise environments.
        </p>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map(({ icon: Icon, title, desc, tag }, i) => (
          <KanbanCard key={title} delay={i * 0.1}>
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon size={20} className="text-accent" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">{tag}</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </KanbanCard>
        ))}
      </div>
    </div>
  </section>
);
