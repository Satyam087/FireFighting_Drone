export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            style={{ 
              textShadow: "0 0 30px rgba(0, 188, 212, 0.2)",
              letterSpacing: "0.01em"
            }}
            data-testid="text-about-quote"
          >
            "We believe protection should fly faster than danger"
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p data-testid="text-about-mission">
              IgniraX was born from a simple truth: in fire emergencies, every second counts.
              Traditional response times leave gaps where lives hang in the balance.
            </p>
            
            <p>
              We've engineered autonomous drone systems that combine cutting-edge AI detection,
              precision navigation, and eco-safe chemical extinguishing to protect people—both
              indoors and outdoors—before conventional methods can arrive.
            </p>
            
            <p className="text-foreground font-medium">
              Our mission is clear: eliminate the deadly gap between fire outbreak and rescue response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
