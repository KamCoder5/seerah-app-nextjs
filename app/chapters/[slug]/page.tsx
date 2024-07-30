// pages/ChaptersPage.tsx
"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaCode } from "react-icons/fa";
import useFetchChapter from "@/hooks/useFetchChapter";
import useQuiz from "@/hooks/useQuiz";
import useChapterStore from "@/store/useChapterStore";
import useFetchAllChapters from "@/hooks/useFetchAllChapters";
import { LoadingSpinner } from "@/components/ui/spinner/Spinner";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "@/lib/animation";
import ContentSection from "@/components/ContentSection";
import NavigationButtons from "@/components/NavigationButtons";
import { isCurrentPageQuiz, resetQuiz } from "@/lib/quizUtils";

export default function ChaptersPage() {
	const router = useRouter();
	const { slug } = useParams() as { slug: string }; // Ensure that slug is a string

	const [pageIndex, setPageIndex] = useState(0);
	const { data, isLoading, error } = useFetchChapter(slug || "");
	const { unlockNextChapter } = useChapterStore();
	const { data: allChaptersData } = useFetchAllChapters();

	const { currentQuestion, showScore, score, isQuizPassedPerfectly, resetQuizState, handleAnswerOptionClick } = useQuiz(
		data?.allQuizData ?? []
	);

	const nextPage = () => {
		if (data && data.contentSections && pageIndex < data.contentSections.length - 1) {
			setPageIndex(pageIndex + 1);
			resetQuizState();
		} else if (data && pageIndex === data.contentSections.length - 1) {
			const allChapterSlugs = allChaptersData?.map((chapter) => chapter.slug);
			unlockNextChapter(slug, allChapterSlugs || []);
			router.push("/chapters");
		}
	};

	const prevPage = () => {
		if (data && data.contentSections && pageIndex > 0) {
			setPageIndex(pageIndex - 1);
			resetQuizState();
		}
	};

	if (isLoading) return <LoadingSpinner />;
	if (error) return <p>Error fetching content: {error.message}</p>;

	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<div className="container mx-auto p-4">
				<div className="header flex items-center justify-center bg-gray-200 p-6">
					<FaCode size={100} />
				</div>
				<div className="content mt-6">
					<h1 className="text-2xl font-bold">Chapters</h1>
					<p>
						Page {pageIndex + 1} / {data?.contentSections?.length ?? 0}
					</p>
					<ContentSection
						contentHtml={data?.contentSections[pageIndex] ?? ""}
						isQuiz={isCurrentPageQuiz(data, pageIndex)}
						showScore={showScore}
						score={score}
						totalQuestions={data?.allQuizData[pageIndex]?.length ?? 0}
						questionNumber={currentQuestion + 1}
						questionText={data?.allQuizData[pageIndex]?.[currentQuestion]?.questionText}
						options={data?.allQuizData[pageIndex]?.[currentQuestion]?.answerOptions || []}
						onOptionClick={(isCorrect) => handleAnswerOptionClick(isCorrect, data?.allQuizData, pageIndex)}
						onRetakeQuiz={() => resetQuiz(resetQuizState)}
					/>
					<NavigationButtons
						onNext={nextPage}
						onPrev={prevPage}
						hasNext={!!(data?.contentSections && pageIndex < data.contentSections.length - 1)}
						hasPrev={pageIndex > 0}
						disableNext={isCurrentPageQuiz(data, pageIndex) && !isQuizPassedPerfectly}
					/>
				</div>
			</div>
		</motion.div>
	);
}
