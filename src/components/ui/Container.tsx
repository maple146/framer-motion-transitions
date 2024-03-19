// ejemplo de uso: <Container renderAs="section" className="bg-green-200 p-4"> --- renderAs es opcional.

import React, { ElementType, ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type ContainerElements = keyof Pick<
  JSX.IntrinsicElements,
  'div' | 'section' | 'article' | 'main'
>;

type ContainerProps<T extends ElementType> = {
  renderAs?: T;
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Container = <T extends ContainerElements = 'div'>({
  renderAs,
  children,
  className,
  ...props
}: ContainerProps<T>) => {
  const Tag = renderAs || 'div';
  const containerClassName = cn(
    'container px-4 items-center justify-center',
    className
  );

  return (
    <Tag className={containerClassName} {...props}>
      {children}
    </Tag>
  );
};