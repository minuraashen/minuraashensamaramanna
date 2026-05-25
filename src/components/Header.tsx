import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">Minura Ashen Samaramanna</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group">
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>)}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button variant="outline" onClick={() => scrollToSection("#contact")} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200">
                  {item.name}
                </button>)}
              <Button variant="outline" onClick={() => scrollToSection("#contact")} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit">
                Get In Touch
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;