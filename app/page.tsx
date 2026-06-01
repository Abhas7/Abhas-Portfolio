import React from "react";
import Hero from "@/components/ui/portfolio-hero";
import ScrollProgress from "@/components/ScrollProgress";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Demo() {
  return (
    <>
      <ScrollProgress />
      <div className="w-full">
        {/* Customized Portfolio Hero */}
        <Hero />
        
        {/* Projects Showcase */}
        <Projects />


        {/* Services Section */}
        <Services />

        {/* Experience / Timeline */}
        <Experience />

        {/* Technical Skills */}
        <Skills />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Contact Section */}
        <Contact />
      </div>
    </>
  );
}
