import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline: "border border-accent/30 bg-transparent text-accent hover:bg-accent/10 hover:border-accent/50 transition-all duration-300",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
        ghost: "hover:bg-accent/10 hover:text-accent transition-colors",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Custom variants inspired by the reference designs
        hero: "bg-gradient-to-r from-accent to-primary text-primary-foreground hover:from-accent/90 hover:to-primary/90 shadow-[var(--shadow-gold)] border border-accent/20 font-semibold tracking-wide transition-all duration-300 hover:scale-105",
        gold: "bg-accent/20 text-accent border border-accent/40 hover:bg-accent hover:text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:shadow-[var(--shadow-gold)]",
        elegant: "bg-card border border-accent/30 text-foreground hover:bg-accent/10 hover:border-accent/60 transition-all duration-300 shadow-[var(--shadow-elegant)]"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
