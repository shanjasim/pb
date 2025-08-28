import { toast } from "sonner";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface PaymentData {
  name: string;
  email: string;
  instagram?: string;
  plan: 'base' | 'premium';
}

export const initiatePayment = (data: PaymentData) => {
  const amount = data.plan === 'base' ? 1500000 : 3500000; // Amount in paisa (₹15,000 or ₹35,000)
  const planName = data.plan === 'base' ? 'Base Plan' : 'Premium Plan';

  const options = {
    key: 'rzp_test_1DP5mmOlF5G5ag', // Replace with your Razorpay key
    amount: amount,
    currency: 'INR',
    name: '21 Days Personal Branding Challenge',
    description: `${planName} - Transform your personal brand in 21 days`,
    image: '/favicon.ico',
    handler: function (response: any) {
      toast.success("🎉 Payment successful! Welcome to the challenge!");
      console.log('Payment successful:', response);
      
      // Here you would typically send the payment data to your backend
      // For now, we'll just store it locally and show success
      localStorage.setItem('paymentData', JSON.stringify({
        ...data,
        paymentId: response.razorpay_payment_id,
        timestamp: new Date().toISOString()
      }));
      
      // Redirect or show success state
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    prefill: {
      name: data.name,
      email: data.email,
      contact: '', // You can add phone number field if needed
    },
    notes: {
      plan: planName,
      instagram: data.instagram || '',
    },
    theme: {
      color: '#3B82F6',
    },
    modal: {
      ondismiss: function() {
        toast.error("Payment cancelled. Your spot is still available!");
      }
    }
  };

  if (window.Razorpay) {
    const rzp = new window.Razorpay(options);
    rzp.open();
  } else {
    toast.error("Payment system not loaded. Please refresh and try again.");
  }
};

export const getPaymentAmount = (plan: 'base' | 'premium'): string => {
  return plan === 'base' ? '₹15,000' : '₹35,000';
};

export const getPlanFeatures = (plan: 'base' | 'premium') => {
  const baseFeatures = [
    "Access to all 21 challenges",
    "Daily content & prompts", 
    "Community access",
    "Certificate of completion",
    "Email support"
  ];

  const premiumFeatures = [
    "Everything in Base Plan",
    "3 One-on-One mentoring calls (30 min each)",
    "Personalized brand audit", 
    "Featured in challenge showcase",
    "Priority community access",
    "Direct mentor access"
  ];

  return plan === 'base' ? baseFeatures : premiumFeatures;
};