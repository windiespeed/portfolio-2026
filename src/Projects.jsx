import { useState } from 'react';
import DesignCarousel from './DesignCarousel';

const projects = [
  { id: 'nextscript',       category: 'Engineering' },
  { id: 'microlearning',    category: 'Engineering' },
  { id: 'lms',              category: 'Engineering' },
  { id: 'design-carousel',  category: 'Design' },
];

const concepts = [
  {
    num: 1,
    title: 'Concept 1: Core REST Architecture',
    body: 'Isolating request payloads cleanly from layout engines allows state persistence without UI thread lockup.',
  },
  {
    num: 2,
    title: 'Concept 2: Cloud State Hydration',
    body: 'Evaluating real-time server mutations safely using serverless database endpoints rather than dirty client caching layers.',
  },
  {
    num: 3,
    title: 'Concept 3: Custom Interoperability Rules',
    body: 'Mapping decoupled endpoints systematically into downstream delivery ecosystems (e.g. Google Classroom pipelines).',
  },
];

export default function Projects() {
  const [activeConcept, setActiveConcept] = useState(1);

  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const [activeFilter, setActiveFilter] = useState('All');
  const show = (id) => activeFilter === 'All' || projects.find((p) => p.id === id)?.category === activeFilter;

  const activeMeta = concepts.find((c) => c.num === activeConcept);

  return (
    <section id="projects" className="py-12 scroll-mt-24">
      <div className="flex flex-col mb-8">
        <span aria-hidden="true" className="text-text-secondary font-mono text-sm tracking-wide uppercase mb-2">// Featured Architecture</span>
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      </div>

      {/* Category filter */}
      <div role="group" aria-label="Filter projects by category" className="flex gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            aria-pressed={activeFilter === cat}
            className={`px-4 py-2 text-sm font-mono rounded-lg border transition-all duration-200 ${
              activeFilter === cat
                ? 'bg-neon-pink/15 text-neon-pink border-neon-pink/40'
                : 'text-text-secondary border-warm-border hover:text-text-primary hover:border-warm-border/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* NeXTScript */}
      {show('nextscript') && (
        <div className="bg-surface-dark border border-warm-border rounded-2xl p-8 md:p-12 transition-all duration-500 hover:bg-surface-hover/80 group mb-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7 flex flex-col justify-between h-full relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-neon-green font-mono text-sm tracking-wide uppercase font-semibold">
                    Proprietary SaaS Platform Build
                  </span>
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-neon-green shadow-[0_0_8px_#00FF66]" />
                </div>
                <h3 className="text-3xl font-bold text-text-primary group-hover:text-neon-pink transition-colors duration-300 mb-4">
                  NeXTScript
                </h3>
                <h4 className="text-text-primary/90 font-medium text-base mb-4 leading-relaxed">
                  Consolidating Fragmented Learning Management Workflows with Full-Stack Automation and Integrated Generative AI Engines.
                </h4>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                  Architected an enterprise e-learning application that decoupled identity management from data states using Google OAuth and Firebase Serverless cloud stores. Built custom prompt layers leveraging the Anthropic Claude API to dynamically generate adaptive lesson payloads and responsive assessments directly into user environments.
                </p>
              </div>
              <ul aria-label="Tech stack" className="flex flex-wrap gap-2 mt-2 list-none">
                {['Next.js 16', 'React 19', 'TypeScript', 'Anthropic Claude API', 'Firebase SDK', 'Google API', 'Tailwind v4'].map((tech) => (
                  <li key={tech} className="bg-bg-dark text-text-secondary text-xs font-mono px-3 py-1.5 rounded-md border border-warm-border/60 group-hover:border-warm-border transition-colors">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div
                role="img"
                aria-label="NeXTScript architecture overview: identity tier via Google SSO, content tier via Firebase, AI orchestration via Anthropic SDK"
                className="bg-bg-dark border border-warm-border rounded-xl p-6 h-64 flex flex-col justify-between font-mono text-xs text-text-secondary group-hover:border-warm-border/90 transition-colors"
              >
                <div aria-hidden="true" className="flex justify-between items-center border-b border-warm-border pb-3">
                  <span className="text-neon-pink">nextscript_architecture.json</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-warm-border" />
                    <div className="w-2 h-2 rounded-full bg-warm-border" />
                  </div>
                </div>
                <div aria-hidden="true" className="space-y-2 grow pt-4">
                  <p className="text-text-primary/40">{"{"}</p>
                  <p className="pl-4"><span className="text-neon-green">"identity_tier"</span>: "Google SSO via NextAuth",</p>
                  <p className="pl-4"><span className="text-neon-green">"content_tier"</span>: "Isolated Cloud Firebase",</p>
                  <p className="pl-4"><span className="text-neon-green">"ai_orchestration"</span>: "Anthropic SDK Core"</p>
                  <p className="text-text-primary/40">{"}"}</p>
                </div>
                <div aria-hidden="true" className="text-right text-xs text-neon-green/60">
                  // Drag &amp; Drop Canvas Verified
                </div>
              </div>
              <a
                href="https://ne-xt-script.vercel.app/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit the live NeXTScript application (opens in new tab)"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-bg-dark border border-warm-border rounded-xl text-sm font-medium text-text-secondary transition-all duration-300 hover:border-neon-pink hover:text-neon-pink group/btn"
              >
                View Live Site
                <span aria-hidden="true" className="font-mono group-hover/btn:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {(show('microlearning') || show('lms')) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Micro-Learning Scaffolding */}
          {show('microlearning') && (
            <div className="bg-surface-dark border border-warm-border rounded-2xl p-8 transition-all duration-300 hover:bg-surface-hover/50 group flex flex-col justify-between">
              <div>
                <span className="text-neon-pink font-mono text-sm tracking-wide uppercase block mb-3 font-semibold">
                  Cognitive UX Sandbox
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  Micro-Learning Scaffolding Model
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  An embedded live UI module built to prevent cognitive load overload when presenting high-density educational tracks. Isolates concepts dynamically.
                </p>

                {/* Concept tabs */}
                <div className="bg-bg-dark border border-warm-border rounded-xl p-5 mb-6">
                  <div
                    role="tablist"
                    aria-label="Select a concept to display"
                    className="flex gap-2 mb-4 border-b border-warm-border/60 pb-3"
                  >
                    {concepts.map(({ num, title }) => (
                      <button
                        key={num}
                        role="tab"
                        id={`concept-tab-${num}`}
                        aria-selected={activeConcept === num}
                        aria-controls="concept-tabpanel"
                        aria-label={title}
                        onClick={() => setActiveConcept(num)}
                        className={`px-3 py-2 text-xs font-mono rounded transition-all duration-300 min-w-10 ${activeConcept === num ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/40' : 'text-text-secondary hover:text-text-primary border border-transparent'}`}
                      >
                        0{num}
                      </button>
                    ))}
                  </div>
                  <div
                    role="tabpanel"
                    id="concept-tabpanel"
                    aria-labelledby={`concept-tab-${activeConcept}`}
                    className="min-h-24 flex flex-col justify-center"
                  >
                    {activeMeta && (
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-2">{activeMeta.title}</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{activeMeta.body}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <ul aria-label="Tech stack" className="flex flex-wrap gap-2 list-none">
                {['React 19 State', 'Tailwind Layout Engine', 'Instructional Scaffolding'].map((tech) => (
                  <li key={tech} className="bg-bg-dark text-text-secondary text-xs font-mono px-2.5 py-1 rounded border border-warm-border/60">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Enterprise LMS Optimization */}
          {show('lms') && (
            <div className="bg-surface-dark border border-warm-border rounded-2xl p-8 transition-all duration-300 hover:bg-surface-hover/50 group flex flex-col justify-between">
              <div>
                <span className="text-neon-green font-mono text-sm tracking-wide uppercase block mb-3 font-semibold">
                  Visual Overhaul &amp; IA Audit
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  Enterprise LMS Optimization
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Transformed a text-heavy, legacy corporate training dashboard into an accessible, spacious visual workspace using strict WCAG alignment.
                </p>

                {/* Before/after mockup */}
                <div
                  role="img"
                  aria-label="Before and after comparison: cluttered legacy dashboard versus clean, optimized information hierarchy"
                  className="grid grid-cols-2 gap-4 h-36 items-center mb-6"
                >
                  <div aria-hidden="true" className="bg-bg-dark/40 border border-warm-border rounded-xl p-4 h-full flex flex-col justify-center grayscale opacity-40 font-mono text-xs text-text-secondary">
                    <p className="text-left text-xs truncate">❌ text_heavy_dump_v1.html</p>
                    <div className="h-2 bg-warm-border w-full mt-2 rounded" />
                    <div className="h-2 bg-warm-border w-3/4 mt-1 rounded" />
                    <div className="h-2 bg-warm-border w-5/6 mt-1 rounded" />
                  </div>
                  <div aria-hidden="true" className="bg-bg-dark border border-neon-green/20 rounded-xl p-4 h-full flex flex-col justify-center relative font-mono text-xs text-text-secondary">
                    <span className="absolute top-2 right-2 text-xs text-neon-green px-1 bg-neon-green/10 rounded">Clean Hierarchy</span>
                    <p className="text-left text-xs text-text-primary truncate">✨ Optimized_Flow.md</p>
                    <div className="h-3 bg-surface-hover w-1/3 mt-3 rounded" />
                    <div className="h-1.5 bg-neon-pink/30 w-full mt-2 rounded" />
                  </div>
                </div>
              </div>
              <ul aria-label="Tech stack" className="flex flex-wrap gap-2 list-none">
                {['Information Architecture', 'WCAG Contrast Systems', 'UI/UX Consolidation'].map((tech) => (
                  <li key={tech} className="bg-bg-dark text-text-secondary text-xs font-mono px-2.5 py-1 rounded border border-warm-border/60">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      )}

      {show('design-carousel') && <DesignCarousel />}

    </section>
  );
}
