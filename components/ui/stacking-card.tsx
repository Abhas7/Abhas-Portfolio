'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Github, ArrowUpRight } from 'lucide-react';

export interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
  imageUrl?: string;
  github?: string;
  category?: string;
  tags?: string[];
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  project: ProjectData;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  project,
}: CardProps) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[10%] min-h-[450px] w-[90%] md:w-[70%] rounded-2xl p-8 md:p-12 origin-top shadow-2xl`}
      >
        <div className="flex justify-between items-center border-b border-black/10 pb-4 mb-6">
            <span className="text-xs font-medium tracking-[0.15em] text-black/60 uppercase">
                {project.category}
            </span>
            <div className="text-xl font-light text-black/50 font-display italic">
                No. 0{i + 1}
            </div>
        </div>

        <h2 className='text-4xl md:text-5xl lg:text-6xl text-black font-display font-medium tracking-tight mb-6'>{title}</h2>
        
        <div className="flex flex-col justify-between flex-1 mt-2">
          <div>
            <p className='text-lg md:text-xl text-black/70 font-light leading-relaxed'>{description}</p>
            
            {project.tags && (
                <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="text-[10px] font-medium text-black/60 uppercase tracking-[0.1em] border border-black/10 px-4 py-1.5 rounded-full bg-white/20">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-8">
              <a href={project.github} target="_blank" rel="noopener noreferrer" suppressHydrationWarning className="inline-flex items-center justify-center gap-2 bg-transparent text-black border border-black/20 hover:bg-black hover:text-white transition-all duration-300 ease-out text-xs font-semibold uppercase tracking-[0.2em] px-6 py-3 rounded-full">
                  <Github size={16} /> Source
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer" suppressHydrationWarning className="inline-flex items-center justify-center gap-2 bg-black text-white hover:bg-black/80 transition-all duration-300 ease-out text-xs font-semibold uppercase tracking-[0.2em] px-6 py-3 rounded-full shadow-xl">
                  Live <ArrowUpRight size={16} />
              </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(({ projects }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main className='bg-background w-full' ref={container}>
        <section className='text-foreground w-full py-20 pb-40'>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                project={project}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component;
