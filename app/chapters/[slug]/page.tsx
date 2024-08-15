"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ContentSection from "@/components/chapters/ContentSection";
import NavigationButtonsBar from "@/components/chapters/NavigationButtonsBar";
import { LoadingSpinner } from "@/components/ui/spinner/Spinner";
import useFetchAllChapters from "@/hooks/useFetchAllChapters";
import useFetchChapter from "@/hooks/useFetchChapter";
import useQuiz from "@/hooks/useQuiz";
import { pageVariants, pageTransition } from "@/lib/animation";
import { isCurrentPageQuiz, resetQuiz } from "@/lib/quizUtils";
import useChapterStore from "@/store/useChapterStore";
import { motion } from "framer-motion";
import StickyHeader from "@/components/chapters/StickyHeader";

export default function ChaptersPage() {
	const router = useRouter();
	const { slug } = useParams() as { slug: string };

	const [pageIndex, setPageIndex] = useState(0);
	const { data, isLoading, error } = useFetchChapter(slug || "");
	const { unlockNextChapter } = useChapterStore();
	const { data: allChaptersData } = useFetchAllChapters();

	const { currentQuestion, showScore, score, isQuizPassedPerfectly, resetQuizState, handleAnswerOptionClick } = useQuiz(
		data?.allQuizData?.[pageIndex] ?? []
	);

	const hasMorePages = () => data && data.contentSections && pageIndex < data.contentSections.length - 1;
	const isLastPage = () => data && pageIndex === data.contentSections.length - 1;

	const proceedToNextPage = () => {
		setPageIndex(pageIndex + 1);
	};

	const finishChapter = () => {
		if (allChaptersData) {
			const allChapterSlugs = allChaptersData.map((chapter) => chapter.slug);
			unlockNextChapter(slug, allChapterSlugs);
			router.push("/chapters");
		}
	};

	const nextPage = () => {
		if (hasMorePages()) {
			proceedToNextPage();
			resetQuizState();
		} else if (isLastPage()) {
			finishChapter();
		}
	};

	const prevPage = () => {
		if (data && data.contentSections && pageIndex > 0) {
			setPageIndex(pageIndex - 1);
			resetQuizState();
		}
	};

	const currentPageIndex = pageIndex + 1;
	const contentLength = data?.contentSections?.length ?? 0;

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pageIndex]);

	if (isLoading)
		return (
			<LoadingSpinner
				isCentered
				isFullPage
			/>
		);
	if (error) return <p>Error fetching content: {error.message}</p>;

	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<div className="content mt-4">
				<StickyHeader
					subtitle={data?.subtitle}
					pageIndex={pageIndex}
					contentLength={data?.contentSections?.length ?? 0}
				/>

				<motion.div
					key={pageIndex}
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -50 }}
					transition={{ duration: 0.5 }}
				>
					<ContentSection
						contentHtml={data?.contentSections[pageIndex] ?? ""}
						isQuiz={isCurrentPageQuiz(data, pageIndex)}
						showScore={showScore}
						score={score}
						totalQuestions={data?.allQuizData[pageIndex]?.length ?? 0}
						questionNumber={currentQuestion + 1}
						questionText={data?.allQuizData[pageIndex]?.[currentQuestion]?.questionText || ""}
						options={data?.allQuizData[pageIndex]?.[currentQuestion]?.answerOptions || []}
						onOptionClick={handleAnswerOptionClick}
						onRetakeQuiz={() => resetQuiz(resetQuizState)}
					/>
				</motion.div>
				<NavigationButtonsBar
					onNext={nextPage}
					onPrev={prevPage}
					hasNext={!!(data?.contentSections && pageIndex < data.contentSections.length - 1)}
					hasPrev={pageIndex > 0}
					disableNext={isCurrentPageQuiz(data, pageIndex) && !isQuizPassedPerfectly}
					currentPageIndex={currentPageIndex}
					contentLength={contentLength}
				/>
			</div>
		</motion.div>
	);
}
