import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState("mr"); // Default to Marathi
  const [fontSize, setFontSize] = useState(16);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 2, 12));
  };

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <div className="min-h-screen">
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        increaseFontSize={increaseFontSize}
        decreaseFontSize={decreaseFontSize}
      />
      <Hero language={language} />
      <Tours language={language} />
      <Services language={language} />
      <Reviews language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
