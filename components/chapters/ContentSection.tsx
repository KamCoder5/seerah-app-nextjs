// components/ContentSection.tsx
import React from "react";
import QuizContainer from "../quiz/QuizContainer";
import QuizOptions from "../quiz/QuizOptions";
import QuizQuestion from "../quiz/QuizQuestion";
import QuizScore from "../quiz/QuizScore";
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
}) => {
	return (
		<div>
			<div
				dangerouslySetInnerHTML={{ __html: contentHtml }}
				className="wp-content"
			/>

			{isQuiz && (
				<QuizContainer>
					{showScore ? (
						<QuizScore
							score={score}
							totalQuestions={totalQuestions}
							onRetakeQuiz={onRetakeQuiz}
						/>
					) : (
						<>
							<QuizQuestion
								questionNumber={questionNumber}
								totalQuestions={totalQuestions}
								questionText={questionText}
							/>
							<QuizOptions
								options={options}
								onOptionClick={onOptionClick}
							/>
						</>
					)}
				</QuizContainer>
			)}
		</div>
	);
};

export default ContentSection;
