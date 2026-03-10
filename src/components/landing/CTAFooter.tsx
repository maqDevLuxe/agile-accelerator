import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight } from "lucide-react";

export const CTAFooter = () => (
  <>
    <section id="enroll" className="section-padding bg-navy-gradient">
      <div className="container-max text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Limited Seats Available</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Secure Your Seat Today
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto mb-8">
            Join the next cohort of elite Scrum Masters. Early enrollment pricing ends soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-orange text-base flex items-center justify-center gap-2">
              Apply Now — $2,497 <ArrowRight size={18} />
            </a>
            <a href="#" className="btn-outline-navy border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Download Syllabus
            </a>
          </div>
          <p className="text-xs text-primary-foreground/40 mt-4">30-day money-back guarantee • Payment plans available</p>
        </AnimatedSection>
      </div>
    </section>

    <footer className="bg-navy-dark section-padding py-12">
      <div className="container-max">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xs">SM</span>
              </div>
              <span className="font-display font-bold text-primary-foreground">SprintMaster</span>
            </div>
            <p className="text-xs text-primary-foreground/40 leading-relaxed">
              The premier Scrum Master certification bootcamp for ambitious tech professionals.
            </p>
          </div>
          {[
            { title: "Programs", links: ["PSM Certification", "CSM Certification", "Advanced SM", "Enterprise Agile"] },
            { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
            { title: "Support", links: ["FAQ", "Contact", "Terms", "Privacy"] },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-primary-foreground mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-primary-foreground/40 hover:text-accent transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-primary-foreground/30">© 2026 SprintMaster Academy. All rights reserved.</p>
          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "YouTube"].map((s) => (
              <a key={s} href="#" className="text-xs text-primary-foreground/30 hover:text-accent transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  </>
);
