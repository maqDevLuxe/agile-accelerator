import { AnimatedSection } from "./AnimatedSection";
import { Linkedin } from "lucide-react";

const instructors = [
  { name: "Sarah Chen", role: "VP Engineering, ex-Google", speciality: "Enterprise Agile Transformation", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face" },
  { name: "Marcus Johnson", role: "Principal SM, ex-Amazon", speciality: "Scaled Scrum & SAFe", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
  { name: "Priya Patel", role: "Agile Coach, ex-Microsoft", speciality: "Team Dynamics & Facilitation", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face" },
  { name: "David Kim", role: "CTO, ex-Spotify", speciality: "Product-Led Agile Delivery", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
];

export const Instructors = () => (
  <section id="instructors" className="section-padding bg-background">
    <div className="container-max">
      <AnimatedSection>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Faculty</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Bootcamp Instructors
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Learn from practitioners who've led agile transformations at the world's most innovative companies.
        </p>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {instructors.map(({ name, role, speciality, img }, i) => (
          <AnimatedSection key={name} delay={i * 0.1}>
            <div className="group card-kanban glow-border text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-border group-hover:border-accent transition-colors">
                <img src={img} alt={name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="font-display font-semibold text-foreground">{name}</h3>
              <p className="text-xs text-accent font-medium mt-1">{role}</p>
              <p className="text-xs text-muted-foreground mt-2">{speciality}</p>
              <div className="mt-3">
                <Linkedin size={16} className="mx-auto text-muted-foreground hover:text-accent transition-colors cursor-pointer" />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);
