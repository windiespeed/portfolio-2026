import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  return (
    <div className="bg-bg-dark text-text-primary min-h-screen font-sans selection:bg-neon-pink/30 selection:text-text-primary antialiased">

      {/* Skip to main content — WCAG 2.4.1 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-bg-dark focus:text-text-primary focus:border focus:border-neon-pink focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" aria-label="Main content" className="max-w-6xl mx-auto px-6 relative">

        {/* Ambient background glows */}
        <div aria-hidden="true" className="absolute top-40 right-[-10%] w-[500px] h-[500px] bg-neon-pink/5 blur-[150px] rounded-full pointer-events-none" />
        <div aria-hidden="true" className="absolute top-[1200px] left-[-10%] w-[400px] h-[400px] bg-neon-green/3 blur-[130px] rounded-full pointer-events-none" />

        <Hero />
        <Projects />

        {/* Skills */}
        <section id="skills" className="py-24 scroll-mt-24">
          <div className="flex flex-col mb-12">
            <span className="text-text-secondary font-mono text-sm tracking-wide uppercase mb-2" aria-hidden="true">// Capability Verification Matrix</span>
            <h2 className="text-3xl font-bold tracking-tight">The Technical Ecosystem</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-surface-dark border border-warm-border rounded-xl p-6">
              <h3 className="font-mono text-sm text-neon-pink uppercase tracking-wide mb-4 font-semibold">The Architect Palette</h3>
              <ul className="space-y-2.5 text-sm text-text-secondary">
                <li className="flex items-center gap-2 text-text-primary"><span aria-hidden="true" className="text-neon-pink">▪</span> React 19 / Next.js Frameworks</li>
                <li><span aria-hidden="true">▪</span> TypeScript (Type-Safe Engineering)</li>
                <li><span aria-hidden="true">▪</span> Tailwind CSS v4 Architecture</li>
                <li><span aria-hidden="true">▪</span> Interactive Canvas Engineering (dnd-kit)</li>
                <li><span aria-hidden="true">▪</span> Semantic HTML5 / Responsive CSS Workspaces</li>
              </ul>
            </div>

            <div className="bg-surface-dark border border-warm-border rounded-xl p-6">
              <h3 className="font-mono text-sm text-neon-green uppercase tracking-wide mb-4 font-semibold">Engine Infrastructure</h3>
              <ul className="space-y-2.5 text-sm text-text-secondary">
                <li className="flex items-center gap-2 text-text-primary"><span aria-hidden="true" className="text-neon-green">▪</span> Firebase Admin Server-Side SDK</li>
                <li><span aria-hidden="true">▪</span> Federated Identity Management (OAuth / NextAuth)</li>
                <li><span aria-hidden="true">▪</span> Decoupled Data Pipelines (RESTful APIs)</li>
                <li><span aria-hidden="true">▪</span> Cloud NoSQL Schema Architecture</li>
                <li><span aria-hidden="true">▪</span> LMS Infrastructure Governance (Google Workspace)</li>
              </ul>
            </div>

            <div className="bg-surface-dark border border-warm-border rounded-xl p-6">
              <h3 className="font-mono text-sm text-text-primary uppercase tracking-wide mb-4 font-semibold">Cognitive &amp; Strategy</h3>
              <ul className="space-y-2.5 text-sm text-text-secondary">
                <li className="flex items-center gap-2 text-text-primary"><span aria-hidden="true" className="text-text-primary">▪</span> Anthropic Claude Framework Engineering</li>
                <li><span aria-hidden="true">▪</span> Prompt Orchestration &amp; Content Pipelines</li>
                <li><span aria-hidden="true">▪</span> Cognitive Load Mitigation Theory</li>
                <li><span aria-hidden="true">▪</span> Instructional Scaffolding &amp; Chunking</li>
                <li><span aria-hidden="true">▪</span> Synchronous/Asynchronous Program Mapping</li>
              </ul>
            </div>

          </div>
        </section>

      </main>

      <Footer />
      <Analytics />

    </div>
  );
}
