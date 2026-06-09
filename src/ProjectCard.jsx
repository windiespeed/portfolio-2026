export default function ProjectCard() {
  return (
    <div className="bg-surface-dark border border-warm-border p-8 rounded-xl transition-all duration-300 hover:bg-surface-hover group">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-neon-green font-mono text-sm tracking-wide uppercase block mb-1">
            Proprietary SaaS Architecture
          </span>
          <h3 className="text-2xl font-bold text-text-primary group-hover:text-neon-pink transition-colors duration-300">
            NeXTScript
          </h3>
        </div>
        
        {/* Status dot indicator */}
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
        </span>
      </div>

      <p className="text-text-secondary mb-6 leading-relaxed">
        Architected a custom curriculum automation workflow that integrates Google Classroom LMS with serverless data layers, utilizing generative AI engines to reduce course generation cycles.
      </p>

      {/* Tech Badges with soft, premium text tinting */}
      <div className="flex flex-wrap gap-2">
        {['Next.js', 'TypeScript', 'Anthropic Claude', 'Firebase'].map((tech) => (
          <span key={tech} className="bg-bg-dark text-text-secondary text-xs font-mono px-3 py-1 rounded-md border border-warm-border/60 group-hover:border-warm-border transition-colors">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}