import { useState } from "react";

const useQuiz = (initialQuizData) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizPassedPerfectly, setIsQuizPassedPerfectly] = useState(false);

  const resetQuizState = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setIsQuizPassedPerfectly(false);
  };

  const handleAnswerOptionClick = (isCorrect, quizData, pageIndex) => {
    if (isCorrect) {
      setScore(score + 1);
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
