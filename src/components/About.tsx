import { GraduationCap, Award, Users, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const About = () => {
  const achievements = [{
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Academic Excellence",
    description: "CGPA 3.93/4.0, Dean's List for Semesters 1, 2, 4, 5"
  }, {
    icon: <Award className="h-6 w-6" />,
    title: "Top District Rank",
    description: "G.C.E. Advanced Level (Physical Science) — 4 A's, Z-Score 2.7031"
  }, {
    icon: <Users className="h-6 w-6" />,
    title: "Teaching & Mentoring",
    description: "Tutoring Physics, Chemistry & Combined Mathematics"
  }, {
    icon: <Target className="h-6 w-6" />,
    title: "Problem Solver",
    description: "Focused on practical, efficient solutions grounded in math"
  }];
  return <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I am an Electronic and Telecommunication Engineering undergraduate passionate about mathematics and emerging
            technologies, with a mission to acquire knowledge, approach problems creatively, and develop solutions that
            are both practical and efficient, grounded in rigorous mathematical reasoning and analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently pursuing my B.Sc.(Hons) in Electronic and Telecommunication Engineering at the
              University of Moratuwa. I have maintained strong academic performance with a CGPA of 3.93/4.0 and
              was named on the Dean's List for Semesters 1, 2, 4 and 5.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My passion lies in bridging theoretical knowledge with practical applications, particularly in 
              machine learning, computer vision, and software development. I believe in engineering solutions 
              that are not only technically sound but also creatively designed and mathematically precise.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond academics, I enjoy sharing knowledge through tutoring and contributing to technical 
              communities like the Electronic Club at SLRC branch, where I help foster the next generation 
              of engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-scale-in">
            {achievements.map((achievement, index) => <Card key={index} className="bg-card border-border hover:shadow-glow transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground mb-3">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        <div className="space-y-8 animate-fade-in">
          <h3 className="text-2xl font-semibold text-center">Education & Experience</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  University of Moratuwa
                </CardTitle>
                <p className="text-muted-foreground">2023 – Present</p>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">B.Sc.(Hons) Electronic and Telecommunication Engineering</p>
                <p className="text-muted-foreground">CGPA: 3.93/4.0</p>
                <p className="text-muted-foreground">Dean's List for Semesters 1, 2, 4, 5</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  Balangoda Ananda Maithreya National School
                </CardTitle>
                <p className="text-muted-foreground">Completed</p>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">G.C.E. Advanced Level (Physical Science)</p>
                <p className="text-muted-foreground">4 A's — Combined Mathematics, Physics, Chemistry, General English</p>
                <p className="text-muted-foreground">District Rank: 1 | Island Rank: 28 | Z-Score: 2.7031</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 md:mt-0 md:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  Software Engineer Intern — WSO2 LLC (Integration AI Team)
                </CardTitle>
                <p className="text-muted-foreground">Integration AI Team — Semantic search & MI Copilot</p>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">Key contributions</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Built a Semantic Code Search Tool for MI Copilot: evaluated embedding models for MI configuration files and implemented a background embedding service to index changes.</li>
                  <li>Implemented a semantic retrieval pipeline enabling intent-aware code search over MI configurations.</li>
                  <li>Designed multi-workspace support with isolated semantic indexes and workspace-aware context retrieval (ongoing).</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">Tech stack: TypeScript, Node.js, SQLite, Java, Anthropic</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;