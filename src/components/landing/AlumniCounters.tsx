import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

const counters = [
  { end: 12500, label: "Graduates Placed", suffix: "+" },
  { end: 350, label: "Hiring Partners", suffix: "+" },
  { end: 98, label: "Certification Pass Rate", suffix: "%" },
  { end: 42, label: "Average Salary Increase", suffix: "%" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-accent">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

export const AlumniCounters = () => (
  <section className="section-padding bg-navy-gradient">
    <div className="container-max">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {counters.map(({ end, label, suffix }, i) => (
          <AnimatedSection key={label} delay={i * 0.1} className="text-center">
            <Counter end={end} suffix={suffix} />
            <p className="mt-2 text-sm text-primary-foreground/60 font-medium">{label}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);
