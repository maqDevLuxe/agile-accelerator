import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const directionMap = {
  up: { y: 40, x: 0 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
};

export const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, ...directionMap[direction] }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const KanbanCard = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 60, rotateZ: 2 }}
    whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={`card-kanban glow-border ${className}`}
  >
    {children}
  </motion.div>
);
