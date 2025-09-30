import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface ReviewsProps {
  language: string;
}

const Reviews = ({ language }: ReviewsProps) => {
  const reviews = [
    {
      name: language === "mr" ? "राजेश पाटील" : "Rajesh Patil",
      location: language === "mr" ? "सातारा" : "Satara",
      rating: 5,
      text: language === "mr"
        ? "विश्रांती टूर्स सोबतचा अनुभव अप्रतिम होता! केरळचा प्रवास खूपच छान व्यवस्थित होता. प्रत्येक गोष्ट नीटनेटकी होती."
        : "Amazing experience with Vishranti Tours! Our Kerala trip was perfectly organized. Everything was well managed.",
    },
    {
      name: language === "mr" ? "प्रिया देशमुख" : "Priya Deshmukh",
      location: language === "mr" ? "पुणे" : "Pune",
      rating: 5,
      text: language === "mr"
        ? "आमच्या हनीमूनसाठी अंदमानची योजना त्यांनी केली. खूपच छान अनुभव होता. धन्यवाद विश्रांती टूर्स!"
        : "They planned our Andaman honeymoon. It was a wonderful experience. Thank you Vishranti Tours!",
    },
    {
      name: language === "mr" ? "संजय कुलकर्णी" : "Sanjay Kulkarni",
      location: language === "mr" ? "कराड" : "Karad",
      rating: 5,
      text: language === "mr"
        ? "संपूर्ण कुटुंबासोबत राजस्थानची सहल गेलो. सर्व काही उत्तम होते. खूप आनंद झाला!"
        : "Went to Rajasthan with the whole family. Everything was excellent. Had a great time!",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {language === "mr" ? "ग्राहकांच्या प्रतिक्रिया" : "Customer Reviews"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "mr"
              ? "आमच्या समाधानी ग्राहकांचे अनुभव वाचा"
              : "Read experiences from our satisfied customers"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={review.name}
              className="group hover-lift border-2 hover:border-primary transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-16 w-16 text-primary" />
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed relative z-10">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            {language === "mr"
              ? "आणि अजून हजारो समाधानी ग्राहक..."
              : "And thousands more happy customers..."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
