import { getAllLogSlugs, getLogBySlug, getAllLogs } from "@/lib/logs";
import Link from "next/link";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllLogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const log = await getLogBySlug(slug);
  return { title: `${log.title} | Jan-Jan Laguan`, description: log.summary };
}

export default async function LogPage({ params }: Props) {
  const { slug } = await params;
  const log = await getLogBySlug(slug);
  const all = await getAllLogs();
  const idx = all.findIndex((l) => l.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <div className="pt-[60px]">
      {/* Header */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8 sm:py-16">
          <Link href="/logs" className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-coral transition-colors mb-6 sm:mb-8 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> All Logs
          </Link>
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-coral text-bg flex-shrink-0">
              <span className="font-display text-2xl sm:text-4xl leading-none">{String(log.week).padStart(2,"0")}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] text-muted tracking-widest uppercase">Week {log.week}</span>
              <p className="font-mono text-xs text-coral mt-0.5">{log.dateRange}</p>
            </div>
          </div>
          <h1 className="font-display text-[clamp(2rem,5vw,5rem)] leading-none text-ink">{log.title.toUpperCase()}</h1>
          <p className="text-muted mt-4 sm:mt-5 text-xs sm:text-sm leading-relaxed max-w-2xl font-serif italic sm:text-base">{log.summary}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 sm:py-14">
        <div className="w-full h-px bg-border mb-8 sm:mb-10" />
        <article className="log-content" dangerouslySetInnerHTML={{ __html: log.content }} />
      </div>

      {/* Nav */}
      <div className="border-t border-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-4 sm:py-6 grid grid-cols-2 gap-2 sm:gap-4">
          {prev ? (
            <Link href={`/logs/${prev.slug}`} className="group border border-border p-3 sm:p-4 hover:border-coral/30 transition-all">
              <span className="font-mono text-[9px] sm:text-[10px] text-muted block mb-1">← Previous</span>
              <span className="font-display text-base sm:text-lg text-ink group-hover:text-coral transition-colors line-clamp-2">{prev.title.toUpperCase()}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/logs/${next.slug}`} className="group border border-border p-3 sm:p-4 hover:border-coral/30 transition-all text-right">
              <span className="font-mono text-[9px] sm:text-[10px] text-muted block mb-1">Next →</span>
              <span className="font-display text-base sm:text-lg text-ink group-hover:text-coral transition-colors line-clamp-2">{next.title.toUpperCase()}</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
