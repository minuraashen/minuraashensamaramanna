import { useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.jpg";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

/* ── Kinetic letter stagger ── */
const KineticText = ({
  text,
  className,
  delay = 0,
  highlightClass,
}: {
  text: string;
  className?: string;
  delay?: number;
  highlightClass?: string;
}) => {
  const letters = Array.from(text);
  return (
    <span className={className} aria-label={text}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: char === " " ? "inline" : "inline-block" }}
          initial={{ y: 60, opacity: 0, rotateX: -60 }}
          animate={{ y: 0,  opacity: 1, rotateX: 0   }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
            delay: delay + i * 0.035,
          }}
          className={highlightClass}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

/* ── 3D Tilt profile frame ── */
const TiltFrame = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const sRotateX = useSpring(rotateX, { stiffness: 200, damping: 22 });
  const sRotateY = useSpring(rotateY, { stiffness: 200, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width  / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    rotateY.set(dx * 14);
    rotateX.set(-dy * 14);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: sRotateX, rotateY: sRotateY, perspective: 1000 }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY   = useTransform(scrollYProgress, [0, 1], ["0%",  "-18%"]);
  const imageY  = useTransform(scrollYProgress, [0, 1], ["0%",  "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const itemVariants = {
    hidden:  { y: 30, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 14 },
    },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      style={{ paddingBottom: "5rem" }} /* room for dock */
    >
      {/* ── Animated Gradient Blobs ── */}
      <div className="blob-container" aria-hidden>
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* ── Dot-grid texture (dark mode) ── */}
      <div className="absolute inset-0 bg-starfield opacity-0 dark:opacity-100 pointer-events-none" aria-hidden />

      {/* ── Scroll-based parallax wrapper ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-center"
          variants={containerVariants}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
        >
          {/* ── Text Column ── */}
          <motion.div style={{ y: textY }} className="space-y-7 order-2 lg:order-1">
            {/* Greeting typewriter */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <motion.p
                className="text-base sm:text-lg text-primary font-mono-terminal font-medium tracking-widest uppercase mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0  }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="inline-block mr-2 text-primary animate-terminal-blink">▸</span>
                Hello, I'm
              </motion.p>

              {/* Name — kinetic letter-by-letter */}
              <h1 className="font-heading font-bold leading-tight text-foreground" style={{ perspective: "600px" }}>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                  <KineticText text="Minura Ashen" delay={0.25} />
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-1">
                  <KineticText
                    text="Samaramanna"
                    delay={0.55}
                    highlightClass="shimmer-text"
                  />
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left"
            >
              B.Sc.(Hons) Electronic and Telecommunication Engineering — University of Moratuwa
            </motion.p>

            {/* Areas of Interest card */}
            <motion.div variants={itemVariants} className="max-w-lg mx-auto lg:mx-0">
              <div
                className="glass-card rounded-2xl p-5 border border-border/30 hover:border-primary/30 transition-all duration-400 hover:shadow-glow"
                style={{ perspective: "800px" }}
              >
                <div className="text-xs font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-neon-pulse inline-block" />
                  Areas of Interest
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Computer Vision", "Machine Learning", "Software Development", "Embedded Systems"].map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1   }}
                      transition={{ delay: 0.9 + i * 0.08, type: "spring", stiffness: 200 }}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/15 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="text-sm sm:text-base px-7 py-3 rounded-full bg-gradient-primary text-primary-foreground hover:opacity-95 transition-all duration-300 shadow-lg shadow-primary/25 border-none hover:shadow-glow hover:scale-105"
                onClick={scrollToAbout}
                aria-label="Explore my work"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-sm sm:text-base px-7 py-3 rounded-full hover:bg-muted/60 transition-all duration-300 border border-border/60 hover:border-primary/40 hover:scale-105"
                asChild
              >
                <a href="/cv.pdf" download="Minura_Ashen_CV.pdf" aria-label="Download CV">
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-3 justify-center lg:justify-start">
              {[
                { href: "mailto:samaramannama.22@uom.lk", icon: Mail,     label: "Email"    },
                { href: "https://linkedin.com/in/minura-ashen",           icon: Linkedin, label: "LinkedIn", external: true },
                { href: "https://github.com/minuraashen",                 icon: Github,   label: "GitHub",   external: true },
              ].map(({ href, icon: Icon, label, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -4, scale: 1.12 }}
                  whileTap={{ scale: 0.92 }}
                  className="p-3 rounded-xl glass-card hover:border-primary/40 hover:text-primary hover:shadow-glow transition-all duration-300"
                  title={label}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Profile Picture Column ── */}
          <motion.div
            style={{ y: imageY }}
            className="flex justify-center order-1 lg:order-2"
          >
            <TiltFrame>
              <motion.div
                className="relative"
                initial={shouldReduceMotion ? {} : { scale: 0.8, opacity: 0, rotateY: -20 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.4 }}
              >
                {/* Outer neon ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-neon-pulse" />

                {/* Orbit ring decoration */}
                <motion.div
                  className="absolute -inset-3 rounded-full border border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/70 shadow-glow" />
                </motion.div>

                {/* Profile image frame */}
                <div
                  className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-2 border-border/30 shadow-3d"
                  style={{ boxShadow: "0 30px 80px -20px hsl(177 63% 48% / 0.3), 0 0 0 1px hsl(var(--border) / 0.2)" }}
                >
                  <img
                    src={profilePicture}
                    alt="Minura Ashen Samaramanna"
                    loading="eager"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />

                  {/* Glass overlay shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>

              </motion.div>

            </TiltFrame>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
