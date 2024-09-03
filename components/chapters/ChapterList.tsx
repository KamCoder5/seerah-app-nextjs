import React from "react";
import { Chapter } from "@/types/chapters";
import ChapterItem from "./ChapterItem";
import Typography from "../ui/typography/Typography";

interface ChapterListProps {
	chapters: Chapter[];
	unlockedChapters: string[];
	onChapterClick: (slug: string) => void;
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters, unlockedChapters, onChapterClick }) => {
	return (
		<div className="my-6 w-full">
			<Typography
				variant="body1"
				className="text-brown-500 mb-3 font-bold"
			>
				The Ancestral Legacy of Muhammad [pbuh]
			</Typography>
			{chapters &&
				chapters.map((chapter, index) => (
					<ChapterItem
						key={index}
						chapter={chapter}
						unlockedChapters={unlockedChapters}
						onChapterClick={onChapterClick}
					/>
				))}
		</div>
	);
};

export default ChapterList;
