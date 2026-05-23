import React, { useState } from "react";
import { ExternalLink, Github, Cpu, Volume2, Navigation, Mic, Brain, Image, Cog, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

// Import generated placeholder images
import wso2SemanticImg from "@/assets/wso2_semantic_search.png";
import salesforceImg from "@/assets/salesforce_integration.png";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 0,
      icon: <Brain className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: "Semantic Code Search Tool for WSO2 Micro Integrator Copilot",
      description: "An AI-powered semantic code search tool enabling intent-aware search and multi-workspace support over integration Configurations. Leveraged sentence transformers, vector indexing, and custom ranking inside the Agentic MI Copilot VS Code extension.",
      technologies: ["TypeScript", "WSO2 Micro Integrator", "React", "Sentence Transformers", "Vector Search"],
      myRole: "As a Software Engineer Intern, I designed and implemented the core semantic search engine, created custom embeddings, and integrated the solution with the WSO2 VS Code Extension chatbot.",
      status: "Intern Project",
      gradient: "from-primary to-accent",
      githubUrl: "https://github.com/minuraashen/Semantic_tool_check",
      detailsUrl: "https://medium.com/@minuraashensamaramanna/designing-semantic-code-search-tool-for-wso2-micro-integrator-copilot-part-1-173e26b79635",
      tags: ["intern", "ai-ml", "software"],
      image: wso2SemanticImg,
      featured: true
    },
    {
      id: 1,
      icon: <Cog className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: "Export Salesforce Leads to Google Sheets Prebuilt Integration",
      description: "An automation pipeline designed for the Devant Platform, enabling low-code/no-code users to export Salesforce leads directly to Google Sheets using BI Copilot and Ballerina Integrator workflows.",
      technologies: ["Ballerina", "Devant Cloud Editor", "BI Copilot", "Salesforce", "Google Sheets"],
      myRole: "As a Software Engineer Intern, I designed the integration logic and configured the low-code template mappings for business user deployments.",
      status: "Intern Project",
      gradient: "from-accent to-secondary",
      githubUrl: "https://github.com/minuraashen/salesforce_leads_to_googlesheet",
      tags: ["intern", "software"],
      image: salesforceImg,
      featured: true
    },
    {
      id: 2,
      icon: <Cpu className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: "Strength Training Exercise Recognition System",
      description: "A context-aware fitness tracker analyzing wristband accelerometer and gyroscope telemetry. Applies supervised learning models to classify workout exercises and count repetitions.",
      technologies: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
      myRole: "Conducted raw sensor dataset collection, preprocessed noise, performed feature engineering, and trained Random Forest/SVM classifiers.",
      status: "Completed",
      gradient: "from-primary to-secondary",
      githubUrl: "https://github.com/minuraashen/Fitness_tracker_ML_project",
      tags: ["ai-ml"],
      featured: false
    },
    {
      id: 3,
      icon: <Image className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: "Full-Stack E-Commerce Application",
      description: "A responsive commerce platform using MongoDB, Express.js, React, and Node.js. Incorporates Chakra UI blocks, JWT auth flows, and checkout endpoints.",
      technologies: ["JavaScript", "React", "MongoDB", "Node.js", "Express.js", "Chakra UI"],
      myRole: "Sole developer responsible for API routing, user session state management, database schema design, and responsive frontend grids.",
      status: "Ongoing",
      gradient: "from-primary to-secondary",
      githubUrl: "https://github.com/minuraashen/MERN_project",
      tags: ["software"],
      featured: false
    },
    {
      id: 4,
      icon: <Brain className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: "Supervised Machine Learning Repository",
      description: "A comprehensive foundation repository compiling ML pipelines, exploratory data analysis templates, and model validation code.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "XGBoost", "Matplotlib"],
      myRole: "Implemented standard engineering tasks: data cleaning, cross-validation scoring, and feature correlation studies.",
      status: "Ongoing",
      gradient: "from-primary to-secondary",
      githubUrl: "https://github.com/minuraashen/Machine-Learning",
      tags: ["ai-ml", "software"],
      featured: false
    },
    {
      id: 5,
      icon: <Volume2 className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: "Five-Band Audio Equalizer",
      description: "A complete hardware implementation of an analog five-band audio equalizer. Designed active filters, simulated band responses, and troubleshot circuit gains.",
      technologies: ["Analog Circuit Design", "Signal Processing", "LTSpice", "Hardware Testing"],
      myRole: "Designed the schematic, performed frequency sweep simulations in LTSpice, built physical PCB circuits, and calibrated signal outputs.",
      status: "Completed",
      gradient: "from-primary to-secondary",
      githubUrl: "https://github.com/minuraashen/Five-Band-Audio-Equilizer",
      detailsUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7346696185018990593/",
      tags: ["hardware"],
      featured: false
    },
    {
      id: 6,
      icon: <Navigation className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: "Autonomous Mobile Robot (AMR)",
      description: "A modular navigation robot implementing LiDAR slam obstacles detection, closed-loop telemetry, and dynamic motor controls.",
      technologies: ["LiDAR", "SLAM", "PCB Design", "Embedded Systems", "Motion Control"],
      myRole: "Designed and tested the compact power distribution PCB layout, ensuring low-noise telemetry routes and stable voltages.",
      status: "Completed",
      gradient: "from-primary to-secondary",
      githubUrl: "https://github.com/AMR-Platform",
      tags: ["hardware"],
      featured: false
    },
    {
      id: 7,
      icon: <Mic className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: "Microphone Preamp with Class AB Amplifier",
      description: "High-fidelity, low-noise audio amplifier featuring thermal compensation circuits and optimized biasing for clear sound delivery.",
      technologies: ["Analog Design", "Audio Engineering", "Thermal Compensation", "Biasing Circuitry"],
      myRole: "Calculated static transistor biasing values, modeled thermal stability circuits, and simulated THD (Total Harmonic Distortion).",
      status: "Completed",
      gradient: "from-primary to-secondary",
      tags: ["hardware"],
      featured: false
    }
  ];

  const filterTabs = [
    { label: "All Work", value: "all" },
    { label: "Internships", value: "intern" },
    { label: "AI & Machine Learning", value: "ai-ml" },
    { label: "Software & Web", value: "software" },
    { label: "Hardware & Robotics", value: "hardware" }
  ];

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.tags.includes(filter)
  );

  const toggleExpand = (id: number) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Ongoing":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Intern Project":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4 text-foreground">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A curated showcase of engineering builds spanning AI/ML applications, low-code systems, and analog circuitry.
            </p>
          </motion.div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setFilter(tab.value);
                setExpandedIndex(null);
              }}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 ${
                filter === tab.value
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {filter === tab.value && (
                <motion.div
                  layoutId="activeFilterIndicator"
                  className="absolute inset-0 bg-gradient-primary rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Top Level Featured Projects Spotlight */}
            {filteredProjects.filter(p => p.featured).map((project) => (
              <motion.div 
                layout 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="lg:col-span-12"
              >
                <Card className="glass-card border border-border/30 overflow-hidden hover:border-primary/20 hover:shadow-glow transition-all duration-500 group rounded-3xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Visual Graphic representation */}
                    <div className="lg:col-span-5 relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border/30 h-64 sm:h-80 lg:h-full min-h-[300px]">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent lg:hidden" />
                    </div>

                    {/* Project details */}
                    <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className={`rounded-full px-3 py-1 font-semibold text-xs border ${getStatusColor(project.status)}`}>
                            {project.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1.5 font-medium">
                            Featured Spotlight
                          </span>
                        </div>

                        <CardTitle className="text-xl sm:text-2xl font-heading leading-tight group-hover:text-primary transition-colors font-semibold">
                          {project.title}
                        </CardTitle>

                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                          {project.description}
                        </p>

                        <div className="space-y-2 border-l-2 border-primary/20 pl-4 py-1">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">My Contribution</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {project.myRole}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Technologies</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="bg-muted text-foreground border-border/60 rounded-full px-2.5 py-1 text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-6 border-t border-border/20 mt-6">
                        {project.detailsUrl && (
                          <Button size="sm" className="bg-gradient-primary hover:opacity-90 text-primary-foreground rounded-full text-xs px-4" asChild>
                            <a href={project.detailsUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3.5 h-3.5 mr-2" />
                              Read Project Story
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" className="border-border hover:bg-muted text-foreground rounded-full text-xs px-4" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3.5 h-3.5 mr-2" />
                              Explore Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Standard Secondary Projects Grid */}
            {filteredProjects.filter(p => !p.featured).map((project) => {
              const isExpanded = expandedIndex === project.id;
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="lg:col-span-6"
                >
                  <Card className="h-full glass-card border border-border/30 hover:border-primary/20 hover:shadow-glow transition-all duration-500 group flex flex-col justify-between overflow-hidden rounded-3xl">
                    <div>
                      <div className={`h-[4px] bg-gradient-to-r ${project.gradient}`} />
                      
                      <CardHeader className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
                              {project.icon}
                            </div>
                            <div>
                              <CardTitle className="text-lg font-heading leading-tight group-hover:text-primary transition-colors font-semibold">
                                {project.title}
                              </CardTitle>
                              <Badge variant="outline" className={`mt-2 rounded-full px-2.5 py-0.5 text-[10px] sm:text-xs border ${getStatusColor(project.status)}`}>
                                {project.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="px-6 pb-2 space-y-4">
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {project.description}
                        </p>

                        {/* Inline Expandable Contribution Details */}
                        <div className="border-t border-border/20 pt-3">
                          <button
                            onClick={() => toggleExpand(project.id)}
                            className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
                          >
                            <span>My Contribution & Role</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <p className="text-xs text-muted-foreground bg-muted/40 p-3 rounded-xl border border-border/30 leading-relaxed mt-2">
                                  {project.myRole}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="space-y-1.5 pt-1">
                          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-foreground">Technologies</span>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="bg-muted text-foreground border-border/50 rounded-full px-2 py-0.5 text-[10px] sm:text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>

                    <CardContent className="p-6 pt-2">
                      <div className="flex gap-2 pt-3 border-t border-border/20">
                        {project.detailsUrl ? (
                          <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full text-xs flex-1" asChild>
                            <a href={project.detailsUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                              View Link
                            </a>
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" className="border-border text-muted-foreground opacity-50 cursor-not-allowed rounded-full text-xs flex-1" disabled>
                            <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                            No Story
                          </Button>
                        )}

                        {project.githubUrl ? (
                          <Button size="sm" variant="outline" className="border-border hover:bg-muted text-foreground rounded-full text-xs flex-1" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3.5 h-3.5 mr-1.5" />
                              Source
                            </a>
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" className="border-border text-muted-foreground opacity-50 cursor-not-allowed rounded-full text-xs flex-1" disabled>
                            <Github className="w-3.5 h-3.5 mr-1.5" />
                            No Code
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default Projects;