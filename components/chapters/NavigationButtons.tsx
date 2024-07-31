import React from "react";
import { cn } from "@/lib/utils"; // Ensure this path points correctly to your utility file
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons from react-icons

interface NavigationButtonsProps {
	onNext: () => void;
	onPrev: () => void;
	hasNext: boolean;
	hasPrev: boolean;
	disableNext: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onNext, onPrev, hasNext, hasPrev, disableNext }) => {
	return (
		<div className="flex justify-between items-center mt-6">
			{hasPrev ? (
				<button
					className={cn("btn btn-secondary flex items-center", !hasPrev && "opacity-50 cursor-not-allowed")}
					onClick={onPrev}
					disabled={!hasPrev}
				>
					<FaArrowLeft className="mr-2" />
					Previous
				</button>
			) : (
				<div />
			)}{" "}
			{/* Placeholder to keep buttons inline when no previous button */}
			{hasNext && (
				<button
					className={cn("btn btn-primary flex items-center", disableNext && "opacity-50 cursor-not-allowed")}
					onClick={onNext}
					disabled={disableNext}
				>
					Next
					<FaArrowRight className="ml-2" />
				</button>
			)}
		</div>
	);
};

export default NavigationButtons;
