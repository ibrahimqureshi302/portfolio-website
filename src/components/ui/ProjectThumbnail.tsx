interface ProjectThumbnailProps {
  gradient: [string, string];
  glyph: string;
  screenshot?: string;
  screenshotAlt?: string;
}

export function ProjectThumbnail({ gradient, glyph, screenshot, screenshotAlt }: ProjectThumbnailProps) {
  const id = `grad-${glyph}`;

  if (screenshot) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-[var(--color-surface-2)]">
        {/* browser chrome, matching the abstract thumbnails for visual consistency */}
        <div className="absolute top-0 left-0 right-0 h-[10%] min-h-6 flex items-center gap-1.5 px-3 z-10 bg-elevated">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: gradient[0], opacity: 0.6 }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: gradient[1], opacity: 0.6 }} />
          <span className="h-1.5 w-1.5 rounded-full bg-faint opacity-50" />
        </div>
        <img
          src={screenshot}
          alt={screenshotAlt ?? ""}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(180deg, transparent 55%, rgba(10,11,15,0.5) 100%)" }}
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl">
      <svg viewBox="0 0 400 250" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradient[0]} stopOpacity="0.35" />
            <stop offset="100%" stopColor={gradient[1]} stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <rect width="400" height="250" fill="var(--color-surface-2)" />
        <rect width="400" height="250" fill={`url(#${id})`} />

        {/* browser chrome */}
        <rect x="0" y="0" width="400" height="26" fill="var(--color-elevated)" />
        <circle cx="16" cy="13" r="3.5" fill={gradient[0]} opacity="0.6" />
        <circle cx="28" cy="13" r="3.5" fill={gradient[1]} opacity="0.6" />
        <circle cx="40" cy="13" r="3.5" fill="var(--color-faint)" opacity="0.5" />
        <rect x="60" y="7" width="140" height="12" rx="6" fill="var(--color-void)" opacity="0.5" />

        {/* abstract UI blocks */}
        <rect x="20" y="46" width="90" height="180" rx="10" fill="white" opacity="0.04" />
        <rect x="34" y="60" width="62" height="8" rx="4" fill="white" opacity="0.12" />
        <rect x="34" y="78" width="45" height="6" rx="3" fill="white" opacity="0.08" />
        <rect x="34" y="100" width="62" height="30" rx="6" fill={gradient[0]} opacity="0.18" />
        <rect x="34" y="140" width="62" height="30" rx="6" fill="white" opacity="0.06" />
        <rect x="34" y="180" width="62" height="30" rx="6" fill="white" opacity="0.06" />

        <rect x="126" y="46" width="254" height="86" rx="10" fill="white" opacity="0.05" />
        <rect x="126" y="144" width="122" height="82" rx="10" fill="white" opacity="0.05" />
        <rect x="258" y="144" width="122" height="82" rx="10" fill="white" opacity="0.05" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display text-5xl font-bold tracking-tight opacity-90"
          style={{
            backgroundImage: `linear-gradient(120deg, ${gradient[0]}, ${gradient[1]})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {glyph}
        </span>
      </div>
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent 40%, rgba(10,11,15,0.65) 100%)" }}
      />
    </div>
  );
}
