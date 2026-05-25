import React, { useState } from "react";
import { GraduationCap, Award, Users, Target, Calendar, Briefcase, BookOpen, Compass, ExternalLink } from "lucide-react";
import wso2Logo from "@/assets/wso2logo.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  const timelineExperience = [
    {
      company: "WSO2 LLC",
      role: "Software Engineer Intern (Integration AI Team)",
      period: "Nov 2025 - May 2026",
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
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: index * 0.1
      }
    })
  };

  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden bg-background">
      {/* Decorative vector shape */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 opacity-10 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="100" cy="100" r="100" fill="hsl(var(--primary) / 0.12)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4 text-foreground">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                I am an Electronic and Telecommunication Engineering undergraduate passionate about mathematics and emerging technologies, with a mission to acquire knowledge, approach problems creatively, and develop solutions that are both practical and efficient, grounded in rigorous mathematical reasoning and analysis.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid layout for Journey & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Journey */}
          <motion.div
            className="md:col-span-2 lg:col-span-2"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bentoVariants}
          >
            <Card className="h-full glass-card border border-border/30 p-6 flex flex-col justify-between">
              <div>
                <CardTitle className="text-2xl font-heading font-medium mb-4 flex items-center gap-3">
                  <BookOpen className="text-primary h-6 w-6" />
                  My Journey
                </CardTitle>
                <div className="text-muted-foreground space-y-4 leading-relaxed text-sm sm:text-base">
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
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Academic Stat Card */}
          <motion.div
            className="col-span-1"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bentoVariants}
          >
            <Card className="h-full glass-card border border-border/30 p-6 flex flex-col justify-between hover:shadow-glow transition-all duration-300">
              <CardHeader className="p-0">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-heading">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent font-heading mb-2">3.93/4.00</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Current CGPA</div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Named on the Dean's List for Semesters 1, 2, 4, and 5.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3: Rank Card */}
          <motion.div
            className="col-span-1"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bentoVariants}
          >
            <Card className="h-full glass-card border border-border/30 p-6 flex flex-col justify-between hover:shadow-glow transition-all duration-300">
              <CardHeader className="p-0">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary-foreground mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-heading">Advanced Level Rank</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <div className="text-5xl font-bold text-foreground font-heading mb-1">Rank 01</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Ratnapura District</div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Achieved 4 A's in Physical Science. Placed Island Rank 28 with a Z-Score of 2.7031.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 4: Teaching */}
          <motion.div
            className="col-span-1"
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bentoVariants}
          >
            <Card className="h-full glass-card border border-border/30 p-6 flex flex-col justify-between hover:shadow-glow transition-all duration-300">
              <CardHeader className="p-0">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-heading">Teaching</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4 flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Actively tutoring Advanced Level Physics, Chemistry, and Combined Mathematics.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 5: Philosophy */}
          <motion.div
            className="col-span-1"
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bentoVariants}
          >
            <Card className="h-full glass-card border border-border/30 p-6 flex flex-col justify-between hover:shadow-glow transition-all duration-300">
              <CardHeader className="p-0">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-heading">Problem Solver</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4 flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  Focused on practical, efficient solutions grounded in math
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Education & Experience Interactive Timeline Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-heading font-semibold mb-6">Experience & Education</h3>
            
            {/* Tab Switched Header */}
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

          {/* Timeline Contents */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/10 space-y-12 ml-4">
            <AnimatePresence mode="wait">
              {activeTab === "experience" ? (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-12"
                >
                  {timelineExperience.map((item, index) => (
                    <div key={index} className="relative group">
                      {/* Timeline Node Icon */}
                      <span className="absolute -left-[39px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-primary/20 overflow-hidden">
                        <img src={wso2Logo} alt="WSO2" className="w-full h-full object-cover block" />
                      </span>

                      {/* Content Card */}
                      <Card className="glass-card border border-border/30 p-6 rounded-3xl hover:border-primary/20 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-foreground font-heading">{item.role}</h4>
                            <div className="flex items-center gap-2 mt-1.5">
                              <p className="text-primary text-sm font-medium">{item.company}</p>
                            </div>
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
                              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed pl-3.5">
                                {detail.desc}
                              </p>
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
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-12"
                >
                  {timelineEducation.map((item, index) => (
                    <div key={index} className="relative group">
                      {/* Timeline Node Icon */}
                      <span className="absolute -left-[39px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-primary/20">
                        <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </span>

                      {/* Content Card */}
                      <Card className="glass-card border border-border/30 p-6 rounded-3xl hover:border-primary/20 transition-all duration-300">
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
                          <p className="text-foreground text-sm font-semibold mb-2 bg-primary/5 px-3 py-1 rounded-lg border border-primary/10 w-fit">
                            {item.grade}
                          </p>
                          <ul className="list-none space-y-2">
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