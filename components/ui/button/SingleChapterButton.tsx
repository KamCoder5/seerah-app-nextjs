import React from "react";
import Image from "next/image";
import { FaChevronRight, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "../badge/Badge";

interface StyledButtonProps {
	title: string;
	chapterImage?: string;
	slug: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	disabled?: boolean;
	isNew?: boolean;
	isComingSoon?: boolean;
}

const SingleChapterButton: React.FC<StyledButtonProps> = ({
	title,
	onClick,
	chapterImage,
	slug,
	disabled = false,
	isNew = false,
	isComingSoon = false,
}) => {
	const chapterNumber = slug.split("chapter-")[1];

	// Override disabled state if isComingSoon is true
	const effectiveDisabled = disabled || isComingSoon;

	const isChapterUnlocked = () => (
		<>
			<div className="relative flex-shrink-0">
				<Image
					className={cn("rounded-l-lg h-20 w-20", effectiveDisabled && "opacity-50")}
					src={chapterImage || "/images/icons/chapter-img-example.png"}
					alt={`Chapter ${chapterNumber}`}
					layout="fixed"
					width={80}
					height={80}
				/>
				<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-l-lg">
					<span className="text-white text-lg font-bold">{chapterNumber}</span>
				</div>
			</div>
			<span className={cn("flex-1 text-lg font-light", effectiveDisabled && "text-opacity-70")}>{title}</span>
			{effectiveDisabled ? (
				<FaLock className={cn("h-4 w-4", effectiveDisabled && "opacity-50")} />
			) : (
				<FaChevronRight className={cn("h-4 w-4")} />
			)}
		</>
	);

	const isNewChapterBadge = (showBadge: boolean) => {
		if (showBadge) {
			return (
				<div className="absolute top-1 left-4 z-10">
					<Badge variant="secondary">new</Badge>
				</div>
			);
		}
		return null;
	};

	const isComingSoonBadge = (showBadge: boolean) => {
		if (showBadge) {
			return (
				<div className="absolute top-1 left-4 z-10">
					<Badge variant="secondary">soon</Badge>
				</div>
			);
		}
		return null;
	};

	return (
		<motion.button
			className={cn(
				"flex items-center rounded-lg h-20 bg-white shadow-md gap-2 w-full pr-2 relative",
				effectiveDisabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
			)}
			onClick={effectiveDisabled ? undefined : onClick}
			disabled={effectiveDisabled}
			whileHover={{ scale: effectiveDisabled ? 1 : 0.975 }}
			whileTap={{ scale: effectiveDisabled ? 1 : 0.95 }}
		>
			{isComingSoonBadge(isComingSoon)}
			{isNewChapterBadge(isNew)}
			{isChapterUnlocked()}
		</motion.button>
	);
};

export default SingleChapterButton;
