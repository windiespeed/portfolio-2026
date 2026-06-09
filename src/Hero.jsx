export default function Hero() {
  return (
    <section className="pt-16 pb-20 md:pt-36 md:pb-44 flex flex-col justify-center max-w-4xl relative z-10">
      <p className="text-neon-pink font-mono text-sm tracking-wide uppercase mb-4 font-semibold animate-pulse">
        <span aria-hidden="true">// </span>Available for Remote Roles
      </p>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary leading-[1.15] mb-6">
        Building functional software architectures at the intersection of{' '}
        <span className="text-neon-green">educational strategy</span> and full-stack code.
      </h1>
      <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
        I design user-centered digital learning platforms and engineer the type-safe systems that support
        them. Specializing in systems consolidation, cloud APIs, and generative AI integration.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          aria-label="Explore the engineering work – jump to projects"
          className="bg-surface-dark hover:bg-surface-hover text-text-primary border border-warm-border px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:border-neon-pink group flex items-center gap-2"
        >
          Explore the Engineering
          <span aria-hidden="true" className="text-neon-pink group-hover:translate-x-1 transition-transform font-mono">→</span>
        </a>
      </div>
    </section>
  );
}
