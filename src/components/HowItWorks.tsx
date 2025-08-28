import { Calendar, Rocket, ArrowRight, Sparkles, Target, Trophy } from "lucide-react";
import { GlassEffect } from "@/components/ui/liquid-glass";

const HowItWorks = () => {
  const steps = [
    {
      icon: Target,
      title: "Get Daily Challenges",
      description: "Receive curated, actionable tasks designed to build your personal brand systematically",
      color: "from-primary via-primary/80 to-primary/60",
      delay: "0s"
    },
    {
      icon: Trophy,
      title: "Build & Showcase",
      description: "Complete challenges, share your progress publicly, and watch your brand authority grow",
      color: "from-primary/80 via-primary/60 to-primary/40",
      delay: "0.2s"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-primary mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            How It <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Two simple steps to transform your personal brand and unlock new opportunities
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start md:items-center">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group animate-fade-in"
                style={{ animationDelay: step.delay }}
              >
                <div className="relative">
                  {/* Step number background */}
                  <div className="absolute -top-6 -left-6 text-7xl md:text-9xl font-black text-primary/10 leading-none select-none">
                    {index + 1}
                  </div>
                  
                  {/* Card */}
                  <GlassEffect className="relative rounded-3xl p-6 md:p-8 hover:shadow-2xl transition-all duration-500 md:group-hover:-translate-y-2">
                    {/* Icon container */}
                    <div className={`w-14 h-14 md:w-16 md:h-16 mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg md:group-hover:scale-110 md:group-hover:rotate-6 transition-all duration-500`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl md:text-3xl font-bold text-foreground mb-4 md:group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Animated arrow for connection */}
                    {index === 0 && (
                      <div className="hidden md:block absolute -right-6 md:-right-8 top-1/2 transform -translate-y-1/2">
                        <div className="flex items-center">
                          <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                          <ArrowRight className="w-5 md:w-6 h-5 md:h-6 text-primary animate-pulse ml-2" />
                        </div>
                      </div>
                    )}
                  </GlassEffect>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 md:w-8 md:h-8 bg-primary/20 rounded-full blur-sm md:group-hover:bg-primary/30 transition-colors duration-500"></div>
                  <div className="absolute -top-2 -right-2 w-3 h-3 md:w-4 md:h-4 bg-primary/30 rounded-full blur-sm md:group-hover:bg-primary/40 transition-colors duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA section */}
          <div className="text-center mt-12 md:mt-20 animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl sm:rounded-full text-primary border border-primary/20 max-w-full">
              <Rocket className="w-5 h-5" />
              <span className="font-medium text-sm sm:text-base leading-tight">Ready to transform your brand in just 21 days?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;