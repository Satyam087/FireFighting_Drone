import { Card } from "@/components/ui/card";
import { Brain, Navigation, Droplet } from "lucide-react";

const technologies = [
  {
    icon: Brain,
    title: "AI Detection",
    description: "Advanced neural networks identify fire signatures in milliseconds, analyzing heat patterns, smoke density, and environmental data to deploy before human detection.",
    color: "text-primary",
    borderColor: "border-primary/30",
    glowColor: "shadow-primary/20",
  },
  {
    icon: Navigation,
    title: "Autonomous Navigation",
    description: "Intelligent pathfinding through smoke, obstacles, and dynamic environments. Our drones adapt in real-time, reaching victims where traditional rescue can't.",
    color: "text-secondary",
    borderColor: "border-secondary/30",
    glowColor: "shadow-secondary/20",
  },
  {
    icon: Droplet,
    title: "Chemical Extinguishing",
    description: "Eco-safe chemical suppression systems eliminate fire without water damage. Precision deployment protects lives, property, and the environment simultaneously.",
    color: "text-chart-3",
    borderColor: "border-chart-3/30",
    glowColor: "shadow-chart-3/20",
  },
];

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground"
            data-testid="text-technology-heading"
          >
            Technology That Saves Lives
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-technology-subheading">
            Three revolutionary systems working in perfect harmony
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className={`p-8 bg-card/50 backdrop-blur-sm border ${tech.borderColor} hover-elevate active-elevate-2 transition-all duration-300 shadow-lg ${tech.glowColor}`}
              data-testid={`card-technology-${index}`}
            >
              <div className="flex flex-col items-start h-full">
                <div className={`mb-6 p-4 bg-background/50 rounded-lg border ${tech.borderColor}`}>
                  <tech.icon className={`w-8 h-8 ${tech.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground" data-testid={`text-technology-title-${index}`}>
                  {tech.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed flex-grow" data-testid={`text-technology-description-${index}`}>
                  {tech.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
