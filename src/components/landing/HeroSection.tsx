import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, Zap } from "lucide-react";
import heroImg from "@/assets/hero-workspace.jpg";

const badges = [
  { icon: Award, label: "PSM Certified", delay: 0.6 },
  { icon: Shield, label: "CSM Accredited", delay: 0.8 },
  { icon: Zap, label: "98% Pass Rate", delay: 1.0 },
];

export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-navy-gradient overflow-hidden pt-16">
    <div className="absolute inset-0 opacity-20">
      <img src={heroImg} alt="Tech workspace with agile dashboards" className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />

    <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1.5 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-accent">Next Cohort: April 2026 — Limited Seats</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display text-primary-foreground leading-[1.1] mb-6"
        >
          Become an Elite
          <br />
          <span className="text-gradient-orange">Scrum Master</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg sm:text-xl text-primary-foreground/70 max-w-xl mb-8 font-body"
        >
          The industry's most rigorous PSM/CSM certification bootcamp. Built by Silicon Valley tech leaders. Trusted by Fortune 500 companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#enroll" className="btn-orange text-base flex items-center gap-2">
            Secure Your Seat <ArrowRight size={18} />
          </a>
          <a href="#methodology" className="btn-outline-navy border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            View Curriculum
          </a>
        </motion.div>
      </div>

      {/* Floating badges */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 space-y-4">
        {badges.map(({ icon: Icon, label, delay }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
            className="flex items-center gap-3 bg-card/10 backdrop-blur-md border border-primary-foreground/10 rounded-xl px-5 py-3 animate-float"
            style={{ animationDelay: `${delay}s` }}
          >
            <Icon size={20} className="text-accent" />
            <span className="text-sm font-semibold text-primary-foreground">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
