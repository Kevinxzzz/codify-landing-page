import { Link } from "react-router-dom";
import { ArrowRight, Code2, Users, Rocket, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/mockData";
import { ProjectCard } from "@/components/ProjectCard";
import heroTeam from "@/assets/hero-team.jpg";
import imageHome from "@/assets/imageHome.png";
const Home = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroTeam})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-background/90 backdrop-blur-[2px]" />
        <div className="container py-16 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-4xl font-bold leading-tight">
              Transformamos
              <span className="text-primary"> ideias </span>
              em Softwares e soluções 
            </h1>
            <p className="text-xl md:text-1xl text-muted-foreground max-w-2xl mx-auto">
              Somos uma equipe apaixonada por tecnologia, focada em criar
              soluções inovadoras e escaláveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gap-2">
                <Link to="/projects">
                  Ver Projetos
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/team">Conheça a Equipe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 px-4 bg-muted/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "4+", label: "Desenvolvedores" },
              { icon: Code2, value: "5+", label: "Tecnologias" },
              { icon: Rocket, value: "3", label: "Projetos" },
              { icon: Award, value: "100%", label: "Dedicação" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center items-center gap-2">
                  <stat.icon className="h-6 w-6 text-primary" />
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-xl text-muted-foreground">
              Conheça alguns dos nossos melhores trabalhos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">Ver Todos os Projetos</Link>
            </Button>
          </div>
        </div>
      </section>
              {/* Hero + CTA */}
              <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="space-y-8 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        Transformando Ideias em Realidade
                      </span>
                    </div>
        
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                      Soluções Digitais que Fazem Seu Negócio{" "}
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Crescer
                      </span>
                    </h1>
        
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                      Criamos sites, lojas virtuais e sistemas personalizados para
                      empresas que querem resultados reais. Simples assim.
                    </p>
        
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button onClick={scrollToContact} className="cta group">
                        <Link to="/solutions">Veja nossas soluções</Link> 
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline" size="lg" className="border-2" asChild>
                        <Link to="/contact">Entre em Contato</Link>
                      </Button>
                    </div>
                    <div className="relative animate-slide-up">
            </div>
                  </div>
            <div className="relative rounded-2xl overflow-hidden shadow-elegant-xl">
              <img 
                src={imageHome} 
                alt="Equipe de negócios celebrando sucesso"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
                </div>
              </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-xl text-muted-foreground">
              O que nos move todos os dias
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Código Limpo",
                description:
                  "Acreditamos em código bem escrito, testado e documentado para facilitar manutenção e escalabilidade.",
              },
              {
                title: "Colaboração",
                description:
                  "Trabalhamos em equipe, compartilhamos conhecimento e crescemos juntos através do feedback construtivo.",
              },
              {
                title: "Inovação",
                description:
                  "Estamos sempre explorando novas tecnologias e metodologias para entregar as melhores soluções.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
