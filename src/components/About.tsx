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
    description: "G.C.E. Advanced Level (Physical Science) — 4 A's"
  }, {
    icon: <Users className="h-6 w-6" />,
    title: "Teaching & Mentoring",
    description: "Tutoring Physics, Chemistry & Combined Mathematics"
  }, {
    icon: <Target className="h-6 w-6" />,
    title: "Problem Solver",
    description: "Focused on practical, efficient solutions grounded in math"
  }];

  return (
    <section id="about" className="py-20 px-4" data-aos="fade-up">
      {/* decorative */}
      <svg className="absolute -top-16 right-8 w-48 h-48 opacity-10 pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="100" cy="100" r="100" fill="hsl(var(--accent) / 0.06)" />
      </svg>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I am an Electronic and Telecommunication Engineering undergraduate passionate about mathematics and emerging
            technologies, with a mission to acquire knowledge, approach problems creatively, and develop solutions that
            are both practical and efficient, grounded in rigorous mathematical reasoning and analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="space-y-6 animate-fade-in" data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-2xl font-heading font-medium">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently pursuing my B.Sc.(Hons) in Electronic and Telecommunication Engineering at the
              University of Moratuwa. I have maintained strong academic performance with a CGPA of 3.93/4.0 and
              was named on the Dean's List for Semesters 1, 2, 4 and 5.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My passion lies in bridging theoretical knowledge with practical applications, particularly in
              machine learning, computer vision, and embedded systems. I focus on engineering solutions that are
              technically sound, creatively designed, and mathematically precise.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond academics, I enjoy tutoring and contributing to technical communities to foster the next
              generation of engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-scale-in" data-aos="zoom-in" data-aos-delay="200">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-card border-border rounded-3xl p-4" data-aos="fade-up" data-aos-delay={300 + index * 100}>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground mb-3">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-lg font-heading">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-8 animate-fade-in">
          <h3 className="text-2xl font-heading font-semibold text-center">Education & Experience</h3>

          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <Card className="bg-card border-border rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-heading">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  University of Moratuwa
                </CardTitle>
                <p className="text-muted-foreground">Feb 2023 - Present</p>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">B.Sc.(Hons) Electronic and Telecommunication Engineering</p>
                <p className="text-muted-foreground">CGPA: 3.93/4.0</p>
                <p className="text-muted-foreground">Dean's List for Semesters 1, 2, 4, 5</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-heading">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  Balangoda Ananda Maithreya National School
                </CardTitle>
                <p className="text-muted-foreground">G.C.E. Advanced Level (Physical Science)</p>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">4 A's — Combined Mathematics, Physics, Chemistry, General English</p>
                <p className="text-muted-foreground">District Rank: 1 | Island Rank: 28 | Z-Score: 2.7031</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="bg-card border-border rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-heading">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  Software Engineer Intern — WSO2 LLC
                </CardTitle>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                  <p className="text-muted-foreground">Nov 2025 - May 2026 (Integration AI Team)</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-medium mb-2 text-primary">Semantic Search Tool for MI Copilot</h4>
                  <p className="text-muted-foreground">Developed a semantic code search tool for MI Copilot, enabling intent-aware search and multi-workspace support for integration configurations.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-primary">Export Salesforce Leads to Google Sheets Prebuilt Integration</h4>
                  <p className="text-muted-foreground">Created a prebuilt integration to automate exporting Salesforce leads to Google Sheets using BI Copilot and Ballerina Integrator for business users.</p>
                </div>
              </CardContent>
            </Card>
          </div>
          </div>
        </div>
    </section>
  );
};

export default About;