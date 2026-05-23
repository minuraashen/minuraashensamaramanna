import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.3
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <svg className="absolute -top-24 -left-24 w-96 h-96 opacity-30 dark:opacity-20" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="600" height="600" rx="120" fill="url(#g1)" />
        </svg>

        <svg className="absolute -bottom-32 right-8 w-80 h-80 opacity-20 dark:opacity-10" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="200" cy="200" r="180" fill="hsl(var(--accent) / 0.12)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <motion.div variants={itemVariants} className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-medium tracking-wide">
                Welcome to my engineering space
              </motion.div>
              <motion.h1 
                variants={itemVariants} 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-semibold leading-tight text-foreground"
              >
                <span className="block">Minura Ashen</span>
                <span className="block bg-gradient-primary bg-clip-text text-transparent">Samaramanna</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants} 
                className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 px-2 lg:px-0"
              >
                B.Sc.(Hons) Electronic and Telecommunication Engineering — University of Moratuwa
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="max-w-lg mx-auto lg:mx-0">
              <div className="glass-card rounded-3xl p-5 border border-border/30 hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-sm font-semibold tracking-wide text-foreground uppercase">Areas of Interest</div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/10">Computer Vision</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/10">Machine Learning</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/10">Software Development</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/10">Embedded Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground hover:opacity-95 transition-all duration-300 shadow-lg shadow-primary/25 border-none"
                onClick={scrollToAbout}
              >
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                className="text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full hover:bg-muted transition-all duration-300 border border-border" 
                asChild
              >
                <a href="/cv.pdf" download="Minura_Ashen_CV.pdf">
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start mt-2">
              <a href="mailto:samaramannama.22@uom.lk" className="p-3 rounded-full bg-muted hover:bg-gradient-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300" title="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/minura-ashen" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-muted hover:bg-gradient-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300" title="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/minuraashen" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-muted hover:bg-gradient-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300" title="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Profile Picture Frame */}
          <div className="flex justify-center order-1 lg:order-2">
            <motion.div 
              className="relative"
              variants={profileVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="absolute -inset-2 bg-gradient-primary rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] bg-card rounded-full shadow-2xl border-4 border-border/40 overflow-hidden flex items-center justify-center">
                <img 
                  src={profilePicture} 
                  alt="Minura Ashen Samaramanna" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
