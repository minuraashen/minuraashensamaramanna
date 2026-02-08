import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]"></div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-7 sm:space-y-9 animate-fade-in order-2 lg:order-1">
            <div className="flex justify-center lg:justify-start">
              <div className="glass rounded-full px-4 py-1.5 text-xs sm:text-sm text-muted-foreground">
                Available for internships • 2026
              </div>
            </div>

            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Building <span className="text-gradient">intelligent</span>
                <br />
                systems with human-centered design
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Electronics & Telecommunications Engineering undergraduate specializing in machine learning, computer vision, and full-stack development.
              </p>
            </div>

            <div className="max-w-xl mx-auto lg:mx-0">
              <Card className="glass shadow-glow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-center lg:justify-start gap-3 text-base sm:text-lg">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    Focus Areas
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-muted-foreground justify-center lg:justify-start">
                    {[
                      "Computer Vision",
                      "Machine Learning",
                      "AI Systems",
                      "Embedded Engineering",
                      "Full-Stack Development",
                    ].map((item) => (
                      <span key={item} className="px-3 py-1 bg-muted/70 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow text-sm sm:text-base px-7 py-3 rounded-full"
                onClick={scrollToAbout}
              >
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border/70 text-foreground hover:bg-muted/60 rounded-full"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
              {[
                { label: "Projects", value: "12+" },
                { label: "CGPA", value: "3.92" },
                { label: "Years", value: "2+" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-3 text-center">
                  <div className="text-xl font-semibold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              {[
                { href: "mailto:samaramannama.22@uom.lk", icon: Mail, label: "Email" },
                { href: "https://linkedin.com/in/minura-ashen", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/minuraashen", icon: Github, label: "GitHub" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full glass hover:bg-muted/60 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center animate-scale-in order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-primary rounded-[2.5rem] blur-2xl opacity-50"></div>
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] glass rounded-[2rem] shadow-2xl border border-primary/20 overflow-hidden">
                <img
                  src={profilePicture}
                  alt="Minura Ashen Samaramanna"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;