import * as React from "react"
import { cn } from "../../lib/utils"
import { ChevronDown } from "lucide-react"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={cn(
            "flex h-11 w-full items-center justify-between rounded-2xl border border-neutral-border/60 bg-white px-4 py-3 pr-10 text-sm placeholder:text-neutral-textMuted/60 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 appearance-none transition-all duration-200 text-secondary font-medium",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-textMuted/80 pointer-events-none" />
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select }
