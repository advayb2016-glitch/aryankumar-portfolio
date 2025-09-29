import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const awards = [
  {
    title: "VEX Worlds Semifinalist",
    year: "2024",
    description: "Top 2% globally in VEX Robotics competition",
  },
  {
    title: "VEX Nationals Finalist",
    year: "2024",
    description: "National-level robotics competition achievement",
  },
  {
    title: "VEX CA State Champion",
    year: "2024",
    description: "First place in California state championship",
  },
  {
    title: "Blue Ocean Pitch Top 100",
    year: "2024",
    description: "Recognized among top 100 innovative pitches",
  },
  {
    title: "3rd Place ACSEF",
    year: "2024",
    description: "Alameda County Science & Engineering Fair",
  },
  {
    title: "PVSA Gold",
    year: "2024",
    description: "President's Volunteer Service Award",
  },
];

const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Awards & Recognition</h2>
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Trophy className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">{award.title}</h3>
                    <p className="text-sm text-accent font-semibold mb-2">{award.year}</p>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
