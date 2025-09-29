import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Education</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-accent/20 bg-card hover:border-accent/40 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">University of California, San Diego</CardTitle>
                  <p className="text-lg font-semibold text-primary">B.S. Computer Engineering</p>
                  <p className="text-accent font-bold mt-2">Jacobs Scholar</p>
                </div>
                <div className="text-right text-muted-foreground">
                  <p className="font-medium">Expected Jun 2029</p>
                  <p className="text-sm">La Jolla, CA</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The Jacobs Scholarship is awarded to the most exceptional incoming engineering students 
                at UC San Diego, recognizing outstanding academic achievement, leadership, and potential 
                for impact in engineering fields.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
