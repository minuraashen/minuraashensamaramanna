import React, { useState } from "react";
import { ExternalLink, Github, Cpu, Volume2, Navigation, Mic, Brain, Image, Cog, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Import generated placeholder images
import wso2SemanticImg from "@/assets/wso2_semantic_search.png";
import salesforceImg from "@/assets/salesforce_integration.png";
import fitnessImg from "@/assets/finessproject.png";
import fullstackImg from "@/assets/fullstackproject.png";
import fiveBandImg from "@/assets/fivebandeq.png";
import mlRepoImg from "@/assets/mechinelearning.png";
import amrImg from "@/assets/amr.jpg";
import kaprukagentImg from "@/assets/kaprukaagent.png";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 0,
      icon: <Brain className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: "Semantic Code Search Tool for WSO2 MI Copilot",
      description: "An AI-powered semantic code search tool enabling intent-aware search and multi-workspace support over integration Configurations. Integrated inside the Agentic MI Copilot VS Code extension.",
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
      title: "Export Salesforce Leads to Google Sheets Integration",
      description: "An automation pipeline designed for the Devant Platform, enabling low-code/no-code users to export Salesforce leads directly to Google Sheets using Ballerina Integrator.",
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
      icon: <Cpu className="h-6 w-6" />,
      title: "Exercise Recognition System",
      description: "A context-aware fitness tracker analyzing wristband accelerometer and gyroscope telemetry. Applies supervised learning models to classify workout exercises and count repetitions.",
      technologies: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
      myRole: "Conducted raw sensor dataset collection, preprocessed noise, performed feature engineering, and trained Logistic Regression/Decision Tree/Random Forest/SVM/Neural Network classifiers.",
      status: "Completed",
      gradient: "from-primary to-secondary",
      githubUrl: "https://github.com/minuraashen/Fitness_tracker_ML_project",
      tags: ["ai-ml"],
      image: fitnessImg,
      featured: false
    },
    {
      id: 3,
      icon: <Brain className="h-6 w-6" />,
      title: "Kapruka AI Shopping Assistant",
      description: "AI-powered conversational shopping assistant for Kapruka, Sri Lanka's largest e-commerce platform, using Kapruka's public MCP. Lets users discover products, find gifts, check delivery, and complete a full guest checkout — all through natural chat in English or Sinhala, powered by an LLM function-calling loop over Kapruka's MCP tools.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Kapruka MCP", "OpenRouter", "Groq"],
      myRole: "Designed and built the entire system end-to-end from the LLM function-calling loop and MCP tool integration to the bilingual chat UI and guest checkout flow. Architected the agent pipeline, selected and integrated OpenRouter/Groq as the LLM backend, and deployed the production app on Hugging Face Spaces.",
      status: "Completed",
      gradient: "from-violet-500 to-purple-600",
      githubUrl: "https://github.com/minuraashen/Kapruka-Agent",
      detailsUrl: "https://minuraashen-kapruka-agent.hf.space/",
      tags: ["ai-ml", "software"],
      image: kaprukagentImg,
      featured: false
    },
    {
      id: 4,
      icon: <Image className="h-6 w-6" />,
      title: "Full-Stack E-Commerce Application",
      description: "A responsive commerce platform using MongoDB, Express.js, React, and Node.js. Incorporates Chakra UI blocks, JWT auth flows, and checkout endpoints.",
      technologies: ["JavaScript", "React", "MongoDB", "Node.js", "Express.js", "Chakra UI"],
      myRole: "Sole developer responsible for API routing, user session state management, database schema design, and responsive frontend grids. This project was built as a learning exercise to understand full-stack development and MERN architecture.",
      status: "Completed",
      gradient: "from-primary to-secondary",
      githubUrl: "https://github.com/minuraashen/MERN_project",
      tags: ["software"],
      image: fullstackImg,
      featured: false
    },
    {
      id: 5,
      icon: <Brain className="h-6 w-6" />,
      title: "Supervised Machine Learning Repository",
      description: "A comprehensive foundation repository compiling ML pipelines, exploratory data analysis templates, and model validation code.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "XGBoost", "Matplotlib"],
      myRole: "This repository serves as a personal reference for future ML projects and is not tied to a specific product or outcome. It is a work in progress that I continuously update as I learn new techniques and best practices in machine learning.",
      status: "Ongoing",
      gradient: "from-primary to-secondary",
      githubUrl: "https://github.com/minuraashen/Machine-Learning",
      tags: ["ai-ml", "software"],
      image: mlRepoImg,
      featured: false
    },
    {
      id: 6,
      icon: <Volume2 className="h-6 w-6" />,
      title: "Five-Band Audio Equalizer",
      description: "A complete hardware implementation of an analog five-band audio equalizer. Designed active filters, simulated band responses, and troubleshot circuit gains.",
      technologies: ["Analog Circuit Design", "Signal Processing", "LTSpice", "Hardware Testing"],
      myRole: "Designed the schematic, performed frequency sweep simulations in LTSpice, built physical PCB circuits, and calibrated signal outputs.",
      status: "Completed",
      gradient: "from-primary to-secondary",
      githubUrl: "https://github.com/minuraashen/Five-Band-Audio-Equilizer",
      detailsUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7346696185018990593/",
      tags: ["hardware"],
      image: fiveBandImg,
      featured: false
    },
    {
      id: 7,
      icon: <Navigation className="h-6 w-6" />,
      title: "Autonomous Mobile Robot (AMR)",
      description: "A modular navigation robot implementing LiDAR slam obstacles detection, closed-loop telemetry, and dynamic motor controls.",
      technologies: ["LiDAR", "SLAM", "PCB Design", "Embedded Systems", "Motion Control"],
      myRole: "Designed and tested the compact power distribution PCB layout, ensuring low-noise telemetry routes and stable voltages.",
      status: "Completed",
      gradient: "from-primary to-secondary",
      githubUrl: "https://github.com/AMR-Platform",
      tags: ["hardware"],
      image: amrImg,
      featured: false
    },
    {
      id: 8,
      icon: <Mic className="h-6 w-6" />,
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

  const filteredProjects = projects; 

  const toggleExpand = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/25";
      case "Ongoing":
        return "text-amber-400 bg-amber-500/10 border-amber-500/25";
      case "Intern Project":
        return "text-blue-400 bg-blue-500/10 border-blue-500/25";
      default:
        return "text-muted-foreground bg-muted border-border";
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
              A showcase of engineering work spanning AI/ML applications, low-code systems, and analog circuitry.
            </p>
          </motion.div>
        </div>

        {/* Filters removed: showing all projects in the carousel */}

        {/* Dynamic Horizontal Scrollable Carousel */}
        <div className="relative px-6 sm:px-12 max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6 items-stretch">
              {filteredProjects.map((project) => {
                const isExpanded = expandedIndex === project.id;
                return (
                  <CarouselItem
                    key={project.id}
                    className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 flex"
                  >
                    <Card className="glass-card border border-border/30 hover:border-primary/25 hover:shadow-glow transition-all duration-500 group flex flex-col justify-between overflow-hidden rounded-3xl relative w-full h-full">
                      
                      {/* Card Cover Header (Image or Gradient Placeholder) */}
                      <div className="relative h-44 w-full overflow-hidden bg-muted/20 flex-shrink-0">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-80 relative flex items-center justify-center`}>
                            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                              {project.icon}
                            </div>
                          </div>
                        )}
                        {project.featured && (
                          <div className="absolute top-3 left-3 bg-gradient-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                            Featured
                          </div>
                        )}
                        <div className="absolute top-3 right-3">
                          <Badge variant="outline" className={`rounded-full px-2.5 py-0.5 text-[10px] bg-black/40 backdrop-blur-md border-none ${getStatusColor(project.status)}`}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>

                      {/* Card Middle Info */}
                      <div className="p-5 flex-grow flex flex-col justify-between">
                        <div className="space-y-4">
                          <CardTitle className="text-base sm:text-lg font-heading leading-tight group-hover:text-primary transition-colors font-semibold">
                            {project.title}
                          </CardTitle>

                          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                            {project.description}
                          </p>

                          {/* Inline Collapsible Contribution Details */}
                          <div className="border-t border-border/20 pt-3">
                            <button
                              onClick={(e) => toggleExpand(project.id, e)}
                              className="flex items-center gap-1.5 text-[10px] font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
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
                                  <p className="text-[11px] sm:text-xs text-muted-foreground bg-muted/40 p-3 rounded-xl border border-border/30 leading-relaxed mt-2">
                                    {project.myRole}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Tech tags placed dynamically at bottom of info */}
                        <div className="space-y-1.5 pt-3 mt-auto">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">Technologies</span>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="bg-muted text-foreground border-border/50 rounded-full px-2 py-0.5 text-[10px]">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="p-5 pt-0 flex-shrink-0">
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
                      </div>

                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {/* Arrow controllers */}
            <CarouselPrevious className="-left-4 sm:-left-12 bg-background/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300" />
            <CarouselNext className="-right-4 sm:-right-12 bg-background/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;