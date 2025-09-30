import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  language: string;
}

const Hero = ({ language }: HeroProps) => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(6, 78, 92, 0.75), rgba(6, 78, 92, 0.85)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {language === "mr" ? "विश्रांती टूर्स" : "Vishranti Tours"}
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-3 font-medium">
              {language === "mr" 
                ? "आपल्या प्रवासाचा विश्वासू साथीदार" 
                : "Your Trusted Travel Companion"}
            </p>
            <p className="text-xl md:text-2xl text-secondary italic font-semibold mb-8">
              फक्त फिरा, एन्जॉय करा...
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              {language === "mr"
                ? "भारत आणि भारताबाहेरील सहलींचे संपूर्ण नियोजन - हनीमून पॅकेजेस, फॅमिली टूर्स, कस्टमाइझ्ड टूर्स आणि सर्व प्रवास सेवा"
                : "Complete tour planning for India and international destinations - Honeymoon packages, family tours, customized trips, and all travel services"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-6"
                onClick={scrollToContact}
              >
                <Phone className="mr-2 h-5 w-5" />
                {language === "mr" ? "आता संपर्क साधा" : "Contact Us Now"}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-6"
                onClick={() => {
                  const element = document.getElementById("tours");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Mail className="mr-2 h-5 w-5" />
                {language === "mr" ? "टूर्स पहा" : "Explore Tours"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="hsl(var(--background))" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
