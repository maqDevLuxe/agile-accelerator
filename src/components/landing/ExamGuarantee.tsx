import { AnimatedSection } from "./AnimatedSection";
import { Shield, RefreshCcw, BookOpen } from "lucide-react";

export const ExamGuarantee = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-max">
      <AnimatedSection>
        <div className="bg-card rounded-2xl border border-border p-8 md:p-14 text-center max-w-3xl mx-auto" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Shield size={32} className="text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Exam Pass Guarantee
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            We're so confident in our program that we guarantee your certification. If you don't pass on your first attempt, we'll cover your retake — no questions asked.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center gap-3">
              <RefreshCcw size={18} className="text-accent" />
              <span className="text-sm font-medium text-foreground">Free Retake Voucher</span>
            </div>
            <div className="flex items-center gap-3">
              <BookOpen size={18} className="text-accent" />
              <span className="text-sm font-medium text-foreground">Extended Study Access</span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);
