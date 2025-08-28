import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Sparkles, Zap, Gift } from "lucide-react";
import { GlassEffect } from "@/components/ui/liquid-glass";
import PaymentModal from "./PaymentModal";

const StickyFooterCTA = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'base' | 'premium'>('base');
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handlePlanSelect = (plan: 'base' | 'premium') => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 left-0 right-0 z-50 flex justify-center transition-all duration-500 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <div className="inline-block">
        <GlassEffect className="relative rounded-2xl">
          <div className="relative p-3 sm:p-3.5 lg:p-4">
            <div className="flex items-center justify-between gap-2 sm:gap-3">
              {/* Left content */}
              <div className="flex-1 flex items-center gap-3 min-w-0">
                <div className="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 items-center justify-center shadow-sm">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-semibold text-foreground flex items-center gap-2 flex-wrap">
                    <span className="truncate">Ready to start building?</span>
                    <span className="inline-flex items-center gap-1 bg-muted text-foreground/70 text-[10px] sm:text-xs px-2 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      Limited time
                    </span>
                  </div>
                  <div className="hidden md:block text-xs text-muted-foreground mt-1 truncate">
                    ₹5,000 early bird discount + exclusive bonuses inside
                  </div>
                </div>
              </div>
              
              {/* Right actions */}
              <div className="flex items-center gap-2 shrink-0">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="hidden sm:inline-flex bg-white border-border/70 hover:bg-muted/40"
                  onClick={() => handlePlanSelect('base')}
                  aria-label="Choose Base plan"
                >
                  Base · ₹10K
                </Button>
                
                <Button 
                  size="sm"
                  className="bg-primary text-white hover:bg-primary/90 shadow-sm"
                  onClick={() => handlePlanSelect('premium')}
                  aria-label="Choose Premium plan"
                >
                  <span className="hidden sm:inline">Premium · ₹30K</span>
                  <span className="sm:hidden">Start now</span>
                </Button>
                
                <button 
                  onClick={() => setIsVisible(false)}
                  className="p-2 hover:bg-muted/50 rounded-lg transition-colors"
                  aria-label="Dismiss banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </GlassEffect>
      </div>
      
      <PaymentModal 
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        plan={selectedPlan}
      />
    </div>
  );
};

export default StickyFooterCTA;