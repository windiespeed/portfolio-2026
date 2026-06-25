export default function Footer() {
  return (
    <footer className="border-t border-warm-border mt-24 bg-surface-dark/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold tracking-tight mb-2">Let's build something meaningful.</h2>
          <p className="text-sm text-text-secondary font-mono">
            Learning Experience Engineering // Custom Software Systems
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:windiespeed@gmail.com"
            className="px-6 py-3 bg-surface-dark text-text-primary border border-warm-border text-sm font-medium rounded-lg transition-all duration-300 hover:border-neon-green hover:text-neon-green"
          >
            Connect via Email
          </a>
          <a href="https://www.facebook.com/windie.speed.2025/" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center bg-surface-dark border border-warm-border rounded-lg text-text-secondary transition-all duration-300 hover:border-neon-green hover:text-neon-green">
            <svg width="16" height="16" aria-hidden="true"><use href="/icons.svg#facebook-icon" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/windiespeed/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center bg-surface-dark border border-warm-border rounded-lg text-text-secondary transition-all duration-300 hover:border-neon-green hover:text-neon-green">
            <svg width="16" height="16" aria-hidden="true"><use href="/icons.svg#linkedin-icon" /></svg>
          </a>
          <a href="https://github.com/windiespeed" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 flex items-center justify-center bg-surface-dark border border-warm-border rounded-lg text-text-secondary transition-all duration-300 hover:border-neon-green hover:text-neon-green">
            <svg width="16" height="16" aria-hidden="true"><use href="/icons.svg#github-icon" /></svg>
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 flex flex-wrap justify-between items-center gap-2 text-xs font-mono text-text-secondary/80">
        <span>© {new Date().getFullYear()} Windie Victoria LLC. All rights reserved.</span>
        <span className="text-neon-pink/60 flex flex-wrap gap-x-2 gap-y-1 justify-center md:justify-end">
          <a href="mailto:windiespeed@gmail.com" className="hover:text-neon-pink transition-colors">windiespeed@gmail.com</a>
          <span aria-hidden="true">|</span>
          <a href="tel:+16015751317" className="hover:text-neon-pink transition-colors">601.575.1317</a>
        </span>
      </div>
    </footer>
  );
}
