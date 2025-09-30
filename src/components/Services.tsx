import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Users, 
  Hotel, 
  Sparkles, 
  FileCheck, 
  Plane, 
  Bus, 
  Train,
  Briefcase 
} from "lucide-react";

interface ServicesProps {
  language: string;
}

const Services = ({ language }: ServicesProps) => {
  const services = [
    {
      icon: Heart,
      title: language === "mr" ? "हनीमून पॅकेजेस" : "Honeymoon Packages",
      description: language === "mr" 
        ? "रोमँटिक आणि विशेष हनीमून अनुभव" 
        : "Romantic and special honeymoon experiences",
    },
    {
      icon: Users,
      title: language === "mr" ? "फॅमिली टूर्स" : "Family Tours",
      description: language === "mr"
        ? "संपूर्ण कुटुंबासाठी मजेदार सहली"
        : "Fun trips for the whole family",
    },
    {
      icon: Hotel,
      title: language === "mr" ? "हॉटेल बुकिंग" : "Hotel Booking",
      description: language === "mr"
        ? "सर्वोत्तम किमतीत आरामदायक राहण्याची व्यवस्था"
        : "Comfortable accommodation at best prices",
    },
    {
      icon: Sparkles,
      title: language === "mr" ? "कस्टमाइझ्ड टूर्स" : "Customized Tours",
      description: language === "mr"
        ? "आपल्या आवडीनुसार तयार केलेले टूर पॅकेजेस"
        : "Tour packages tailored to your preferences",
    },
    {
      icon: FileCheck,
      title: language === "mr" ? "पासपोर्ट / व्हिसा" : "Passport / Visa",
      description: language === "mr"
        ? "पासपोर्ट आणि व्हिसा सेवा"
        : "Passport and visa services",
    },
    {
      icon: Plane,
      title: language === "mr" ? "फ्लाइट तिकिट बुकिंग" : "Flight Ticket Booking",
      description: language === "mr"
        ? "देश-विदेशातील फ्लाइट तिकिटे"
        : "Domestic and international flight tickets",
    },
    {
      icon: Bus,
      title: language === "mr" ? "बस बुकिंग" : "Bus Booking",
      description: language === "mr"
        ? "आरामदायक बस प्रवास"
        : "Comfortable bus travel",
    },
    {
      icon: Train,
      title: language === "mr" ? "रेल्वे तिकिट बुकिंग" : "Railway Ticket Booking",
      description: language === "mr"
        ? "ट्रेन तिकिट बुकिंग सेवा"
        : "Train ticket booking services",
    },
    {
      icon: Briefcase,
      title: language === "mr" ? "स्टाफ रिट्रीट" : "Staff Retreats",
      description: language === "mr"
        ? "कॉर्पोरेट आणि संघटनांसाठी विशेष सहली"
        : "Special trips for corporates and organizations",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {language === "mr" ? "आमच्या सेवा" : "Our Services"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "mr"
              ? "प्रवासासाठी आवश्यक असलेल्या सर्व सेवा एकाच ठिकाणी"
              : "All travel services you need under one roof"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover-lift border-2 hover:border-primary transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 border-2 border-primary/30">
            <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
              {language === "mr" 
                ? "भारत आणि भारताबाहेरील सहलींचे संपूर्ण नियोजन" 
                : "Complete tour planning for India and international destinations"}
            </p>
            <p className="text-lg text-muted-foreground">
              {language === "mr"
                ? "आपल्या प्रवासाला आमचा विश्वास द्या"
                : "Trust us for your travel needs"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
