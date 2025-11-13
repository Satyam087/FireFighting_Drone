import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TwoDroneSection from "@/components/TwoDroneSection";
import CommandHubSection from "@/components/CommandHubSection";
import { TechnologySection } from "@/components/TechnologySection";
import { ImpactSection } from "@/components/ImpactSection";
import { VisionSection } from "@/components/VisionSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
  <HeroSection />
  <TwoDroneSection />
  <CommandHubSection />
  <HowItWorksSection />
  <AboutSection />
  <TechnologySection />
  <ImpactSection />
  <VisionSection />
  <ContactSection />
      
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground" data-testid="text-footer-copyright">
            © 2024 IgniraX. Born from Fire. Built to Save.
          </p>
        </div>
      </footer>
    </div>
  );
}
