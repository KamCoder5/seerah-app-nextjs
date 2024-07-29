import Image from "next/image";
import { FaChevronRight, FaLock } from "react-icons/fa";
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

interface StyledButtonProps {
	title: string;
	chapterImage?: string;
	slug: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	disabled?: boolean;
}

const SingleChapterButton: React.FC<StyledButtonProps> = ({
	title,
	onClick,
	chapterImage,
	slug,
	disabled = false,
}) => {
	const chapterNumber = slug.split("chapter-")[1];

	const isChapterUnlocked = () => (
		<>
			<div className="relative flex-shrink-0">
				<Image
					className={cn(
						"rounded-l-lg h-20 w-20",
						disabled && "opacity-50"
					)}
					src={
						chapterImage || "/images/icons/chapter-img-example.png"
					}
					alt={`Chapter ${chapterNumber}`}
					layout="fixed"
					width={80}
					height={80}
				/>
				<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-l-lg">
					<span className="text-white text-lg font-bold">
						{chapterNumber}
					</span>
				</div>
			</div>
			<span
				className={cn(
					"flex-1 text-lg font-medium",
					disabled && "text-opacity-70"
				)}
			>
				{title}
			</span>
			{disabled ? (
				<FaLock className={cn("h-4 w-4", disabled && "opacity-50")} />
			) : (
				<FaChevronRight className={cn("h-4 w-4")} />
			)}
		</>
	);

	return (
		<button
			className={cn(
				"flex items-center rounded-lg h-20 bg-white shadow-md gap-2",
				disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
			)}
			onClick={disabled ? undefined : onClick}
			disabled={disabled}
		>
			{isChapterUnlocked()}
		</button>
	);
};

export default SingleChapterButton;
