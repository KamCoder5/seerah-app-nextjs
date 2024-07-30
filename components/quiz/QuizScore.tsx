// components/QuizScore.tsx
import React from "react";

interface QuizScoreProps {
	score: number;
	totalQuestions: number;
	onRetakeQuiz: () => void;
}

const QuizScore: React.FC<QuizScoreProps> = ({ score, totalQuestions, onRetakeQuiz }) => {
	return (
		<div className="mt-4">
			<p className="text-lg font-bold">
				You scored {score} out of {totalQuestions}
			</p>
			{score < totalQuestions && (
				<button
					className="btn btn-primary mt-2"
					onClick={onRetakeQuiz}
				>
					Retake Quiz
				</button>
			)}
		</div>
	);
};

export default QuizScore;
