import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-blue-300 disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-blue-500 text-white shadow hover:bg-blue-600",
				destructive: "bg-red-500 text-white shadow-sm hover:bg-red-600",
				outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
				secondary: "bg-gray-200 text-gray-900 shadow-sm hover:bg-gray-300",
				ghost: "text-gray-900 hover:bg-gray-100",
				link: "text-blue-500 underline hover:no-underline",
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 px-3 text-xs",
				lg: "h-10 px-8",
				xl: "h-14 px-12 text-xl",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
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
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={buttonVariants({ variant, size, className })}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
