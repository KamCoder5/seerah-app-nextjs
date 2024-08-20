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
	// handles colour styling: red (incorrect) and green (correct )
	const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
	// handles disabling of selected another option once an option has been selected
	const [isAnswered, setIsAnswered] = useState<boolean>(false);

	const resetQuizState = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
		setIsQuizPassedPerfectly(false);
		setSelectedOptionIndex(null);
		setIsAnswered(false);
	};

	const handleAnswerOptionClick = (selectedAnswerIndex: number) => {
		if (isAnswered) return;

		setSelectedOptionIndex(selectedAnswerIndex);
		setIsAnswered(true);

		if (initialQuizData[currentQuestion].answerOptions[selectedAnswerIndex].isCorrect) {
			setScore((prevScore) => prevScore + 1);
		}

		// Check if the quiz is complete
		if (currentQuestion + 1 >= initialQuizData.length) {
			setShowScore(true);
			if (
				score + (initialQuizData[currentQuestion].answerOptions[selectedAnswerIndex].isCorrect ? 1 : 0) ===
				initialQuizData.length
			) {
				setIsQuizPassedPerfectly(true);
			}
		}
	};

	const handleNextQuestion = () => {
		setCurrentQuestion(currentQuestion + 1);
		setSelectedOptionIndex(null);
		setIsAnswered(false);
	};

	return {
		currentQuestion,
		showScore,
		score,
		isQuizPassedPerfectly,
		resetQuizState,
		handleAnswerOptionClick,
		handleNextQuestion,
		selectedOptionIndex,
		isAnswered,
	};
};

export default useQuiz;
