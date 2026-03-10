import { AnimatedSection, KanbanCard } from "./AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Alex Rivera", role: "Scrum Master at Google", text: "This bootcamp completely changed my career trajectory. Within 3 months of graduating, I landed my dream role.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
  { name: "Emily Zhang", role: "Agile Coach at Stripe", text: "The real-world simulations were game-changing. I walked into interviews with stories that impressed every hiring manager.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
  { name: "James Okafor", role: "Senior SM at Netflix", text: "The instructors don't just teach theory — they share battle scars. That authenticity made all the difference.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
];

export const Testimonials = () => (
  <section className="section-padding bg-background">
    <div className="container-max">
      <AnimatedSection>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
          Graduate Success Stories
        </h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map(({ name, role, text, img }, i) => (
          <KanbanCard key={name} delay={i * 0.1}>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-accent text-accent" />)}
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-6">"{text}"</p>
            <div className="flex items-center gap-3">
              <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
              <div>
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
              </div>
            </div>
          </KanbanCard>
        ))}
      </div>
    </div>
  </section>
);
