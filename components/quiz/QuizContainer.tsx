// components/QuizContainer.tsx
import React from "react";
import { motion } from "framer-motion";

interface QuizContainerProps {
	children: React.ReactNode;
	isOptionSelected: boolean;
	onNextQuestion: () => void;
	isLastQuestion: boolean;
	totalQuestions: number; // Add this prop to check the number of questions
}

const QuizContainer: React.FC<QuizContainerProps> = ({
	children,
	isOptionSelected,
	onNextQuestion,
	isLastQuestion,
	totalQuestions,
}) => {
	return (
		<motion.div
			className="bg-white shadow-md rounded-lg p-6 my-4"
			initial={{ x: -100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: 100, opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{children}
			{isOptionSelected && totalQuestions > 1 && (
				<motion.button
					className="btn btn-primary mt-4"
					onClick={onNextQuestion}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: "spring", stiffness: 300 }}
				>
					{isLastQuestion ? "See Results" : "Next"}
				</motion.button>
			)}
		</motion.div>
	);
};

export default QuizContainer;
