import Link from "next/link";
import { WeeklyLog } from "@/types";

interface Props { log: WeeklyLog; }

export default function LogCard({ log }: Props) {
  return (
    <Link href={`/logs/${log.slug}`}
      className="group flex items-stretch border border-border hover:border-coral/30 transition-all bg-surface hover:bg-surface2">
      {/* Week number block */}
      <div className="flex-shrink-0 w-14 sm:w-16 md:w-20 flex flex-col items-center justify-center bg-surface2 group-hover:bg-coral/10 transition-colors border-r border-border p-2 sm:p-3">
        <span className="font-display text-2xl sm:text-3xl md:text-4xl text-coral leading-none">{String(log.week).padStart(2,"0")}</span>
        <span className="font-mono text-[8px] sm:text-[9px] text-muted mt-1 tracking-wider">WEEK</span>
      </div>
      {/* Content */}
      <div className="flex-1 px-3 sm:px-5 py-3 sm:py-4 min-w-0">
        <p className="font-mono text-[9px] sm:text-[10px] text-muted tracking-widest mb-1 sm:mb-2 uppercase">{log.dateRange}</p>
        <h3 className="font-display text-lg sm:text-xl md:text-2xl text-ink group-hover:text-coral transition-colors leading-tight">
          {log.title.toUpperCase()}
        </h3>
        <p className="text-muted text-[11px] sm:text-xs mt-1 sm:mt-2 leading-relaxed line-clamp-2">{log.summary}</p>
      </div>
      {/* Arrow */}
      <div className="flex-shrink-0 flex items-center pr-3 sm:pr-5">
        <span className="text-muted group-hover:text-coral group-hover:translate-x-1.5 transition-all text-sm">→</span>
      </div>
    </Link>
  );
}
