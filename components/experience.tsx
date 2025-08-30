import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Open Source Contributor",
    company: "Various Projects",
    location: "Remote",
    period: "2024 - Present",
    description: "Active contributor to open-source projects, focusing on web development and AI/ML libraries.",
    achievements: [
      "Contributed bug fixes and features across multiple repositories",
      "Participated in code reviews and documentation improvements",
      "Collaborated with maintainers and mentored new contributors",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Experience</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            {experiences.map((experience, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-sans text-xl font-semibold text-card-foreground mb-1">
                          {experience.title}
                        </h3>
                        <p className="font-serif text-lg text-primary font-medium">{experience.company}</p>
                      </div>

                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-muted-foreground mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-serif text-sm">{experience.period}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="font-serif text-sm">{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="font-serif text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="font-serif text-card-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
