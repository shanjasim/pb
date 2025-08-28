import React from 'react';

const HeroSection = () => {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blurred number "2" - positioned behind left side */}
        <div className="absolute -left-20 top-1/4 w-96 h-96 text-purple-200/30 font-black text-[20rem] leading-none select-none blur-sm transform -rotate-12">
          2
        </div>
        
        {/* Blurred number "1" - positioned behind right side */}
        <div className="absolute -right-20 bottom-1/4 w-96 h-96 text-purple-200/30 font-black text-[20rem] leading-none select-none blur-sm transform rotate-12">
          1
        </div>
        
        {/* Subtle purple glow effects */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Local animation keyframes */}
      <style>{`
        @keyframes fadeSlideLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeSlideRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side - Image column */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start" style={{ animation: 'fadeSlideLeft 0.8s ease-out both 0.05s' }}>
            <div className="relative">
              {/* Image Container with Purple Background */}
              <div className="relative">
                {/* Purple background circle - visible on all devices */}
                <div className="absolute inset-0 w-[500px] h-[600px] md:w-[600px] md:h-[700px] bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 rounded-full blur-3xl opacity-70 -z-10"></div>
                
                {/* Clean Image with masked bottom fade to reveal background */}
                <div className="w-[420px] h-[420px] lg:w-[560px] lg:h-[660px] rounded-3xl overflow-hidden relative">
                  <img 
                    src="/src/assets/images/ummarkka.png" 
                    alt="Brand Glow Up 21 Expert" 
                    className="w-full h-full object-contain"
                    style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 72%, rgba(0,0,0,0.6) 86%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 72%, rgba(0,0,0,0.6) 86%, transparent 100%)' }}
                  />
                </div>
                
                {/* Additional purple glow effects */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-400/40 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-500/50 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8" style={{ animation: 'fadeSlideRight 0.9s ease-out both 0.15s' }}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 px-4 py-2 rounded-full border border-purple-300/50">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-pulse"></div>
              <span className="text-purple-700 font-semibold text-sm tracking-wide">21-Day Brand Challenge</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold sm:font-black leading-none tracking-tight">
                <span className="block bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent mb-2">Transform Your</span>
                <span className="block text-gray-900 mb-2">Personal Brand</span>
                <span className="block bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">in Just 21 Days</span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg lg:max-w-none font-medium">
              Join thousands of professionals who've unlocked their brand's potential. From beginners to experts, we're building the future of personal branding.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              {/* Primary CTA */}
              <button 
                onClick={scrollToPricing}
                className="relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-base hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span>Join for as low as ₹10,000</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              {/* Secondary CTA */}
              <button 
                onClick={scrollToPricing}
                className="px-8 py-4 rounded-xl font-semibold text-base border-2 border-purple-300 text-purple-700 hover:border-purple-400 hover:text-purple-800 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 group bg-white"
              >
                <span>See other plans</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;