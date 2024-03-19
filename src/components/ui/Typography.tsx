// Ejemplo de uso: <Typography as="h3" variant="subtitle">
// La prop "as" determina que tag/elemento es (<h1>, <span>, <p>, etc) y la prop "variant" determina solamente el estilado

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const typographyVariants = cva(
  [], // Estilo base: vacio por ahora.
  {
    variants: {
      variant: {
        h1: 'text-primary font-pulso font-light text-[24px] leading-[24px] lg:text-[89px] lg:leading-[94px]',
        h3: 'text-primary font-pulso font-normal text-[24px] leading-[28px] lg:text-[32px] lg:leading-[38px]',
        subtitle: 'text-primary font-inter font-normal text-[14px] leading-[16px] lg:text-[24px] lg:leading-[28px]',
        body: 'text-base',
        body2: 'text-primary font-inter font-normal text-[14px] leading-[16px] lg:text-[16px] lg:leading-[18px]'
      },
    },
    defaultVariants: {
      variant: 'body',
    },
  }
);

type AllowedTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';

interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement & HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: AllowedTags;
  children: React.ReactNode;
}

export const Typography = ({
  as: Component = 'span',
  variant,
  children,
  className,
  ...props
}: TypographyProps) => {
  return (
    <Component
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};
