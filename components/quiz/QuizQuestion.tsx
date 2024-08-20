// components/QuizQuestion.tsx
import React from "react";
import { motion } from "framer-motion";

interface QuizQuestionProps {
	questionNumber: number;
	totalQuestions: number;
	questionText: string;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ questionNumber, totalQuestions, questionText }) => {
	return (
		<div>
			{totalQuestions > 1 && (
				<p className="text-sm font-semibold mb-4">
					Question {questionNumber} / {totalQuestions}
				</p>
			)}
			<motion.div
				className="mb-4 bg-white border border-black rounded-md p-2"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<p className="text-base md:text-lg text-center">{questionText}</p>
			</motion.div>
		</div>
	);
};

export default QuizQuestion;
