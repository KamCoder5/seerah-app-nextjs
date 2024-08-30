import React from "react";
import { Chapter } from "@/types/chapters";
import ChapterItem from "./ChapterItem";

interface ChapterListProps {
	chapters: Chapter[];
	unlockedChapters: string[];
	onChapterClick: (slug: string) => void;
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters, unlockedChapters, onChapterClick }) => {
	return (
		<div className="my-6 w-full">
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
