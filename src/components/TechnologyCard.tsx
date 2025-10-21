import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Technology } from "@/types/portfolio";

interface TechnologyCardProps {
  technology: Technology;
}

const categoryColors = {
  frontend: "bg-primary/10 text-primary",
  backend: "bg-secondary/10 text-secondary",
  mobile: "bg-accent/10 text-accent",
  database: "bg-muted text-muted-foreground",
  devops: "bg-destructive/10 text-destructive-foreground",
  tools: "bg-muted text-muted-foreground",
};

export const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <CardContent className="p-6 text-center space-y-3">
        <div
          className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl font-bold ${
            categoryColors[technology.category]
          }`}
        >
          {technology.name.charAt(0)}
        </div>
        <h3 className="font-semibold text-lg">{technology.name}</h3>
        {technology.experience && (
          <p className="text-sm text-muted-foreground">
            {technology.experience}
          </p>
        )}
        <Badge variant="outline" className="text-xs capitalize">
          {technology.category}
        </Badge>
      </CardContent>
    </Card>
  );
};
