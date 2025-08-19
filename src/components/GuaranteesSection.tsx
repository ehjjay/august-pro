import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Award, 
  FileCheck, 
  DollarSign, 
  Clock, 
  Phone,
  CheckCircle 
} from "lucide-react";

const GuaranteesSection = () => {
  const phoneNumber = "(555) 123-4567";
  
  const guarantees = [
    {
      icon: Award,
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely satisfied with our work, we'll make it right at no additional cost."
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "California State License #123456. Fully insured with $2M liability coverage for your protection."
    },
    {
      icon: FileCheck,
      title: "Written Warranty",
      description: "All sewer line repairs and replacements come with written warranty protection up to 10 years."
    },
    {
      icon: DollarSign,
      title: "Upfront Pricing",
      description: "No hidden fees or surprise charges. You'll know the exact cost before we start any work."
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "We arrive when promised or your service call is free. Your time is valuable and we respect it."
    }
  ];

  const certifications = [
    "California State Licensed Plumber",
    "Better Business Bureau A+ Rating", 
    "Angie's List Super Service Award",
    "HomeAdvisor Elite Service Professional",
    "Fully Bonded & Insured",
    "Workers Compensation Insured"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Guarantees & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We stand behind our work with industry-leading guarantees and maintain the highest 
            professional standards in Lincoln, CA.
          </p>
        </div>
        
        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-card transition-shadow duration-300 border-2 hover:border-success/20">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                  <guarantee.icon size={32} className="text-success" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{guarantee.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{guarantee.description}</p>
            </Card>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="bg-white rounded-2xl p-12 mb-16 shadow-card">
          <h3 className="text-3xl font-bold text-primary text-center mb-8">
            Licensed, Certified & Trusted
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle size={20} className="text-success flex-shrink-0" />
                <span className="text-muted-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="bg-gradient-to-r from-success to-success/80 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fix Your Sewer Problem?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied Lincoln residents who trust us with their sewer line repairs. 
            Call now for your free estimate and same-day service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`tel:${phoneNumber}`}
              className="text-3xl md:text-4xl font-bold text-urgent hover:text-urgent-hover transition-colors"
            >
              {phoneNumber}
            </a>
            <Button 
              variant="urgent" 
              size="lg"
              onClick={() => window.location.href = `tel:${phoneNumber}`}
              className="px-10 py-5 text-xl h-auto"
            >
              <Phone size={24} />
              Get Your Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;