import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Sparkles } from "lucide-react";
import PaymentModal from "./PaymentModal";
import { GlassEffect } from "@/components/ui/liquid-glass";

const PricingSection = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'base' | 'premium'>('base');

  const handlePlanSelect = (plan: 'base' | 'premium') => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  const plans = [
    {
      name: "Base Plan",
      price: "₹10,000",
      originalPrice: "₹15,000",
      discount: "₹5,000 OFF",
      period: "",
      description: "Perfect for getting started with personal branding",
      features: [
        "Access to all 21 challenges",
        "Daily content & prompts",
        "Community access",
        "Certificate of completion",
        "Email support"
      ],
      cta: "Join Base Plan",
      variant: "cta" as const,
      popular: false
    },
    {
      name: "Premium Plan",
      price: "₹30,000",
      originalPrice: "₹35,000",
      discount: "₹5,000 OFF",
      period: "",
      description: "Everything you need to build a powerful personal brand",
      features: [
        "Everything in Base Plan",
        "4 One-on-One mentoring calls (30 min each)",
        "Personalized brand audit",
        "Automation support",
        "Edapt premium community access",
        "Direct mentor access"
      ],
      cta: "Join Premium Plan",
      variant: "premium" as const,
      popular: true
    }
  ];

  return (
    <section id="pricing-section" className="py-14 md:py-20 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Choose Your <span className="bg-gradient-to-r from-indigo-600 to-slate-800 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Choose the plan that fits your personal branding goals.
          </p>
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full border border-purple-200 shadow-sm">
            <span className="text-purple-700 font-semibold text-lg">Early Bird Special: ₹5,000 OFF</span>
            <Sparkles className="w-5 h-5 text-purple-700" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative group transition-all duration-500 ease-out ${
                plan.popular ? 'lg:scale-102' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-indigo-600 to-slate-700 px-5 py-2.5 rounded-full shadow-xl border border-white/20 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-white" />
                      <span className="text-white font-bold text-xs tracking-wide">Most Popular</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Pricing Card */}
              <div className={`relative h-full bg-white rounded-2xl border-2 transition-all duration-500 group-hover:shadow-xl ${
                plan.popular 
                  ? 'border-indigo-500/60 shadow-lg shadow-indigo-500/15' 
                  : 'border-gray-200 group-hover:border-indigo-400/60 group-hover:shadow-indigo-500/15'
              }`}>
                
                {/* Card Header */}
                <div className="p-6 lg:p-8 text-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-xs mx-auto mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Pricing Display */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-base text-gray-400 line-through">{plan.originalPrice}</span>
                      <span className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                        {plan.discount}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-2 mb-3">
                      <span className="text-3xl lg:text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 text-base font-medium">+ GST</span>
                    </div>
                    
                    {/* Special Offer for Premium */}
                    {plan.popular && (
                      <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-medium">
                        <Star className="w-3 h-3" />
                        <span>Free access to monthly $2 membership</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Features List */}
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start gap-3 group-hover:translate-x-1 transition-all duration-300 ease-out"
                        style={{ animationDelay: `${featureIndex * 80}ms` }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-indigo-200 transition-colors duration-300">
                          <Check className="w-3 h-3 text-indigo-600" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <Button 
                    variant={plan.variant} 
                    size="lg" 
                    className={`w-full text-base py-4 h-14 font-bold rounded-xl transition-all duration-500 transform group-hover:scale-105 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-indigo-700 to-slate-800 hover:from-indigo-800 hover:to-slate-900 shadow-lg shadow-indigo-700/20 hover:shadow-xl hover:shadow-indigo-700/30' 
                        : 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30'
                    }`}
                    onClick={() => handlePlanSelect(plan.name === 'Base Plan' ? 'base' : 'premium')}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {plan.cta}
                    </span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </div>
                
                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Accepted Payment Methods</h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm">GPay</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm">UPI</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm">Razorpay</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm">Card</span>
            </div>
          </div>
        </div>
        
        {/* WhatsApp Contact Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Need Help? Connect Directly</h3>
            <p className="text-gray-600 mb-6">Have questions about our plans? Chat with us on WhatsApp for instant support!</p>
            <a 
              href="https://wa.me/919072616100?text=Hi! I'm interested in 21 days personal branding program. Can you help me choose the right plan?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 00-8.94 14.5L2 22l5.7-1.98A10 10 0 1012 2zm0 2a8 8 0 110 16c-1.34 0-2.6-.33-3.7-.93l-.26-.14-3.04 1.06 1.04-2.95-.15-.26A8 8 0 0112 4zm4.47 9.56c-.2-.1-1.18-.58-1.36-.65-.18-.07-.3-.1-.43.09-.13.2-.49.64-.6.77-.11.13-.21.15-.39.05-.18-.09-.76-.28-1.46-.9-.54-.48-.91-1.08-1.02-1.26-.11-.18-.01-.28.08-.37.09-.08.2-.21.3-.32.1-.11.13-.19.2-.31.06-.12.03-.23-.02-.32-.05-.09-.41-.98-.57-1.34-.15-.35-.3-.31-.41-.32-.11 0-.24 0-.36 0-.13 0-.33.05-.49.23-.17.18-.65.64-.65 1.57 0 .93.7 1.83.8 1.97.1.14 1.36 2.11 3.3 2.78.49.18.82.29 1.1.36.46.13.9.11 1.24.07.38-.05 1.16-.44 1.33-.87.18-.43.18-.79.12-.87-.05-.08-.18-.12-.4-.22z"/>
              </svg>
              Chat on WhatsApp
            </a>
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

export default PricingSection;