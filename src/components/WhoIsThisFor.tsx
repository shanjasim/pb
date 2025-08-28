import { GraduationCap, Laptop, Video, Brain } from "lucide-react";

const WhoIsThisFor = () => {
  const audiences = [
    {
      title: "Students",
      emoji: "🎓",
      icon: GraduationCap,
      description: "Build a strong professional presence before you graduate"
    },
    {
      title: "Freelancers",
      emoji: "💻",
      icon: Laptop,
      description: "Attract higher-paying clients with a magnetic personal brand"
    },
    {
      title: "Creators",
      emoji: "🎥",
      icon: Video,
      description: "Stand out in the creator economy and monetize your audience"
    },
    {
      title: "Job Seekers",
      emoji: "🧠",
      icon: Brain,
      description: "Get noticed by recruiters and land your dream job"
    }
  ];

  return (
    <section id="who-is-this-for" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Who Is This <span className="bg-gradient-primary bg-clip-text text-transparent">For?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perfect for ambitious individuals ready to level up their personal brand
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-2xl border border-border bg-card hover:border-electric-purple/50 transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <div className="mb-6">
                <div className="text-4xl mb-4">{audience.emoji}</div>
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <audience.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {audience.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-secondary/10 px-6 py-3 rounded-full border border-soft-coral/30">
            <span className="text-foreground font-medium">
              Ready to join ambitious individuals building their future?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;