"use client";

import React from "react";
import StackingCardsComponent from "@/components/ui/stacking-card";
import { ArrowDown } from "lucide-react";

const PROJECTS = [
    {
        title: "Orbital CLI",
        id: "01",
        description: "An autonomous AI agent CLI that generates code, searches the web, handles OAuth, and uses tools autonomously.",
        tags: ["Node.js", "Gemini", "Prisma", "Next.js", "Express.js", "OAuth 2.0", "PostgreSQL", "AI-SDK"],
        link: "https://github.com/Abhas7",
        github: "https://github.com/Abhas7",
        category: "Full Stack + AI Agent",
        imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
        color: "#F0EFEB"
    },
    {
        title: "BLOGGERR",
        id: "02",
        description: "AI-powered platform generating context-aware blog posts instantly using LLM orchestration.",
        tags: ["React", "Express.js", "OpenRouter", "MongoDB", "AI-SDK", "NextAuth"],
        link: "https://github.com/Abhas7",
        github: "https://github.com/Abhas7",
        category: "Full Stack + AI",
        imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop",
        color: "#E2E1DD"
    },
    {
        title: "AI Interviewer",
        id: "03",
        description: "The ultimate AI-driven sandbox interview app: live code generation, autonomous tool usage, and real-time web searches to test your true engineering depth.",
        tags: ["React", "Express", "OpenRouter", "OpenCV", "LangChain", "MongoDB", "AI-SDK", "Zod Validation"],
        link: "https://github.com/Abhas7",
        github: "https://github.com/Abhas7",
        category: "Full Stack + AI + LLM",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        color: "#D4D3CE"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="relative z-20 bg-background font-sans border-t border-border">
            <div className='min-h-[70vh] w-full flex flex-col items-center justify-center px-6'>
                <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="w-12 h-[1px] bg-accent" />
                    <span className="text-accent font-medium text-xs tracking-[0.2em] uppercase">Selected Works</span>
                </div>
                <h1 className='text-6xl md:text-8xl max-w-4xl text-center font-medium tracking-tight font-display leading-[1.1] capitalize text-foreground'>
                    Featured <br />
                    <span className="italic font-light text-text-muted">Projects</span>
                </h1>
                <p className='mt-20 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent'>
                    Scroll to Explore <ArrowDown size={14} className="animate-bounce" />
                </p>
            </div>

            <div className="w-full">
                <StackingCardsComponent projects={PROJECTS} />
            </div>
        </section>
    );
};

export default Projects;
