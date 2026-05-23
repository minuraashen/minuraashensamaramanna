import { Code, Cog, Brain, Globe, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C/C++", "MATLAB", "Assembly (STM32)"],
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4 text-foreground">
              Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit spanning hardware design, software engineering, and emerging AI technologies.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full glass-card glass-card-hover border border-border/30 p-6 flex flex-col justify-between">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-md shadow-primary/10`}>
                      {category.icon}
                    </div>
                    <span className="font-heading text-lg font-medium text-foreground">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="bg-primary/5 hover:bg-primary/10 text-foreground border-primary/10 hover:border-primary/20 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="glass-card border border-border/30 p-6 sm:p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-center font-heading text-xl font-semibold">Professional Attributes</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-wrap justify-center gap-3">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    className="bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-border/40 hover:border-primary/20 transition-all duration-200"
                  >
                    <CheckCircle className="w-3 h-3 mr-2 text-primary inline" />
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Highlight Focus Areas */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-10 text-foreground">Areas of Deep Focus</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="glass-card border border-border/30 p-6 flex flex-col items-center hover:border-primary/30 hover:shadow-glow transition-all duration-300">
                <CardHeader className="flex flex-col items-center p-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Brain className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-lg font-heading font-semibold mb-2">AI & Machine Learning</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-center mt-2">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Analyzing complex datasets, modeling neural networks, and deploying models using the PyTorch and Scikit-learn ecosystems.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border border-border/30 p-6 flex flex-col items-center hover:border-primary/30 hover:shadow-glow transition-all duration-300">
                <CardHeader className="flex flex-col items-center p-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Cog className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-lg font-heading font-semibold mb-2">Computer Vision</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-center mt-2">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Image filters, real-time object tracking, feature extraction, and camera telemetry processing.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border border-border/30 p-6 flex flex-col items-center hover:border-primary/30 hover:shadow-glow transition-all duration-300">
                <CardHeader className="flex flex-col items-center p-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Code className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-lg font-heading font-semibold mb-2">Software Systems</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-center mt-2">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Building robust APIs, low-code integration templates, full-stack MERN projects, and optimized DSP filters.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;