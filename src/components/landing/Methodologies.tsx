import { AnimatedSection, KanbanCard } from "./AnimatedSection";
import { GitBranch, IterationCcw, Users, Target, BarChart3, Layers } from "lucide-react";

const methods = [
  { icon: GitBranch, title: "Scrum Framework", desc: "Master sprint planning, daily standups, reviews, and retrospectives." },
  { icon: IterationCcw, title: "Kanban Systems", desc: "Visualize workflow, limit WIP, and optimize continuous delivery." },
  { icon: Users, title: "Servant Leadership", desc: "Lead teams through facilitation, coaching, and obstacle removal." },
  { icon: Target, title: "Product Backlog Mastery", desc: "Prioritize value delivery with advanced refinement techniques." },
  { icon: BarChart3, title: "Agile Metrics & KPIs", desc: "Velocity charts, burndowns, and data-driven sprint improvements." },
  { icon: Layers, title: "Scaling Frameworks", desc: "SAFe, LeSS, and Nexus for enterprise-level agile transformations." },
];

export const Methodologies = () => (
  <section id="methodology" className="section-padding bg-background">
    <div className="container-max">
      <AnimatedSection>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Curriculum</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Scrum Master Methodologies
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          A comprehensive, battle-tested curriculum designed by practitioners who've shipped at scale.
        </p>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {methods.map(({ icon: Icon, title, desc }, i) => (
          <KanbanCard key={title} delay={i * 0.08}>
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Icon size={20} className="text-accent" />
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </KanbanCard>
        ))}
      </div>
    </div>
  </section>
);
