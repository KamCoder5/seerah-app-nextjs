// components/QuizScore.tsx
import React from "react";
import { motion } from "framer-motion";

interface QuizScoreProps {
	score: number;
	totalQuestions: number;
	onRetakeQuiz: () => void;
}

const QuizScore: React.FC<QuizScoreProps> = ({ score, totalQuestions, onRetakeQuiz }) => {
	return (
		<motion.div
			className="mt-4"
			initial={{ scale: 0.8, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<p className="text- font-bold">
				You scored {score} out of {totalQuestions}
			</p>
			{score < totalQuestions && (
				<div>
					<p className="text-m font-normal mt-2">Retake the quiz to navigate to the next section</p>
					<motion.button
						className="text-sm font-normal text-white flex justify-center items-center rounded-lg mt-2 min-h-10 min-w-5 bg-blue-500 w-full"
						onClick={onRetakeQuiz}
						whileTap={{ scale: 0.9 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						Retake Quiz
					</motion.button>
				</div>
			)}
		</motion.div>
	);
};

export default QuizScore;
