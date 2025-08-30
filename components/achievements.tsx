import { Card, CardContent } from "@/components/ui/card"
import { Award, BadgeCheck, Code } from "lucide-react"

const achievements = [
  {
    title: "Skills",
    description: "Full-stack development, AI/ML, ethical hacking, and open-source contributions.",
    icon: Code,
    date: "—",
    category: "Skills",
  },
  {
    title: "Awards",
    description: "Academic and community awards recognizing technical work and contributions.",
    icon: Award,
    date: "—",
    category: "Awards",
  },
  {
    title: "Certificates (NPTEL & more)",
    description: "NPTEL, achievements, and other certificates.",
    icon: BadgeCheck,
    date: "—",
    category: "Certificates",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Achievements & Recognition
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    <achievement.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-sans font-semibold text-lg text-card-foreground">{achievement.title}</h3>
                      <span className="text-sm text-muted-foreground font-serif">{achievement.date}</span>
                    </div>

                    <p className="font-serif text-muted-foreground mb-3 leading-relaxed">{achievement.description}</p>

                    <span className="inline-block px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
