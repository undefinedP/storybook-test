import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils";
import { Icon } from "../Icon";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[0.5rem] rounded-[0.375rem] font-pretendard text-[0.875rem] font-semibold leading-[1.375rem] transition-all outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#3b82f6] text-white hover:bg-[#60a5fa] data-[selected=true]:bg-[#60a5fa] focus-visible:shadow-[0_0_0_1px_#252a39,0_0_0_2px_#3b82f6]",
        secondary:
          "bg-[#3b404e] text-[#e0e4e8] border border-[#575e6c] hover:bg-[#4a5060] data-[selected=true]:bg-[#4a5060] focus-visible:shadow-[0_0_0_1px_#252a39,0_0_0_2px_#575e6c]",
        ghost:
          "text-[#cdd2d7] hover:bg-[#3b404e] data-[selected=true]:bg-[#3b404e] focus-visible:shadow-[0_0_0_1px_#252a39,0_0_0_2px_#cdd2d7]",
        link: "text-[#60a5fa] hover:underline data-[selected=true]:underline focus-visible:shadow-[0_0_0_1px_#252a39,0_0_0_2px_#60a5fa]",
        danger:
          "bg-[#ef4444] text-white hover:bg-[#f87171] data-[selected=true]:bg-[#f87171] focus-visible:shadow-[0_0_0_1px_#252a39,0_0_0_2px_#ef4444]",
      },
      size: {
        small: "h-[2rem] px-[0.75rem]",
        medium: "h-[2.25rem] px-[1rem]",
        large: "h-[2.5rem] px-[1rem]",
      },
      iconOnly: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        iconOnly: true,
        size: "small",
        className: "w-[2rem] h-[2rem] p-0",
      },
      {
        iconOnly: true,
        size: "medium",
        className: "w-[2.25rem] h-[2.25rem] p-0",
      },
      {
        iconOnly: true,
        size: "large",
        className: "w-[2.5rem] h-[2.5rem] p-0",
      },
      {
        variant: "link",
        className: "px-0 h-auto",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "medium",
      iconOnly: false,
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    selected?: boolean;
    icon?: ReactNode;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      iconOnly = false,
      asChild = false,
      loading = false,
      selected = false,
      disabled,
      children,
      icon,
      startIcon,
      endIcon,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    const displayStartIcon = iconOnly ? icon || startIcon : icon || startIcon;
    const displayEndIcon = iconOnly ? null : endIcon;

    console.log({ displayStartIcon, displayEndIcon });

    const LoadingSpinner = () => (
      <svg
        className="animate-spin h-[1rem] w-[1rem]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );

    return (
      <Comp
        ref={ref}
        data-slot="button"
        data-selected={selected}
        className={cn(buttonVariants({ variant, size, iconOnly, className }))}
        onClick={(e) => {
          console.log("Button clicked");
          props?.onClick?.(e);
        }}
        disabled={isDisabled}
        {...props}
      >
        {loading && <LoadingSpinner />}
        {!loading && displayStartIcon && (
          <Icon size="small">{displayStartIcon}</Icon>
        )}
        {!iconOnly && children}
        {!loading && !iconOnly && displayEndIcon && (
          <Icon size="small">{displayEndIcon}</Icon>
        )}
      </Comp>
    );
  },
);

Button.displayName = "Button";
export { Button, buttonVariants };
