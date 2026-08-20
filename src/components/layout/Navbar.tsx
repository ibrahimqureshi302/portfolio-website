import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(navItems.map((item) => item.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_8px_30px_-16px_rgba(0,0,0,0.5)]" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={handleNavClick("#home")}
          className="font-mono text-sm font-medium text-ink tracking-tight"
          aria-label="Ibrahim Bilal — back to top"
        >
          <span className="text-blue-soft">&lt;</span>IB<span className="text-cyan">/&gt;</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 font-mono text-[13px]">
          {navItems.map((item) => {
            const isActive = activeId === item.href.replace("#", "");
            return (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  onClick={handleNavClick(item.href)}
                  className={`relative flex items-center gap-0.5 px-3 py-2 rounded-md transition-colors ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  <span className={isActive ? "text-mint" : "text-faint"}>/</span>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-md bg-[color-mix(in_srgb,var(--color-blue)_12%,transparent)] border border-line"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <button
            className="lg:hidden glass flex h-9 w-9 items-center justify-center rounded-full text-ink"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden glass border-t border-line overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1 font-mono text-sm">
              {navItems.map((item, i) => {
                const isActive = activeId === item.href.replace("#", "");
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      onClick={handleNavClick(item.href)}
                      className={`flex items-center gap-0.5 py-2.5 ${isActive ? "text-ink" : "text-muted"}`}
                    >
                      <span className={isActive ? "text-mint" : "text-faint"}>/</span>
                      {item.label}
                    </a>
                  </motion.li>
                );
              })}
              <div className="flex sm:hidden items-center gap-3 pt-3 mt-2 border-t border-line">
                <span className="text-faint text-xs">Theme</span>
                <ThemeToggle />
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
