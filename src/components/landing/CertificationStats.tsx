import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const stats = [
  { value: 98, label: "First-Attempt Pass Rate", color: "hsl(24, 95%, 53%)" },
  { value: 94, label: "Career Advancement", color: "hsl(222, 60%, 18%)" },
  { value: 87, label: "Salary Increase Reported", color: "hsl(24, 90%, 62%)" },
];

const PieChart = ({ value, color, delay }: { value: number; color: string; delay: number }) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-36 h-36">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
        <circle cx="64" cy="64" r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="10" />
        <motion.circle
          cx="64" cy="64" r={radius} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-display font-bold text-foreground">{value}%</span>
      </div>
    </div>
  );
};

export const CertificationStats = () => (
  <section className="section-padding bg-navy-gradient">
    <div className="container-max">
      <AnimatedSection>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Results</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-12">
          Certification Success Rate
        </h2>
      </AnimatedSection>
      <div className="grid sm:grid-cols-3 gap-10">
        {stats.map(({ value, label, color }, i) => (
          <AnimatedSection key={label} delay={i * 0.15} className="flex flex-col items-center text-center">
            <PieChart value={value} color={color} delay={0.3 + i * 0.2} />
            <p className="mt-4 text-sm font-medium text-primary-foreground/70">{label}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);
