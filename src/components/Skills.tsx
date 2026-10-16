import React, { useRef } from "react";
import { Code, Cog, Brain, Globe, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ── Reusable 3D Tilt Card ── */
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref     = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale   = useMotionValue(1);
  const mouseX  = useMotionValue(0.5);
  const mouseY  = useMotionValue(0.5);

  const sRX    = useSpring(rotateX, { stiffness: 220, damping: 24 });
  const sRY    = useSpring(rotateY, { stiffness: 220, damping: 24 });
  const sScale = useSpring(scale,   { stiffness: 220, damping: 24 });

  // Spotlight follows mouse
  const spotX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const spotY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
    const dy = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
    rotateY.set(dx * 11);
    rotateX.set(-dy * 11);
    scale.set(1.02);
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top)  / rect.height);
  };

  const handleLeave = () => {
    rotateX.set(0); rotateY.set(0); scale.set(1);
    mouseX.set(0.5); mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: sRX, rotateY: sRY, scale: sScale, perspective: 1000 }}
      className={`relative group ${className}`}
    >
      {/* Mouse-following spotlight */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(280px circle at ${spotX} ${spotY}, hsl(var(--primary) / 0.10) 0%, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript/TypeScript", "C/C++", "MATLAB", "Assembly (STM32)"],
      color: "from-primary to-accent"
    },
    {
      icon: <Cog className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Software & Tools",
      skills: ["Altium Designer", "LTSpice", "SolidWorks", "CubeIDE", "Proteus", "Arduino", "Node-RED"],
      color: "from-primary to-accent"
    },
    {
      icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Interested Areas",
      skills: ["Machine Learning", "Computer Vision", "Artificial Intelligence", "Software Development", "Digital Signal Processing"],
      color: "from-primary to-accent"
    },
    {
      icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Languages",
      skills: ["English (Professional)", "Sinhala (Native)"],
      color: "from-primary to-accent"
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Fast Learning",
    "Analytical Thinking",
    "Teamwork",
    "Time Management",
    "Technical Documentation",
    "Project Management",
    "Creative Design"
  ];

  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.10 } }
  };

  const itemVariants = {
    hidden:  { y: 30, opacity: 0, rotateX: 20 },
    visible: {
      y: 0, opacity: 1, rotateX: 0,
      transition: { type: "spring", stiffness: 80, damping: 14 }
    }
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-6 lg:px-8 bg-background relative overflow-hidden">

      {/* Subtle bg blob */}
      <div className="absolute top-0 right-0 w-80 h-80 blob blob-2 opacity-20 pointer-events-none" aria-hidden />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-primary font-mono-terminal mb-3">
              What I work with
            </p>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
              Skills &amp; <span className="shimmer-text">Expertise</span>
            </h2>
          </motion.div>
        </div>

        {/* Skill category cards — 3D tilt */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ perspective: "1200px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TiltCard>
                <Card className="h-full glass-card border border-border/30 p-6 flex flex-col gap-4 rounded-3xl">
                  <CardHeader className="p-0">
                    <CardTitle className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-md shadow-primary/20 flex-shrink-0`}>
                        {category.icon}
                      </div>
                      <span className="font-heading text-lg font-medium text-foreground">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, si) => (
                        <motion.div
                          key={si}
                          initial={{ opacity: 0, scale: 0.7 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * si, type: "spring", stiffness: 200 }}
                        >
                          <Badge
                            variant="outline"
                            className="bg-primary/5 hover:bg-primary/15 text-foreground border-primary/10 hover:border-primary/25 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Card className="glass-card border border-border/30 p-6 sm:p-8 rounded-3xl">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-center font-heading text-xl font-semibold">Professional Attributes</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-wrap justify-center gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                  >
                    <Badge className="bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-border/40 hover:border-primary/20 transition-all duration-200 cursor-default">
                      <CheckCircle className="w-3 h-3 mr-2 text-primary inline" />
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Areas of Deep Focus */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-10 text-foreground">Areas of Deep Focus</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto" style={{ perspective: "1200px" }}>
              {[
                {
                  icon: <Brain className="h-7 w-7" />,
                  title: "AI & Machine Learning",
                  desc: "Analyzing complex datasets, modeling neural networks, and deploying models using the PyTorch and Scikit-learn ecosystems."
                },
                {
                  icon: <Cog className="h-7 w-7" />,
                  title: "Computer Vision",
                  desc: "Image filters, real-time object tracking, feature extraction, and camera telemetry processing."
                },
                {
                  icon: <Code className="h-7 w-7" />,
                  title: "Software Systems",
                  desc: "Building robust APIs, low-code integration templates, full-stack MERN projects, and optimized DSP filters."
                }
              ].map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, rotateX: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, type: "spring", stiffness: 80, damping: 14 }}
                >
                  <TiltCard>
                    <Card className="glass-card border border-border/30 p-6 flex flex-col items-center rounded-3xl hover:border-primary/30 hover:shadow-glow transition-all duration-300">
                      <CardHeader className="flex flex-col items-center p-0">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 animate-neon-pulse">
                          {area.icon}
                        </div>
                        <CardTitle className="text-lg font-heading font-semibold mb-2">{area.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 text-center mt-2">
                        <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;