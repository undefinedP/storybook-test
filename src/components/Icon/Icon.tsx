import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils';

const iconVariants = cva(
  'inline-flex items-center justify-center shrink-0 [&_svg]:font-normal [&_svg]:!w-full [&_svg]:!h-full',
  {
    variants: {
      size: {
        xsmall: 'w-3 h-3', // 12px
        small: 'w-4 h-4', // 16px
        medium: 'w-5 h-5', // 20px
        large: 'w-6 h-6', // 24px
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

export type IconProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof iconVariants>;

const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ size, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        data-slot='icon'
        className={cn(iconVariants({ size }), className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Icon.displayName = 'Icon';

export { Icon, iconVariants };
