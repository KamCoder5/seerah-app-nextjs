"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ContentSection from "@/components/chapters/ContentSection";
import NavigationButtonsBar from "@/components/chapters/NavigationButtonsBar";
import { LoadingSpinner } from "@/components/ui/spinner/Spinner";
import Typography from "@/components/ui/typography/Typography";
import useFetchAllChapters from "@/hooks/useFetchAllChapters";
import useFetchChapter from "@/hooks/useFetchChapter";
import useQuiz from "@/hooks/useQuiz";
import { pageVariants, pageTransition } from "@/lib/animation";
import { isCurrentPageQuiz, resetQuiz } from "@/lib/quizUtils";
import useChapterStore from "@/store/useChapterStore";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ui/progress-bar/ProgressBar";

export default function ChaptersPage() {
	const router = useRouter();
	const { slug } = useParams() as { slug: string };

	const [pageIndex, setPageIndex] = useState(0);
	const { data, isLoading, error } = useFetchChapter(slug || "");
	const { unlockNextChapter } = useChapterStore();
	const { data: allChaptersData } = useFetchAllChapters();

	const { currentQuestion, showScore, score, isQuizPassedPerfectly, resetQuizState, handleAnswerOptionClick } = useQuiz(
		data?.allQuizData?.[pageIndex]?.[0] ?? []
	);

	console.log(data?.allQuizData, "data?.allQuizData?");

	const hasMorePages = () => data && data.contentSections && pageIndex < data.contentSections.length - 1;
	const isLastPage = () => data && pageIndex === data.contentSections.length - 1;

	const proceedToNextPage = () => setPageIndex(pageIndex + 1);

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
				<Typography variant="h4">{data?.subtitle}</Typography>
				<div className="flex justify-evenly items-center mt-2 mb-6">
					<ProgressBar percentage={(pageIndex / (data?.contentSections?.length ?? 1)) * 100} />
				</div>
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
						totalQuestions={data?.allQuizData[pageIndex]?.[0]?.length ?? 0}
						questionNumber={currentQuestion + 1}
						questionText={data?.allQuizData[pageIndex]?.[0]?.[currentQuestion]?.questionText}
						options={data?.allQuizData[pageIndex]?.[0]?.[currentQuestion]?.answerOptions || []}
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
