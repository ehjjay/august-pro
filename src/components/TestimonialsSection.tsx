import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Lincoln, CA",
      rating: 5,
      text: "Our main sewer line collapsed and was flooding our basement. They came out within 2 hours on a Sunday and had it fixed by evening. Professional, fast, and reasonably priced. Highly recommend!",
      service: "Emergency Sewer Line Repair"
    },
    {
      name: "Mike Rodriguez",
      location: "Lincoln, CA", 
      rating: 5,
      text: "Used their trenchless repair service and couldn't be happier. They fixed our damaged line without tearing up our entire yard. The crew was clean, professional, and explained everything clearly.",
      service: "Trenchless Sewer Repair"
    },
    {
      name: "Jennifer Chen",
      location: "Lincoln, CA",
      rating: 5,
      text: "After getting quotes from 3 other companies, these guys provided the most honest assessment and fair pricing. They did exactly what they promised with no surprises. Great local business!",
      service: "Sewer Line Replacement"
    },
    {
      name: "Robert Davis",
      location: "Lincoln, CA",
      rating: 5,
      text: "Thought we needed a complete replacement but their camera inspection showed it was just a partial blockage. Saved us thousands! Honest, knowledgeable, and truly care about their customers.",
      service: "Sewer Camera Inspection"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Lincoln Residents Say About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what your neighbors in Lincoln say about our sewer line repair services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 relative hover:shadow-card transition-shadow duration-300">
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote size={40} />
              </div>
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              {/* Customer Info */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Sewer Lines Repaired</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;