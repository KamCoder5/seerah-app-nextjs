"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import useFetchAllChapters from "@/hooks/useFetchAllChapters";
import useChapterStore from "@/store/useChapterStore";
import { getCurrentChapter } from "@/lib/utils";
import { pageVariants, pageTransition } from "@/lib/animation";
import ChapterHeader from "@/components/chapters/ChapterHeader";
import ChapterList from "@/components/chapters/ChapterList";
import ContinueReadingButton from "@/components/ui/button/ContinueReadingButton";
import { LoadingSpinner } from "@/components/ui/spinner/Spinner";

const ChaptersRoot: React.FC = () => {
	const { data, isLoading, error } = useFetchAllChapters();
	const { unlockedChapters } = useChapterStore();
	const router = useRouter();

	const handleChapterClick = (slug: string) => {
		router.push(`/chapters/${slug}`);
	};

	if (isLoading)
		return (
			<LoadingSpinner
				isCentered
				isFullPage
			/>
		);
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
			<main className="relative">
				<div className="flex flex-col items-center">
					<ChapterHeader />
					<ChapterList
						chapters={data || []}
						unlockedChapters={unlockedChapters}
						onChapterClick={handleChapterClick}
					/>
					<div className="fixed bottom-0 py-3 w-full container max-w-3xl m-auto bg-[#f1ede8] shadow-xl">
						<ContinueReadingButton
							slug={currentChapter?.slug || "loading"}
							title="Continue Reading"
							onClick={() => handleChapterClick(currentChapter?.slug || "loading")}
						/>
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default ChaptersRoot;
