import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-56 sm:w-64 cursor-pointer overflow-hidden rounded-full border border-primary/30 bg-background px-6 py-3 text-center text-base sm:text-lg font-semibold transition-shadow hover:shadow-md",
        className,
      )}
      {...props}
    >
      <span className="relative z-20 inline-block transition-all duration-300 group-hover:translate-x-6 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute inset-0 z-20 flex h-full w-full items-center justify-center gap-2 text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="h-5 w-5" />
      </div>
      <div className="absolute inset-y-0 left-0 z-10 h-full w-0 bg-gradient-to-r from-primary to-primary/80 transition-[width] duration-300 ease-out group-hover:w-full"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };


