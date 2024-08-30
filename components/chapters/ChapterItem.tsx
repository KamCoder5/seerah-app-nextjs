import React from "react";
import SingleChapterButton from "../ui/button/SingleChapterButton";
import { Chapter } from "@/types/chapters";

interface ChapterItemProps {
	chapter: Chapter;
	unlockedChapters: string[];
	onChapterClick: (slug: string) => void;
}

const ChapterItem: React.FC<ChapterItemProps> = ({ chapter, unlockedChapters, onChapterClick }) => {
	return (
		<div className="mt-4">
			<SingleChapterButton
				title={chapter.acf.subtitle || chapter.title.rendered}
				slug={chapter.slug}
				onClick={() => onChapterClick(chapter.slug)}
				disabled={!unlockedChapters.includes(chapter.slug)}
				isNew={chapter.acf.is_new}
				isComingSoon={chapter.acf.is_coming_soon}
			/>
		</div>
	);
};

export default ChapterItem;
