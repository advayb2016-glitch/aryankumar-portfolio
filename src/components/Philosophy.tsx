const Philosophy = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">My Philosophy</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎯</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Impact Over Features</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I don't build technology for the sake of technology. Every project I take on is measured by its 
                    real-world impact—whether that's saving teachers 35% of their time, helping mobility-impaired 
                    individuals navigate their world, or pushing the boundaries of competitive robotics. Features are 
                    meaningless without measurable outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-secondary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔧</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Bridge Hardware & Software</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The most exciting problems exist at the intersection of physical and digital. From designing PCBs 
                    to writing the software that brings them to life, I thrive in this hybrid space where electrical 
                    engineering meets computer science. The best solutions don't choose between hardware and software—they 
                    leverage both.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Leadership Through Action</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Leading isn't about having the loudest voice—it's about rolling up your sleeves and showing the way. 
                    Whether I'm prototyping an MVP, organizing a 30-team robotics event, or securing funding from UCLA 
                    professors, I lead by building, testing, and iterating. Teams follow results, not titles.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💡</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Continuous Optimization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    There's always a faster algorithm, a more efficient design, a better user experience. I'm never 
                    satisfied with "good enough"—whether it's optimizing airfoils for 15% more power output or cutting 
                    UI/UX defects by 20%, I'm constantly asking: "How can this be better?" Excellence is a moving target, 
                    and that's what makes engineering exciting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
