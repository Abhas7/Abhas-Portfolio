"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Send, Plus, FileDown } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12
        }
    }
};

const itemLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const
        }
    }
};

const itemRightVariants = {
    hidden: { opacity: 0, y: 35 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const,
            staggerChildren: 0.08,
            delayChildren: 0.2
        }
    }
};

const subItemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as const
        }
    }
};

const LeetcodeIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.211.451-1.677 0l-4.51-4.375a1.252 1.252 0 0 1 0-1.707l4.51-4.375c.466-.451 1.211-.451 1.677 0l2.69 2.607c.466.452 1.211.452 1.677 0a1.252 1.252 0 0 0 0-1.707l-2.69-2.607c-1.399-1.355-3.633-1.355-5.032 0L4.51 12.72c-1.399 1.355-1.399 3.52 0 4.875l5.032 4.875c1.399 1.355 3.633 1.355 5.032 0l2.69-2.607c.466-.451 1.211-.451 1.677 0a1.252 1.252 0 0 0 0-1.707c-.466-.451-1.211-.451-1.677 0zM13.437 9.062a1.252 1.252 0 0 1 0 1.768l-3.328 3.328a1.252 1.252 0 0 1-1.768 0 1.252 1.252 0 0 1 0-1.768l3.328-3.328a1.252 1.252 0 0 1 1.768 0z" />
  </svg>
);

