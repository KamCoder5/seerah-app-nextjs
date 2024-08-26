import { cn } from "@/lib/utils";
import React from "react";
import Typography from "../ui/typography/Typography";

const TEXT = {
	HEADER: "Well Done",
	HEADER2: "You Passed!",
	DESCRIPTION: "Go see what chapters you have unlocked",
	BUTTON: "All Chapters",
};

interface EndFinalQuizProps {
	onClick: () => void;
}

const EndFinalQuiz: React.FC<EndFinalQuizProps> = ({ onClick }) => {
	return (
		//<div className="h-screen flex flex-col justify-center items-center text-center">
		<div className="h-screen flex flex-col text-center mt-72">
			<Typography
				variant="h2"
				className="text-brown-500 mb-3"
			>
				{TEXT.HEADER}
			</Typography>
			<Typography
				variant="h1"
				className="text-brown-500 mb-3"
			>
				{TEXT.HEADER2}
			</Typography>
			<Typography
				variant="body1"
				className="p-4"
			>
				{TEXT.DESCRIPTION}
			</Typography>
			<button
				className="text-sm flex justify-center items-center rounded-lg min-h-16 bg-blue-500 w-full text-white"
				onClick={onClick}
			>
				{TEXT.BUTTON}
			</button>
		</div>
	);
};

export default EndFinalQuiz;
