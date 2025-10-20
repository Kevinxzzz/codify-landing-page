import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import FeedbackSection from "@/components/FeedbacksSection";

const Solutions = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
        <PortfolioSection />
        <ServicesSection />
        <FeedbackSection />
    </section>
  );
};

export default Solutions;
