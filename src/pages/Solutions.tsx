import ServicesSection from "@/components/ServicesSection";
import FeedbackSection from "@/components/FeedbacksSection";

const Solutions = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <ServicesSection />
      <FeedbackSection />
    </section>
  );
};

export default Solutions;
