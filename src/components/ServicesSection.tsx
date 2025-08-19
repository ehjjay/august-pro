import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Camera, 
  Shovel, 
  Droplets, 
  AlertTriangle, 
  Phone,
  CheckCircle 
} from "lucide-react";

const ServicesSection = () => {
  const phoneNumber = "(555) 123-4567";
  
  const services = [
    {
      icon: AlertTriangle,
      title: "Emergency Sewer Line Repair",
      description: "24/7 emergency response for broken, collapsed, or severely damaged sewer lines causing immediate problems.",
      features: ["Same-day service", "Emergency dispatch", "Damage assessment", "Immediate repairs"]
    },
    {
      icon: Camera,
      title: "Sewer Camera Inspection",
      description: "Advanced camera technology to locate exact problems without digging up your property unnecessarily.",
      features: ["HD video inspection", "Precise problem location", "Detailed diagnosis", "Cost-effective solution"]
    },
    {
      icon: Wrench,
      title: "Trenchless Sewer Repair",
      description: "Modern repair methods that fix your sewer line with minimal excavation and landscape disruption.",
      features: ["Minimal digging", "Faster completion", "Less property damage", "Long-lasting results"]
    },
    {
      icon: Shovel,
      title: "Complete Sewer Line Replacement",
      description: "Full sewer line replacement for severely damaged systems using the latest techniques and materials.",
      features: ["High-quality materials", "Expert installation", "Code compliance", "Long-term warranty"]
    },
    {
      icon: Droplets,
      title: "Drain Cleaning & Maintenance",
      description: "Professional drain cleaning to prevent sewer backups and maintain optimal flow throughout your system.",
      features: ["Hydro jetting", "Root removal", "Preventive maintenance", "System optimization"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Expert Sewer Line Services in Lincoln, CA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From emergency repairs to complete replacements, we provide comprehensive sewer line solutions 
            using the most advanced equipment and techniques available.
          </p>
          <div className="inline-flex items-center gap-2 bg-success/10 text-success border border-success/20 rounded-full px-6 py-2 font-semibold">
            <CheckCircle size={16} />
            All Services Include Free Estimate & Satisfaction Guarantee
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-card transition-shadow duration-300 border-2 hover:border-primary/20">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon size={32} className="text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={16} className="text-success flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Sewer Emergency? We're Here to Help!
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait for the problem to get worse. Call Lincoln's sewer repair experts now 
            for immediate assistance and professional solutions.
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
              Call for Immediate Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;