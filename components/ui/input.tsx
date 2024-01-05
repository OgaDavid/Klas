import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-[8px] font-normal text-[rgba(0,0,0,.8)] border border-input bg-background px-5 py-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:placeholder:text-[rgba(0,0,0,.8)] placeholder:text-[rgba(0,0,0,.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-100 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
