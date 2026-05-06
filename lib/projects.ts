import projectsData from "@/data/projects.json";
import { Project } from "@/types";

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getFeaturedProjects(): Project[] {
  return (projectsData as Project[]).filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  return (projectsData as Project[]).filter((p) => p.category === category);
}

export function getCategories(): string[] {
  const cats = (projectsData as Project[]).map((p) => p.category);
  return ["All", ...Array.from(new Set(cats))];
}

export function getTechStacks(): string[] {
  const techs = (projectsData as Project[]).flatMap((p) => p.techStack);
  return ["All", ...Array.from(new Set(techs)).sort()];
}
