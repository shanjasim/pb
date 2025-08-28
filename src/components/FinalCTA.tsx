import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import PaymentModal from "./PaymentModal";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";

const FinalCTA = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'base' | 'premium'>('base');

  const handlePlanSelect = (plan: 'base' | 'premium') => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };
  return (
    <section className="py-14 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/70 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/50 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Particle word effect banner */}
          <div className="mx-auto mb-8 rounded-xl overflow-hidden border border-muted">
            <ParticleTextEffect
              words={["Stop", "Scrolling", "Start", "Building"]}
              height={220}
              fitParent
              backgroundFade="rgba(255,255,255,0.65)"
              className="bg-white"
            />
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            21 days from now, you'll either have a brand that opens doors or another 21 days of "what if."
            <br />
            <span className="font-semibold text-primary">Early Bird Special: Save ₹5,000 today!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-base sm:text-lg px-7 sm:px-8 py-3 sm:py-4 h-auto group animate-pulse-glow"
              onClick={() => handlePlanSelect('base')}
            >
              Join Base Plan - ₹15K + GST
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="premium" 
              size="lg" 
              className="text-base sm:text-lg px-7 sm:px-8 py-3 sm:py-4 h-auto group"
              onClick={() => handlePlanSelect('premium')}
            >
              Join Premium Plan - ₹35K + GST
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-muted-foreground text-sm max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              GPay
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-primary/70 rounded-full"></span>
              UPI
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-primary/60 rounded-full"></span>
              Razorpay
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-primary/50 rounded-full"></span>
              Cards
            </div>
          </div>
          
          <div className="text-muted-foreground text-xs sm:text-sm">
            🎯 <strong>Limited Time:</strong> Early Bird pricing ends soon - Save ₹5,000 today!
          </div>
        </div>
      </div>
      
      <PaymentModal 
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        plan={selectedPlan}
      />
    </section>
  );
};

export default FinalCTA;