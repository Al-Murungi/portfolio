"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PortfolioSection from "@/components/portfolio-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AnimatedAccent from "@/components/animated-accent"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <AnimatedAccent />

      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />

      <ScrollToTop />
    </>
  )
}
