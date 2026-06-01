"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Lightbulb, Box } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const
        }
    }
};

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yHeader = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacityHeader = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section id="about" ref={containerRef} className="relative z-20 min-h-screen bg-background py-32 px-6 md:px-24 font-sans">
            <div className="max-w-7xl mx-auto relative pt-16">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-16 lg:gap-32">
                    <motion.div
                        style={{ y: yHeader, opacity: opacityHeader }}
                        className="max-w-2xl flex-1"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[1px] bg-accent" />
                            <span className="text-accent font-medium text-xs tracking-[0.2em] uppercase">Biography</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-medium text-foreground mb-10 tracking-tight font-display leading-[1.1] capitalize">
                            Philosophy of <br />
                            <span className="italic font-light text-text-muted">Design & Code.</span>
                        </h2>
                        <div className="space-y-6">
                            <p className="text-lg md:text-xl text-text-muted font-light leading-relaxed">
                                I specialize in crafting elegant, high-performance digital experiences. My approach blends the precision of modern engineering with a refined, minimalist aesthetic.
                            </p>
                            <p className="text-lg md:text-xl text-text-muted font-light leading-relaxed">
                                Whether building complex autonomous agent systems or luxurious real estate platforms, my focus is on delivering seamless, sophisticated architecture.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                        className="p-12 md:p-16 border border-border bg-card max-w-md relative flex-1 shadow-sm"
                    >
                        <p className="text-accent text-xs font-medium uppercase tracking-[0.15em] mb-8 flex items-center gap-3 border-b border-border pb-4">
                            <Box size={14} /> The Approach
                        </p>
                        <p className="text-foreground text-2xl md:text-3xl leading-snug font-light font-display italic">
                            &quot;Elegance in software is achieved not when there is nothing left to add, but when there is nothing left to take away.&quot;
                        </p>
                    </motion.div>
                </div>


            </div>
        </section>
    );
};

export default About;
