import { getAllLogs } from "@/lib/logs";
import LogCard from "@/components/molecules/LogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly Logs | Jan-Jan Laguan",
  description: "11 weeks of OJT activity logs at Makerspace Innovhub.",
};

export default async function LogsPage() {
  const logs = await getAllLogs();
  return (
    <div className="pt-[60px]">
      {/* Header */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-16">
          <p className="font-mono text-xs text-coral tracking-widest uppercase mb-2 sm:mb-3">Activity Records</p>
          <h1 className="font-display text-[clamp(2.5rem,8vw,9rem)] leading-none text-ink">WEEKLY<br />LOGS</h1>
          <p className="text-muted text-xs sm:text-sm mt-3 sm:mt-4 font-mono">{logs.length} weeks documented · Makerspace Innovhub · 2026</p>
        </div>
      </div>

      {/* Log list */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
        <div className="space-y-2">
          {logs.map((log, i) => (
            <div key={log.slug} className={`anim-up d${Math.min(i + 1, 9)}`}>
              <LogCard log={log} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
