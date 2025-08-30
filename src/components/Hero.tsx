import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-foreground">Minura Ashen</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Samaramanna
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 px-2 lg:px-0">
                Engineering Practical and Efficient Solutions with Creative and Mathematical Precision
              </p>
            </div>

            <div className="max-w-lg mx-auto lg:mx-0">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center justify-center lg:justify-start gap-3 text-base sm:text-lg">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary"></div>
                    Areas of Interest
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground justify-center lg:justify-start">
                    <span className="px-2 py-1 sm:px-3 sm:py-1 bg-muted rounded-full">Computer Vision</span>
                    <span className="px-2 py-1 sm:px-3 sm:py-1 bg-muted rounded-full">Machine Learning</span>
                    <span className="px-2 py-1 sm:px-3 sm:py-1 bg-muted rounded-full">AI</span>
                    <span className="px-2 py-1 sm:px-3 sm:py-1 bg-muted rounded-full">Fullstack Development</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3" 
                onClick={scrollToAbout}
              >
                Explore My Work
                <ArrowDown className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>

            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              <a 
                href="mailto:samaramannama.22@uom.lk" 
                className="p-2 sm:p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/minura-ashen" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 sm:p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a 
                href="https://github.com/minuraashen" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 sm:p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center animate-scale-in order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-50 animate-float"></div>
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-muted to-muted/50 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-primary/20 flex items-center justify-center">
                <div className="text-muted-foreground text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-bold text-primary">MA</span>
                  </div>
                  <p className="text-sm sm:text-base">Profile Picture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;