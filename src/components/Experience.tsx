import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Vice President",
    company: "INSIGHT",
    location: "Pleasanton, CA",
    period: "Aug 2023 – Current",
    achievements: [
      "Prototyped assistive mobility device using ML-based sensor fusion for 22% accuracy gain",
      "Led 6-person engineering team; deployed MVP tested by 100+ users",
      "Raised $5k seed funding from UCLA Prof. Aharoni and Buildspace/Catalyst Incubators",
    ],
  },
  {
    title: "Research Assistant",
    company: "UC Davis Engineering",
    location: "Davis, CA / Remote",
    period: "Jul 2024 – Jun 2025",
    achievements: [
      "Optimized airfoil design, increasing wind-tunnel power output 15%",
      "Engineered globoidal cam achieving 30% smoother motion",
    ],
  },
  {
    title: "Intern, Jeong Lab",
    company: "UC Davis ECE",
    location: "Davis, CA",
    period: "Jul 2024 – May 2025",
    achievements: [
      "Designed and fabricated 5 custom PCBs in EagleCAD, reducing prototype cycles 40%",
      "Integrated Bluetooth SoC, improving connectivity stability 25%",
    ],
  },
  {
    title: "Developer",
    company: "SynergyPlus",
    location: "Pleasanton, CA",
    period: "Aug 2023 – Aug 2025",
    achievements: [
      "Built gradebook platform serving 4k+ users across 12 schools",
      "Developed automation tools cutting teacher workflow time 35%",
    ],
  },
  {
    title: "Tech Intern",
    company: "Jetson",
    location: "Remote",
    period: "Mar 2023 – Aug 2023",
    achievements: [
      "Designed Figma-based UI boosting daily retention 6%",
      "Executed 100+ UI/UX tests, lowering post-release defects 20%",
    ],
  },
  {
    title: "Programmer / Designer / Strategist",
    company: "VEX Robotics @ Foothill Robotics",
    location: "Pleasanton, CA",
    period: "Sep 2021 – May 2025",
    achievements: [
      "Qualified for 3 State and 2 World Championships (top 2%)",
      "Raised $20k in sponsorships; organized 30-team regional event",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground md:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-2 mt-1">▹</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
