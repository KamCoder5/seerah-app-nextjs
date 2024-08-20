import React from "react";
import { motion } from "framer-motion";

interface QuizScoreProps {
	score: number;
	totalQuestions: number;
	onRetakeQuiz: () => void;
}

const QuizScore: React.FC<QuizScoreProps> = ({ score, totalQuestions, onRetakeQuiz }) => {
	const renderFeedbackMessage = () => {
		// Single Chapter Quiz
		if (totalQuestions === 1) {
			return score === 1 ? (
				<FeedbackMessage
					mainText="You got it!"
					subText="Advance to the next page"
				/>
			) : (
				<FeedbackMessage
					mainText="Oops!"
					subText="Try again to advance to the next page"
				/>
			);
		}
		// End of Chapter Quiz
		if (score < totalQuestions) {
			return (
				<FeedbackMessage
					mainText={`You scored ${score}/${totalQuestions}`}
					subText="Try again - retake the quiz to advance to the next section"
				/>
			);
		}

		// End of Chapter Questions All Correct
		return (
			<FeedbackMessage
				mainText={`Perfect! You scored ${score}/${totalQuestions}`}
				subText="Next chapter unlocked"
			/>
		);
	};

	return (
		<motion.div
			className="mt-6"
			initial={{ scale: 0.8, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			{renderFeedbackMessage()}

			{score < totalQuestions && (
				<motion.button
					className="mt-4 p-3 w-full text-center bg-blue-500 text-white rounded-md transition"
					onClick={onRetakeQuiz}
					whileTap={{ scale: 0.9 }}
					transition={{ type: "spring", stiffness: 300 }}
				>
					Try again
				</motion.button>
			)}
		</motion.div>
	);
};

const FeedbackMessage: React.FC<{ mainText: string; subText: string }> = ({ mainText, subText }) => (
	<div>
		<p className="text-lg font-bold">{mainText}</p>
		<p className="text-md font-normal mt-2">{subText}</p>
	</div>
);

export default QuizScore;
