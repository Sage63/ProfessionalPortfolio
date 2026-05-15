"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/logs", label: "Logs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg/90 backdrop-blur-xl border-b border-border" : ""}`}>
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[60px] flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
          <div className="w-7 sm:w-8 h-7 sm:h-8 bg-coral rounded-sm flex items-center justify-center group-hover:rotate-12 transition-transform flex-shrink-0">
            <span className="font-display text-bg text-base sm:text-lg leading-none">J</span>
          </div>
          <span className="font-mono text-[10px] sm:text-xs text-muted tracking-widest uppercase hidden sm:inline">Jan-Jan Laguan</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href}
                aria-current={active ? "page" : undefined}
                className={`px-4 py-2 text-sm font-mono tracking-wide transition-all rounded-sm ${
                  active ? "text-coral border-b border-coral" : "text-muted hover:text-ink"
                }`}>
                {active && <span className="text-coral mr-1">→</span>}{label}
              </Link>
            );
          })}
          <a href="https://github.com/Sage63" target="_blank" rel="noopener noreferrer"
            className="ml-4 px-4 py-1.5 border border-coral text-coral text-xs font-mono rounded-sm hover:bg-coral hover:text-bg transition-all">
            GitHub ↗
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
        >
          <span className={`block w-5 h-px bg-ink transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-ink transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-ink transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="sm:hidden bg-bg border-b border-border px-5 pb-4 pt-2 flex flex-col gap-3">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className={`font-display text-2xl py-2 ${pathname === href ? "text-coral" : "text-ink hover:text-coral"} transition-colors`}>
              {label}
            </Link>
          ))}
          <a href="https://github.com/Sage63" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
            className="border border-coral text-coral text-xs font-mono py-2 px-3 rounded-sm hover:bg-coral hover:text-bg transition-all inline-flex items-center justify-center">
            GitHub ↗
          </a>
        </div>
      )}
    </header>
  );
}
