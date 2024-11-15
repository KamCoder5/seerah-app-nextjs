"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

import StickyHeader from "@/components/chapters/StickyHeader";
import ContentSection from "@/components/chapters/ContentSection";
import NavigationButtonsBar from "@/components/chapters/NavigationButtonsBar";
import { LoadingSpinner } from "@/components/ui/spinner/Spinner";

import useFetchChapter from "@/hooks/useFetchChapter";
import useFetchAllChapters from "@/hooks/useFetchAllChapters";
import useQuiz from "@/hooks/useQuiz";
import useChapterStore from "@/store/useChapterStore";

import { pageVariants, pageTransition } from "@/lib/animation";
import { isCurrentPageQuiz, resetQuiz } from "@/lib/quizUtils";
import Modal from "@/components/ui/modal/Modal";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

export default function ChaptersPage() {
	const router = useRouter();
	const { slug } = useParams() as { slug: string };
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showConfetti, setShowConfetti] = useState(false);
	const { width, height } = useWindowSize();

	const [pageIndex, setPageIndex] = useState(0);

	const { data, isLoading, error } = useFetchChapter(slug || "");
	const { data: allChaptersData } = useFetchAllChapters();
	const { unlockNextChapter } = useChapterStore();

	const {
		currentQuestion,
		showScore,
		score,
		isQuizPassedPerfectly,
		resetQuizState,
		handleAnswerOptionClick,
		handleNextQuestion,
		selectedOptionIndex,
		isAnswered,
	} = useQuiz(data?.allQuizData?.[pageIndex] ?? []);

	const hasMorePages = () => data && pageIndex < (data.contentSections?.length ?? 0) - 1;
	const isLastPage = (): boolean => !!(data && pageIndex === (data.contentSections?.length ?? 0) - 1);

	const proceedToNextPage = () => setPageIndex(pageIndex + 1);

	const finishChapter = () => {
		setShowConfetti(false);
		if (allChaptersData) {
			const allChapterSlugs = allChaptersData.map((chapter) => chapter.slug);
			unlockNextChapter(slug, allChapterSlugs);
			router.push("/chapters");
			setIsModalOpen(false);
		}
	};

	const openModal = () => {
		setIsModalOpen(true);
		setShowConfetti(true);
	};

	const nextPage = () => {
		if (hasMorePages()) {
			proceedToNextPage();
			resetQuizState();
		} else if (isLastPage()) {
			openModal();
		}
	};

	const prevPage = () => {
		if (pageIndex > 0) {
			setPageIndex(pageIndex - 1);
			resetQuizState();
		}
	};

	const currentPageIndex = pageIndex + 1;
	const contentLength = data?.contentSections?.length ?? 0;

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pageIndex]);

	if (isLoading) {
		return (
			<LoadingSpinner
				isCentered
				isFullPage
			/>
		);
	}

	if (error) {
		return <p>Error fetching content: {error.message}</p>;
	}

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
					contentLength={contentLength}
				/>

				<motion.div
					key={pageIndex}
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -50 }}
					transition={{ duration: 0.5 }}
				>
					<ContentSection
						contentHtml={data?.contentSections?.[pageIndex] ?? ""}
						isQuiz={isCurrentPageQuiz(data, pageIndex)}
						showScore={showScore}
						score={score}
						totalQuestions={data?.allQuizData?.[pageIndex]?.length ?? 0}
						questionNumber={currentQuestion + 1}
						questionText={data?.allQuizData?.[pageIndex]?.[currentQuestion]?.questionText || ""}
						options={data?.allQuizData?.[pageIndex]?.[currentQuestion]?.answerOptions || []}
						onOptionClick={handleAnswerOptionClick}
						onRetakeQuiz={() => resetQuiz(resetQuizState)}
						onNextQuestion={handleNextQuestion}
						selectedOptionIndex={selectedOptionIndex}
						isAnswered={isAnswered}
						isLastQuestion={currentQuestion + 1 >= (data?.allQuizData?.[pageIndex]?.length ?? 0)}
					/>
				</motion.div>

				<NavigationButtonsBar
					isLastPage={isLastPage()}
					onNext={nextPage}
					onPrev={prevPage}
					hasNext={!!hasMorePages()}
					hasPrev={pageIndex > 0}
					disableNext={isCurrentPageQuiz(data, pageIndex) && !isQuizPassedPerfectly}
					currentPageIndex={currentPageIndex}
					contentLength={contentLength}
				/>
			</div>
			{showConfetti && (
				<Confetti
					width={width || window.innerWidth}
					height={height || window.innerHeight}
				/>
			)}
			<Modal
				isOpen={isModalOpen}
				onClose={finishChapter}
				title="Congratulations!"
				description="You have successfully completed the chapter."
				buttonText="Go to All Chapters"
			/>
		</motion.div>
	);
}
