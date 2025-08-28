import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Quote } from "lucide-react";

const MentorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Meet Your <span className="bg-gradient-accent bg-clip-text text-transparent">Mentor</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn from someone who's walked the path and built a brand that speaks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Mentor Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl shadow-glow flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/20 to-neon-blue/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">S</span>
                  </div>
                  <div className="text-white font-bold text-xl">Shan</div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-cyber-green px-3 py-1 rounded-full text-white text-sm font-semibold animate-float">
                APM @ EdTech
              </div>
              <div className="absolute -bottom-4 -left-4 bg-soft-coral px-3 py-1 rounded-full text-white text-sm font-semibold animate-float" style={{ animationDelay: "1s" }}>
                Brand Strategist
              </div>
            </div>
            
            {/* Mentor Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Shan</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-4 h-4 text-electric-purple" />
                  <span className="text-foreground font-medium">Assistant Product Manager @ EdTech</span>
                </div>
                <Badge variant="outline" className="border-neon-blue text-neon-blue">
                  From video editor to brand strategist
                </Badge>
              </div>
              
              <div className="bg-gradient-to-r from-electric-purple/10 to-neon-blue/10 p-6 rounded-2xl border border-electric-purple/20">
                <Quote className="w-8 h-8 text-electric-purple mb-4" />
                <blockquote className="text-lg text-foreground font-medium mb-4">
                  "You don't need to be famous to be unforgettable."
                </blockquote>
                <p className="text-muted-foreground">
                  I transformed my career from video editing to product management by building a strong personal brand. 
                  Now I help others unlock the same opportunities through strategic branding.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Students Mentored</div>
                </div>
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <div className="text-2xl font-bold text-foreground">3x</div>
                  <div className="text-sm text-muted-foreground">Avg. Growth Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;