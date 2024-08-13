// components/ContentSection.tsx
import React from "react";
import { motion } from "framer-motion";
import QuizOptions from "../quiz/QuizOptions";
import QuizContainer from "../quiz/QuizContainer";

interface ContentSectionProps {
	contentHtml: string;
	isQuiz: boolean;
	showScore: boolean;
	score: number;
	totalQuestions: number;
	questionNumber: number;
	questionText: string;
	options: { answerText: string; isCorrect: boolean }[];
	onOptionClick: (isCorrect: boolean) => void;
	onRetakeQuiz: () => void;
	onNextQuestion: () => void;
	isOptionSelected: boolean;
	isLastQuestion: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
	contentHtml,
	isQuiz,
	showScore,
	score,
	totalQuestions,
	questionNumber,
	questionText,
	options,
	onOptionClick,
	onRetakeQuiz,
	onNextQuestion,
	isOptionSelected,
	isLastQuestion,
}) => {
	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: contentHtml }} />
			{isQuiz && (
				<QuizContainer
					onNextQuestion={onNextQuestion}
					isOptionSelected={isOptionSelected}
					isLastQuestion={isLastQuestion}
					totalQuestions={totalQuestions}
				>
					<div>
						<p className="text-xl font-semibold mb-4">
							Question {questionNumber} / {totalQuestions}
						</p>
						<p className="text-lg mb-4">{questionText}</p>
					</div>
					<QuizOptions
						options={options}
						onOptionClick={onOptionClick}
					/>
				</QuizContainer>
			)}
			{showScore && (
				<QuizContainer
					onNextQuestion={onRetakeQuiz}
					isOptionSelected={false}
					isLastQuestion={false}
					totalQuestions={1}
				>
					<div>
						<p className="text-lg font-bold mb-4">
							You scored {score} out of {totalQuestions}
						</p>
						{score < totalQuestions && (
							<motion.button
								className="btn btn-primary"
								onClick={onRetakeQuiz}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								Retake Quiz
							</motion.button>
						)}
					</div>
				</QuizContainer>
			)}
		</div>
	);
};

export default ContentSection;
