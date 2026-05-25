import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate, useScroll } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import TechnicalWriting from "@/components/TechnicalWriting";
import ExtraCurricular from "@/components/ExtraCurricular";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/20">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent to-secondary origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Ambient Mouse Spotlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: useMotionTemplate`radial-gradient(650px circle at ${smoothX}px ${smoothY}px, hsl(var(--primary) / 0.06), transparent 80%)`
        }}
      />

      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <TechnicalWriting />
      <ExtraCurricular />
      {/* TravelLog section temporarily disabled for future improvement */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
