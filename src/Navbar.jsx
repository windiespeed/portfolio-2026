export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-warm-border/40 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          aria-label="Windie Victoria – home"
          className="flex items-center gap-2.5 shrink-0 group"
        >
          <img
            src={theme === 'light' ? '/logos/wvDarkFillOutline.svg' : '/logos/wvLightFillOutline.svg'}
            alt=""
            aria-hidden="true"
            className="h-7 w-auto"
          />
          <span className="font-mono font-bold text-sm tracking-tight group-hover:text-neon-pink transition-colors duration-300">
            windie<span aria-hidden="true" className="text-neon-green">.</span>victoria
          </span>
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
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-warm-border text-text-secondary hover:border-neon-pink hover:text-neon-pink transition-all duration-200"
          >
            {theme === 'dark' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4"/>
                <line x1="12" y1="2" x2="12" y2="6"/>
                <line x1="12" y1="18" x2="12" y2="22"/>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                <line x1="2" y1="12" x2="6" y2="12"/>
                <line x1="18" y1="12" x2="22" y2="12"/>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
