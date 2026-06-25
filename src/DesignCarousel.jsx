import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const designProjects = [
  {
    id: 1,
    category: 'Brand Identity',
    title: 'FORGE Fox',
    description: 'In 2021, I was tasked with creating a mascot for a Mississippi non-profit, FORGE. This is where the FORGE Fox was born. It is still used today.',
    tools: ['Procreate', 'Illustrator'],
    image: '/forge-fox.jpg',
  },
  {
    id: 2,
    category: 'Print & Digital',
    title: 'Custom Christmas Card',
    description: 'A custom Christmas card I designed for Graham Roofing, Inc. in 2021.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/christmas-card.jpg',
  },
  {
    id: 3,
    category: 'Interface Design',
    title: 'Project Title',
    description: 'Brief description of the project, the goal, and the outcome. Replace with your real project details.',
    tools: ['Figma', 'Framer'],
    image: null,
  },
  {
    id: 4,
    category: 'Typography',
    title: 'Project Title',
    description: 'Brief description of the project, the goal, and the outcome. Replace with your real project details.',
    tools: ['Illustrator', 'InDesign'],
    image: null,
  },
];

export default function DesignCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="mt-16">

      {/* Header row */}
      <div className="flex items-end justify-between mb-8">
        <div className="flex flex-col">
          <span aria-hidden="true" className="text-text-secondary font-mono text-sm tracking-wide uppercase mb-2">// Visual Work</span>
          <h3 className="text-3xl font-bold tracking-tight">Design</h3>
        </div>
        <div className="flex gap-3" role="group" aria-label="Carousel navigation">
          <button
            onClick={scrollPrev}
            disabled={!prevEnabled}
            aria-label="Previous project"
            className="w-10 h-10 rounded-lg border border-warm-border flex items-center justify-center text-text-secondary transition-all duration-200 hover:border-neon-pink hover:text-neon-pink disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-warm-border disabled:hover:text-text-secondary"
          >
            ←
          </button>
          <button
            onClick={scrollNext}
            disabled={!nextEnabled}
            aria-label="Next project"
            className="w-10 h-10 rounded-lg border border-warm-border flex items-center justify-center text-text-secondary transition-all duration-200 hover:border-neon-pink hover:text-neon-pink disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-warm-border disabled:hover:text-text-secondary"
          >
            →
          </button>
        </div>
      </div>

      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {designProjects.map((project) => (
            <div
              key={project.id}
              className="flex-none w-[85%] sm:w-[47%] lg:w-[31%]"
            >
              <article className="bg-surface-dark border border-warm-border rounded-2xl overflow-hidden transition-all duration-300 hover:bg-surface-hover/50 group h-full flex flex-col">

                {/* Image area */}
                <div className="aspect-[4/3] bg-bg-dark border-b border-warm-border flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span aria-hidden="true" className="text-text-secondary/30 font-mono text-xs">
                      // image coming soon
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  <span className="text-neon-pink font-mono text-sm tracking-wide uppercase block mb-2 font-semibold">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold text-text-primary group-hover:text-neon-pink transition-colors duration-300 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 grow">
                    {project.description}
                  </p>
                  <ul aria-label="Tools used" className="flex flex-wrap gap-2 list-none">
                    {project.tools.map((tool) => (
                      <li key={tool} className="bg-bg-dark text-text-secondary text-xs font-mono px-2.5 py-1 rounded border border-warm-border/60">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      {scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selectedIndex ? 'true' : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'w-4 bg-neon-pink'
                  : 'w-1.5 bg-warm-border hover:bg-text-secondary'
              }`}
            />
          ))}
        </div>
      )}

    </div>
  );
}
