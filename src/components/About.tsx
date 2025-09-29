const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-foreground">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a Computer Engineering student at UC San Diego and a proud Jacobs Scholar, 
            representing the top tier of academic excellence. With extensive experience in 
            robotics, application development, and research, I've consistently delivered 
            measurable technical and community impact across multiple projects and organizations.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            From optimizing airfoil designs to building platforms serving thousands of users, 
            I thrive on solving complex engineering challenges. My passion lies in creating 
            innovative solutions that bridge hardware and software, backed by strong leadership 
            and project management skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
