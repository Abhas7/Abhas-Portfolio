"use client";

import React from "react";
import { Globe, Server, Database, Cpu, Cloud, Code } from "lucide-react";
import { ScrollingFeatureShowcase } from "@/components/ui/interactive-scrolling-story-component";

const techGroups = [
    {
        title: "Languages & Core",
        description: "The foundation of my computational thinking and software engineering, focused on speed, strict typing, and high-efficiency programming.",
        icon: <Code size={32} className="text-current" />,
        skills: ["JavaScript", "TypeScript", "Python", "C#"],
        bgColor: "#EAE7E0",
        textColor: "#000000"
    },
    {
        title: "Frontend Ecosystem",
        description: "Crafting immersive web experiences with responsive layouts, pixel-perfect design systems, and highly optimized component architectures.",
        icon: <Globe size={32} className="text-current" />,
        skills: ["Next.js", "React", "Context API", "Chakra UI", "Vite", "Vue.js", "Three.js", "Tailwind CSS"],
        bgColor: "#E0E3EA",
        textColor: "#000000"
    },
    {
        title: "Backend & Systems",
        description: "Designing secure REST and GraphQL APIs, managing real-time event streams, and implementing scalable, concurrent server architectures.",
        icon: <Server size={32} className="text-current" />,
        skills: ["Node.js", "Express.js", "ASP.NET Core", "EF Core", "FastAPI", "Flask", "GraphQL", "Socket.io", "JWT", "Prisma"],
        bgColor: "#EAE0E3",
        textColor: "#000000"
    },
    {
        title: "Data Architecture",
        description: "Modeling relational schemas, indexing queries, and managing non-relational database structures to ensure fast access times and data integrity.",
        icon: <Database size={32} className="text-current" />,
        skills: ["Postgres", "Pinecone", "MongoDB", "MySQL", "Cassandra", "Supabase", "Firebase"],
        bgColor: "#E0EAE5",
        textColor: "#000000"
    },
    {
        title: "Cloud & Devops",
        description: "Deploying highly available servers, automating deployment pipelines, and managing serverless and containerized environments.",
        icon: <Cloud size={32} className="text-current" />,
        skills: ["AWS", "GCP", "Docker", "Kubernetes", "Vercel", "Netlify", "OpenStack", "Oracle", "Jenkins"],
        bgColor: "#E7EAE0",
        textColor: "#000000"
    },
    {
        title: "AI & Data Science",
        description: "Training neural networks, processing pipelines, and applying statistical models to engineer automated, intelligent systems.",
        icon: <Cpu size={32} className="text-current" />,
        skills: ["LangChain", "Ollama", "PyTorch", "TensorFlow", "Scikit-Learn", "NumPy", "Pandas", "Plotly", "OpenCV"],
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
