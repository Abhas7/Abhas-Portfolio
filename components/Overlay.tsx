"use client";

import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

const Overlay = ({ scrollYProgress }: OverlayProps) => {

    // Section 1: Hero (Name only)
    const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.12, 0.2], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [100, -100]);
    const scale1 = useTransform(scrollYProgress, [0, 0.08], [0.95, 1]);

    // Section 2: Core Expertise (Appears after a gap)
    const opacity2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.35, 0.65], [100, -100]);

    // Section 4: Final CTA Buttons (End of video)
    const opacity4 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
    const y4 = useTransform(scrollYProgress, [0.8, 0.9], [50, 0]);

    return (
        <div className="absolute inset-0 z-50 pointer-events-none font-sans [transform-style:preserve-3d]">
            {/* Section 1: Hero (Name Only) */}
            <motion.div
                style={{ opacity: opacity1, y: y1, scale: scale1, transformStyle: "preserve-3d" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-[60] [transform-style:preserve-3d]"
            >
                <div className="space-y-6 drop-shadow-2xl" style={{ transform: "translateZ(90px)" }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block px-4 py-1.5 border-b border-white/40 text-white text-xs font-medium tracking-[0.2em] uppercase mb-4"
                    >
                        Creative Engineering
                    </motion.div>
                    <h1 className="text-6xl md:text-[8rem] font-medium tracking-tight text-white font-display leading-[1.1] capitalize">
                        Abhas <br />
                        <span className="italic font-light">Somkuwar</span>
                    </h1>
                </div>
            </motion.div>

            {/* Section 2: Core Expertise */}
            <motion.div
                style={{ opacity: opacity2, y: y2, transformStyle: "preserve-3d" }}
                className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-32 z-[60] [transform-style:preserve-3d]"
            >
                <div className="max-w-4xl space-y-8 drop-shadow-2xl" style={{ transform: "translateZ(90px)" }}>
                    <div className="flex items-center gap-4">
                        <span className="w-16 h-[1px] bg-white/60" />
                        <span className="text-white/90 text-xs font-medium tracking-[0.2em] uppercase">Expertise</span>
                    </div>
                    <h2 className="text-5xl md:text-[6rem] font-medium text-white leading-[1.1] font-display tracking-tight capitalize">
                        Digital <br />
                        <span className="italic font-light">Craftsmanship.</span>
                    </h2>
                    <div className="space-y-4 pl-0 max-w-2xl font-sans">
                        <p className="text-white text-xl md:text-2xl font-light leading-relaxed tracking-wide">
                            Architecting elegant, high-performance web applications with a focus on refined user experiences.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Section 4: Final Buttons (Bottom Aligned) */}
            <motion.div
                style={{ opacity: opacity4, y: y4, transformStyle: "preserve-3d" }}
                className="absolute inset-0 flex flex-col items-center justify-end pb-32 text-center px-4 pointer-events-auto z-[70] [transform-style:preserve-3d]"
            >
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-50 pointer-events-auto"
                    style={{ transform: "translateZ(100px)" }}
                >
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group relative flex items-center justify-center px-12 py-4 bg-white text-black text-xs font-medium uppercase tracking-[0.15em] border border-white hover:bg-transparent hover:text-white transition-all duration-500 cursor-pointer z-[60]"
                    >
                        <span>View Portfolio</span>
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group relative flex items-center justify-center px-12 py-4 bg-transparent text-white text-xs font-medium uppercase tracking-[0.15em] border border-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-500 cursor-pointer z-[60]"
                    >
                        <span>Get in Touch</span>
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Overlay;

