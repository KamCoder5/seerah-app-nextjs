import React from "react";
import { Chapter } from "@/types/chapters";
import ChapterItem from "./ChapterItem";
import Typography from "../ui/typography/Typography";
import { getTopicDescription } from "@/lib/topicUtils";

interface ChapterListProps {
	chapters: Chapter[];
	unlockedChapters: string[];
	onChapterClick: (slug: string) => void;
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters, unlockedChapters, onChapterClick }) => {
	const displayedTopics = new Set<string>();

	return (
		<div className="my-6 w-full">
			{chapters &&
				chapters.map((chapter, index) => {
					const topicTitle = getTopicDescription(chapter.acf.timeline);
					// Only display the topic title if it hasn't been displayed yet
					const shouldDisplayTitle = !displayedTopics.has(topicTitle);
					// Add the topic title to the Set after deciding to display it or not
					displayedTopics.add(topicTitle);

					return (
						<div key={index}>
							{shouldDisplayTitle && (
								<Typography
									variant="body1"
									className="text-brown-500 my-3 font-bold"
								>
									{topicTitle}
								</Typography>
							)}

							<ChapterItem
								chapter={chapter}
								unlockedChapters={unlockedChapters}
								onChapterClick={onChapterClick}
							/>
						</div>
					);
				})}
		</div>
	);
};

export default ChapterList;
