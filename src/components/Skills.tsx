import { Code, Cog, Brain, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C/C++", "MATLAB", "Assembly (STM32)"],
      color: "bg-gradient-primary"
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Software & Tools",
      skills: ["Altium Designer", "LTSpice", "SolidWorks", "CubeIDE", "Proteus", "Arduino", "Node-RED"],
      color: "bg-gradient-primary"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Interested Areas",
      skills: ["Machine Learning", "Computer Vision", "Artificial Intelligence", "Software Development", "Digital Signal Processing"],
      color: "bg-gradient-primary"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Languages",
      skills: ["English (Professional)", "Sinhala (Native)"],
      color: "bg-gradient-primary"
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
          <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning hardware design, software development, and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border-border rounded-3xl hover:shadow-glow transition-all duration-300 animate-scale-in p-4"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <CardHeader className="p-0 mb-3">
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-white`}>{category.icon}</div>
                  <div className="font-heading font-medium">{category.title}</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="bg-muted text-foreground px-3 py-1 rounded-full text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border rounded-3xl animate-fade-in p-4">
          <CardHeader>
            <CardTitle className="text-center font-heading">Soft Skills & Personal Attributes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <Badge key={index} className="bg-muted text-foreground px-3 py-1 rounded-full text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-heading font-semibold mb-8">Areas of Interest</h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card border-border rounded-3xl">
              <CardHeader className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground mb-3">
                  <Brain className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg font-heading font-semibold mb-2">AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Deep learning, neural networks, and intelligent systems</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border rounded-3xl">
              <CardHeader className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground mb-3">
                  <Cog className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg font-heading font-semibold mb-2">Computer Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Image processing, object detection, and visual recognition</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border rounded-3xl">
              <CardHeader className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground mb-3">
                  <Code className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg font-heading font-semibold mb-2">Software Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">MERN Stack, Data Structures and Algorithms</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;