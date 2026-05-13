import Link from "next/link";
import { getFeaturedProjects, getAllProjects } from "@/lib/projects";
import { getAllLogSlugs } from "@/lib/logs";
import ProjectCard from "@/components/molecules/ProjectCard";
import MarqueeBanner from "@/components/molecules/MarqueeBanner";
import SkillsGrid from "@/components/molecules/SkillsGrid";

const timeline = [
  { week: "01–02", date: "Feb 9–20", label: "Orientation · Landing Page · Node.js", cat: "Frontend" },
  { week: "03", date: "Feb 23–27", label: "Hack4Mapandan Assigned · Sentiment Analysis Research", cat: "Research" },
  { week: "04", date: "Mar 3–6", label: "MediTrack Dev Begins · H4M Presentation", cat: "Full Stack" },
  { week: "05", date: "Mar 9–13", label: "Flutter Mobile App · Firebase Integration", cat: "Mobile" },
  { week: "06", date: "Mar 16–19", label: "Edit Profile · Avatar Upload · Push Notifications", cat: "Mobile" },
  { week: "07", date: "Mar 23–27", label: "UI Polish · Bug Fixing Across Platforms", cat: "UI/UX" },
  { week: "08", date: "Apr 7–10", label: "Cross-Platform Bug Fixes · Hackathon Prep", cat: "Full Stack" },
  { week: "09", date: "Apr 13–17", label: "MediTrack H4M → Deployed to Vercel 🚀", cat: "Full Stack", highlight: true },
  { week: "10", date: "Apr 20–25", label: "Full Mobile UI Overhaul · Comprehensive Bug Hunt", cat: "UI/UX" },
  { week: "11", date: "Apr 27–May 2", label: "Final UI Refinements · Portfolio Development", cat: "Frontend" },
];

const catColor: Record<string, string> = {
  "Frontend": "bg-blue-500",
  "Mobile": "bg-purple-500",
  "Research": "bg-yellow-500",
  "Full Stack": "bg-coral",
  "UI/UX": "bg-teal-400",
  "Event": "bg-pink-500",
};

