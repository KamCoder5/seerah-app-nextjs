// components/QuizOptions.tsx
import React from "react";

interface QuizOptionsProps {
	options: { answerText: string; isCorrect: boolean }[];
	onOptionClick: (isCorrect: boolean) => void;
}

const QuizOptions: React.FC<QuizOptionsProps> = ({ options, onOptionClick }) => {
	return (
		<div className="mt-4">
			{options.map((option, index) => (
				<button
					key={index}
					className="mt-2 p-3 w-full text-left bg-gray-100 hover:bg-gray-200 rounded-md transition"
					onClick={() => onOptionClick(option.isCorrect)}
				>
					{option.answerText}
				</button>
			))}
		</div>
	);
};

export default QuizOptions;
