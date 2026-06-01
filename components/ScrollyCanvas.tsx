"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { FRAME_FILENAMES } from "@/lib/frames";
import Overlay from "./Overlay";


const ScrollyCanvas = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    const frameIndex = useTransform(
        smoothProgress,
        [0, 1],
        [0, FRAME_FILENAMES.length - 1]
    );

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        FRAME_FILENAMES.forEach((filename, index) => {
            const img = new Image();
            img.src = `/sequence/${filename}?v=3`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_FILENAMES.length) {
                    setIsLoaded(true);
                }
            };
            loadedImages[index] = img;
        });

        setImages(loadedImages);
    }, []);

    // Draw on canvas whenever frameIndex changes
    useEffect(() => {
        const handleDraw = () => {
            const canvas = canvasRef.current;
            const context = canvas?.getContext("2d");
            if (!canvas || !context || images.length === 0) return;

            const currentIndex = Math.round(frameIndex.get());
            const img = images[currentIndex];
            if (!img) return;

            // Object-fit: cover logic
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imgRatio = img.width / img.height;
            const canvasRatio = canvasWidth / canvasHeight;

            let drawWidth, drawHeight, drawX, drawY;

            if (imgRatio > canvasRatio) {
                drawHeight = canvasHeight;
                drawWidth = canvasHeight * imgRatio;
                drawX = (canvasWidth - drawWidth) / 2;
                drawY = 0;
            } else {
                drawWidth = canvasWidth;
                drawHeight = canvasWidth / imgRatio;
                drawX = 0;
                drawY = (canvasHeight - drawHeight) / 2;
            }

            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';
            context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        };

        const unsubscribe = frameIndex.on("change", handleDraw);

        // Initial draw
        if (isLoaded) {
            handleDraw();
        }

        return () => unsubscribe();
    }, [frameIndex, images, isLoaded]);

    const scale = useTransform(smoothProgress, [0, 0.3, 1], [1, 0.95, 0.88]);
    const rotateXScroll = useTransform(smoothProgress, [0, 0.3, 1], [0, 5, 12]);
    const borderRadius = useTransform(smoothProgress, [0, 0.15], ["0px", "24px"]);
    const shadow = useTransform(
        smoothProgress,
        [0, 0.15, 1],
        [
            "0px 0px 0px rgba(0, 0, 0, 0)",
            "0px 20px 50px rgba(0, 0, 0, 0.3)",
            "0px 30px 80px rgba(0, 0, 0, 0.5)"
        ]
    );

    const mouseX = useSpring(0, { stiffness: 80, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 80, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth - 0.5) * 6;
            const y = (clientY / innerHeight - 0.5) * -6;
            mouseX.set(x);
            mouseY.set(y);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Combine scroll rotateX and mouse rotateX
    const rotateX = useTransform([rotateXScroll, mouseY], ([rx, my]) => (rx as number) + (my as number));
    const rotateY = mouseX;

    const glowScale = useTransform(scale, (s) => (s as number) * 1.05);

    // Handle Resize
    useEffect(() => {
        const resizeCanvas = () => {
            if (canvasRef.current) {
                const rect = canvasRef.current.getBoundingClientRect();
                const dpr = window.devicePixelRatio || 1;
                // Set buffer size to match exactly the container's rendered size
                canvasRef.current.width = (rect.width || window.innerWidth) * dpr;
                canvasRef.current.height = (rect.height || window.innerHeight) * dpr;

                // Redraw after resize
                const currentIndex = Math.round(frameIndex.get());
                const img = images[currentIndex];
                if (img && canvasRef.current) {
                    const canvas = canvasRef.current;
                    const context = canvas.getContext("2d");
                    if (context) {
                        const canvasWidth = canvas.width;
                        const canvasHeight = canvas.height;
                        const imgRatio = img.width / img.height;
                        const canvasRatio = canvasWidth / canvasHeight;

                        let drawWidth, drawHeight, drawX, drawY;

                        if (imgRatio > canvasRatio) {
                            drawHeight = canvasHeight;
                            drawWidth = canvasHeight * imgRatio;
                            drawX = (canvasWidth - drawWidth) / 2;
                            drawY = 0;
                        } else {
                            drawWidth = canvasWidth;
                            drawHeight = canvasWidth / imgRatio;
                            drawX = 0;
                            drawY = (canvasHeight - drawHeight) / 2;
                        }

                        context.clearRect(0, 0, canvasWidth, canvasHeight);
                        context.imageSmoothingEnabled = true;
                        context.imageSmoothingQuality = 'high';
                        context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
                    }
                }
            }
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        return () => window.removeEventListener("resize", resizeCanvas);
    }, [images, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-background">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center [perspective:1500px] [transform-style:preserve-3d]">
                {/* 3D Ambient shadow */}
                <motion.div
                    style={{
                        scale: glowScale,
                        rotateX,
                        rotateY,
                        opacity: useTransform(smoothProgress, [0, 0.2, 1], [0, 0.15, 0.25]),
                    }}
                    className="absolute w-[96%] h-[92%] bg-black/10 filter blur-[40px] rounded-[24px] pointer-events-none z-0"
                />

                <motion.div
                    style={{
                        scale,
                        rotateX,
                        rotateY,
                        borderRadius,
                        boxShadow: shadow,
                    }}
                    className="relative w-[96%] h-[92%] overflow-hidden border border-neutral-800 bg-[#0c0c0c] transition-shadow duration-300 [transform-style:preserve-3d] will-change-transform z-10"
                >
                    <canvas
                        ref={canvasRef}
                        className="h-full w-full object-cover will-change-transform"
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out"
                        }}
                    />

                    {isLoaded && <Overlay scrollYProgress={smoothProgress} />}
                </motion.div>

                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0c0c0c]">
                        <div className="w-12 h-12 border-4 border-neutral-700 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScrollyCanvas;
