import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChallengePreview from "@/components/ChallengePreview";
import StickyFooterCTA from "@/components/StickyFooterCTA";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import PricingSection from "@/components/PricingSection";
import UrgencySection from "@/components/UrgencySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="reveal"><HeroSection /></div>
      <div className="reveal"><HowItWorks /></div>
      <div className="reveal"><WhoIsThisFor /></div>
      <div className="reveal"><PricingSection /></div>
      <div className="reveal"><ChallengePreview /></div>
      <div className="reveal"><UrgencySection /></div>
      <StickyFooterCTA />
      <Footer />
    </div>
  );
};

export default Index;
