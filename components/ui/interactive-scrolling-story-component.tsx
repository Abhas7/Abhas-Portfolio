"use client";

import React, { useState, useEffect, useRef } from 'react';

interface SlideData {
  title: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

interface ScrollingFeatureShowcaseProps {
  data: SlideData[];
}

export function ScrollingFeatureShowcase({ data }: ScrollingFeatureShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const stickyPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollableHeight = container.scrollHeight - window.innerHeight;
      const stepHeight = scrollableHeight / data.length;
      const newActiveIndex = Math.min(
        data.length - 1,
        Math.max(0, Math.floor((container.scrollTop + stepHeight / 2) / stepHeight))
      );
      setActiveIndex(newActiveIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [data.length]);
  
  const dynamicStyles = {
    backgroundColor: data[activeIndex]?.bgColor || "var(--background)",
    color: data[activeIndex]?.textColor || "var(--foreground)",
    transition: 'background-color 0.7s ease, color 0.7s ease',
  };

  const gridPatternStyle = {
    '--grid-color': 'rgba(0, 0, 0, 0.05)',
    backgroundImage: `
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
    `,
    backgroundSize: '3.5rem 3.5rem',
  };

  return (
    <div 
      ref={scrollContainerRef}
      className="h-screen w-full overflow-y-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      data-lenis-prevent="true"
    >
      <div style={{ height: `${data.length * 100}vh` }}>
        <div ref={stickyPanelRef} className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden" style={dynamicStyles}>
          
          <div className="flex h-full w-full max-w-5xl mx-auto">
            {/* Main Content & Pagination */}
            <div className="relative flex flex-col justify-center items-center p-6 md:p-12 w-full h-full">
              
              {/* Pagination Bars - Vertically Centered on the Right */}
              <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 flex flex-col space-y-4 z-50">
                {data.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                        const container = scrollContainerRef.current;
                        if(container){
                            const scrollableHeight = container.scrollHeight - window.innerHeight;
                            const stepHeight = scrollableHeight / data.length;
                            container.scrollTo({ top: stepHeight * index, behavior: 'smooth' });
                        }
                    }}
                    className="group flex items-center justify-end gap-3 focus:outline-none"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <span className={`text-[10px] tracking-[0.2em] font-semibold font-mono transition-all duration-500 opacity-0 group-hover:opacity-60 ${
                      index === activeIndex ? 'opacity-100 font-bold' : ''
                    }`}>
                      0{index + 1}
                    </span>
                    <span className={`w-1 rounded-full transition-all duration-500 ease-in-out ${
                      index === activeIndex ? 'h-10 bg-black/80' : 'h-3 bg-black/20 group-hover:h-6 group-hover:bg-black/40'
                    }`} />
                  </button>
                ))}
              </div>
              
              <div className="relative h-[60vh] w-full flex items-center justify-center">
                {data.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute w-full max-w-2xl flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out ${
                      index === activeIndex
                        ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
                        : index < activeIndex
                        ? 'opacity-0 -translate-y-10 pointer-events-none scale-95'
                        : 'opacity-0 translate-y-10 pointer-events-none scale-95'
                    }`}
                  >
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase opacity-40 mb-3">
                      Capability // 0{index + 1}
                    </span>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight mb-4 capitalize">
                      {slide.title}
                    </h3>

                    <p className="text-sm opacity-65 max-w-md mx-auto leading-relaxed font-light font-sans mb-8">
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap gap-2.5 justify-center max-w-lg mx-auto">
                      {slide.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 border border-black/10 bg-black/5 hover:bg-black/10 hover:border-black/20 hover:scale-105 hover:-translate-y-[2px] transition-all duration-300 text-[10px] font-semibold uppercase tracking-[0.12em] rounded-full cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
