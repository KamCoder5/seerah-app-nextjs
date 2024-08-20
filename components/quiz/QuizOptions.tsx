// components/QuizOptions.tsx
import React from "react";
import { motion } from "framer-motion";

interface QuizOptionsProps {
  options: { answerText: string; isCorrect: boolean }[];
  onOptionClick: (isCorrect: boolean) => void;
}

const QuizOptions: React.FC<QuizOptionsProps> = ({
  options,
  onOptionClick,
}) => {
  return (
    <motion.div
      className="mt-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {options.map((option, index) => (
        <motion.button
          key={index}
          className="mt-2 p-3 w-full text-left bg-gray-100 hover:bg-gray-200 rounded-md transition"
          onClick={() => onOptionClick(option.isCorrect)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {option.answerText}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default QuizOptions;
