import { ExternalLink, Github, Cpu, Volume2, Navigation, Mic } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
const projects = [
    {
      icon: <Navigation className="h-8 w-8" />,
      title: "Autonomous Mobile Robot (AMR)",
      description: "Advanced modular robot with LiDAR obstacle detection, SLAM navigation, and closed-loop motion control featuring embedded telemetry and custom UI interface.",
      myRole: "Designed compact power distribution PCB, conducted comprehensive PCB testing, and performed hardware debugging to ensure system reliability.",
      technologies: ["LiDAR", "SLAM", "PCB Design", "Embedded Systems", "Motion Control"],
      status: "Completed",
      gradient: "from-primary to-primary/80",
      githubUrl: "https://github.com/AMR-Platform"
    },
    {
      icon: <Volume2 className="h-8 w-8" />,
      title: "Five-Band Audio Equalizer",
      description: "Professional analog circuit design featuring precise frequency band control with comprehensive simulation and testing protocols.",
      myRole: "Led circuit design and simulation phases, conducted thorough testing procedures, and created detailed technical documentation.",
      technologies: ["Analog Circuit Design", "Signal Processing", "Simulation", "Testing"],
      status: "Completed",
      gradient: "from-secondary to-secondary/80",
      githubUrl: "https://github.com/minuraashen/Five-Band-Audio-Equilizer"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Micromouse Maze-Solving Robot",
      description: "Intelligent autonomous robot capable of maze navigation using advanced sensor integration and precise PID control algorithms.",
      myRole: "Programmed STM32 microcontroller at register level, implementing low-level hardware control and optimization algorithms.",
      technologies: ["STM32", "PID Control", "Sensor Integration", "Assembly", "Autonomous Navigation"],
      status: "Ongoing",
      gradient: "from-primary to-secondary",
      githubUrl: "https://github.com/minuraashen/MicroJAS"
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Microphone Preamp with Class AB Amplifier",
      description: "High-fidelity low-noise audio amplifier design with advanced biasing techniques and thermal compensation for professional audio applications.",
      myRole: "Designed amplifier architecture with focus on biasing optimization and thermal compensation circuits for enhanced performance.",
      technologies: ["Analog Design", "Audio Engineering", "Thermal Compensation", "Low-Noise Design"],
      status: "Completed",
      gradient: "from-secondary to-primary"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative engineering solutions spanning robotics, electronics, and embedded systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:shadow-glow transition-all duration-500 hover:scale-[1.02] group animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge 
                          variant={project.status === "Completed" ? "default" : "secondary"}
                          className={project.status === "Completed" ? "bg-green-600" : "bg-yellow-600"}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">
                    My Role & Contribution
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed bg-muted/50 p-3 rounded-lg">
                    {project.myRole}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className="border-primary/20 text-foreground hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  {project.githubUrl ? (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-muted-foreground text-muted-foreground hover:bg-muted"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-muted-foreground text-muted-foreground opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on exciting projects?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;