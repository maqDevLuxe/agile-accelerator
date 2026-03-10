import { AnimatedSection } from "./AnimatedSection";
import officeImg from "@/assets/modern-office.jpg";

export const OfficeImage = () => (
  <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
    <AnimatedSection className="h-full">
      <img src={officeImg} alt="Modern collaborative tech office space" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
      <div className="absolute bottom-8 left-8 md:left-16">
        <p className="text-primary-foreground font-display font-bold text-2xl md:text-3xl">Where Agile Leaders Are Made</p>
        <p className="text-primary-foreground/70 text-sm mt-1">San Francisco • New York • London • Remote</p>
      </div>
    </AnimatedSection>
  </section>
);
