import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  compact?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ compact = false }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setIsDark(stored === "dark");
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (compact) {
    return (
      <motion.button
        onClick={toggle}
        whileHover={{ y: -4, scale: 1.15, rotateX: -8 }}
        whileTap={{ y: 0, scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="w-10 h-10 flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors duration-200"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Light mode" : "Dark mode"}
        style={{ perspective: "600px" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0,   opacity: 1 }}
            exit={{    rotateY:  90, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ display: "flex" }}
          >
            {isDark
              ? <Sun  className="h-[18px] w-[18px]" />
              : <Moon className="h-[18px] w-[18px]" />
            }
          </motion.span>
        </AnimatePresence>
      </motion.button>
    );
  }

  // Full-size (not used anymore but kept for safety)
  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border/50 bg-muted/40 hover:bg-muted transition-all duration-200 text-foreground text-sm font-medium"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0,   opacity: 1 }}
          exit={{    rotateY:  90, opacity: 0 }}
          transition={{ duration: 0.22 }}
          style={{ display: "flex" }}
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </motion.button>
  );
};

export default ThemeToggle;
