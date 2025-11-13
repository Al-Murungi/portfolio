"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  const interests = [
    "Design thinking",
    "Storytelling",
    "Creative direction",
    "User experience",
    "Photography",
    "Coffee",
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h2>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Hi! I'm a designer and creative thinker passionate about bringing ideas to life through thoughtful
                design and meaningful storytelling. I believe the best work happens when form and function dance
                together beautifully.
              </p>

              <p>
                Over the years, I've had the privilege of working on projects across different industries, helping
                brands and individuals communicate their stories in compelling ways. I'm endlessly curious and love
                exploring how design, psychology, and creativity intersect.
              </p>

              <p className="text-primary font-semibold">
                When I'm not designing, you'll find me exploring new places, capturing moments through photography,
                brewing the perfect cup of coffee, or getting lost in a good book.
              </p>
            </div>

            {/* Personal Interests Grid */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">What I Care About</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <div
                    key={interest}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Personal Highlights */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="bg-background rounded-xl border border-border p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div>
                  <p className="font-semibold text-foreground">Years Creating</p>
                  <p className="text-sm text-muted-foreground">Exploring design and creativity</p>
                </div>
              </div>

              <div className="border-t border-border" />

              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div>
                  <p className="font-semibold text-foreground">Projects & Ideas</p>
                  <p className="text-sm text-muted-foreground">Each one a learning adventure</p>
                </div>
              </div>

              <div className="border-t border-border" />

              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div>
                  <p className="font-semibold text-foreground">Passion & Authenticity</p>
                  <p className="text-sm text-muted-foreground">In everything I create</p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="pt-4">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
