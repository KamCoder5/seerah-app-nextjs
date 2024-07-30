// components/QuizQuestion.tsx
import React from "react";

interface QuizQuestionProps {
	questionNumber: number;
	totalQuestions: number;
	questionText: string;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ questionNumber, totalQuestions, questionText }) => {
	return (
		<div className="mb-4">
			<p className="text-xl font-semibold">
				Question {questionNumber} / {totalQuestions}
			</p>
			<p className="text-lg">{questionText}</p>
		</div>
	);
};

export default QuizQuestion;
