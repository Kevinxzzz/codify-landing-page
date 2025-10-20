import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-muted">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
          />
          {project.featured && (
            <Badge className="absolute top-3 right-3" variant="default">
              Destaque
            </Badge>
          )}
        </div>
      )}
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {project.name}
          {!project.image && project.featured && (
            <Badge variant="default">Destaque</Badge>
          )}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {project.repositoryUrl && (
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              Código
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button variant="default" size="sm" asChild className="flex-1">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Ver Projeto
            </a>
          </Button>
        )}
        {project.link && (
          <Button
            variant="link"
            size="sm"
            asChild
            className=" flex-1 text-xl text-sm hover:underline"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Veja mais
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
