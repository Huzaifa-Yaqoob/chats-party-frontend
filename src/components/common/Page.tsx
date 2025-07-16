import { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

function Page({
  asChild = false,
  className = '',
  children,
  ...props
}: ComponentProps<'div'> & {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp {...props} className={cn('flex-grow space-y-8', className)}>
      {children}
    </Comp>
  );
}

export default Page;
