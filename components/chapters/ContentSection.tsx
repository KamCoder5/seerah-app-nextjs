import React from "react";
import QuizContainer from "../quiz/QuizContainer";
import QuizOptions from "../quiz/QuizOptions";
import QuizQuestion from "../quiz/QuizQuestion";
import QuizScore from "../quiz/QuizScore";
import Image from "next/image";
import parse from "html-react-parser";

interface ContentSectionProps {
	contentHtml: string;
	isQuiz: boolean;
	showScore: boolean;
	score: number;
	totalQuestions: number;
	questionNumber: number;
	questionText: string;
	options: { answerText: string; isCorrect: boolean }[];
	onOptionClick: (index: number) => void;
	onRetakeQuiz: () => void;
	onNextQuestion: () => void;
	selectedOptionIndex: number | null;
	isAnswered: boolean;
	isLastQuestion: boolean;
}

import { DOMNode, Element } from "html-react-parser";

const replaceImages = (htmlContent: string) => {
	const options = {
		replace: (domNode: DOMNode) => {
			if (domNode instanceof Element && domNode.name === "img" && domNode.attribs.src) {
				return (
					<Image
						src={domNode.attribs.src}
						alt={domNode.attribs.alt || ""}
						width={Number(domNode.attribs.width) || 500}
						height={Number(domNode.attribs.height) || 500}
					/>
				);
			}
		},
	};

	return parse(htmlContent, options);
};

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
	selectedOptionIndex,
	isAnswered,
	isLastQuestion,
}) => {
	return (
		<div>
			<div className="wp-content">{replaceImages(contentHtml)}</div>

			{isQuiz && (
				<QuizContainer>
					<QuizQuestion
						questionNumber={questionNumber}
						totalQuestions={totalQuestions}
						questionText={questionText}
					/>
					<QuizOptions
						options={options}
						onOptionClick={onOptionClick}
						selectedOptionIndex={selectedOptionIndex}
						isAnswered={isAnswered}
					/>
					{showScore ? (
						<QuizScore
							score={score}
							totalQuestions={totalQuestions}
							onRetakeQuiz={onRetakeQuiz}
						/>
					) : (
						<>
							{isAnswered && !isLastQuestion && (
								<button
									onClick={onNextQuestion}
									className="mt-4 p-3 w-full text-center bg-blue-500 text-white rounded-md transition"
								>
									Next Question
								</button>
							)}
						</>
					)}
				</QuizContainer>
			)}
		</div>
	);
};

export default ContentSection;
