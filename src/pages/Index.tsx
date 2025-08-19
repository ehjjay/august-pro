import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteesSection from "@/components/GuaranteesSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <TestimonialsSection />
      <GuaranteesSection />
    </main>
  );
};

export default Index;
