import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-200 focus-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-foreground shadow-[var(--shadow)] hover:brightness-110 hover:shadow-[var(--shadow-hover)]",
        secondary:
          "border border-border-strong bg-background text-foreground hover:border-foreground/20 hover:bg-card",
        ghost: "text-muted hover:bg-card hover:text-foreground",
        link: "rounded-none px-0 text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export function buttonClassName({
  className,
  variant,
  size,
}: VariantProps<typeof buttonVariants> & { className?: string } = {}) {
  return cn(buttonVariants({ variant, size }), className);
}
