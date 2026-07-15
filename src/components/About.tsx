import React, { useState, useRef, useEffect } from "react";
import { GraduationCap, Award, Users, Target, BookOpen, Calendar } from "lucide-react";
import wso2Logo from "@/assets/wso2logo.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";

/* ── 3D Tilt Card Wrapper ── */
const TiltCard = ({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale   = useMotionValue(1);
  const sRX = useSpring(rotateX, { stiffness: 220, damping: 24 });
  const sRY = useSpring(rotateY, { stiffness: 220, damping: 24 });
  const sScale = useSpring(scale, { stiffness: 220, damping: 24 });

  const glareX = useTransform(sRY, [-15, 15], ["0%", "100%"]);
  const glareY = useTransform(sRX, [-15, 15], ["0%", "100%"]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
    const dy = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
    rotateY.set(dx * 12);
    rotateX.set(-dy * 12);
    scale.set(1.025);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: sRX, rotateY: sRY, scale: sScale, perspective: 1000, ...style }}
      className={`relative ${className}`}
    >
      {/* Glare overlay */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, hsl(var(--primary) / 0.08) 0%, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

/* ── Animated Count-up number ── */
const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const duration = 1400;
          const steps    = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current = Math.min(current + increment, target);
            setValue(parseFloat(current.toFixed(2)));
            if (current >= target) clearInterval(interval);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{value}{suffix}</span>;
};

const About = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  const timelineExperience = [
    {
      company: "WSO2 LLC",
      role: "Software Engineer Intern (Integration AI Team)",
      period: "Nov 2025 - May 2026",
      logo: true,
      details: [
        {
          title: "Semantic Search Tool for WSO2 Micro Integrator Copilot",
          desc: "Developed a semantic code search tool for WSO2 MI Copilot, enabling intent-aware search and multi-workspace support for integration configurations with minimal token usage. Leveraged transformer models, vector search to deliver relevant results for developer productivity."
        },
        {
          title: "Export Salesforce Leads to Google Sheets Prebuilt Integration",
          desc: "Created a prebuilt integration to automate exporting Salesforce leads to Google Sheets using Ballerina Integrator for business users."
        }
      ]
    },
    {
      company: "University of Moratuwa — ENTC Department",
      role: "Department Representative (Semesters 7 & 8)",
      period: "Jun 2026 - Present",
      logo: false,
      details: [
        {
          title: "Student Leadership & Departmental Representation",
          desc: "Appointed as the official Department Representative for the Electronic and Telecommunication Engineering department for the 7th and 8th semesters. Responsible for liaising between students and academic staff, coordinating departmental activities, and advocating for student welfare and academic interests at the faculty level."
        }
      ]
    }
  ];

  const timelineEducation = [
    {
      institution: "University of Moratuwa",
      degree: "B.Sc.(Hons) Electronic and Telecommunication Engineering",
      period: "Feb 2023 - Present",
      grade: "CGPA: 3.93/4.0",
      achievements: [
        "Dean's List for Semesters 1, 2, 4, and 5",
        "Focused on computer vision, machine learning, and Software Development"
      ]
    },
    {
      institution: "Balangoda Ananda Maithreya National School",
      degree: "G.C.E. Advanced Level (Physical Science)",
      period: "2019 - 2022",
      grade: "Z-Score: 2.7031 | 4 A's",
      achievements: [
        "District Rank: 1 | Island Rank: 28",
        "A's in Combined Mathematics, Physics, Chemistry, and General English"
      ]
    }
  ];

  const bentoVariants = {
    hidden:  { opacity: 0, y: 30, rotateX: 15 },
    visible: (i: number) => ({
      opacity: 1, y: 0, rotateX: 0,
      transition: { type: "spring", stiffness: 80, damping: 15, delay: i * 0.10 }
    })
  };

  return (
    <section id="about" className="py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden bg-background">

      {/* Subtle background blobs (reduced) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 blob-3 opacity-30 pointer-events-none -z-0" aria-hidden />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-primary font-mono-terminal mb-3">
              Who I am
            </p>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground" style={{ perspective: "600px" }}>
              About <span className="shimmer-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I am an Electronic and Telecommunication Engineering undergraduate passionate about mathematics and emerging technologies, with a mission to acquire knowledge, approach problems creatively, and develop solutions that are both practical and efficient, grounded in rigorous mathematical reasoning and analysis.
            </p>
          </motion.div>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20" style={{ perspective: "1200px" }}>

          {/* Card 1: My Journey — spans 2 cols */}
          <motion.div
            className="md:col-span-2 lg:col-span-2"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bentoVariants}
          >
            <TiltCard>
              <Card className="h-full glass-card border border-border/30 p-6 flex flex-col gap-4 rounded-3xl overflow-hidden relative">
                {/* Animated left-border pulse */}
                <div className="absolute left-0 top-8 bottom-8 w-0.5 rounded-full bg-gradient-primary animate-neon-pulse" />

                <CardTitle className="text-xl font-heading font-semibold flex items-center gap-3 pl-3">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  My Journey
                </CardTitle>
                <div className="text-muted-foreground space-y-3 leading-relaxed text-sm sm:text-base pl-3">
                  <p>
                    I'm currently pursuing my B.Sc.(Hons) in Electronic and Telecommunication Engineering at the University of Moratuwa.
                    I have maintained strong academic performance with a CGPA of 3.93/4.0 and was named on the Dean's List for Semesters 1, 2, 4 and 5.
                  </p>
                  <p>
                    My passion lies in bridging theoretical knowledge with practical applications,
                    particularly in machine learning, computer vision, software development and embedded systems.
                    I focus on engineering solutions that are technically sound, creatively designed, and mathematically precise.
                  </p>
                  <p>
                    Beyond academics, I enjoy tutoring and writing technical articles to encourage the next generation of engineers. I also enjoy traveling and exploring Sri Lanka.
                  </p>
                </div>
              </Card>
            </TiltCard>
          </motion.div>

          {/* Card 2: CGPA */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bentoVariants}
          >
            <TiltCard className="h-full">
              <Card className="h-full glass-card border border-border/30 p-6 flex flex-col justify-between rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent pointer-events-none" />
                <CardHeader className="p-0">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-heading">Academic Excellence</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent font-heading mb-2">
                    <CountUp target={3.93} suffix="/4.00" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Current CGPA</div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Named on the Dean's List for Semesters 1, 2, 4, and 5.
                  </p>
                </CardContent>
              </Card>
            </TiltCard>
          </motion.div>

          {/* Card 3: A/L Rank */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bentoVariants}
          >
            <TiltCard className="h-full">
              <Card className="h-full glass-card border border-border/30 p-6 flex flex-col justify-between rounded-3xl">
                <CardHeader className="p-0">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-heading">Advanced Level Rank</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <div className="text-5xl font-bold text-foreground font-heading mb-1">Rank 01</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Ratnapura District</div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Achieved 4 A's in Physical Science. Placed Island Rank 28 with a Z-Score of 2.7031.
                  </p>
                </CardContent>
              </Card>
            </TiltCard>
          </motion.div>

          {/* Card 4: Teaching */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bentoVariants}
          >
            <TiltCard className="h-full">
              <Card className="h-full glass-card border border-border/30 p-6 flex flex-col justify-between rounded-3xl">
                <CardHeader className="p-0">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-heading">Teaching</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4 flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Actively tutoring Advanced Level Physics, Chemistry, and Combined Mathematics.
                  </p>
                </CardContent>
              </Card>
            </TiltCard>
          </motion.div>

          {/* Card 5: Problem Solver */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bentoVariants}
          >
            <TiltCard className="h-full">
              <Card className="h-full glass-card border border-border/30 p-6 flex flex-col justify-between rounded-3xl">
                <CardHeader className="p-0">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-heading">Problem Solver</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4 flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                    Focused on practical, efficient solutions grounded in math
                  </p>
                </CardContent>
              </Card>
            </TiltCard>
          </motion.div>
        </div>

        {/* ── Experience & Education Timeline ── */}
        <div className="mt-4 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-heading font-semibold mb-6">Experience &amp; Education</h3>

            <div className="inline-flex p-1.5 rounded-full bg-muted border border-border/40 relative z-10">
              <button
                onClick={() => setActiveTab("experience")}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 z-10 ${
                  activeTab === "experience" ? "text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {activeTab === "experience" && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Professional Experience
              </button>

              <button
                onClick={() => setActiveTab("education")}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 z-10 ${
                  activeTab === "education" ? "text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {activeTab === "education" && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Academic Path
              </button>
            </div>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/15 space-y-12 ml-4">
            <AnimatePresence mode="wait">
              {activeTab === "experience" ? (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0  }}
                  exit={{    opacity: 0, x:  20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-12"
                >
                  {timelineExperience.map((item, index) => (
                    <div key={index} className="relative group">
                      <span className="absolute -left-[39px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-primary/20 overflow-hidden">
                        {item.logo
                          ? <img src={wso2Logo} alt="WSO2" className="w-full h-full object-cover block" />
                          : <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        }
                      </span>
                      <Card className="glass-card border border-border/30 p-6 rounded-3xl hover:border-primary/25 hover:shadow-3d transition-all duration-400">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-foreground font-heading">{item.role}</h4>
                            <p className="text-primary text-sm font-medium mt-1">{item.company}</p>
                          </div>
                          <Badge variant="outline" className="w-fit text-xs bg-primary/5 text-primary flex items-center gap-1.5 px-3 py-1 border-primary/10 rounded-full font-medium">
                            <Calendar className="h-3 w-3" />
                            {item.period}
                          </Badge>
                        </div>
                        <div className="space-y-4">
                          {item.details.map((detail, idx) => (
                            <div key={idx} className="border-t border-border/30 pt-4 first:border-none first:pt-0">
                              <h5 className="font-semibold text-sm sm:text-base text-foreground mb-1 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                {detail.title}
                              </h5>
                              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed pl-3.5">{detail.desc}</p>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0  }}
                  exit={{    opacity: 0, x:  20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-12"
                >
                  {timelineEducation.map((item, index) => (
                    <div key={index} className="relative group">
                      <span className="absolute -left-[39px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-primary/20">
                        <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </span>
                      <Card className="glass-card border border-border/30 p-6 rounded-3xl hover:border-primary/25 hover:shadow-3d transition-all duration-400">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-foreground font-heading">{item.degree}</h4>
                            <p className="text-primary text-sm font-medium mt-1">{item.institution}</p>
                          </div>
                          <Badge variant="outline" className="w-fit text-xs bg-primary/5 text-primary flex items-center gap-1.5 px-3 py-1 border-primary/10 rounded-full font-medium">
                            <Calendar className="h-3 w-3" />
                            {item.period}
                          </Badge>
                        </div>
                        <div className="border-t border-border/30 pt-4">
                          <p className="text-foreground text-sm font-semibold mb-2 bg-primary/5 px-3 py-1 rounded-lg border border-primary/10 w-fit">{item.grade}</p>
                          <ul className="list-none space-y-2 mt-3">
                            {item.achievements.map((ach, idx) => (
                              <li key={idx} className="text-muted-foreground text-xs sm:text-sm flex items-start gap-2.5 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                {ach}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;