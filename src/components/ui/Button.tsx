import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex items-center justify-center whitespace-nowrap select-none rounded-[5px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-[44px] w-full',
  {
    variants: {
      variant: {
        default: 'bg-primary hover:bg-primary-light active:bg-primary-dark text-white',
        outlined:
          'text-primary hover:text-primary-light active:text-primary-dark',
      },
      size: {
        default: 'text-[16px] leading-[24px] px-8',
        md: 'text-[16px] leading-[32px] px-[69px] lg:h-[56px] lg:text-[18px]',
        lg: 'text-[16px] leading-[32px] px-[69px] lg:h-[56px] lg:text-[24px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
