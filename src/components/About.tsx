import { GraduationCap, Award, Users, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const About = () => {
  const achievements = [{
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Academic Excellence",
    description: "CGPA 3.91/4.0, Dean's List Semester 1 & 2"
  }, {
    icon: <Award className="h-6 w-6" />,
    title: "Top District Rank",
    description: "G.C.E. Advanced Level Physical Science"
  }, {
    icon: <Users className="h-6 w-6" />,
    title: "Teaching Experience",
    description: "Tutoring Physics, Chemistry & Mathematics"
  }, {
    icon: <Target className="h-6 w-6" />,
    title: "Problem Solver",
    description: "Passion for practical, efficient solutions"
  }];
  return <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Electronics and Telecommunications Engineering undergraduate with a drive for innovation,
            mathematical precision, and emerging technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <div className="glass rounded-3xl p-6 sm:p-8">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm currently pursuing my B.Sc.(Hons) in Electronics and Telecommunications Engineering at the
                  University of Moratuwa, where I've maintained academic excellence with a CGPA of 3.92/4.0 and
                  earned a place on the Dean's List for three semesters.
                </p>
                <p>
                  My passion lies in bridging theoretical knowledge with practical applications, particularly in
                  machine learning, computer vision, and software development. I believe in engineering solutions
                  that are not only technically sound but also creatively designed and mathematically precise.
                </p>
                <p>
                  Beyond academics, I enjoy sharing knowledge through tutoring and contributing to technical
                  communities like the Electronic Club at SLRC branch, where I help foster the next generation
                  of engineers.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "CGPA", value: "3.92" },
                { label: "Dean's List", value: "3x" },
                { label: "Projects", value: "12+" },
                { label: "Fields", value: "5+" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-4 text-center">
                  <div className="text-xl font-semibold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-scale-in">
            {achievements.map((achievement, index) => <Card key={index} className="glass hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-3">
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

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  University of Moratuwa
                </CardTitle>
                <p className="text-muted-foreground">2023 – Present</p>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">B.Sc.(Hons) Electronics and Telecommunications Engineering</p>
                <p className="text-muted-foreground">CGPA: 3.92/4.0</p>
                <p className="text-muted-foreground">Dean's List for Semester 1, 2 & 4</p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  Balangoda Ananda Maithreya National School
                </CardTitle>
                <p className="text-muted-foreground">Completed</p>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">G.C.E. Advanced Level (Physical Science)</p>
                <p className="text-muted-foreground">District Rank - 1</p>
                <p className="text-muted-foreground">Island Rank - 28</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;