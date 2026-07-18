"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { ChevronDown, GraduationCap, Lightbulb } from "lucide-react";
import { Skiper19 } from "@/components/ui/svg-follow-scroll";

// Inline Button component
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// BlurText animation component
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export default function Component() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen text-foreground transition-colors bg-background">
      {/* Viewport 1: Hero Section */}
      <main className="relative h-screen w-full flex flex-col justify-between items-center py-20 px-6 bg-accent text-background">
        {/* Spacer */}
        <div />

        {/* Centered Main Name - Always Perfectly Centered */}
        <div className="relative text-center w-full max-w-7xl">
          <div>
            <BlurText
              text="ABHAS"
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-bold font-display text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{ color: "var(--background)" }}
            />
          </div>
          <div>
            <BlurText
              text="SOMKUWAR"
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-bold font-display text-[50px] sm:text-[80px] md:text-[110px] lg:text-[150px] xl:text-[180px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{ color: "var(--background)" }}
            />
          </div>

          {/* Profile Picture */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-[85px] h-[110px] sm:w-[115px] sm:h-[152px] md:w-[140px] md:h-[185px] lg:w-[165px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer">
              <img
                src="/avatar.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Tagline & Mouse Scroll Indicator */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex justify-center px-6">
            <BlurText
              text="Designing human experiences in code."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-300 text-background/80 hover:text-background"
              style={{ fontFamily: "'Antic', sans-serif" }}
            />
          </div>

          {/* Animated Mouse Scroll Logo */}
          <div
            className="flex flex-col items-center gap-1.5 mt-2 cursor-pointer group"
            onClick={() => {
              document.getElementById("about-details")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="w-[26px] h-[44px] border-2 border-background/50 rounded-full flex justify-center p-1.5 transition-colors group-hover:border-background">
              <div className="w-[3px] h-[8px] bg-background/50 rounded-full animate-bounce group-hover:bg-background"></div>
            </div>
            <ChevronDown className="w-4 h-4 text-background/50 group-hover:text-background transition-colors animate-pulse" />
          </div>
        </div>
      </main>

      <Skiper19 />

      {/* Viewport 2 / Flow Section: Academic Foundation & Technical Mastery */}
      <section
        id="about-details"
        className="max-w-6xl mx-auto px-6 md:px-12 py-24 font-sans"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Education - Elegant Text Block */}
          <div className="space-y-6 pt-8 border-t border-neutral-200/75 dark:border-neutral-800/75">
            <div className="flex items-center gap-4 mb-6 text-accent">
              <GraduationCap size={28} strokeWidth={1.5} />
              <h4 className="font-medium text-2xl font-display capitalize">Academic Foundation</h4>
            </div>
            <p className="text-text-muted font-medium text-xs uppercase tracking-[0.15em]">Sage University, Bhopal</p>
            <div className="flex items-baseline gap-3">
              <div className="text-5xl font-light tracking-tight font-display">7.97</div>
              <div className="text-accent font-medium text-xs uppercase tracking-[0.15em]">CGPA</div>
            </div>
          </div>

          {/* Expertise - Elegant Text Block */}
          <div className="space-y-6 pt-8 border-t border-neutral-200/75 dark:border-neutral-800/75">
            <div className="flex items-center gap-4 mb-6 text-accent">
              <Lightbulb size={28} strokeWidth={1.5} />
              <h4 className="font-medium text-2xl font-display capitalize">Technical Mastery</h4>
            </div>
            <p className="text-text-muted text-lg leading-relaxed font-light">
              Harnessing advanced engineering to build robust systems that silently power elegant interfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 pt-6">
              <div>
                <p className="text-[10px] font-medium text-accent uppercase tracking-[0.15em] mb-2">Focus</p>
                <p className="text-sm font-medium">Full Stack Architecture</p>
              </div>
              <div>
                <p className="text-[10px] font-medium text-accent uppercase tracking-[0.15em] mb-2">Specialty</p>
                <p className="text-sm font-medium">Agentic AI &amp; Gen AI</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
