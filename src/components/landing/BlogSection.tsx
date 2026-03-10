import { AnimatedSection, KanbanCard } from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { title: "Why the Best Scrum Masters Think Like Product Managers", category: "Leadership", date: "Mar 5, 2026", read: "6 min" },
  { title: "Scaling Scrum: Lessons from a 200-Person Engineering Org", category: "Enterprise", date: "Feb 28, 2026", read: "8 min" },
  { title: "The Death of Waterfall: A Data-Driven Argument for Agile", category: "Research", date: "Feb 20, 2026", read: "5 min" },
];

export const BlogSection = () => (
  <section id="blog" className="section-padding bg-background">
    <div className="container-max">
      <AnimatedSection>
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Insights</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Agile Leadership Blog</h2>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
            View All <ArrowUpRight size={14} />
          </a>
        </div>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-5">
        {posts.map(({ title, category, date, read }, i) => (
          <KanbanCard key={title} delay={i * 0.1} className="cursor-pointer group">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">{category}</span>
            <h3 className="text-lg font-display font-semibold text-foreground mt-3 mb-3 group-hover:text-accent transition-colors leading-snug">
              {title}
            </h3>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{date}</span>
              <span>•</span>
              <span>{read} read</span>
            </div>
          </KanbanCard>
        ))}
      </div>
    </div>
  </section>
);
