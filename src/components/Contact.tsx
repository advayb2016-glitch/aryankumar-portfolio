import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or innovative projects. 
          Feel free to reach out!
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <a
              href="mailto:ark009@ucsd.edu"
              className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">ark009@ucsd.edu</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/aryan-kumar-85b444265"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">LinkedIn</p>
                <p className="text-sm text-muted-foreground">Connect with me</p>
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>San Diego, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
