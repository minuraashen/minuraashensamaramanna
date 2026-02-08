import { Code, Cog, Brain, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C/C++", "MATLAB", "Assembly (STM32)"],
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
      title: "Interested Areas",
      skills: ["Machine Learning", "Computer Vision", "Artificial Intelligence", "Software Development", "Digital Signal Processing"],
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning hardware design, software development, and emerging technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <Card className="glass lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                  <Code className="h-6 w-6" />
                </div>
                Core Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {skillCategories.map((category, index) => (
                  <div key={index} className="rounded-2xl bg-muted/40 p-4 border border-border/60">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center text-white`}>
                        {category.icon}
                      </div>
                      <h4 className="font-semibold">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-background/60 hover:bg-background/80 text-foreground"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-white">
                  <Brain className="h-6 w-6" />
                </div>
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
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
        </div>

        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8">Areas of Interest</h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl glass">
              <Brain className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h4 className="text-lg font-semibold mb-2">AI & Machine Learning</h4>
              <p className="text-muted-foreground text-sm">Deep learning, neural networks, and intelligent systems</p>
            </div>
            <div className="p-6 rounded-2xl glass">
              <Cog className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h4 className="text-lg font-semibold mb-2">Computer Vision</h4>
              <p className="text-muted-foreground text-sm">Image processing, object detection, and visual recognition</p>
            </div>
            <div className="p-6 rounded-2xl glass">
              <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h4 className="text-lg font-semibold mb-2">Software Development</h4>
              <p className="text-muted-foreground text-sm">MERN Stack, Data Structures and Algorithms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;