export default function Home() {
  const featured = getFeaturedProjects();
  const total = getAllProjects().length;
  const weeksCount = getAllLogSlugs().length;

  return (
    <div className="pt-[60px]">
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] sm:min-h-[92vh] grid-bg flex items-center justify-center overflow-hidden">
        {/* Decorative coral blob */}
        <div className="absolute top-10 sm:top-20 right-0 w-[250px] sm:w-[420px] h-[250px] sm:h-[420px] rounded-full bg-coral/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 sm:bottom-10 -left-5 sm:left-10 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full bg-gold/5 blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full text-center">
          {/* Status pill */}
          <div className="anim-fade d1 inline-flex items-center gap-2.5 border border-border bg-surface px-3 py-1.5 rounded-sm mb-6 sm:mb-8 mx-auto">
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs text-muted tracking-widest">OJT IN PROGRESS · MAKERSPACE INNOVHUB · 2026</span>
          </div>

          {/* Name — giant editorial type */}
          <h1 className="font-display text-[clamp(2.5rem,9vw,13rem)] leading-[0.88] tracking-wide text-ink anim-up d2 glitch" data-text="JAN-JAN">
            JAN-JAN
          </h1>
          <h1 className="font-display text-[clamp(2.5rem,9vw,13rem)] leading-[0.88] tracking-wide text-coral anim-up d3 glitch" data-text="LAGUAN">
            LAGUAN
          </h1>

          {/* Role + description row */}
          <div className="mt-6 sm:mt-8 flex flex-col items-center sm:flex-row justify-center gap-4 sm:gap-16 anim-up d4">
            <div className="border-l-2 border-coral pl-3 sm:pl-4">
              <p className="font-mono text-[10px] sm:text-xs text-muted uppercase tracking-widest mb-1">Role</p>
              <p className="font-serif text-lg sm:text-xl text-ink italic">Front-End &amp; Mobile Developer</p>
            </div>
            <div className="border-l-2 border-border pl-3 sm:pl-4">
              <p className="font-mono text-[10px] sm:text-xs text-muted uppercase tracking-widest mb-1">Company</p>
              <p className="font-serif text-lg sm:text-xl text-ink italic">Makerspace Innovhub</p>
            </div>
            <div className="border-l-2 border-border pl-3 sm:pl-4">
              <p className="font-mono text-[10px] sm:text-xs text-muted uppercase tracking-widest mb-1">School</p>
              <p className="font-serif text-lg sm:text-xl text-ink italic">University of Eastern Pangasinan</p>
            </div>
          </div>

          <p className="mt-6 sm:mt-8 text-muted max-w-xl mx-auto leading-relaxed text-xs sm:text-sm anim-up d5">
            Built <span className="text-ink font-medium">MediTrack</span> — a full-stack medication adherence platform — from web frontend to Flutter mobile app, Firebase backend, and Vercel deployment. {total} documented activities across {weeksCount} OJT weeks.
          </p>

          {/* CTA row */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 anim-up d6">
            <Link href="/work" className="px-6 sm:px-7 py-2.5 sm:py-3 bg-coral text-bg font-mono text-xs sm:text-sm tracking-wide hover:bg-coral/85 transition-all hover:scale-105 active:scale-95">
              View All Work →
            </Link>
            <Link href="/logs" className="px-6 sm:px-7 py-2.5 sm:py-3 border border-border text-muted font-mono text-xs sm:text-sm tracking-wide hover:border-ink hover:text-ink transition-all">
              Read Logs
            </Link>
          </div>
        </div>

        {/* Floating week counter */}
        <div className="absolute bottom-10 right-8 hidden lg:flex flex-col items-center gap-2 anim-fade d8">
          <div className="w-px h-16 bg-border" />
          <div className="border border-border bg-surface p-4 text-center">
            <p className="font-display text-5xl text-coral">{weeksCount}</p>
            <p className="font-mono text-[10px] text-muted tracking-widest mt-1">WEEKS</p>
          </div>
          <div className="border border-border bg-surface p-4 text-center">
            <p className="font-display text-5xl text-gold">{total}</p>
            <p className="font-mono text-[10px] text-muted tracking-widest mt-1">TASKS</p>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeBanner />

      {/* ── STATS ── */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
            {[
              { n: `${weeksCount}`, label: "Weeks Logged", sub: "Feb–May 2026" },
              { n: `${total}+`, label: "Activities Done", sub: "Across all weeks" },
              { n: "500", label: "OJT Hours", sub: "Practicum target" },
              { n: "2", label: "Platforms", sub: "Web + Mobile" },
            ].map(({ n, label, sub }) => (
              <div key={label} className="py-6 sm:py-10 px-4 sm:px-10 text-center group cursor-default">
                <p className="font-display text-4xl sm:text-6xl text-ink group-hover:text-coral transition-colors">{n}</p>
                <p className="text-ink/70 text-xs sm:text-sm mt-2 font-medium">{label}</p>
                <p className="text-muted text-[10px] sm:text-xs font-mono mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="py-14 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between mb-8 sm:mb-14">
          <div>
            <p className="font-mono text-xs text-coral tracking-widest uppercase mb-2 sm:mb-3">Selected Work</p>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-ink">FEATURED</h2>
          </div>
          <Link href="/work" className="hidden sm:block font-mono text-sm text-muted hover:text-coral transition-colors underline-anim">
            All {total} activities →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {featured.map((p, i) => (
            <div key={p.id} className={`anim-up d${i + 1}`}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS GRID ── */}
      <SkillsGrid />

      {/* ── TIMELINE ── */}
      <section className="py-14 sm:py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="font-mono text-xs text-coral tracking-widest uppercase mb-2 sm:mb-3">Chronology</p>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-ink mb-10 sm:mb-14">TIMELINE</h2>

          <div className="relative">
            <div className="hidden sm:block absolute left-[100px] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-1 sm:space-y-2">
              {timeline.map((item, i) => (
                <div key={i} className={`flex gap-3 sm:gap-8 items-start group ${item.highlight ? "anim-up" : ""}`}>
                  {/* Week */}
                  <div className="hidden sm:flex flex-col items-end w-[88px] flex-shrink-0 pt-3">
                    <span className="font-mono text-[10px] text-muted tracking-wider">W{item.week}</span>
                    <span className="font-mono text-[9px] text-dim mt-0.5">{item.date}</span>
                  </div>
                  {/* Dot */}
                  <div className={`hidden sm:flex flex-shrink-0 mt-[14px] w-3 h-3 rounded-full ${catColor[item.cat] || "bg-dim"} ${item.highlight ? "ring-4 ring-coral/25 animate-pulse" : ""}`} />
                  {/* Card */}
                  <div className={`flex-1 flex items-center gap-2 sm:gap-3 py-2 sm:py-3 px-3 sm:px-5 border-b border-border group-hover:border-coral/20 transition-colors ${item.highlight ? "bg-coral/5 border border-coral/20 rounded-sm border-b-0" : ""}`}>
                    <div className="flex-1 min-w-0">
                      <div className="sm:hidden flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-mono text-[9px] text-muted">W{item.week}</span>
                        <span className="font-mono text-[9px] text-dim">{item.date}</span>
                      </div>
                      <p className={`text-xs sm:text-sm leading-relaxed ${item.highlight ? "text-ink font-medium" : "text-ink/70 group-hover:text-ink transition-colors"}`}>
                        {item.label}
                      </p>
                    </div>
                    <span className={`tag hidden sm:inline-flex flex-shrink-0 ${item.highlight ? "bg-coral text-bg font-semibold" : "bg-surface2 text-muted border border-border"}`}>
                      {item.cat}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BLOCK ── */}
      <section className="py-14 sm:py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <p className="font-mono text-xs text-coral tracking-widest uppercase mb-4 sm:mb-6">What&apos;s Next</p>
          <h2 className="font-display text-[clamp(2rem,7vw,7rem)] leading-tight text-ink mb-4 sm:mb-6">
            SEE ALL<br /><span className="text-coral">WORK →</span>
          </h2>
          <p className="text-muted text-xs sm:text-sm max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed">
            Filter by category or tech stack. Every activity, every week, documented in full.
          </p>
          <Link href="/work" className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-coral text-bg font-mono text-xs sm:text-sm tracking-widest hover:bg-coral/85 transition-all hover:scale-105">
            BROWSE ALL {total} ACTIVITIES
          </Link>
        </div>
      </section>
    </div>
  );
}
