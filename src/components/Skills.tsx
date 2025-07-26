import { Code, Cog, Brain, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: ["Python", "C/C++", "MATLAB", "Assembly (STM32)"],
      color: "bg-primary"
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Software & Tools",
      skills: ["Altium Designer", "LTSpice", "SolidWorks", "CubeIDE", "Proteus", "Arduino", "Node-RED"],
      color: "bg-secondary"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Specialized Areas",
      skills: ["Machine Learning", "Computer Vision", "Embedded Systems", "PCB Design", "Signal Processing"],
      color: "bg-primary"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Languages",
      skills: ["English (Professional)", "Sinhala (Native)"],
      color: "bg-secondary"
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

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning hardware design, software development, and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-muted hover:bg-muted/80 text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border animate-fade-in">
          <CardHeader>
            <CardTitle className="text-center">
              Soft Skills & Personal Attributes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8">Areas of Interest</h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg bg-gradient-card border border-border">
              <Brain className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h4 className="text-lg font-semibold mb-2">AI & Machine Learning</h4>
              <p className="text-muted-foreground text-sm">Deep learning, neural networks, and intelligent systems</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-card border border-border">
              <Cog className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h4 className="text-lg font-semibold mb-2">Computer Vision</h4>
              <p className="text-muted-foreground text-sm">Image processing, object detection, and visual recognition</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-card border border-border">
              <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h4 className="text-lg font-semibold mb-2">Embedded Systems</h4>
              <p className="text-muted-foreground text-sm">Microcontroller programming and hardware integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;