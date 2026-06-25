"use client";

import React from "react";
import { Globe, Server, Database, Cpu, Cloud, Code } from "lucide-react";
import { ScrollingFeatureShowcase } from "@/components/ui/interactive-scrolling-story-component";

const techGroups = [
    {
        title: "Languages",
        description: "The foundation of my computational thinking and software engineering, focused on speed, strict typing, and high-efficiency programming.",
        icon: <Code size={32} className="text-current" />,
        skills: ["JavaScript", "TypeScript", "Python"],
        bgColor: "#EAE7E0",
        textColor: "#000000"
    },
    {
        title: "Frontend",
        description: "Crafting immersive web experiences with responsive layouts, pixel-perfect design systems, and highly optimized component architectures.",
        icon: <Globe size={32} className="text-current" />,
        skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
        bgColor: "#E0E3EA",
        textColor: "#000000"
    },
    {
        title: "Backend",
        description: "Designing secure REST and GraphQL APIs, managing real-time event streams, and implementing scalable, concurrent server architectures.",
        icon: <Server size={32} className="text-current" />,
        skills: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT", "Auth & RBAC"],
        bgColor: "#EAE0E3",
        textColor: "#000000"
    },
    {
        title: "Databases",
        description: "Modeling relational schemas, indexing queries, and managing non-relational database structures to ensure fast access times and data integrity.",
        icon: <Database size={32} className="text-current" />,
        skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Pinecone", "SQL"],
        bgColor: "#E0EAE5",
        textColor: "#000000"
    },
    {
        title: "DevOps & Cloud",
        description: "Deploying highly available servers, automating deployment pipelines, and managing serverless and containerized environments.",
        icon: <Cloud size={32} className="text-current" />,
        skills: ["Docker", "AWS", "GitHub Actions", "CI/CD", "Linux", "Vercel"],
        bgColor: "#E7EAE0",
        textColor: "#000000"
    },
    {
        title: "AI & Generative AI",
        description: "Developing intelligent applications using LLMs, prompt engineering, semantic search, vector databases, and retrieval-augmented generation (RAG) pipelines.",
        icon: <Cpu size={32} className="text-current" />,
        skills: ["LangChain", "Ollama", "RAG Pipelines", "LLM Integration", "Prompt Engineering", "Semantic Search", "Vector Databases", "Embeddings"],
        bgColor: "#E5E0EA",
        textColor: "#000000"
    }
];

const Skills = () => {
    return (
        <section id="skills" className="relative z-20 w-full overflow-hidden border-t border-border bg-background">
            
            {/* Absolute Title with Line in the Corner */}
            <div className="absolute top-12 left-8 md:top-16 md:left-16 z-50 pointer-events-none flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-accent" />
                    <span className="text-accent font-medium text-xs tracking-[0.2em] uppercase">Core Proficiencies</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight font-display leading-[1.1] capitalize ml-16">
                    Technical <br />
                    <span className="italic font-light text-text-muted">Expertise.</span>
                </h2>
            </div>

            {/* The scrolling showcase component handles its own 100vh layout and inner scrolling */}
            <ScrollingFeatureShowcase data={techGroups} />
        </section>
    );
};

export default Skills;
