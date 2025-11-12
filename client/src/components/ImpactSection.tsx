const metrics = [
  {
    value: "10,000+",
    label: "Lives Protected",
    description: "Through early detection and rapid response",
  },
  {
    value: "87%",
    label: "Faster Response",
    description: "Compared to traditional emergency services",
  },
  {
    value: "50km²",
    label: "Coverage Per Unit",
    description: "Autonomous monitoring and deployment range",
  },
];

export function ImpactSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-card to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground"
            data-testid="text-impact-heading"
          >
            Real Impact, Measured in Lives
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-impact-subheading">
            Our technology isn't theoretical—it's saving lives every day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="text-center"
              data-testid={`metric-${index}`}
            >
              <div 
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-4"
                data-testid={`text-metric-value-${index}`}
              >
                {metric.value}
              </div>
              <div className="text-xl md:text-2xl font-bold text-foreground mb-2" data-testid={`text-metric-label-${index}`}>
                {metric.label}
              </div>
              <div className="text-muted-foreground" data-testid={`text-metric-description-${index}`}>
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
