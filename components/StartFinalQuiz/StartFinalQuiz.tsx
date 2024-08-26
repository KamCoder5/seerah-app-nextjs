import { cn } from "@/lib/utils";
import React from "react";
import Typography from "../ui/typography/Typography";

const TEXT = {
	HEADER: "Chapter Complete!",
	DESCRIPTION: "Check your knowledge and unlock the next chapter",
	BUTTON: "START QUIZ",
	WARNING: "You won't be able to go back after you start the quiz",
};

interface StartFinalQuizProps {
	onClick: () => void;
}

const StartFinalQuiz: React.FC<StartFinalQuizProps> = ({ onClick }) => {
	return (
		//<div className="h-screen flex flex-col justify-center items-center text-center">
		<div className="h-screen flex flex-col text-center mt-80">
			<Typography
				variant="h1"
				className="text-brown-500 mb-3"
			>
				{TEXT.HEADER}
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
			<Typography
				variant="body2"
				className="p-4"
			>
				{TEXT.WARNING}
			</Typography>
		</div>
	);
};

export default StartFinalQuiz;
