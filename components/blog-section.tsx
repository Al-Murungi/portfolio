"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Calendar, MessageSquare } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Thoughts on Design & Human Connection",
    excerpt:
      "How thoughtful design creates meaningful connections between brands and people. Exploring the human side of creativity.",
    date: "Nov 15, 2024",
    readTime: "5 min read",
    category: "Design",
    slug: "design-human-connection",
  },
  {
    id: 2,
    title: "Finding Inspiration in the Everyday",
    excerpt:
      "A personal exploration of how I find creative inspiration in unexpected places and translate it into meaningful work.",
    date: "Nov 10, 2024",
    readTime: "4 min read",
    category: "Creativity",
    slug: "everyday-inspiration",
  },
  {
    id: 3,
    title: "The Art of Storytelling in Design",
    excerpt:
      "How stories matter in design and why the best work tells a compelling narrative that resonates with audiences.",
    date: "Oct 28, 2024",
    readTime: "6 min read",
    category: "Design",
    slug: "storytelling-design",
  },
  {
    id: 4,
    title: "Building a Creative Practice",
    excerpt:
      "Reflections on maintaining a consistent creative practice, overcoming blocks, and staying inspired in the long run.",
    date: "Oct 15, 2024",
    readTime: "7 min read",
    category: "Personal",
    slug: "creative-practice",
  },
]

export default function BlogSection() {
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

  return (
    <section id="blog" ref={ref} className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Stories & Thoughts</h2>
          <p className="text-lg text-muted-foreground">
            Personal reflections on design, creativity, and the things that inspire me.
          </p>
        </div>

        {/* Featured Post */}
        <div
          className={`mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="group bg-background border border-primary/30 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <div className="grid md:grid-cols-2 gap-6 p-8">
              <div className="flex flex-col justify-center">
                <div className="inline-block w-fit mb-3">
                  <span className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="text-muted-foreground mb-4 text-balance">{blogPosts[0].excerpt}</p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} className="text-primary" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MessageSquare size={16} className="text-primary" />
                    {blogPosts[0].readTime}
                  </div>
                </div>

                <a
                  href={`/blog/${blogPosts[0].slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-primary font-medium group/link hover:gap-3 transition-all"
                >
                  Read the Story
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Featured Image Placeholder */}
              <div className="hidden md:block relative h-64 rounded-lg overflow-hidden bg-muted">
                <img
                  src="/nextjs-scalability.jpg"
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, index) => (
            <a
              key={post.id}
              href={`/blog/${post.slug}`}
              className={`group bg-background border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-3">
                <span className="inline-block px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded border border-primary/20">
                  {post.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:text-muted-foreground/80 transition-colors">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-border text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} className="text-primary/60" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare size={14} className="text-primary/60" />
                  {post.readTime}
                </div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        {/* View All Blog CTA */}
        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 text-primary border border-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Read All Stories
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
