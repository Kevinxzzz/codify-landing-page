export interface TeamMember {
  id: string;
  name: string;
  image?: string;
  role: string;
  bio: string;
  avatar?: string;
  stack: string[];
  github?: string;
  linkedin?: string;
  devto?: string;
  twitter?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image?: string;
  repositoryUrl?: string;
  liveUrl?: string;
  team: string[]; // Array de IDs dos membros
  featured?: boolean;
  link?: string;
}

export interface Technology {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'devops' | 'tools';
  icon?: string;
  experience?: string;
}
