"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface LegendItem {
  id: string
  name: string
}

interface ScrollLegendProps {
  items: LegendItem[]
  className?: string
  isVisible?: boolean
}

export function ScrollLegend({ items, className }: ScrollLegendProps) {
  const [activeSection, setActiveSection] = useState<string>(items[0]?.id || "")
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => document.getElementById(item.id))
      const triggerPoint = window.innerHeight / 2

      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= triggerPoint) {
            setActiveSection(items[i].id)
            found = true;
            break
          }
        }
      }
      
      if (!found && sections[0]) {
        setActiveSection(items[0].id)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() 

    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className={cn("z-50", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex items-center cursor-pointer group py-2"
            onClick={() => scrollToSection(item.id)}
          >
            {/* Horizontal line indicator */}
            <div
              className={cn(
                "h-[2px] transition-all duration-300 ease-out",
                activeSection === item.id
                  ? "w-8 bg-accent"
                  : "w-4 bg-border group-hover:bg-accent/50 group-hover:w-6"
              )}
            />

            {/* Section name - visible on hover or active */}
            <span
              className={cn(
                "ml-4 text-[10px] tracking-[0.15em] uppercase font-medium transition-all duration-300 whitespace-nowrap",
                activeSection === item.id 
                  ? "text-accent opacity-100 translate-x-0" 
                  : "text-text-muted/60 group-hover:text-text-muted",
                (!isHovered && activeSection !== item.id) ? "opacity-0 -translate-x-2 pointer-events-none" : "opacity-100 translate-x-0"
              )}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
