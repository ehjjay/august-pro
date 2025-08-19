import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Shield, Clock, Award, Users, Wrench } from "lucide-react";

const WhyChooseUs = () => {
  const phoneNumber = "(555) 123-4567";
  
  const benefits = [
    {
      icon: Clock,
      title: "Emergency Response",
      description: "24/7 availability with same-day service. We understand sewer emergencies can't wait."
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed California plumbers with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: Users,
      title: "Lincoln Local Experts",
      description: "Over 15 years serving Lincoln, CA. We know the local sewer systems and common issues."
    },
    {
      icon: Award,
      title: "100% Satisfaction Guarantee",
      description: "We stand behind our work. If you're not completely satisfied, we'll make it right."
    },
    {
      icon: Wrench,
      title: "Advanced Equipment",
      description: "State-of-the-art camera inspection and trenchless repair technology for minimal disruption."
    },
    {
      icon: Phone,
      title: "Upfront Pricing",
      description: "No surprises. Free estimates with transparent, competitive pricing before we start any work."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Lincoln Residents Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When you're dealing with a sewer emergency, you need experts you can trust. 
            Here's why we're Lincoln's preferred choice for sewer line repair.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-card transition-shadow duration-300 border-2 hover:border-primary/20">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <benefit.icon size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Don't Let Sewer Problems Get Worse
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sewer line issues only get more expensive over time. Call Lincoln's trusted experts now for fast, professional repair.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`tel:${phoneNumber}`}
              className="text-2xl md:text-3xl font-bold text-urgent hover:text-urgent-hover transition-colors"
            >
              {phoneNumber}
            </a>
            <Button 
              variant="urgent" 
              size="lg"
              onClick={() => window.location.href = `tel:${phoneNumber}`}
              className="px-8 py-4 text-lg h-auto"
            >
              <Phone size={20} />
              Get Emergency Service Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;