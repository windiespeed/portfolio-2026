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
        <a
          href="mailto:hello@windievictoria.com"
          className="px-6 py-3 bg-surface-dark text-text-primary border border-warm-border text-sm font-medium rounded-lg transition-all duration-300 hover:border-neon-green hover:text-neon-green"
        >
          Connect via Email
        </a>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 flex flex-wrap justify-between items-center gap-2 text-xs font-mono text-text-secondary/80">
        <span>© {new Date().getFullYear()} Windie Victoria LLC. All rights reserved.</span>
        <span className="text-neon-pink/60">Type-Safe and Responsive</span>
      </div>
    </footer>
  );
}
