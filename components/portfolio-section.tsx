"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Heart } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    description:
      "Creating a complete visual identity for a sustainable fashion startup, from logo design to brand guidelines.",
    qualities: ["Storytelling", "Visual Design", "Brand Strategy"],
    link: "#",
    github: "#",
    image: "/ecommerce-dashboard.png",
  },
  {
    id: 2,
    title: "User Experience Research",
    description: "Deep-dive into understanding user needs and designing intuitive experiences that feel natural.",
    qualities: ["Research", "User Focus", "Empathy"],
    link: "#",
    github: "#",
    image: "/ai-task-management-interface.jpg",
  },
  {
    id: 3,
    title: "Creative Direction",
    description:
      "Leading the visual and creative direction for a digital campaign that tells compelling brand stories.",
    qualities: ["Vision", "Collaboration", "Creativity"],
    link: "#",
    github: "#",
    image: "/design-system-library.png",
  },
  {
    id: 4,
    title: "Interactive Experience",
    description: "Designing delightful micro-interactions that bring digital products to life and engage users.",
    qualities: ["Design Thinking", "Innovation", "Detail-Oriented"],
    link: "#",
    github: "#",
    image: "/analytics-dashboard.png",
  },
]

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section id="portfolio" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground">
            A collection of projects and ideas that represent my creative journey and the things I'm passionate about.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative bg-background border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${hoveredId === project.id ? "scale-105" : "scale-100"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Container */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                  {/* Personal Qualities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.qualities.map((quality) => (
                      <span
                        key={quality}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                      >
                        {quality}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors group/link"
                    >
                      View Project
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                    >
                      <Heart size={16} />
                      Love It
                    </a>
                  </div>
                </div>

                {/* Accent line */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-primary border border-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            See More Stories
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
