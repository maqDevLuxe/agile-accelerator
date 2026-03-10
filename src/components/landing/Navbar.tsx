import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Programs", "Methodology", "Instructors", "Blog", "Contact"];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-display font-bold text-sm">SM</span>
          </div>
          <span className="font-display font-bold text-lg text-foreground">SprintMaster</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link}
            </a>
          ))}
          <a href="#enroll" className="btn-orange text-sm py-2 px-5">Enroll Now</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-muted-foreground py-2" onClick={() => setOpen(false)}>
                {link}
              </a>
            ))}
            <a href="#enroll" className="btn-orange text-sm py-2 px-5 text-center">Enroll Now</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
