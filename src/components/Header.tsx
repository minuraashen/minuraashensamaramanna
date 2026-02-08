import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  return <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg sm:text-xl font-bold text-gradient tracking-wide">
            Minura Ashen Samaramanna
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 rounded-full glass px-2 py-2">
            {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="px-4 py-2 text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-200">
                {item.name}
              </button>)}
            <Button variant="outline" onClick={() => scrollToSection("#contact")} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden glass rounded-full p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3 glass rounded-2xl p-4">
              {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-muted/60">
                  {item.name}
                </button>)}
              <Button variant="outline" onClick={() => scrollToSection("#contact")} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit rounded-full">
                Get In Touch
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;