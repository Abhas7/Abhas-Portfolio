"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Expertise", href: "#skills" },
        { name: "FAQ", href: "#faq" }
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${scrolled
                    ? "bg-background/90 backdrop-blur-md border-border py-4 shadow-sm"
                    : "bg-transparent border-transparent py-8"
                }`}
        >
            <div className="max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className={`font-display font-medium text-2xl md:text-3xl tracking-wide transition-colors ${scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
                        }`}
                >
                    Abhas Somkuwar
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-xs font-medium tracking-[0.1em] uppercase transition-colors ${scrolled
                                    ? "text-text-muted hover:text-foreground"
                                    : "text-white/70 hover:text-white"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    className={`hidden md:inline-flex items-center justify-center px-8 py-3 text-xs font-medium tracking-[0.1em] uppercase transition-all duration-300 border ${scrolled
                            ? "bg-transparent border-border text-foreground hover:bg-accent hover:text-white hover:border-accent"
                            : "bg-transparent border-white/30 text-white hover:bg-white hover:text-foreground"
                        }`}
                >
                    Book Consultation
                </a>

                {/* Mobile Menu Toggle (Simplified) */}
                <button className={`md:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </motion.header>
    );
};

export default Navbar;

