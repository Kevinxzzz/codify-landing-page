import { Globe, ShoppingCart, Settings, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites Profissionais",
    description: "Sites modernos que destacam sua empresa e atraem mais clientes. Otimizados para aparecer no Google e funcionar perfeitamente em celulares.",
    benefits: ["Presença profissional online", "Atrai novos clientes", "Fácil de atualizar"]
  },
  {
    icon: ShoppingCart,
    title: "Lojas Online Completas",
    description: "Venda seus produtos 24 horas por dia com uma loja virtual prática e segura. Gestão simples de estoque, pedidos e pagamentos.",
    benefits: ["Venda sem parar", "Gestão simplificada", "Pagamentos seguros"]
  },
  {
    icon: Settings,
    title: "Sistemas Personalizados",
    description: "Automatize processos, organize informações e economize tempo com um sistema feito sob medida para o seu negócio.",
    benefits: ["Menos trabalho manual", "Mais organização", "Reduz custos"]
  },
  {
    icon: Lightbulb,
    title: "Consultoria Digital",
    description: "Não sabe por onde começar? Ajudamos você a identificar as melhores soluções digitais para alcançar seus objetivos de negócio.",
    benefits: ["Direcionamento claro", "Investimento certeiro", "Estratégia eficaz"]
  }
];

const ServicesSection = () => {
  return (
    <section className="pt-20 pb-0 sm:py-30 mb-15 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            O Que Fazemos Por Você
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções digitais simples e eficientes para fazer seu negócio crescer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-elegant-xl transition-all duration-300 border-2 hover:border-primary/30 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;