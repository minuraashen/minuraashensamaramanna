import React, { useRef } from "react";
import { ExternalLink, Github, Cpu, Volume2, Navigation, Mic, Brain, Image, Cog, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";

// Import generated placeholder images
import wso2SemanticImg   from "@/assets/wso2_semantic_search.png";
import salesforceImg     from "@/assets/salesforce_integration.png";
import fitnessImg        from "@/assets/finessproject.png";
import fullstackImg      from "@/assets/fullstackproject.png";
import fiveBandImg       from "@/assets/fivebandeq.png";
import mlRepoImg         from "@/assets/mechinelearning.png";
import amrImg            from "@/assets/amr.jpg";
import kaprukagentImg    from "@/assets/kaprukaagent.png";

/* ── Per-card sticky-stack transform ── */
const StackCard = ({
  project,
  index,
  total,
  isExpanded,
  onToggle,
}: {
  project: typeof projectsData[0];
  index: number;
  total: number;
  isExpanded: boolean;
  onToggle: (id: number, e: React.MouseEvent) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Cards behind "sink" slightly and scale down as the next cards stack over them
  const scale   = useTransform(scrollYProgress, [0, 0.8], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":    return "status-completed";
      case "Ongoing":      return "status-ongoing";
      case "Intern Project": return "status-intern";
      default:             return "";
    }
  };

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${80 + index * 24}px`, zIndex: 10 + index }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-card rounded-3xl border border-border/30 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-3d group">

          {/* Card Cover */}
          <div className="relative h-52 sm:h-64 w-full overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-80 flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  {project.icon}
                </div>
              </div>
            )}

            {/* Glassmorphism overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            {/* Badges */}
            {project.featured && (
              <div className="absolute top-4 left-4 bg-gradient-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-glow">
                Featured
              </div>
            )}
            <div className="absolute top-4 right-4">
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold border backdrop-blur-md bg-black/30 ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>

            {/* Card index indicator */}
            <div className="absolute bottom-4 left-4 text-white/50 text-[10px] font-mono-terminal uppercase tracking-widest">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Left: Title + desc */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Expandable role */}
                <div>
                  <button
                    onClick={(e) => onToggle(project.id, e)}
                    className="flex items-center gap-1.5 text-[11px] font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest"
                  >
                    My Contribution &amp; Role
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{    height: 0,    opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[11px] sm:text-xs text-muted-foreground bg-muted/40 p-4 rounded-xl border border-border/30 leading-relaxed mt-2.5">
                          {project.myRole}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right: Tech + links */}
              <div className="space-y-5">
                {/* Tech tags */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground block mb-2">Technologies</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-muted text-foreground border-border/50 rounded-full px-2.5 py-0.5 text-[10px] hover:bg-primary/10 hover:border-primary/25 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                  {project.detailsUrl ? (
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full text-xs flex-1" asChild>
                      <a href={project.detailsUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        View Link
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" className="border-border text-muted-foreground opacity-40 cursor-not-allowed rounded-full text-xs flex-1" disabled>
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
                    <Button size="sm" variant="outline" className="border-border text-muted-foreground opacity-40 cursor-not-allowed rounded-full text-xs flex-1" disabled>
                      <Github className="w-3.5 h-3.5 mr-1.5" />
                      No Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ── Project data (preserved exactly from original) ── */
const projectsData = [
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
    detailsUrl: undefined,
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
    detailsUrl: undefined,
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
    detailsUrl: undefined,
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
    detailsUrl: undefined,
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
    detailsUrl: undefined,
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
    githubUrl: undefined,
    detailsUrl: undefined,
    tags: ["hardware"],
    image: undefined,
    featured: false
  }
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-4 md:px-6 lg:px-8 bg-muted/10 relative overflow-hidden">

      {/* Blob bg accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 blob-1 opacity-15 pointer-events-none" aria-hidden />

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
              What I've built
            </p>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
              Featured <span className="shimmer-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of engineering work spanning AI/ML applications, low-code systems, and analog circuitry.
            </p>
          </motion.div>
        </div>

        {/* ── Sticky-Stack Cards ── */}
        <div className="relative pb-16" style={{ minHeight: `${projectsData.length * 100}px` }}>
          <div className="space-y-6">
            {projectsData.map((project, index) => (
              <StackCard
                key={project.id}
                project={project}
                index={index}
                total={projectsData.length}
                isExpanded={expandedIndex === project.id}
                onToggle={toggleExpand}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;