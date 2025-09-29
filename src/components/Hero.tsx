import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))] text-primary-foreground">
      <div className="container mx-auto px-6 py-20 text-center animate-fade-up">
        <div className="inline-block px-4 py-2 mb-6 bg-accent/20 backdrop-blur-sm rounded-full text-accent font-medium text-sm animate-scale-in">
          Jacobs Scholar · UC San Diego
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Aryan Kumar
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 max-w-2xl mx-auto">
          Computer Engineering Student
        </p>
        
        <p className="text-lg md:text-xl mb-10 text-primary-foreground/80 max-w-3xl mx-auto">
          Engineering impactful solutions through robotics, application development, 
          and research innovation
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            size="lg"
            variant="secondary"
            className="group"
            onClick={() => scrollToSection("experience")}
          >
            View Experience
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a href="mailto:ark009@ucsd.edu">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://linkedin.com/in/aryan-kumar-85b444265"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
