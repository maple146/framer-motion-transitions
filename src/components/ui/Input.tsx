import * as React from 'react'

import { cn } from '@/lib/utils'

// rounded-md px-3  py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        autoComplete='off'
        type={type}
        className={cn(
          'flex h-[26px] w-full ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-b border-input border-gray-dark font-inter font-bold text-[15px] leading-[12px] text-secondary',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
