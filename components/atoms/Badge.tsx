interface BadgeProps {
  label: string;
  variant?: "tech" | "cat" | "accent" | "outline";
}
const v = {
  tech: "bg-surface2 text-muted border border-border",
  cat: "bg-coral/10 text-coral border border-coral/25",
  accent: "bg-gold text-bg font-semibold border-none",
  outline: "bg-transparent text-ink/60 border border-border",
};
export default function Badge({ label, variant = "tech" }: BadgeProps) {
  return <span className={`tag ${v[variant]}`}>{label}</span>;
}
