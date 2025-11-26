import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-900 text-white hover:bg-neutral-800 border border-white/10",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 border border-red-700",
        outline:
          "border border-neutral-700 bg-transparent text-neutral-900 hover:bg-neutral-100 hover:text-neutral-900",
        secondary:
          "bg-blue-700 text-white hover:bg-blue-800 border border-blue-800",
        ghost:
          "bg-neutral-800/80 text-white hover:bg-neutral-700/90 border border-white/10",
        link: "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-xl text-base",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-12 rounded-2xl px-8 text-lg",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
