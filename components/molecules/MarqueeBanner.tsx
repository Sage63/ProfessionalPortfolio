export default function MarqueeBanner() {
  const items = [
    "React", "★", "Flutter", "★", "Firebase", "★", "Next.js", "★",
    "TypeScript", "★", "Tailwind CSS", "★", "Node.js", "★", "MediTrack",
    "★", "Vercel", "★", "UI/UX Design", "★", "Mobile Dev", "★",
    "React", "★", "Flutter", "★", "Firebase", "★", "Next.js", "★",
    "TypeScript", "★", "Tailwind CSS", "★", "Node.js", "★", "MediTrack",
    "★", "Vercel", "★", "UI/UX Design", "★", "Mobile Dev", "★",
  ];
  return (
    <div className="overflow-hidden border-y border-border bg-surface py-2 sm:py-3 select-none">
      <div className="marquee-inner">
        {items.map((item, i) => (
          <span key={i} className={`mx-2 sm:mx-4 font-mono text-[10px] sm:text-xs tracking-widest whitespace-nowrap uppercase ${item === "★" ? "text-coral" : "text-muted"}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
