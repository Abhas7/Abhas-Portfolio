"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollSectionProps {
    children: React.ReactNode;
}

const ScrollSection = ({ children }: ScrollSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Substantial reveal and exit animations
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

    const springOpacity = useSpring(opacity, { stiffness: 80, damping: 25 });
    const springY = useSpring(y, { stiffness: 80, damping: 25 });
    const springScale = useSpring(scale, { stiffness: 80, damping: 25 });

    return (
        <motion.div
            ref={sectionRef}
            style={{
                opacity: springOpacity,
                y: springY,
                scale: springScale,
                willChange: "transform, opacity"
            }}
            className="w-full relative"
        >
            {children}
        </motion.div>
    );
};

export default ScrollSection;
