import { Flame, Shield, Zap } from "lucide-react";

const values = [
  {
    icon: Flame,
    title: "Innovation",
    description: "Pioneering autonomous rescue technology",
  },
  {
    icon: Shield,
    title: "Protection",
    description: "Every life matters, every second counts",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Response measured in seconds, not minutes",
  },
];

export function VisionSection() {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
            style={{ 
              textShadow: "0 0 50px rgba(255, 87, 34, 0.4), 0 0 100px rgba(255, 87, 34, 0.2)",
              letterSpacing: "0.02em",
              background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            data-testid="text-vision-motto"
          >
            Born from Fire.
            <br />
            Built to Save.
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every innovation at IgniraX is driven by one unwavering purpose:
            to eliminate the gap between danger and rescue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="text-center group"
              data-testid={`value-${index}`}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <value.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3" data-testid={`text-value-title-${index}`}>
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
