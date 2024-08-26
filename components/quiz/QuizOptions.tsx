import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface QuizOptionsProps {
	options: { answerText: string; isCorrect: boolean }[];
	onOptionClick: (optionIndex: number) => void;
	selectedOptionIndex: number | null;
	isAnswered: boolean;
}

const QuizOptions: React.FC<QuizOptionsProps> = ({ options, onOptionClick, selectedOptionIndex, isAnswered }) => {
	const getButtonStyleClass = (index: number, isCorrect: boolean): string => {
		const unselectedOptionStyle = "bg-mist border border-vanilla text-black";
		if (!isAnswered) {
			return `${unselectedOptionStyle} hover:bg-gray-200`;
		}

		if (index === selectedOptionIndex) {
			return isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white";
		}

		return unselectedOptionStyle;
	};

	return (
		<motion.div
			className="mt-4"
			initial="hidden"
			animate="visible"
			variants={{
				hidden: { opacity: 0, scale: 0.8 },
				visible: {
					opacity: 1,
					scale: 1,
					transition: {
						staggerChildren: 0.2,
					},
				},
			}}
		>
			{options.map((option, index) => (
				<motion.button
					key={index}
					className={cn(
						"mt-2 p-3 w-full text-center text-base md:text-lg rounded-md transition",
						getButtonStyleClass(index, option.isCorrect)
					)}
					onClick={() => onOptionClick(index)}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					disabled={isAnswered}
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					{option.answerText}
				</motion.button>
			))}
		</motion.div>
	);
};

export default QuizOptions;
