import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Languages, ZoomIn, ZoomOut, Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

interface HeaderProps {
  language: string;
  toggleLanguage: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

const Header = ({ language, toggleLanguage, increaseFontSize, decreaseFontSize }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = language === "mr" 
    ? ["गृहपृष्ठ", "टूर्स", "सेवा", "प्रतिक्रिया", "संपर्क"]
    : ["Home", "Tours", "Services", "Reviews", "Contact"];
  
  const navIds = ["hero", "tours", "services", "reviews", "contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="Vishranti Tours Logo" className="h-14 w-14 rounded-full object-cover shadow-md" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Vishranti Tours</h1>
              <p className="text-xs text-muted-foreground">फक्त फिरा, एन्जॉय करा...</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(navIds[index])}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={decreaseFontSize}
              className="h-9 w-9"
              title={language === "mr" ? "फॉन्ट आकार कमी करा" : "Decrease font size"}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={increaseFontSize}
              className="h-9 w-9"
              title={language === "mr" ? "फॉन्ट आकार वाढवा" : "Increase font size"}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2"
            >
              <Languages className="h-4 w-4" />
              {language === "mr" ? "English" : "मराठी"}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(navIds[index])}
                  className="text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="mx-4 mt-2 flex items-center justify-center gap-2"
              >
                <Languages className="h-4 w-4" />
                {language === "mr" ? "English" : "मराठी"}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
