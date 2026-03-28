import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.jpg";
import { useAOS } from "@/hooks/useAOS";

const Hero = () => {
  useAOS();
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative SVG shapes inspired by the COZYDIADORA shot */}
      <svg className="absolute -top-24 -left-24 w-96 h-96 opacity-40 pointer-events-none" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="600" height="600" rx="120" fill="url(#g1)" />
      </svg>

      <svg className="absolute -bottom-32 right-8 w-80 h-80 opacity-30 pointer-events-none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="200" cy="200" r="180" fill="hsl(var(--accent) / 0.08)" />
      </svg>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-semibold leading-tight text-foreground">
                <span className="block">Minura Ashen</span>
                <span className="block bg-gradient-primary bg-clip-text text-transparent">Samaramanna</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 px-2 lg:px-0">
                B.Sc.(Hons) Electronic and Telecommunication Engineering — University of Moratuwa
              </p>
            </div>

            <div className="max-w-lg mx-auto lg:mx-0">
              <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-card">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-sm font-medium">Areas of Interest</div>
                    <div className="flex flex-wrap gap-2 mt-2 text-xs text-muted-foreground">
                      <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm">Computer Vision</span>
                      <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm">Machine Learning</span>
                      <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm">Software Development</span>
                      <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm">Embedded Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-3">
              <Button
                size="lg"
                variant="outline"
                className="text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 border-2 border-primary"
                onClick={scrollToAbout}
              >
                Explore My Work
                <ArrowDown className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>

              <Button size="lg" variant="outline" className="text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 border-2 border-primary" asChild>
                <a href="https://drive.google.com/file/d/14BODnIbDgJ1688B4h-lY94IEgQTY5MZT/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download CV
                  <Download className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </Button>
            </div>

            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start mt-2">
              <a href="mailto:samaramannama.22@uom.lk" className="p-2 sm:p-3 rounded-full bg-muted hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://linkedin.com/in/minura-ashen" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 rounded-full bg-muted hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://github.com/minuraashen" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 rounded-full bg-muted hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Profile Picture with cozy card styling */}
          <div className="flex justify-center animate-scale-in order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-primary rounded-3xl blur-2xl opacity-40 animate-float"></div>
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-card rounded-3xl shadow-card border border-border overflow-hidden flex items-center justify-center">
                <img src={profilePicture} alt="Minura Ashen Samaramanna" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
