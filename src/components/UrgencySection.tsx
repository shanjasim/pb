import { useState, useEffect } from "react";
import { Clock, Users, AlertTriangle } from "lucide-react";

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-destructive/10 to-soft-coral/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <AlertTriangle className="w-6 h-6 text-soft-coral animate-pulse" />
            <span className="text-soft-coral font-bold">Limited Time</span>
            <AlertTriangle className="w-6 h-6 text-soft-coral animate-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Next Batch Starts <span className="bg-gradient-secondary bg-clip-text text-transparent">Soon</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Don't miss out on transforming your personal brand
          </p>
          
          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds }
            ].map((unit, index) => (
              <div key={index} className="bg-card rounded-xl p-4 border border-border shadow-lg">
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-sm text-muted-foreground">{unit.label}</div>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="text-sm">Only 3 seats left</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;