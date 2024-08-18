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
		<motion.div
			className="mb-4 border-solid border-1 "
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			{totalQuestions > 1 && (
			<p className="text-sm font-semibold">
				Question {questionNumber} / {totalQuestions}
			</p>
			  )} 
			<p className="text-lg text-center">{questionText}?</p>
		</motion.div>
	);
};

export default QuizQuestion;
