"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
    children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Clean easeout expo
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.0,
            touchMultiplier: 1.2,
        });

        // Frame callback
        let rafId: number;
        const update = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(update);
        };

        rafId = requestAnimationFrame(update);

        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId);
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;
