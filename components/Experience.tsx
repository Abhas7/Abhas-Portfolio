"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, Briefcase, GraduationCap, ChevronRight, Cloud } from "lucide-react";

const CERTIFICATES = [
    {
        title: "Google Generative AI Professional",
        issuer: "Google Cloud",
        link: "https://www.skills.google/public_profiles/3ef22da8-9286-4d0a-8f54-cd1353cd6b1c"
    },
    {
        title: "OCI 2025 Gen AI Professional",
        issuer: "Oracle",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=14E4CA1E0D818F73877E30986D3F38212222113503FF5ED5326103377C3DE56F"
    },
    {
        title: "McKinsey Forward Program",
        issuer: "McKinsey",
        link: "https://www.credly.com/badges/a02d4efb-fcbb-4bbc-bda8-9ae3b9b1a588/linked_in_profile"
    },
    {
        title: "TCS Young Professional",
        issuer: "TCS",
        link: "#"   
    },
    {
        title: "Introduction to Data Science",
        issuer: "Cisco",
        link: "https://www.credly.com/badges/ee0a4eb1-7786-4e10-a67a-0dceac781e29/public_url"
    },
    {
        title: "Python Essentials",
        issuer: "Cisco",
        link: "https://www.credly.com/badges/b45fc475-5c9b-48cc-b79d-e71f3f5d92c9/public_url"
    },
    {
        title: "Data Analytics Essentials",
        issuer: "Cisco",
        link: "https://www.credly.com/badges/5aa4a592-88ac-4dab-8af8-52a9065854a9/public_url"
    }
];

const timelineContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const timelineItemVariants = {
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

const certContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12
        }
    }
};

const certItemVariants = {
    hidden: { opacity: 0, x: 30 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const
        }
    }
};

const Experience = () => {
    return (
        <section id="experience" className="relative z-20 bg-background py-32 px-6 md:px-24 font-sans border-t border-border">
            <div className="max-w-7xl mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
                    {/* Career Timeline */}
                    <div className="space-y-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-[1px] bg-accent" />
                                <span className="text-accent font-medium text-xs tracking-[0.2em] uppercase">Trajectory</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-medium text-foreground tracking-tight font-display leading-[1.1] capitalize">
                                Professional <br />
                                <span className="italic font-light text-text-muted">Journey.</span>
                            </h2>
                        </motion.div>

                        <motion.div 
                            variants={timelineContainerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="space-y-12"
                        >
                            <motion.div
                                variants={timelineItemVariants}
                                className="relative pb-12 border-b border-border/60 group"
                            >
                                <div className="flex items-baseline justify-between mb-4">
                                    <h4 className="text-2xl font-medium text-foreground font-display capitalize">Frontend Developer Intern</h4>
                                    <span className="text-accent font-medium text-xs tracking-[0.15em] uppercase">2025</span>
                                </div>
                                <div className="text-text-muted font-medium text-xs uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
                                    <Briefcase size={14} /> Cognifyz Technologies
                                </div>
                                <p className="text-text-muted text-lg leading-relaxed max-w-lg font-light">
                                    Engineered scalable web applications, integrating complex neural interfaces with resilient backend architectures.
                                </p>
                            </motion.div>

                            {/* Google Cloud Skills Boost Section */}
                            <motion.div
                                variants={timelineItemVariants}
                                className="relative pb-12 border-b border-border/60 group"
                            >
                                <div className="flex items-baseline justify-between mb-4">
                                    <h4 className="text-2xl font-medium text-foreground font-display capitalize">Diamond League Member</h4>
                                    <span className="text-accent font-medium text-xs tracking-[0.15em] uppercase">2025</span>
                                </div>
                                <div className="text-text-muted font-medium text-xs uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
                                    <Award size={14} /> Google Cloud Skills Boost
                                </div>
                                <p className="text-text-muted text-lg leading-relaxed max-w-lg font-light mb-8">
                                    An active Google Cloud learner with over 114,000 points and a vast collection of skill badges in Generative AI and Vertex AI.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-8">
                                    <div>
                                        <p className="text-[10px] font-medium text-accent uppercase tracking-[0.15em] mb-2">Expertise</p>
                                        <p className="text-foreground text-sm font-medium">Generative AI</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-medium text-accent uppercase tracking-[0.15em] mb-2">Platform</p>
                                        <p className="text-foreground text-sm font-medium">Vertex AI</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-medium text-accent uppercase tracking-[0.15em] mb-2">Status</p>
                                        <p className="text-foreground text-sm font-medium">114k+ Points</p>
                                    </div>
                                </div>
                                <a
                                    href="https://www.skills.google/public_profiles/3ef22da8-9286-4d0a-8f54-cd1353cd6b1c"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    suppressHydrationWarning
                                    className="mt-8 inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors text-xs font-medium uppercase tracking-[0.15em] border-b border-transparent hover:border-accent pb-1"
                                >
                                    View Profile <ChevronRight size={12} />
                                </a>
                            </motion.div>

                            {/* All India NCAT by Naukri Section */}
                            <motion.div
                                variants={timelineItemVariants}
                                className="relative pb-12 border-b border-border/60 group"
                            >
                                <div className="flex items-baseline justify-between mb-4">
                                    <h4 className="text-2xl font-medium text-foreground font-display capitalize">NCAT Rank Holder (Rank: 4015)</h4>
                                    <span className="text-accent font-medium text-xs tracking-[0.15em] uppercase">2026</span>
                                </div>
                                <div className="text-text-muted font-medium text-xs uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
                                    <Award size={14} /> All India NCAT by Naukri
                                </div>
                                <p className="text-text-muted text-lg leading-relaxed max-w-lg font-light">
                                    Achieved an All India Rank of 4015 in the National Creativity Aptitude Test (NCAT) organized by Naukri, testing cognitive, logical, and creative abilities.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Certifications Grid */}
                    <div className="space-y-16 lg:pt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 pb-8 border-b border-border/60"
                        >
                            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                                <Award className="text-accent" size={18} />
                            </div>
                            <div>
                                <h3 className="text-foreground font-medium text-2xl font-display capitalize">Verified Credentials</h3>
                                <p className="text-text-muted text-xs font-medium uppercase tracking-[0.15em] mt-1">Global Certifications</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={certContainerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 gap-6"
                        >
                            {CERTIFICATES.map((cert, idx) => (
                                <motion.div
                                    key={`cert-${idx}`}
                                    variants={certItemVariants}
                                    className="group"
                                >
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        suppressHydrationWarning
                                        className="flex items-center justify-between py-6 px-8 bg-card border border-border hover:shadow-lg transition-all duration-500 rounded-xl"
                                    >
                                        <div className="space-y-2">
                                            <h5 className="text-foreground font-medium text-lg font-display capitalize group-hover:text-accent transition-colors">{cert.title}</h5>
                                            <div className="flex items-center gap-3">
                                                <span className="w-6 h-[1px] bg-accent/40" />
                                                <p className="text-xs font-medium text-text-muted uppercase tracking-[0.15em]">{cert.issuer}</p>
                                            </div>
                                        </div>
                                        <motion.div 
                                            whileHover={{ scale: 1.05 }}
                                            className="text-text-muted group-hover:text-accent transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                        </motion.div>
                                    </a>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
