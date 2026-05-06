import { Project } from "@/types";
import Badge from "@/components/atoms/Badge";

const catColors: Record<string, string> = {
  Frontend: "#3b82f6", Mobile: "#a78bfa", Research: "#f0c040",
  "UI/UX": "#34d399", "Full Stack": "#ff5533", Event: "#f472b6",
};

interface Props { project: Project; }

export default function ProjectCard({ project }: Props) {
  const color = catColors[project.category] || "#ff5533";
  return (
    <div className="card-lift group relative bg-surface border border-border p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 h-full overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: color, opacity: 0.6 }} />

      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
          <span className="font-mono text-[9px] sm:text-[10px] text-muted tracking-widest">WEEK {project.week}</span>
        </div>
        <Badge label={project.category} variant="cat" />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl sm:text-2xl leading-tight text-ink group-hover:text-coral transition-colors">
        {project.title.toUpperCase()}
      </h3>

      {/* Highlight */}
      {project.highlight && (
        <p className="font-mono text-[10px] sm:text-[11px] text-coral/80 leading-relaxed border-l border-coral/30 pl-3">
          ✦ {project.highlight}
        </p>
      )}

      {/* Description */}
      <p className="text-muted text-xs leading-relaxed flex-1">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-2 sm:pt-3 border-t border-border">
        {project.techStack.map((t) => <Badge key={t} label={t} />)}
      </div>

      {/* Date */}
      <p className="font-mono text-[9px] sm:text-[10px] text-dim">{project.completionDate}</p>
    </div>
  );
}
