import { cn } from "@/lib/utils";
import React from "react";

interface StyledButtonProps {
	title: string;
	chapterImage?: string;
	slug: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	disabled?: boolean;
}

const ContinueReadingButton: React.FC<StyledButtonProps> = ({
	title,
	onClick,
	chapterImage,
	slug,
	disabled = false,
}) => {
	const chapterNumber = slug.split("chapter-")[1];
	const CHAPTER_NUMBER_TITLE = `Chapter ${chapterNumber} - ${title}`.toUpperCase();

	return (
		<button
			className={cn(
				"text-sm flex justify-center items-center rounded-lg min-h-20 bg-blue-500 w-full",
				disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
			)}
			onClick={disabled ? undefined : onClick}
			disabled={disabled}
		>
			<span className="text-white text-base">{CHAPTER_NUMBER_TITLE}</span>
		</button>
	);
};

export default ContinueReadingButton;
