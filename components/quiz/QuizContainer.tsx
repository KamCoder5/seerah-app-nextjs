// components/QuizContainer.tsx
import React from "react";
import { motion } from "framer-motion";

interface QuizContainerProps {
	children: React.ReactNode;
}

const QuizContainer: React.FC<QuizContainerProps> = ({ children }) => {
	return (
		<motion.div
			className="rounded-lg my-4"
			initial={{ x: -100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: 100, opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);
};

export default QuizContainer;
