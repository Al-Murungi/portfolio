"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">{"< YN />"}</h3>
            <p className="text-sm text-muted-foreground">Crafting elegant solutions through code and design.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "#hero" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#portfolio" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Blog", href: "#blog" },
                { label: "Contact", href: "#contact" },
                { label: "CV", href: "#" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">© {currentYear} Your Name. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">Built with Next.js, React & Tailwind CSS</p>
          </div>
        </div>
      </div>

      {/* Decorative accent line */}
      <div className="h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
    </footer>
  )
}
