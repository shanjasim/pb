import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SignupForm from "./SignupForm";
import { X } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: 'base' | 'premium';
}

const PaymentModal = ({ isOpen, onClose, plan }: PaymentModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">
              Join {plan === 'premium' ? 'Premium' : 'Base'} Plan
            </DialogTitle>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="mt-4">
          <SignupForm plan={plan} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;