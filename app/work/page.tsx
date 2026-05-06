"use client";
import { useState, useEffect } from "react";
import ProjectCard from "@/components/molecules/ProjectCard";
import { getAllProjects, getCategories } from "@/lib/projects";
import { Project } from "@/types";

const allProjects = getAllProjects();
const categories = getCategories();

const allTechs = Array.from(
  new Set(allProjects.flatMap((p: Project) => p.techStack))
).sort();

export default function WorkPage() {
  const [cat, setCat] = useState("All");
  const [tech, setTech] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filterOpen, setFilterOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filtered = allProjects.filter((p: Project) => {
    const cm = cat === "All" || p.category === cat;
    const tm = tech === "All" || p.techStack.includes(tech);
    return cm && tm;
  });

  return (
    <div className="pt-[60px]">
      {/* Page header */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-16">
          <p className="font-mono text-xs text-coral tracking-widest uppercase mb-3">Documentation</p>
          <h1 className="font-display text-[clamp(2.5rem,8vw,9rem)] leading-none text-ink">ALL WORK</h1>
          <p className="text-muted text-xs sm:text-sm mt-3 sm:mt-4 font-mono">{allProjects.length} activities — 11 weeks — Makerspace Innovhub</p>
        </div>
      </div>

      {/* Sticky filter bar */}
      <div className={`sticky top-[60px] z-40 bg-bg/95 backdrop-blur-xl border-b border-border transition-all duration-300 ${isScrolled ? "py-2" : ""}`}>
        {/* Compact scrolled state - Desktop only */}
        {isScrolled && (
          <div className="hidden sm:block max-w-7xl mx-auto px-5 sm:px-8 py-2 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-[10px] text-muted">Filters:</span>
              {cat !== "All" && (
                <span className="px-2.5 py-1 bg-coral/10 border border-coral/30 text-coral font-mono text-[10px] rounded-sm flex items-center gap-2">
                  {cat}
                  <button onClick={() => setCat("All")} className="hover:text-coral/70">✕</button>
                </span>
              )}
              {tech !== "All" && (
                <span className="px-2.5 py-1 bg-gold/10 border border-gold/30 text-gold font-mono text-[10px] rounded-sm flex items-center gap-2">
                  {tech}
                  <button onClick={() => setTech("All")} className="hover:text-gold/70">✕</button>
                </span>
              )}
              {cat === "All" && tech === "All" && (
                <span className="text-muted text-[10px]">No filters active</span>
              )}
            </div>
            <button
              onClick={() => { setCat("All"); setTech("All"); }}
              className="px-3 py-1.5 font-mono text-[10px] border border-border text-muted hover:border-coral hover:text-coral transition-all rounded-sm flex-shrink-0">
              Reset
            </button>
            <div className="flex gap-1 flex-shrink-0">
              {(["grid","list"] as const).map((v) => (
                <button key={v} onClick={() => setView(v)}
                  className={`px-3 py-1.5 font-mono text-[10px] border transition-all ${view === v ? "border-coral text-coral" : "border-border text-muted"}`}>
                  {v === "grid" ? "⊞" : "≡"}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Full filters - visible when not scrolled or on mobile */}
        <div className={`${isScrolled ? "hidden sm:hidden" : ""} max-w-7xl mx-auto px-5 sm:px-8 py-2 sm:py-3`}>
          <div className="flex items-center justify-between sm:hidden gap-2 mb-0 sm:mb-2">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="px-3 py-1.5 font-mono text-[10px] border border-border text-muted hover:border-coral hover:text-coral transition-all rounded-sm flex items-center gap-2 flex-shrink-0">
              {filterOpen ? "✕ Filters" : "⚙ Filters"}
            </button>
            <span className="font-mono text-[10px] text-muted truncate">
              {filtered.length}/{allProjects.length}
            </span>
            <div className="flex gap-1 ml-auto">
              {(["grid","list"] as const).map((v) => (
                <button key={v} onClick={() => setView(v)}
                  className={`px-2 py-1.5 font-mono text-[10px] border transition-all ${view === v ? "border-coral text-coral" : "border-border text-muted"}`}>
                  {v === "grid" ? "⊞" : "≡"}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop filters always visible */}
          <div className="hidden sm:block">
            {/* Category filter */}
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="font-mono text-[10px] text-muted tracking-widest uppercase w-16 flex-shrink-0">Cat</span>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((c) => (
                  <button key={c} onClick={() => setCat(c)}
                    className={`px-2.5 py-1 font-mono text-[10px] tracking-wide border transition-all ${
                      cat === c ? "bg-coral border-coral text-bg" : "border-border text-muted hover:border-coral/40 hover:text-ink"
                    }`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            {/* Tech filter */}
            <div className="flex items-start gap-2 flex-wrap">
              <span className="font-mono text-[10px] text-muted tracking-widest uppercase w-16 flex-shrink-0 pt-1">Tech</span>
              <div className="flex flex-wrap gap-1.5">
                {["All", ...allTechs].map((t) => (
                  <button key={t} onClick={() => setTech(t)}
                    className={`px-2 py-0.5 font-mono text-[9px] tracking-wide border rounded-sm transition-all ${
                      tech === t ? "bg-gold border-gold text-bg font-semibold" : "border-border text-muted hover:border-gold/40 hover:text-ink"
                    }`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile filters (collapsible) */}
          {filterOpen && (
            <div className="sm:hidden mt-3 pb-3 space-y-2.5 border-t border-border/50 pt-3">
              {/* Category filter mobile */}
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] text-muted tracking-widest uppercase block">Category</span>
                <div className="flex flex-wrap gap-1">
                  {categories.map((c) => (
                    <button key={c} onClick={() => { setCat(c); setFilterOpen(false); }}
                      className={`px-2.5 py-1 font-mono text-[10px] tracking-wide border transition-all rounded-sm ${
                        cat === c ? "bg-coral border-coral text-bg" : "border-border text-muted"
                      }`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              {/* Tech filter mobile */}
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] text-muted tracking-widest uppercase block">Tech</span>
                <div className="flex flex-wrap gap-1">
                  {["All", ...allTechs].map((t) => (
                    <button key={t} onClick={() => { setTech(t); setFilterOpen(false); }}
                      className={`px-2 py-0.5 font-mono text-[9px] tracking-wide border rounded-sm transition-all ${
                        tech === t ? "bg-gold border-gold text-bg font-semibold" : "border-border text-muted"
                      }`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results bar - Desktop only */}
        <div className={`hidden sm:block border-t border-border max-w-7xl mx-auto px-5 sm:px-8 py-2 flex items-center justify-between ${isScrolled ? "hidden" : ""}`}>
          <span className="font-mono text-[11px] text-muted">
            {filtered.length} / {allProjects.length} shown
            {cat !== "All" && <span className="text-coral ml-2">· {cat}</span>}
            {tech !== "All" && <span className="text-gold ml-2">· {tech}</span>}
          </span>
          <div className="flex gap-1">
            {(["grid","list"] as const).map((v) => (
              <button key={v} onClick={() => setView(v)}
                className={`px-3 py-1 font-mono text-[10px] border transition-all ${view === v ? "border-coral text-coral" : "border-border text-muted"}`}>
                {v === "grid" ? "⊞ Grid" : "≡ List"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 sm:py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-16 sm:py-24">
            <p className="font-display text-3xl sm:text-5xl text-muted">NO RESULTS</p>
            <button onClick={() => { setCat("All"); setTech("All"); }}
              className="mt-4 sm:mt-6 px-6 py-2 border border-coral text-coral font-mono text-sm hover:bg-coral hover:text-bg transition-all">
              Clear Filters
            </button>
          </div>
        ) : view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {filtered.map((p: Project) => <ProjectCard key={p.id} project={p} />)}
          </div>
        ) : (
          <div className="divide-y divide-border border border-border">
            {filtered.map((p: Project) => (
              <div key={p.id} className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 hover:bg-surface transition-colors group">
                <span className="font-mono text-[10px] text-muted w-12 sm:w-14 flex-shrink-0">W{p.week}</span>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0" style={{
                  background: { Frontend:"#3b82f6", Mobile:"#a78bfa", Research:"#f0c040", "UI/UX":"#34d399", "Full Stack":"#ff5533", Event:"#f472b6" }[p.category] || "#666"
                }} />
                <div className="flex-1 min-w-0">
                  <p className="font-display text-base sm:text-lg text-ink group-hover:text-coral transition-colors truncate">{p.title.toUpperCase()}</p>
                  <p className="text-muted text-[11px] sm:text-xs truncate mt-0.5">{p.description}</p>
                </div>
                <div className="hidden sm:flex gap-1 flex-shrink-0">
                  {p.techStack.slice(0,3).map((t) => (
                    <span key={t} className="tag bg-surface2 text-muted border border-border">{t}</span>
                  ))}
                  {p.techStack.length > 3 && <span className="tag bg-surface2 text-muted border border-border">+{p.techStack.length-3}</span>}
                </div>
                <span className="font-mono text-[10px] text-muted flex-shrink-0 hidden md:block">{p.completionDate}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
