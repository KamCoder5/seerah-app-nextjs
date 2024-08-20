// components/QuizScore.tsx
import React from "react";
import { motion } from "framer-motion";

interface QuizScoreProps {
  score: number;
  totalQuestions: number;
  onRetakeQuiz: () => void;
}

const QuizScore: React.FC<QuizScoreProps> = ({
  score,
  totalQuestions,
  onRetakeQuiz,
}) => {
  return (
    <motion.div
      className="mt-4"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg font-bold">
        You scored {score} out of {totalQuestions}
      </p>
      {score < totalQuestions && (
        <motion.button
          className="btn btn-primary mt-2"
          onClick={onRetakeQuiz}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Retake Quiz
        </motion.button>
      )}
    </motion.div>
  );
};

export default QuizScore;
