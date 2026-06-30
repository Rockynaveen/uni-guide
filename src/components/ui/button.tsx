import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const variantClasses = {
      default: "bg-primary text-white hover:bg-primary-hover shadow-sm",
      destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
      outline: "border border-neutral-border/60 bg-white hover:bg-neutral-light text-secondary",
      secondary: "bg-secondary text-white hover:bg-secondary-hover",
      ghost: "hover:bg-neutral-light text-secondary",
      link: "text-primary underline-offset-4 hover:underline",
      gradient: "bg-gradient-to-r from-primary to-orange-500 hover:from-secondary hover:to-secondary-dark text-white shadow-lg hover:shadow-primary/20"
    }

    const sizeClasses = {
      default: "h-11 px-6 py-2.5 text-sm rounded-2xl",
      sm: "h-9 px-4 rounded-xl text-xs",
      lg: "h-12 px-8 rounded-2xl text-sm",
      icon: "h-10 w-10 rounded-xl"
    }

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap font-extrabold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/10 disabled:pointer-events-none disabled:opacity-55 cursor-pointer",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
