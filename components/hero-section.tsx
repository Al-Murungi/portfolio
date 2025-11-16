"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Creating beautiful things and sharing stories."

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Softer, more subtle background accents */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-5 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float animation-delay-2000" />

      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Hero Title */}
        <div className="animate-fade-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">Alice Murungi</h1>
          <p className="text-xl sm:text-2xl text-primary mb-2 font-semibold">Designer, Creator & Storyteller</p>
        </div>

        {/* Animated subtitle */}
        <div className="animate-fade-up animation-delay-300">
          <p className="text-lg text-muted-foreground mb-12 min-h-8 max-w-2xl mx-auto text-balance">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-600">
          <a
            href="#portfolio"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            See My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-slide-up" />
          </div>
        </div>
      </div>
    </section>
  )
}
