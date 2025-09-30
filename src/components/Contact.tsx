import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactProps {
  language: string;
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error(
        language === "mr"
          ? "कृपया सर्व आवश्यक माहिती भरा"
          : "Please fill all required fields"
      );
      return;
    }

    // In a real app, this would send data to a server
    toast.success(
      language === "mr"
        ? "धन्यवाद! आम्ही लवकरच संपर्क करू"
        : "Thank you! We will contact you soon"
    );
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: language === "mr" ? "पत्ता" : "Address",
      content: "102, शिवानी हाईट्स, मल्हार पेठ\nपोलीस मुख्यालयाजवळ\nसातारा - 412002",
    },
    {
      icon: Phone,
      title: language === "mr" ? "फोन" : "Phone",
      content: "+91 98765 43210\n+91 87654 32109",
    },
    {
      icon: Mail,
      title: language === "mr" ? "ईमेल" : "Email",
      content: "info@vishrantitours.com\nvishranti.tours@gmail.com",
    },
    {
      icon: Clock,
      title: language === "mr" ? "कामाचे तास" : "Working Hours",
      content: language === "mr"
        ? "सोमवार - शनिवार\n9:00 AM - 8:00 PM"
        : "Monday - Saturday\n9:00 AM - 8:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {language === "mr" ? "आमच्याशी संपर्क साधा" : "Contact Us"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "mr"
              ? "आपल्या प्रवासासाठी आजच नियोजन सुरू करा"
              : "Start planning your journey today"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={info.title}
                  className="group hover-lift border-2 hover:border-primary transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <Card className="border-2 hover:border-primary transition-all duration-300">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {language === "mr" ? "नाव *" : "Name *"}
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={language === "mr" ? "आपले नाव" : "Your name"}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {language === "mr" ? "फोन नंबर *" : "Phone Number *"}
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder={language === "mr" ? "मोबाइल नंबर" : "Mobile number"}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {language === "mr" ? "ईमेल" : "Email"}
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={language === "mr" ? "ईमेल पत्ता" : "Email address"}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {language === "mr" ? "संदेश *" : "Message *"}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={language === "mr" 
                      ? "आपला संदेश येथे लिहा..." 
                      : "Write your message here..."}
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  size="lg"
                >
                  {language === "mr" ? "संदेश पाठवा" : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
