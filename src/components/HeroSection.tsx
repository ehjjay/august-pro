import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/plumbing-hero.jpg";

const HeroSection = () => {
  const phoneNumber = "(555) 123-4567";
  
  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Emergency Badge */}
          <div className="inline-flex items-center gap-2 bg-urgent/20 text-urgent-foreground border border-urgent/30 rounded-full px-6 py-2 mb-6 font-semibold">
            <Clock size={16} />
            24/7 Emergency Service Available
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Lincoln's #1 
            <span className="text-urgent block">Sewer Line Repair</span>
            Experts
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fast, reliable sewer line repair and replacement services in Lincoln, CA. 
            Licensed plumbers ready to solve your emergency sewer problems today.
          </p>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-white/80">
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-success" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-success" />
              <span className="font-medium">Lincoln Local Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-success" />
              <span className="font-medium">Same-Day Service</span>
            </div>
          </div>
          
          {/* Large Phone Number */}
          <div className="mb-8">
            <a 
              href={`tel:${phoneNumber}`}
              className="block text-3xl md:text-5xl font-bold text-urgent hover:text-urgent-hover transition-colors duration-200"
            >
              {phoneNumber}
            </a>
            <p className="text-white/80 mt-2 text-lg">Tap to call on mobile</p>
          </div>
          
          {/* Call Now Button */}
          <Button 
            variant="call-now" 
            size="lg"
            onClick={handleCallNow}
            className="px-12 py-6 text-2xl h-auto mb-4"
          >
            <Phone size={24} />
            CALL NOW FOR EMERGENCY SERVICE
          </Button>
          
          {/* Guarantee */}
          <p className="text-white/90 font-medium">
            ⭐ 100% Satisfaction Guarantee • Free Estimates ⭐
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;