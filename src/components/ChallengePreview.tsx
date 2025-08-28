import { useState } from "react";
import { GlassEffect } from "@/components/ui/liquid-glass";
import { ChevronLeft, ChevronRight, User, Palette, MessageCircle, Users, Briefcase, Brain, Target, BookOpen, Sparkles, Video, Instagram, Linkedin, Scissors, Calendar, Zap, Camera, TrendingUp, BarChart3, DollarSign, Heart, Globe, FileText, Rocket, Star, Trophy, Lightbulb, Mic, Smartphone, Palette as PaletteIcon, Globe as GlobeIcon, Search, Megaphone, Wrench, X, Check } from "lucide-react";

const ChallengePreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const challenges = [
    {
      day: 1,
      title: "Introduction to Personal Branding",
      description: "Understand what personal branding is & core aspects",
      icon: Brain,
      color: "from-primary via-primary/80 to-primary/60",
      detailedDescription: "Start your journey with a comprehensive understanding of personal branding fundamentals. Learn what personal branding truly means, discover the core aspects that make a brand successful, and understand how to position yourself in the market. This foundational day will set the tone for your entire transformation journey.",
      keyPoints: [
        "Definition and importance of personal branding",
        "Core elements of successful personal brands",
        "Understanding your unique value proposition",
        "Setting the foundation for brand development"
      ]
    },
    {
      day: 2,
      title: "Niche Identification & Positioning",
      description: "Identify expertise & define brand voice",
      icon: Target,
      color: "from-primary/80 via-primary/60 to-primary/40",
      detailedDescription: "Discover your unique niche and establish your brand positioning. Learn how to identify your areas of expertise, understand your target audience, and define a distinctive brand voice that sets you apart from competitors. This strategic foundation will guide all your future branding decisions.",
      keyPoints: [
        "Identifying your core expertise areas",
        "Understanding your target audience",
        "Defining your unique brand voice",
        "Positioning strategy development"
      ]
    },
    {
      day: 3,
      title: "Instagram for Personal Branding",
      description: "Learn growth & engagement strategies",
      icon: Instagram,
      color: "from-primary via-primary/80 to-primary/60",
      detailedDescription: "Master Instagram as a powerful personal branding platform. Learn proven growth strategies, engagement techniques, and content optimization methods. Discover how to build an authentic presence that attracts your ideal audience and converts followers into brand advocates.",
      keyPoints: [
        "Instagram algorithm optimization",
        "Content strategy and planning",
        "Engagement and community building",
        "Growth hacking techniques"
      ]
    },
    {
      day: 4,
      title: "YouTube for Personal Branding",
      description: "Storytelling & video influence techniques",
      icon: Video,
      color: "from-primary/80 via-primary/60 to-primary/40",
      detailedDescription: "Unlock the power of video content for personal branding. Learn storytelling techniques, video production basics, and strategies to build influence through YouTube. Master the art of creating compelling video content that establishes authority and grows your personal brand.",
      keyPoints: [
        "Video storytelling fundamentals",
        "YouTube channel optimization",
        "Content planning and scripting",
        "Building video authority"
      ]
    },
    {
      day: 5,
      title: "Facebook for Community Building",
      description: "Leverage groups & authority positioning",
      icon: Users,
      color: "from-primary via-primary/80 to-primary/60",
      detailedDescription: "Harness Facebook's community-building power for your personal brand. Learn how to create and manage engaging groups, position yourself as an authority, and build meaningful relationships with your audience. Discover strategies to leverage Facebook's ecosystem for maximum brand impact.",
      keyPoints: [
        "Facebook group creation and management",
        "Authority positioning strategies",
        "Community engagement techniques",
        "Relationship building methods"
      ]
    },
    {
      day: 6,
      title: "Content Creation with AI",
      description: "Use AI for writing, planning & ideation",
      icon: Sparkles,
      color: "from-primary/80 via-primary/60 to-primary/40",
      detailedDescription: "Revolutionize your content creation with AI tools. Learn how to use artificial intelligence for writing compelling copy, planning content strategies, and generating creative ideas. Master the balance between AI assistance and human creativity to produce authentic, engaging content.",
      keyPoints: [
        "AI writing tools and techniques",
        "Content ideation with AI",
        "AI-powered content planning",
        "Maintaining authenticity with AI"
      ]
    },
    {
      day: 7,
      title: "Visual Content with AI",
      description: "Create images, videos & creative visuals with AI",
      icon: Palette,
      color: "from-primary via-primary/80 to-primary/60",
      detailedDescription: "Create stunning visual content using cutting-edge AI technology. Learn how to generate professional images, videos, and creative visuals that enhance your personal brand. Master AI visual tools to create consistent, high-quality content that captures attention and builds brand recognition.",
      keyPoints: [
        "AI image generation tools",
        "Video creation with AI",
        "Visual brand consistency",
        "AI creative workflows"
      ]
    },
    {
      day: 8,
      title: "Presentation & On-Camera Presence",
      description: "Improve confidence, voice & body language",
      icon: Mic,
      color: "from-primary/80 via-primary/60 to-primary/40",
      detailedDescription: "Develop confidence and charisma for on-camera presentations. Learn techniques to improve your voice projection, body language, and overall presence. Master the art of engaging delivery that builds trust and authority with your audience.",
      keyPoints: [
        "Voice projection and modulation",
        "Body language and posture",
        "Confidence building techniques",
        "Engaging presentation skills"
      ]
    },
    {
      day: 9,
      title: "Creator's Toolkit",
      description: "Master essential apps, software & tools",
      icon: Wrench,
      color: "from-primary via-primary/80 to-primary/60",
      detailedDescription: "Build your arsenal of essential tools for personal branding success. Discover and master the apps, software, and tools that will streamline your workflow and enhance your content quality. Learn to work efficiently with the right technology stack.",
      keyPoints: [
        "Essential content creation tools",
        "Productivity and workflow apps",
        "Analytics and tracking tools",
        "Tool integration strategies"
      ]
    },
    {
      day: 10,
      title: "Video Shooting Techniques",
      description: "Learn camera basics, lighting & angles",
      icon: Camera,
      color: "from-primary/80 via-primary/60 to-primary/40",
      detailedDescription: "Master professional video shooting techniques on any budget. Learn camera fundamentals, lighting setups, and angle strategies that will make your videos look professional. Understand how to create compelling visual content that enhances your personal brand.",
      keyPoints: [
        "Camera settings and fundamentals",
        "Lighting setup and techniques",
        "Shot composition and angles",
        "Professional video aesthetics"
      ]
    },
    {
      day: 11,
      title: "Video Editing Masterclass (Part 1)",
      description: "Build editing workflow & storytelling cuts",
      icon: Scissors,
      color: "from-primary via-primary/80 to-primary/60",
      detailedDescription: "Learn the fundamentals of video editing and storytelling. Build an efficient editing workflow and master the art of cutting for maximum impact. Discover how to transform raw footage into compelling stories that strengthen your personal brand.",
      keyPoints: [
        "Editing workflow fundamentals",
        "Storytelling through editing",
        "Cutting techniques and timing",
        "Workflow optimization"
      ]
    },
    {
      day: 12,
      title: "Video Editing Masterclass (Part 2)",
      description: "Learn polish, transitions & pro edits",
      icon: Scissors,
      color: "from-primary/80 via-primary/60 to-primary/40",
      detailedDescription: "Take your video editing to the next level with advanced techniques. Learn professional polishing methods, smooth transitions, and advanced editing tricks. Master the finishing touches that make your videos stand out and reflect your brand quality.",
      keyPoints: [
        "Advanced editing techniques",
        "Smooth transition creation",
        "Video polishing and refinement",
        "Professional finish methods"
      ]
    },
    {
      day: 13,
      title: "LinkedIn Deep Dive (Part 1)",
      description: "Optimize LinkedIn profile & authority content",
      icon: Linkedin,
      color: "from-primary via-primary/80 to-primary/60",
      detailedDescription: "Optimize your LinkedIn profile for maximum impact and create authority-building content. Learn profile optimization strategies, content creation techniques, and positioning methods that establish you as a thought leader in your industry.",
      keyPoints: [
        "LinkedIn profile optimization",
        "Authority content creation",
        "Professional positioning",
        "Thought leadership strategies"
      ]
    },
    {
      day: 14,
      title: "LinkedIn Deep Dive (Part 2)",
      description: "Networking & strategic growth",
      icon: Users,
      color: "from-primary/80 via-primary/60 to-primary/40",
      detailedDescription: "Master LinkedIn networking and strategic growth strategies. Learn how to build meaningful professional relationships, expand your network strategically, and leverage connections for brand growth. Discover advanced networking techniques that accelerate your personal brand success.",
      keyPoints: [
        "Strategic networking methods",
        "Relationship building techniques",
        "Network expansion strategies",
        "Connection leverage tactics"
      ]
    },
    {
      day: 15,
      title: "Content Calendar & Planning",
      description: "Build a consistency framework",
      icon: Calendar,
      color: "from-primary via-primary/80 to-primary/60",
      detailedDescription: "Create a strategic content calendar that ensures consistency and growth. Learn how to plan, organize, and maintain a content schedule that keeps your audience engaged and builds momentum for your personal brand. Master the art of content planning and execution.",
      keyPoints: [
        "Content calendar creation",
        "Strategic planning frameworks",
        "Consistency maintenance",
        "Content scheduling tools"
      ]
    },
    {
      day: 16,
      title: "Automation for Creators",
      description: "Automate posting & workflows",
      icon: Zap,
      color: "from-primary/80 via-primary/60 to-primary/40",
      detailedDescription: "Streamline your content creation and distribution with powerful automation tools. Learn how to automate repetitive tasks, schedule content, and create efficient workflows that save time and increase productivity. Master automation strategies for maximum efficiency.",
      keyPoints: [
        "Content automation tools",
        "Workflow optimization",
        "Scheduling strategies",
        "Productivity enhancement"
      ]
    },
    {
      day: 17,
      title: "Scaling Your Personal Brand",
      description: "Advanced growth & monetization strategies",
      icon: TrendingUp,
      color: "from-primary via-primary/80 to-primary/60",
      detailedDescription: "Take your personal brand to the next level with advanced scaling strategies. Learn proven methods for exponential growth, audience expansion, and multiple revenue streams. Discover how to transform your personal brand into a sustainable business.",
      keyPoints: [
        "Advanced growth strategies",
        "Monetization techniques",
        "Audience expansion methods",
        "Business transformation"
      ]
    },
    {
      day: 18,
      title: "Canva & Graphic Designing",
      description: "Create slides, brand kits & assets",
      icon: PaletteIcon,
      color: "from-primary/80 via-primary/60 to-primary/40",
      detailedDescription: "Master Canva and graphic design to create professional visual assets for your personal brand. Learn design principles, create brand kits, and develop stunning graphics that enhance your content and strengthen your brand identity.",
      keyPoints: [
        "Canva mastery and techniques",
        "Design principles and fundamentals",
        "Brand kit creation",
        "Visual asset development"
      ]
    },
    {
      day: 19,
      title: "No-Code Websites",
      description: "Build your portfolio site",
      icon: GlobeIcon,
      color: "from-primary via-primary/80 to-primary/60",
      detailedDescription: "Create a professional portfolio website without coding knowledge. Learn how to use no-code platforms to build stunning websites that showcase your expertise and attract opportunities. Master website building for personal brand success.",
      keyPoints: [
        "No-code platform selection",
        "Website design principles",
        "Portfolio optimization",
        "Professional presentation"
      ]
    },
    {
      day: 20,
      title: "Analysis",
      description: "Analyse participants' brand",
      icon: BarChart3,
      color: "from-primary/80 via-primary/60 to-primary/40",
      detailedDescription: "Learn how to analyze and evaluate personal brand performance. Discover key metrics, analytics tools, and evaluation methods that help you understand your brand's impact and identify areas for improvement. Master brand analysis for continuous growth.",
      keyPoints: [
        "Brand performance metrics",
        "Analytics tools and methods",
        "Performance evaluation",
        "Growth optimization"
      ]
    },
    {
      day: 21,
      title: "Shout-Out Day",
      description: "Final recognition & networking",
      icon: Megaphone,
      color: "from-primary via-primary/80 to-primary/60",
      detailedDescription: "Celebrate your transformation journey and connect with fellow participants. Learn final networking strategies, receive recognition for your achievements, and establish lasting connections that support your continued personal brand growth.",
      keyPoints: [
        "Achievement celebration",
        "Final networking strategies",
        "Community building",
        "Ongoing growth planning"
      ]
    }
  ];

  const nextChallenge = () => {
    setCurrentIndex((prev) => (prev + 1) % challenges.length);
  };

  const prevChallenge = () => {
    setCurrentIndex((prev) => (prev - 1 + challenges.length) % challenges.length);
  };

  const openDayDetails = (day: number) => {
    setSelectedDay(day);
  };

  const closeDayDetails = () => {
    setSelectedDay(null);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Challenge <span className="bg-gradient-accent bg-clip-text text-transparent">Sneak Peek</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a taste of what you'll be building over the next 21 days
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            {/* Mobile carousel */}
            <div className="md:hidden">
              <GlassEffect className="rounded-2xl py-4 sm:py-5 px-12 sm:px-14 border border-border/60 bg-transparent relative overflow-hidden flex flex-col items-center">
                {/* Absolute nav arrows - keep position stable */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
                  <button
                    onClick={prevChallenge}
                    className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
                    aria-label="Previous day"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextChallenge}
                    className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
                    aria-label="Next day"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Day header */}
                <div className="text-center mb-3 sm:mb-4">
                  <span className="text-xs text-muted-foreground">Day</span>
                  <div className="text-2xl font-bold text-foreground leading-none">{challenges[currentIndex].day}</div>
                </div>

                <div className="text-center w-full max-w-[360px] mx-auto px-2 sm:px-4 flex flex-col items-center">
                  <div className={`w-16 h-16 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-br ${challenges[currentIndex].color} flex items-center justify-center shadow-lg`}>
                    {(() => {
                      const IconComponent = challenges[currentIndex].icon;
                      return <IconComponent className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2 leading-snug min-h-[3rem] flex items-center justify-center text-center break-words mx-auto">
                    {challenges[currentIndex].title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed min-h-[3.75rem] flex items-center justify-center text-center break-words mx-auto">
                    {challenges[currentIndex].description}
                  </p>
                </div>
                
                <div className="flex justify-center mt-4 sm:mt-5 gap-1 overflow-x-auto pb-1">
                  {challenges.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors flex-shrink-0 ${
                        index === currentIndex ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </GlassEffect>
            </div>
            
            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-7 gap-4 lg:gap-6">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => openDayDetails(challenge.day)}
                >
                  <GlassEffect 
                    className="group p-4 lg:p-6 rounded-2xl border border-border/60 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105 animate-fade-in h-full min-h-[220px] flex flex-col justify-between"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="text-center flex-1 flex flex-col justify-center">
                      <div className="text-xs lg:text-sm text-muted-foreground mb-3">Day {challenge.day}</div>
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 mx-auto mb-4 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                        {(() => {
                          const IconComponent = challenge.icon;
                          return <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-white" />;
                        })()}
                      </div>
                      <h3 className="text-sm lg:text-base font-bold text-foreground mb-2 leading-tight line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
                        {challenge.title}
                      </h3>
                      <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-[3.25rem] flex items-center justify-center">
                        {challenge.description}
                      </p>
                    </div>
                  </GlassEffect>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Day Details Modal */}
      {selectedDay && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <GlassEffect className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 rounded-3xl border border-border/60 bg-white/90 backdrop-blur-md">
            <button
              onClick={closeDayDetails}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            {(() => {
              const challenge = challenges.find(c => c.day === selectedDay);
              if (!challenge) return null;
              
              const IconComponent = challenge.icon;
              
              return (
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-accent flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-sm text-muted-foreground">Day</span>
                    <div className="text-4xl font-bold text-foreground">{challenge.day}</div>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {challenge.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {challenge.detailedDescription}
                  </p>
                  
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Key Learning Points:</h3>
                    <ul className="space-y-3">
                      {challenge.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-foreground/90 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })()}
          </GlassEffect>
        </div>
      )}
    </>
  );
};

export default ChallengePreview;