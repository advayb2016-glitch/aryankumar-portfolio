import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Technical Skills",
    skills: [
      "Web/App Development",
      "PCB Design (EagleCAD)",
      "Embedded Systems",
      "UI/UX Testing",
      "Soldering",
    ],
  },
  {
    category: "Leadership & Management",
    skills: ["Team Leadership", "Project Management"],
  },
  {
    category: "Languages",
    skills: ["English (Native)", "Hindi (Fluent)", "Spanish (Conversational)"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Skills</h2>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
