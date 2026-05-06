export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-16 sm:mt-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        <div>
          <p className="font-display text-3xl sm:text-4xl text-coral">JJL.</p>
          <p className="text-muted text-xs font-mono mt-2 leading-relaxed">
            Front-End & Mobile Developer<br />
            OJT @ Makerspace Innovhub
          </p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-2 sm:mb-3">School</p>
          <p className="text-ink/80 text-sm">University of Eastern Pangasinan</p>
          <p className="text-muted text-xs mt-1">College of Information Technology</p>
          <p className="text-muted text-xs">2nd Semester 2025–2026</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-2 sm:mb-3">Supervisor</p>
          <p className="text-ink/80 text-sm">Carl Daniel F. Estrada, MIH</p>
          <p className="text-muted text-xs mt-1">Makerspace Innovhub</p>
          <p className="text-muted text-xs mt-3">OJT Coordinator: Jessabel P. Alancado</p>
        </div>
      </div>
      <div className="border-t border-border max-w-7xl mx-auto px-5 sm:px-8 py-3 sm:py-4 flex flex-col sm:flex-row sm:justify-between text-muted text-xs font-mono gap-2 sm:gap-0">
        <span>© {year} Jan-Jan Laguan</span>
        <span>Built with Next.js + Tailwind CSS</span>
      </div>
    </footer>
  );
}
