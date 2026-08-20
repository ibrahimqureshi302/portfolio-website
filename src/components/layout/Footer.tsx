import { profile, socials, navItems } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <a href="#home" className="font-mono text-sm font-medium text-ink">
              <span className="text-blue-soft">&lt;</span>IB<span className="text-cyan">/&gt;</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted leading-relaxed">
              {profile.name} — {profile.title}. Building scalable, API-driven web applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-muted">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ink transition-colors">
                /{item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted hover:text-ink hover:border-blue-soft/60 transition-colors"
              >
                <social.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-line-soft flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[11px] text-faint">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-faint">Built with React · TypeScript · Django REST Framework</p>
        </div>
      </div>
    </footer>
  );
}
