import React from "react";
import SingleChapterButton from "../ui/button/SingleChapterButton";
import { Chapter } from "@/types/chapters";

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

interface ChapterItemProps {
	chapter: Chapter;
	unlockedChapters: string[];
	onChapterClick: (slug: string) => void;
}

const ChapterItem: React.FC<ChapterItemProps> = ({ chapter, unlockedChapters, onChapterClick }) => {
	return (
		<div className="mt-4">
			<SingleChapterButton
				title={chapter.subtitle}
				slug={chapter.slug}
				onClick={() => onChapterClick(chapter.slug)}
				disabled={!unlockedChapters.includes(chapter.slug)}
			/>
		</div>
	);
};

export default ChapterList;