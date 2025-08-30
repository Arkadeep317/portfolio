"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-secondary animate-float">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO1-5fUX731CEM6OtvK5bdFsfBNHLCqfUw.png"
              alt="Profile photo of Arkadeep Si"
              className="w-full h-full rounded-full object-cover"
              style={{ objectPosition: "50% 40%" }}
              loading="lazy"
            />
          </div>

          <h1 className="font-sans text-4xl md:text-6xl font-bold text-foreground mb-4">
            Hi, I'm <span className="text-primary">Arkadeep Si</span>
          </h1>

          <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            2nd-year B.Tech student in Computer Science and Engineering
          </p>

          <p className="font-serif text-lg text-card-foreground mb-8 max-w-2xl mx-auto">
            Passionate about software development, AI/ML, open-source contribution, and ethical hacking. When I'm not
            coding, you'll find me playing guitar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Arkadeep317"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://in.linkedin.com/in/arkadeep-si"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:arkadeepsi2007@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
