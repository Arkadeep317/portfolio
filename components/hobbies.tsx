import { Card, CardContent } from "@/components/ui/card"
import { Music, Camera, Book, Gamepad2 } from "lucide-react"

const hobbies = [
  {
    title: "Playing Guitar",
    description: "Playing guitar, composing melodies, and exploring different music genres from rock to blues",
    icon: Music,
    image: "/cozy-guitar-player.png",
  },
  {
    title: "Photography",
    description: "Capturing moments and exploring creative perspectives through digital photography",
    icon: Camera,
    image: "/images/photography.png",
  },
  {
    title: "Reading",
    description: "Reading tech blogs, science fiction novels, and staying updated with latest technology trends",
    icon: Book,
    image: "/programming-scifi-books.png",
  },
  {
    title: "Gaming",
    description: "Playing strategy games and exploring game development as a creative outlet",
    icon: Gamepad2,
    image: "/multi-monitor-rgb-gaming.png",
  },
]

export default function Hobbies() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Hobbies & Interests
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={hobby.image || "/placeholder.svg"}
                  alt={hobby.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    <hobby.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-sans font-semibold text-card-foreground">{hobby.title}</h3>
                </div>

                <p className="font-serif text-sm text-muted-foreground leading-relaxed">{hobby.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-serif text-lg text-card-foreground max-w-2xl mx-auto leading-relaxed">
            Music, especially playing guitar, serves as my creative outlet and helps me approach technical challenges
            with fresh perspectives. These hobbies keep me balanced and inspire innovation in my development work.
          </p>
        </div>
      </div>
    </section>
  )
}
