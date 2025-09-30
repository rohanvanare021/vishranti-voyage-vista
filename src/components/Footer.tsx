import { Heart } from "lucide-react";

interface FooterProps {
  language: string;
}

const Footer = ({ language }: FooterProps) => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground mb-2">
            {language === "mr"
              ? "© 2024 विश्रांती टूर्स. सर्व हक्क राखीव."
              : "© 2024 Vishranti Tours. All rights reserved."}
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            {language === "mr" ? "यासह तयार केले" : "Made with"}{" "}
            <Heart className="h-4 w-4 fill-destructive text-destructive animate-pulse" />{" "}
            {language === "mr" ? "सातारामध्ये" : "in Satara"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
