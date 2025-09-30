import { Card, CardContent } from "@/components/ui/card";
import andaman from "@/assets/andaman.jpg";
import kashi from "@/assets/kashi.jpg";
import kerala from "@/assets/kerala.jpg";
import rajasthan from "@/assets/rajasthan.jpg";
import dubai from "@/assets/dubai.jpg";
import kashmir from "@/assets/kashmir.jpg";

interface ToursProps {
  language: string;
}

const Tours = ({ language }: ToursProps) => {
  const tours = [
    {
      name: language === "mr" ? "अंदमान निकोबार" : "Andaman Nicobar",
      image: andaman,
    },
    {
      name: language === "mr" ? "काशी चारधाम" : "Kashi Chardham",
      image: kashi,
    },
    {
      name: language === "mr" ? "केरळ" : "Kerala",
      image: kerala,
    },
    {
      name: language === "mr" ? "राजस्थान" : "Rajasthan",
      image: rajasthan,
    },
    {
      name: language === "mr" ? "दुबई" : "Dubai",
      image: dubai,
    },
    {
      name: language === "mr" ? "काश्मीर, हिमाचल, उत्तराखंड" : "Kashmir, Himachal, Uttarakhand",
      image: kashmir,
    },
  ];

  const additionalTours = language === "mr"
    ? ["ओडिशा", "व्हिएतनाम", "नर्मदा परिक्रमा", "पिठापूर"]
    : ["Odisha", "Vietnam", "Narmada Parikrama", "Pithapur"];

  return (
    <section id="tours" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {language === "mr" ? "लोकप्रिय टूर्स" : "Popular Tours"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "mr"
              ? "आमच्या सर्वात लोकप्रिय गंतव्यस्थानांचा आनंद घ्या - आपल्या स्वप्नातील सहलीसाठी योग्य पॅकेज निवडा"
              : "Explore our most popular destinations - Choose the perfect package for your dream vacation"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tours.map((tour, index) => (
            <Card 
              key={tour.name} 
              className="group overflow-hidden hover-lift cursor-pointer border-2 hover:border-primary transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {tour.name}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional tours as badges */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">
            {language === "mr" ? "अजून बरेच..." : "And Many More..."}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTours.map((tour) => (
              <span
                key={tour}
                className="px-6 py-3 bg-primary/10 text-primary border-2 border-primary/30 rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                {tour}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;
