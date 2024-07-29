"use client";

import ContinueReadingButton from "@/components/button/ContinueReadingButton";
import SingleChapterButton from "@/components/button/SingleChapterButton";
import { LoadingSpinner } from "@/components/spinner/Spinner";
import Typography from "@/components/typography/Typography";
import { HOME_CONSTANTS } from "@/constants/pageConstants";
import useFetchAllChapters from "@/hooks/useFetchAllChapters";
import { pageVariants, pageTransition } from "@/lib/animation";
import { getCurrentChapter } from "@/lib/utils";
import useChapterStore from "@/store/useChapterStore";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ChaptersRoot() {
	const { data, isLoading, error } = useFetchAllChapters();
	const { unlockedChapters } = useChapterStore();
	const router = useRouter();

	if (isLoading) return <LoadingSpinner />;
	if (error) return <p>Error fetching content: {error.message}</p>;

	const currentChapter = getCurrentChapter(unlockedChapters, data);

	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<main>
				<div className="flex flex-col items-center px-4 py-6">
					<Typography variant="h1">{HOME_CONSTANTS.PAGE_HEADING}</Typography>
					<Typography variant="body1">{HOME_CONSTANTS.PAGE_DESCRIPTION}</Typography>
					<div className="my-6 w-full">
						<Typography variant="h4">{HOME_CONSTANTS.CHAPTER_HEADING}</Typography>
						{data &&
							data.length > 0 &&
							data.map((chapter, index) => (
								<div
									key={index}
									className="mt-4"
								>
									<SingleChapterButton
										title={chapter.subtitle}
										slug={chapter.slug}
										onClick={() => {
											router.push(`/chapters/${chapter.slug}`);
										}}
										disabled={!unlockedChapters.includes(chapter.slug)}
									/>
								</div>
							))}
					</div>
					<ContinueReadingButton
						slug={currentChapter ? currentChapter.slug : "loading"}
						title={currentChapter ? currentChapter.subtitle : "loading"}
						onClick={() => router.push(`/chapters/${currentChapter ? currentChapter.slug : "loading"}`)}
					/>
				</div>
			</main>
		</motion.div>
	);
}
