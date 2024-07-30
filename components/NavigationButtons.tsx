// components/NavigationButtons.tsx
import React from "react";
import { cn } from "@/lib/utils"; // Ensure this path points correctly to your utility file

interface NavigationButtonsProps {
	onNext: () => void;
	onPrev: () => void;
	hasNext: boolean;
	hasPrev: boolean;
	disableNext: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onNext, onPrev, hasNext, hasPrev, disableNext }) => {
	return (
		<div className="flex justify-between mt-6">
			{hasPrev && (
				<button
					className={cn("btn btn-secondary", !hasPrev && "opacity-50 cursor-not-allowed")}
					onClick={onPrev}
					disabled={!hasPrev}
				>
					Previous
				</button>
			)}
			<button
				className={cn("btn btn-primary", disableNext && "opacity-50 cursor-not-allowed")}
				onClick={onNext}
				disabled={disableNext}
			>
				Next
			</button>
		</div>
	);
};

export default NavigationButtons;
