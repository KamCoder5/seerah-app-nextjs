// components/QuizOptions.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface QuizOptionsProps {
	options: { answerText: string; isCorrect: boolean }[];
	onOptionClick: (isCorrect: boolean) => void;
}

const QuizOptions: React.FC<QuizOptionsProps> = ({ options, onOptionClick }) => {
	const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
	const [hasSelected, setHasSelected] = useState<boolean>(false);

	// Reset the selection when options change (i.e., new question is loaded)
	useEffect(() => {
		setSelectedOptionIndex(null);
		setHasSelected(false);
	}, [options]);

	const handleOptionClick = (index: number, isCorrect: boolean) => {
		setSelectedOptionIndex(index);
		setHasSelected(true);
		onOptionClick(isCorrect);
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
					className={`mt-2 p-3 w-full text-left rounded-md transition 
            ${
							hasSelected
								? option.isCorrect
									? "bg-green-500 text-white"
									: index === selectedOptionIndex
										? "bg-red-500 text-white"
										: "bg-gray-100"
								: "bg-gray-100 hover:bg-gray-200"
						}`}
					onClick={() => handleOptionClick(index, option.isCorrect)}
					disabled={hasSelected} // Disable further selections once an option is selected
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
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
