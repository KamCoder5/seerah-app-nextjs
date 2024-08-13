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
	const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

	const resetQuizState = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
		setIsQuizPassedPerfectly(false);
		setIsOptionSelected(false);
	};

	const handleAnswerOptionClick = (isCorrect: boolean) => {
		setIsOptionSelected(true);
		if (isCorrect) {
			setScore((prevScore) => prevScore + 1);
		}
	};

	const handleNextQuestion = (quizData: QuizData, pageIndex: number) => {
		// @ts-ignore
		const quizLength = quizData[pageIndex].length;
		const nextQuestion = currentQuestion + 1;
		if (quizData[pageIndex] && nextQuestion < quizLength) {
			setCurrentQuestion(nextQuestion);
			setIsOptionSelected(false);
		} else {
			setShowScore(true);
			if (score === quizLength) {
				setIsQuizPassedPerfectly(true);
			}
		}
	};

	return {
		currentQuestion,
		showScore,
		score,
		isQuizPassedPerfectly,
		isOptionSelected,
		resetQuizState,
		handleAnswerOptionClick,
		handleNextQuestion,
	};
};

export default useQuiz;
