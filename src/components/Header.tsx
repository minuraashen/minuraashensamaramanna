import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Home, User, Zap, FolderOpen, PenTool, Mail, ChevronUp } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: "home",       label: "Home",     icon: Home,       href: "#home" },
  { id: "about",      label: "About",    icon: User,       href: "#about" },
  { id: "skills",     label: "Skills",   icon: Zap,        href: "#skills" },
  { id: "projects",   label: "Projects", icon: FolderOpen, href: "#projects" },
  { id: "writing",    label: "Writing",  icon: PenTool,    href: "#technical-writing" },
  { id: "contact",    label: "Contact",  icon: Mail,       href: "#contact" },
];

const Header = () => {
  const [activeSection, setActiveSection]   = useState("home");
  const [dockVisible,   setDockVisible]     = useState(true);
  const [hoveredItem,   setHoveredItem]     = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop]   = useState(false);
  const lastScrollY = useRef(0);

  /* ── Scroll tracking: hide dock on fast downscroll, show on upscroll ── */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const delta   = current - lastScrollY.current;

      setDockVisible(delta < 5 || current < 80);
      setShowScrollTop(current > 400);
      lastScrollY.current = current;

      // Determine active section
      const sectionIds = navItems.map(n => n.href.replace("#", ""));
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id) ?? document.querySelector(`[id="${id}"]`);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id) ?? document.querySelector(`[id="${id}"]`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          FLOATING BOTTOM DOCK
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {dockVisible && (
          <motion.nav
            key="dock"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0,   opacity: 1 }}
            exit={{    y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Dock pill */}
            <div className="glass-dock rounded-2xl px-3 py-2.5 flex items-center gap-1 relative">
              {/* Subtle inner shine */}
              <div
                className="absolute inset-x-0 top-0 h-px rounded-full opacity-40"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.6), transparent)" }}
              />

              {/* Nav Items */}
              {navItems.map((item) => {
                const Icon      = item.icon;
                const isActive  = activeSection === item.id;
                const isHovered = hoveredItem === item.id;

                return (
                  <div key={item.id} className="relative group" style={{ perspective: "600px" }}>
                    {/* Tooltip */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.85 }}
                          animate={{ opacity: 1, y: 0, scale: 1   }}
                          exit={{    opacity: 0, y: 6, scale: 0.85 }}
                          transition={{ duration: 0.15 }}
                          className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none z-50"
                        >
                          <div className="glass-dock px-2.5 py-1 rounded-lg text-xs font-medium text-foreground whitespace-nowrap">
                            {item.label}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.button
                      onClick={() => scrollTo(item.href)}
                      onHoverStart={() => setHoveredItem(item.id)}
                      onHoverEnd={()  => setHoveredItem(null)}
                      whileHover={{ y: -4, scale: 1.15, rotateX: -8 }}
                      whileTap={{   y: 0,  scale: 0.92 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className={`
                        relative w-10 h-10 flex items-center justify-center rounded-xl
                        transition-colors duration-200
                        ${isActive
                          ? "bg-primary text-primary-foreground shadow-glow"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                        }
                      `}
                      aria-label={item.label}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="dock-active-bg"
                          className="absolute inset-0 rounded-xl bg-primary"
                          style={{ zIndex: -1 }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <Icon className="h-4.5 w-4.5" style={{ width: "18px", height: "18px" }} />

                      {/* Active dot */}
                      {isActive && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-foreground/80" />
                      )}
                    </motion.button>
                  </div>
                );
              })}

              {/* Divider */}
              <div className="w-px h-6 bg-border/60 mx-1" />

              {/* Theme Toggle in dock */}
              <div className="flex items-center">
                <ThemeToggle compact />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────────────────
          SCROLL-TO-TOP FAB
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1,   y: 0  }}
            exit={{    opacity: 0, scale: 0.6, y: 20  }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 w-10 h-10 rounded-xl glass-dock flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 shadow-glow"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;