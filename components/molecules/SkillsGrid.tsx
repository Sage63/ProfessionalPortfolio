const skills = [
  { name: "React / Next.js", level: 85, cat: "Frontend" },
  { name: "Tailwind CSS", level: 90, cat: "Frontend" },
  { name: "TypeScript", level: 72, cat: "Frontend" },
  { name: "Flutter / Dart", level: 78, cat: "Mobile" },
  { name: "Firebase", level: 80, cat: "Backend" },
  { name: "Node.js", level: 65, cat: "Backend" },
  { name: "UI/UX Design", level: 82, cat: "Design" },
  { name: "Git / GitHub", level: 75, cat: "DevOps" },
];

const catColors: Record<string, string> = {
  Frontend: "#ff5533",
  Mobile: "#a78bfa",
  Backend: "#f0c040",
  Design: "#34d399",
  DevOps: "#60a5fa",
};

export default function SkillsGrid() {
  return (
    <section className="py-14 sm:py-24 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="font-mono text-xs text-coral tracking-widest uppercase mb-2 sm:mb-3">Capabilities</p>
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-ink mb-10 sm:mb-14">SKILLS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="group p-4 sm:p-5 border border-border hover:border-coral/30 transition-colors">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: catColors[skill.cat] }} />
                  <span className="text-xs sm:text-sm text-ink font-medium truncate">{skill.name}</span>
                </div>
                <span className="font-mono text-[10px] sm:text-xs text-muted flex-shrink-0 ml-2">{skill.level}%</span>
              </div>
              <div className="h-1 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 group-hover:opacity-100 opacity-60"
                  style={{ width: `${skill.level}%`, background: catColors[skill.cat] }}
                />
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] text-muted mt-2 inline-block">{skill.cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
