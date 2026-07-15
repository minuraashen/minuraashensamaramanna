import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-10 px-4 border-t border-border/40 bg-muted/10 overflow-hidden">
      {/* Subtle gradient top-bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-primary opacity-40" />

      <div className="container mx-auto">
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground font-mono-terminal">
            Engineering practical solutions with creative and mathematical precision
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
            © 2024 Minura Ashen Samaramanna. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;