export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-warm-border/40 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          aria-label="Windie Victoria – home"
          className="font-mono font-bold text-sm tracking-tight hover:text-neon-pink transition-colors duration-300 shrink-0"
        >
          windie<span aria-hidden="true" className="text-neon-green">.</span>victoria
        </a>
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 text-xs sm:text-sm text-text-secondary font-medium">
          <a href="#projects" className="hover:text-text-primary transition-colors">Projects</a>
          <a href="#skills" className="hover:text-text-primary transition-colors">Ecosystem</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Download resume (opens PDF)"
            className="text-text-primary hover:text-neon-green transition-colors flex items-center gap-1"
          >
            Resume <span aria-hidden="true" className="text-xs font-mono">↓</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
