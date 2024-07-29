import { useState } from "react";

interface QuizOption {
	answerText: string;
	isCorrect: boolean;
}

interface QuizQuestion {
	questionText: string;
	answerOptions: QuizOption[];
}

type QuizData = QuizQuestion[];

const useQuiz = (initialQuizData: QuizData) => {
	const [currentQuestion, setCurrentQuestion] = useState<number>(0);
	const [showScore, setShowScore] = useState<boolean>(false);
	const [score, setScore] = useState<number>(0);
	const [isQuizPassedPerfectly, setIsQuizPassedPerfectly] = useState<boolean>(false);

	const resetQuizState = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
		setIsQuizPassedPerfectly(false);
	};

	const handleAnswerOptionClick = (isCorrect: boolean, quizData: QuizData, pageIndex: number) => {
		if (isCorrect) {
			setScore((prevScore) => prevScore + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (quizData[pageIndex] && nextQuestion < quizData[pageIndex].length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			if (score + (isCorrect ? 1 : 0) === quizData[pageIndex].length) {
				setIsQuizPassedPerfectly(true);
			}
		}
	};

	return {
		currentQuestion,
		showScore,
		score,
		isQuizPassedPerfectly,
		resetQuizState,
		handleAnswerOptionClick,
	};
};

export default useQuiz;
