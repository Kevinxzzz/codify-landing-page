import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.png";
import projectRestaurant from "@/assets/project-restaurant.png";
import projectSystem from "@/assets/project-system.png";
import projectDashboard from "@/assets/project-dashboard.png";
import projectLandingPage from "@/assets/project-landingPage.png";
import projectApp from "@/assets/project-app.png";

const projects = [
    {
    image: projectLandingPage,
    title: "Landing Page",
    description: "landing page institucional para apresentar a empresa e captar leads.",
    category: "Empreendimento",
    result: "1x pedido",
  },
  {
    image: projectDashboard,
    title: "Dashboad gestão e performace",
    description: "dashboard de gestão. Aumenta a produtividade e eficiência operacional.",
    category: "Empreendimento",
    result: "1x pedido",
  },
  {
    image: projectApp,
    title: "APP mobile",
    description: "Aplicativos mobile. Facilita o acesso remoto ao seu cliente.",
    category: "Empreendimento",
    result: "1x pedido",
  },
  {
    image: projectEcommerce,
    title: "Loja Virtual Fashion Store",
    description: "E-commerce completo que aumentou as vendas em 85% nos primeiros 3 meses",
    category: "Loja Online",
    result: ""
  },
  {
    image: projectRestaurant,
    title: "Site Restaurante Sabor & Arte",
    description: "Site moderno com cardápio digital que triplicou os pedidos online",
    category: "Site Profissional",
    result: ""
  },
  {
    image: projectSystem,
    title: "Sistema de Gestão Clínica Vida",
    description: "Plataforma personalizada que reduziu 60% do tempo em tarefas administrativas",
    category: "Sistema Personalizado",
    result: ""
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-20 sm:py-25 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Projetos Que Transformaram Negócios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja alguns exemplos de como ajudamos empresas a alcançar seus objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-elegant-xl transition-all duration-300 border-2 hover:border-primary/30"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.link}>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <span className="text-sm font-semibold">Ver Detalhes</span>
                    <ExternalLink className="w-5 h-5" />
                  </div>
                    </a>
                </div> */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-success">
                    {project.result}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;