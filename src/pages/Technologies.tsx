import { Code2 } from "lucide-react";
import { TechnologyCard } from "@/components/TechnologyCard";
import { technologies } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Technologies = () => {
  const categories = Array.from(new Set(technologies.map((t) => t.category)));

  const getTechsByCategory = (category: string) =>
    technologies.filter((t) => t.category === category);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Code2 className="h-16 w-16 mx-auto text-primary mb-6" />
          <h1 className="text-5xl font-bold mb-4">Nosso Stack</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que dominamos para criar soluções de alta
            qualidade
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-12 h-auto gap-2">
            <TabsTrigger value="all">Todas</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={tech.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <TechnologyCard technology={tech} />
                </div>
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent
              key={category}
              value={category}
              className="animate-fade-in"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {getTechsByCategory(category).map((tech, index) => (
                  <div
                    key={tech.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <TechnologyCard technology={tech} />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Technologies;
