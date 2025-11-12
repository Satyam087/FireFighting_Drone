import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { newsHeadlines } from "@/data/headlines";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const [showMainContent, setShowMainContent] = useState(false);
  const headlinesRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headlineElements = headlinesRef.current?.querySelectorAll(".headline-card");
    
    if (headlineElements && headlineElements.length > 0) {
      const tl = gsap.timeline();

      headlineElements.forEach((element, index) => {
        const randomRotation = Math.random() * 30 + 15;
        const randomX = (Math.random() - 0.5) * 100;
        const randomY = -100 - Math.random() * 50;
        const randomRotationDirection = Math.random() > 0.5 ? 1 : -1;

        tl.from(
          element,
          {
            y: randomY,
            x: randomX,
            rotation: randomRotation * randomRotationDirection,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          index * 0.15
        );
      });

      tl.to(headlineElements, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.05,
        delay: 3.5,
        onComplete: () => {
          setShowMainContent(true);
        },
      });
    }
  }, []);

  useEffect(() => {
    if (showMainContent && mainContentRef.current) {
      const elements = mainContentRef.current.querySelectorAll(".fade-in-element");
      gsap.from(elements, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, [showMainContent]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {!showMainContent && (
        <div ref={headlinesRef} className="relative z-10 w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsHeadlines.map((item) => (
              <div
                key={item.id}
                className="headline-card bg-card border border-primary/20 rounded-md p-4 shadow-lg shadow-primary/10"
                data-testid={`headline-card-${item.id}`}
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.headline}
                    className="w-28 h-20 object-cover rounded flex-shrink-0 border border-primary/30"
                  />
                  <div className="flex flex-col justify-center min-w-0">
                    <h3 className="text-sm font-semibold text-foreground leading-tight line-clamp-3">
                      {item.headline}
                    </h3>
                    {item.location && (
                      <p className="text-xs text-muted-foreground mt-1">{item.location}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showMainContent && (
        <div ref={mainContentRef} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="fade-in-element">
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-foreground"
              style={{ 
                letterSpacing: "0.02em"
              }}
              data-testid="hero-tagline"
            >
              When seconds matter,
              <br />
              <span className="text-primary">IgniraX</span> responds
            </h1>
          </div>
          
          <div className="fade-in-element">
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
              AI-powered autonomous drones protecting lives from fire with precision rescue,
              detection, and eco-safe extinguishing technology
            </p>
          </div>

          <div className="fade-in-element flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30"
              onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-see-technology"
            >
              See Technology
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-secondary text-secondary hover:bg-secondary/10 backdrop-blur-sm"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-contact-us"
            >
              Contact Us
            </Button>
          </div>

          <div className="fade-in-element mt-16">
            <button
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex flex-col items-center gap-2 mx-auto"
              data-testid="button-scroll-down"
            >
              <span className="text-sm uppercase tracking-wider">Learn More</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
