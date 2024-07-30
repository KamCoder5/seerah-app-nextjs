// components/QuizContainer.tsx
import React from "react";

interface QuizContainerProps {
	children: React.ReactNode;
}

const QuizContainer: React.FC<QuizContainerProps> = ({ children }) => {
	return <div className="bg-white shadow-md rounded-lg p-6 my-4">{children}</div>;
};

export default QuizContainer;
