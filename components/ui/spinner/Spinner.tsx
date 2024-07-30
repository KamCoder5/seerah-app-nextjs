import React from "react";
import { cn } from "@/lib/utils";

export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
	size?: number;
	className?: string;
	isCentered?: boolean; // New prop for centering
}

export const LoadingSpinner: React.FC<ISVGProps> = ({ size = 24, className, isCentered, ...props }) => {
	return (
		<div className={cn({ "flex justify-center items-center": isCentered }, className)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				{...props}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="animate-spin"
			>
				<path d="M21 12a9 9 0 1 1-6.219-8.56" />
			</svg>
		</div>
	);
};
