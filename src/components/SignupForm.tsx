import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { initiatePayment, getPaymentAmount } from "@/lib/payment";

const SignupForm = ({ plan = "base" }: { plan?: "base" | "premium" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Initiate Razorpay payment
      initiatePayment({
        name: formData.name,
        email: formData.email,
        instagram: formData.instagram,
        plan: plan
      });
    } catch (error) {
      toast.error("Failed to initiate payment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Input
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
          className="text-center"
        />
      </div>
      
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          required
          className="text-center"
        />
      </div>
      
      <div>
        <Input
          name="instagram"
          placeholder="Your Instagram handle (optional)"
          value={formData.instagram}
          onChange={handleChange}
          className="text-center"
        />
      </div>
      
      <Button 
        type="submit" 
        variant={plan === "premium" ? "premium" : "cta"} 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Preparing payment..." : `Pay ${getPaymentAmount(plan)} + GST`}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        By signing up, you agree to our terms and privacy policy.
      </p>
    </form>
  );
};

export default SignupForm;