const Contact = () => {
    return (
        <section id="contact" className="relative z-20 bg-background py-40 px-8 md:px-32 font-sans overflow-hidden border-t border-border">
            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-10 h-[1px] bg-accent" />
                        <span className="text-accent font-bold text-[10px] tracking-[0.3em] uppercase">The Connection</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold text-foreground tracking-tighter font-display leading-[0.95]">
                        Initiate <br />
                        <span className="text-text-muted">Consultation.</span>
                    </h2>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-px bg-border border border-border"
                >
                    {/* Social links bento - Square Boxes */}
                    <motion.div 
                        variants={containerVariants}
                        className="md:col-span-4 grid grid-cols-1 gap-px bg-border"
                    >
                        <motion.div
                            key="footer-github"
                            variants={itemLeftVariants}
                            whileHover={{ x: 4 }}
                            className="bg-card hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors duration-300 group"
                        >
                            <a
                                href="https://github.com/Abhas7"
                                target="_blank"
                                rel="noopener noreferrer"
                                suppressHydrationWarning
                                className="flex items-center justify-between p-10 w-full h-full"
                            >
                                <div className="flex items-center gap-4">
                                    <motion.div 
                                        whileHover={{ rotate: 12, scale: 1.05 }}
                                        className="p-3 border border-border text-text-muted group-hover:text-accent group-hover:border-accent transition-colors duration-300"
                                    >
                                        <Github size={18} />
                                    </motion.div>
                                    <span className="font-bold text-sm text-foreground font-display uppercase tracking-widest">GitHub</span>
                                </div>
                                <ArrowRight size={14} className="text-text-muted group-hover:text-accent transition-colors duration-300" />
                            </a>
                        </motion.div>

                        <motion.div
                            key="footer-linkedin"
                            variants={itemLeftVariants}
                            whileHover={{ x: 4 }}
                            className="bg-card hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors duration-300 group"
                        >
                            <a
                                href="https://www.linkedin.com/in/abhassomkuwar03"
                                target="_blank"
                                rel="noopener noreferrer"
                                suppressHydrationWarning
                                className="flex items-center justify-between p-10 w-full h-full"
                            >
                                <div className="flex items-center gap-4">
                                    <motion.div 
                                        whileHover={{ rotate: 12, scale: 1.05 }}
                                        className="p-3 border border-border text-text-muted group-hover:text-accent group-hover:border-accent transition-colors duration-300"
                                    >
                                        <Linkedin size={18} />
                                    </motion.div>
                                    <span className="font-bold text-sm text-foreground font-display uppercase tracking-widest">LinkedIn</span>
                                </div>
                                <ArrowRight size={14} className="text-text-muted group-hover:text-accent transition-colors duration-300" />
                            </a>
                        </motion.div>

                        <motion.div
                            key="footer-leetcode"
                            variants={itemLeftVariants}
                            whileHover={{ x: 4 }}
                            className="bg-card hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors duration-300 group"
                        >
                            <a
                                href="https://leetcode.com/u/Abhas_03/"
                                target="_blank"
                                rel="noopener noreferrer"
                                suppressHydrationWarning
                                className="flex items-center justify-between p-10 w-full h-full"
                            >
                                <div className="flex items-center gap-4">
                                    <motion.div 
                                        whileHover={{ rotate: 12, scale: 1.05 }}
                                        className="p-3 border border-border text-text-muted group-hover:text-accent group-hover:border-accent transition-colors duration-300"
                                    >
                                        <LeetcodeIcon size={18} />
                                    </motion.div>
                                    <span className="font-bold text-sm text-foreground font-display uppercase tracking-widest">LeetCode</span>
                                </div>
                                <ArrowRight size={14} className="text-text-muted group-hover:text-accent transition-colors duration-300" />
                            </a>
                        </motion.div>

                        <motion.div
                            key="footer-resume"
                            variants={itemLeftVariants}
                            whileHover={{ x: 4 }}
                            className="bg-card hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors duration-300 group"
                        >
                            <a
                                href="/Abhas_Somkuwar_Resume.pdf"
                                download="Abhas_Somkuwar_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                suppressHydrationWarning
                                className="flex items-center justify-between p-10 w-full h-full"
                            >
                                <div className="flex items-center gap-4">
                                    <motion.div 
                                        whileHover={{ rotate: 12, scale: 1.05 }}
                                        className="p-3 border border-border text-text-muted group-hover:text-accent group-hover:border-accent transition-colors duration-300"
                                    >
                                        <FileDown size={18} />
                                    </motion.div>
                                    <span className="font-bold text-sm text-foreground font-display uppercase tracking-widest">Download Resume</span>
                                </div>
                                <ArrowRight size={14} className="text-text-muted group-hover:text-accent transition-colors duration-300" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Main CTA Wall - Square Box */}
                    <motion.div
                        variants={itemRightVariants}
                        className="md:col-span-8 p-12 md:p-20 bg-card relative group overflow-hidden"
                    >
                        {/* Rotating Decorative Corner plus sign */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"
                        >
                            <Plus size={120} className="text-accent" strokeWidth={0.5} />
                        </motion.div>

                        <div className="relative z-10 space-y-16">
                            <motion.div variants={subItemVariants} className="space-y-6">
                                <h3 className="text-foreground font-bold text-4xl md:text-5xl font-display tracking-tight uppercase leading-none">Global Partnership</h3>
                                <p className="text-text-muted text-xl leading-relaxed font-light max-w-xl">
                                    Strategic availability for agentic infrastructure builds and neural computing research projects.
                                </p>
                            </motion.div>

                            <motion.div variants={subItemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-accent/10">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Channel A [Email]</p>
                                    <a href="mailto:abhassomkuwar7@gmail.com" suppressHydrationWarning className="text-xl font-medium text-foreground hover:text-accent transition-colors duration-300 font-display border-b border-accent/20 pb-2 flex items-center justify-between group/email">
                                        abhassomkuwar7@gmail.com
                                        <ArrowRight size={14} className="opacity-0 group-hover/email:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover/email:translate-x-0" />
                                    </a>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Channel B [Direct]</p>
                                    <a href="tel:+917489215404" suppressHydrationWarning className="text-xl font-medium text-foreground hover:text-accent transition-colors duration-300 font-display border-b border-accent/20 pb-2 flex items-center justify-between group/phone">
                                        +91 7489215404
                                        <ArrowRight size={14} className="opacity-0 group-hover/phone:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover/phone:translate-x-0" />
                                    </a>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
