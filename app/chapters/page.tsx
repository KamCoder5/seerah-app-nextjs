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
import Link from "next/link";

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
			<main className="relative min-h-dvh flex flex-col justify-between">
				<Link
					href="/"
					className="flex text-brown-500 mt-4 font-medium "
				>
					Home 
					
				</Link>
				<div className="flex flex-col items-center flex-grow pt-3 md:pt-6">
					<ChapterHeader />
					<ChapterList
						chapters={data || []}
						unlockedChapters={unlockedChapters}
						onChapterClick={handleChapterClick}
					/>
				</div>
				<div className="absolute bottom-0 left-0 w-full py-3 bg-brown-50 shadow-xl z-50 max-w-3xl m-auto ">
					<ContinueReadingButton
						slug={currentChapter?.slug || "loading"}
						disabled={currentChapter?.acf.is_coming_soon}
						title="Continue Reading"
						onClick={() => handleChapterClick(currentChapter?.slug || "loading")}
					/>
				</div>
			</main>
		</motion.div>
	);
};

export default ChaptersRoot;
