"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Dialog,
    DialogBody,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const FAQ_DATA = [
    {
        question: "What services do you offer?",
        answer: "I specialize in Full Stack Development, AI and Agentic AI integrations, Neural Architecture, and high-performance web applications. I provide end-to-end solutions from system design to final deployment."
    },
    {
        question: "What tools do you work with?",
        answer: "My core stack revolves around Next.js, React, Node.js, and Python. I extensively use LLMs, Vector Databases, PostgreSQL, and deploy on modern cloud infrastructure like Vercel and GCP."
    },
    {
        question: "Do you work with startups or established brands?",
        answer: "Both. I've helped early-stage startups build their MVPs from scratch and assisted established enterprises in integrating complex AI agentic workflows into their existing systems."
    },
    {
        question: "How does your development process work?",
        answer: "It starts with an in-depth consultation to map out requirements and architecture. Then I move into rapid prototyping, iterative development with continuous feedback, rigorous testing, and finally, deployment and hand-off."
    }
];

const Faq = () => {
    return (
        <section id="faq" className="relative z-20 bg-background py-32 px-6 md:px-24 font-sans border-t border-border">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-12 h-[1px] bg-accent" />
                        <span className="text-accent font-medium text-xs tracking-[0.2em] uppercase">Inquiries</span>
                        <span className="w-12 h-[1px] bg-accent" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-medium text-foreground tracking-tight font-display leading-[1.1] capitalize">
                        Common <br className="hidden md:block" />
                        <span className="italic font-light text-text-muted">Questions.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="px-12 py-8 text-sm md:text-lg font-display uppercase tracking-[0.2em] border-border hover:bg-foreground hover:text-background transition-all duration-500 rounded-full bg-transparent text-foreground shadow-sm hover:shadow-xl">
                                Open FAQs
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-[700px] border-border bg-background rounded-3xl p-0 shadow-2xl">
                            <DialogHeader className="bg-muted/30 p-8 md:p-10 border-b border-border text-center sm:text-left">
                                <DialogTitle className="text-3xl md:text-4xl font-display font-medium text-foreground tracking-tight">Frequently Asked Questions</DialogTitle>
                                <DialogDescription className="text-lg text-text-muted mt-3 font-light">
                                    Everything you need to know about my services and process.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogBody className="space-y-10 py-10 px-8 md:px-10">
                                {FAQ_DATA.map((faq, index) => (
                                    <div key={index} className="space-y-4 group">
                                        <h3 className="text-xl md:text-2xl font-medium text-foreground font-display transition-colors group-hover:text-accent">
                                            {faq.question}
                                        </h3>
                                        <p className="text-text-muted text-base md:text-lg font-light leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </DialogBody>
                            <DialogFooter className="bg-muted/30 p-6 md:p-8 border-t border-border flex justify-center sm:justify-end">
                                <DialogClose asChild>
                                    <Button variant="outline" className="px-10 py-6 rounded-full w-full sm:w-auto font-display uppercase tracking-[0.2em] border-border hover:bg-foreground hover:text-background transition-all duration-300 text-xs font-semibold">
                                        Close
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </motion.div>
            </div>
        </section>
    );
};

export default Faq;
