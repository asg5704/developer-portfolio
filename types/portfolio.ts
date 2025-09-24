export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  links: {
    github?: string;
    linkedin?: string;
    website?: string;
    twitter?: string;
  };
  skills: Skill[];
  projects: Project[];
  workExperience: WorkExperience[];
}

export interface Skill {
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database & DevOps"
    | "Tools"
    | "Languages";
  logo?: string;
}

export interface WorkExperience {
  companyName: string;
  companyIcon?: string;
  jobTitle: string;
  dates: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  status: "In Progress" | "Completed" | "Archived";
  startDate: string;
  endDate?: string;
}
