import { TeamMember, Project, Technology } from "@/types/portfolio";
import rodrigo from "@/assets/team/rodrigo.jpeg";
import kevin from "@/assets/team/kevin.jpeg";
import jeffson from "@/assets/team/jeffson.jpeg";
import gabriel from "@/assets/team/gabriel.jpg";
import talles from "@/assets/team/talles.png";
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Rodrigo Araujo",
    image: rodrigo,
    role: "Software Engineer & Mobile Developer",
    bio: "legenda",
    stack: ["Flutter"],
    github: "https://github.com/rodrigocc/rodrigocc",
    linkedin: "https://www.linkedin.com/in/rodrigo-araujos/",
  },
  {
    id: "2",
    name: "Kevin Maravilha",
    image: kevin,
    role: "Full Stack Developer",
    bio: "Full Stack Developer focused on creating complete and efficient solutions. I have a preference for the logic and structure of front-end development, but never give up on a clean, organized, and visually pleasing design.",
    stack: ["NodeJS", " React", "Next", "Express", "Figma"],
    github: "https://github.com/Kevinxzzz",
    linkedin: "https://www.linkedin.com/in/kevinmaravilha",
  },
  {
    id: "3",
    name: "Jeffson Luiz",
    image: jeffson,
    role: "Full Stack Developer",
    bio: "Looking back, we were the luckiest people in the world; there was no choice but to be pioneers; no time to be beginners.\nn-Margaret Hamilton",
    stack: ["NodeJS", " React", "Next", "NestJS", "Express"],
    github: "https://github.com/jeff-ao",
    linkedin: "https://www.linkedin.com/in/jeffson-luiz",
  },
  {
    id: "4",
    name: "Gabriel Cabral",
    image: gabriel,
    role: "Backend Developer",
    bio: "legenda",
    stack: ["Java", "PostgreSQL"],
    github: "https://github.com/GabrielCabral-DS",
    linkedin: "https://www.linkedin.com/in/gabriel-cabral-878482262/",
  },
  {
    id: "5",
    name: "Talles Carrelo",
    image: talles,
    role: "Designer UX/UI",
    bio: "legenda",
    stack: ["NodeJS", " React", "Next", "Figma"],
    github: "https://github.com/tallescarrelo",
    linkedin: "https://www.linkedin.com/in/tallesalbuquerque/",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "SIGA (Landing Page) - Saude, Inspiração, Gestão e Atitude",
    description: "Plataforma de apresentação da empresa.",
    longDescription:
      "Sistema desenvolvido para apresentar o intuito e conceito da empresa.",
    technologies: ["Java", "React", "PostgreSQL"],
    team: ["1"],
    link: "https://landing-page-siga.vercel.app",
    featured: true,
  },
  {
    id: "2",
    name: "SIGA (APP) - Saude, Inspiração, Gestão e Atitude",
    description: "Plataforma MOBILE de acesso aos funcionarios.",
    longDescription:
      "Sistema desenvolvido com arquitetura moderna voltado para aplicação mobile.",
    technologies: ["Java", "Flutter", "PostgreSQL"],
    team: ["1"],
    link: "https://play.google.com/store/apps/details?id=com.gestao.iscp_app&pli=1",
    featured: true,
  },
  {
    id: "3",
    name: "SIGA (Dashboard) - Saude, Inspiração, Gestão e Atitude",
    description:
      "Plataforma de gestão da performace de funcionários de uma empresa.",
    longDescription:
      "Sistema desenvolvido com arquitetura moderna voltado para aplicação mobile.",
    technologies: ["Java", "Flutter", "PostgreSQL"],
    team: ["1"],
    link: "https://iscpdashboard.vercel.app",
    featured: true,
  },
];

export const technologies: Technology[] = [
  { id: "1", name: "React", category: "frontend", experience: "" },
  { id: "3", name: "TypeScript", category: "frontend", experience: "" },
  { id: "4", name: "Tailwind CSS", category: "frontend", experience: "" },
  { id: "5", name: "Node.js", category: "backend", experience: "" },
  { id: "6", name: "Java", category: "backend", experience: "" },
  { id: "7", name: "PostgreSQL", category: "database", experience: "" },
  { id: "13", name: "Flutter", category: "mobile", experience: "" },
  { id: "14", name: "Figma", category: "tools", experience: "" },
  { id: "15", name: "Git", category: "tools", experience: "" },
];
