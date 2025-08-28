import { Star } from "lucide-react";
import { GlassEffect } from "@/components/ui/liquid-glass";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Freelance Designer",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Went from 200 to 2k followers in 21 days! The daily challenges actually work and the community is amazing 🔥"
    },
    {
      name: "Arjun Patel",
      role: "Marketing Student",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Got my dream internship because my LinkedIn was fire. The mentoring calls were game-changers. Worth every rupee!"
    },
    {
      name: "Sneha Gupta",
      role: "Content Creator",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "The cashback is real! Completed all challenges and got ₹10k back. Plus my brand looks professional now 💯"
    },
    {
      name: "Rohit Kumar",
      role: "Software Developer",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Never thought I'd be good at personal branding. The daily tasks made it so easy. Now clients reach out to me!"
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4">
            Success <span className="bg-gradient-secondary bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real people, real results, real transformations ✨
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <GlassEffect 
              key={index}
              className="group p-5 sm:p-6 rounded-2xl border border-border/60 hover:border-electric-purple/50 transition-all duration-300 md:hover:scale-105"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                </div>
              </div>
            </GlassEffect>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-cyber-green/10 px-5 py-3 rounded-full border border-cyber-green/30">
            <span className="text-cyber-green font-semibold">Join 500+ successful brand builders</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;