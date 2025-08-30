export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-center text-foreground mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-serif text-lg text-card-foreground mb-6 leading-relaxed">
                I&apos;m a 2nd-year B.Tech student in Computer Science and Engineering at MCKV Institute of Engineering.
                My journey in technology is driven by curiosity and a desire to create solutions that make a difference.
              </p>

              <p className="font-serif text-lg text-card-foreground mb-6 leading-relaxed">
                With a strong foundation in software development and a growing expertise in AI/ML, I enjoy working on
                projects that challenge me to learn and grow. I&apos;m particularly interested in full-stack
                development, contributing to open-source projects, and exploring ethical hacking.
              </p>

              <p className="font-serif text-lg text-card-foreground leading-relaxed">
                Beyond coding, I find inspiration in music, especially playing guitar. This creative outlet helps me
                approach technical problems with fresh perspectives and maintains a healthy work-life balance.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                <img
                  src="/cs-student-ai-ml.png"
                  alt="Arkadeep working"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
