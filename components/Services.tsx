"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Layout, Terminal, Cloud } from "lucide-react";
import {
    HoverSlider,
    HoverSliderImage,
    HoverSliderImageWrap,
    TextStaggerHover
} from "@/components/ui/animated-slideshow";

const SERVICES = [
    {
        title: "Agentic Workflows",
        description: "Architecting autonomous multi-agent systems using LangChain, Gemini, and custom LLM toolsets.",
        icon: <BrainCircuit size={20} className="text-accent" />,
        id: "01",
        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200"
    },
    {
        title: "Full-Stack Web Apps",
        description: "Building robust Next.js and Node.js applications with optimal performance, state management, and scalability.",
        icon: <Layout size={20} className="text-accent" />,
        id: "02",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
    },
    {
        title: "Neural Orchestration",
        description: "Integrating advanced neural interfaces, LLM chaining, and retrieval-augmented generation (RAG) with production databases.",
        icon: <Terminal size={20} className="text-accent" />,
        id: "03",
        imageUrl: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=1200"
    },
    {
        title: "Cloud Infrastructure",
        description: "Orchestrating serverless deployments, containerized workloads, and automated AI pipelines on AWS, GCP, and Vercel.",
        icon: <Cloud size={20} className="text-accent" />,
        id: "04",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    }
];

const Services = () => {
    return (
        <HoverSlider id="services" className="relative z-20 bg-background py-20 md:py-24 px-6 md:px-24 font-sans border-t border-border min-h-[70vh] flex flex-col justify-center">
            <div className="max-w-5xl mx-auto w-full relative">
                
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-accent" />
                            <span className="text-accent font-medium text-xs tracking-[0.2em] uppercase">Expertise</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-medium text-foreground tracking-tight font-display leading-[1.1] capitalize">
                            Professional <br />
                            <span className="italic font-light text-text-muted">Services</span>
                        </h2>
                    </div>
                </motion.div>

                {/* Slideshow Content */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
                    
                    {/* Interactive List */}
                    <div className="flex flex-col space-y-8 lg:space-y-12 w-full">
                        {SERVICES.map((service, index) => (
                            <div key={service.id} className="group flex flex-col gap-2">
                                <div className="flex items-center gap-4 text-accent/50 font-display italic text-sm group-hover:text-accent transition-colors">
                                    <span>No. {service.id}</span>
                                    <span className="w-8 h-[1px] bg-border group-hover:bg-accent transition-colors" />
                                    <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                                        {service.icon}
                                    </div>
                                </div>
                                
                                <TextStaggerHover
                                    index={index}
                                    className="cursor-pointer text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium capitalize tracking-tight text-foreground transition-all hover:text-accent"
                                    text={service.title}
                                />
                                
                                <p className="text-text-muted text-base md:text-lg font-light leading-relaxed max-w-2xl mt-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </HoverSlider>
    );
};

export default Services;
