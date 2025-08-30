export default function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="font-sans text-2xl font-bold mb-4">Arkadeep Si</h3>
          <p className="font-serif text-sidebar-foreground/80 mb-6 max-w-2xl mx-auto">
            Computer Science student passionate about AI/ML, full-stack development, and creating innovative solutions.
            Always learning, always growing.
          </p>

          <div className="border-t border-sidebar-border pt-6">
            <p className="font-serif text-sm text-sidebar-foreground/60">
              © 2025 Arkadeep Si. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
