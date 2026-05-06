export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  completionDate: string;
  category: "Frontend" | "Mobile" | "Research" | "UI/UX" | "Full Stack" | "Event";
  week: number;
  featured?: boolean;
  highlight?: string;
}

export interface WeeklyLog {
  slug: string;
  week: number;
  dateRange: string;
  title: string;
  summary: string;
  content: string;
}

export interface Activity {
  date: string;
  description: string;
}
