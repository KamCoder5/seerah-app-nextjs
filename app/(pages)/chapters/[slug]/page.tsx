"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaCode } from "react-icons/fa";
import useFetchChapter from "@/hooks/useFetchChapter";
import useQuiz from "@/hooks/useQuiz";
import useChapterStore from "@/store/useChapterStore";
import useFetchAllChapters from "@/hooks/useFetchAllChapters";
import { LoadingSpinner } from "@/components/spinner/Spinner";

export default function ChaptersPage() {
	const router = useRouter();
	const { slug } = useParams() as { slug: string }; // Ensure that slug is a string

	const [pageIndex, setPageIndex] = useState(0);
	const { data, isLoading, error } = useFetchChapter(slug || "");
	const { unlockNextChapter } = useChapterStore();
	const { data: allChaptersData } = useFetchAllChapters();
	console.log(allChaptersData, "allChaptersData");

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
			router.push("/");
		}
	};

	const prevPage = () => {
		if (data && data.contentSections && pageIndex > 0) {
			setPageIndex(pageIndex - 1);
			resetQuizState();
		}
	};

	const isCurrentPageQuiz = data?.contentSections?.length > 0 && data?.allQuizData?.[pageIndex]?.length > 0;

	if (isLoading) return <LoadingSpinner />;
	if (error) return <p>Error fetching content: {error.message}</p>;

	return (
		<div className="container mx-auto p-4">
			<div className="header flex items-center justify-center bg-gray-200 p-6">
				<FaCode size={100} />
			</div>
			<div className="content mt-6">
				<h1 className="text-2xl font-bold">Chapters</h1>
				<p>
					Page {pageIndex + 1} / {data?.contentSections?.length ?? 0}
				</p>
				{(data?.contentSections?.length ?? 0) > 0 ? (
					<>
						<div
							dangerouslySetInnerHTML={{
								__html: data.contentSections[pageIndex],
							}}
						/>

						{isCurrentPageQuiz && (
							<>
								{showScore ? (
									<div className="mt-4">
										<p className="font-bold">
											You scored {score} out of {data.allQuizData[pageIndex]?.length ?? 0}
										</p>
										{score < (data.allQuizData[pageIndex]?.length ?? 0) && (
											<button
												className="btn btn-primary"
												onClick={resetQuizState}
											>
												Retake Quiz
											</button>
										)}
									</div>
								) : (
									<>
										<div className="mt-4">
											<p className="font-bold">
												Question {currentQuestion + 1} / {data.allQuizData[pageIndex]?.length ?? 0}
											</p>
											<p>{data.allQuizData[pageIndex]?.[currentQuestion]?.questionText}</p>
										</div>
										<div className="mt-4">
											{data.allQuizData[pageIndex]?.[currentQuestion]?.answerOptions.map((answerOption, index) => (
												<button
													key={index}
													className="btn btn-outline mt-2"
													onClick={() => handleAnswerOptionClick(answerOption.isCorrect, data.allQuizData, pageIndex)}
												>
													{answerOption.answerText}
												</button>
											))}
										</div>
									</>
								)}
							</>
						)}

						<div className="flex justify-between mt-6">
							{pageIndex > 0 && (
								<button
									className="btn btn-secondary"
									onClick={prevPage}
								>
									Previous
								</button>
							)}
							<button
								className="btn btn-primary"
								onClick={nextPage}
								disabled={isCurrentPageQuiz && !isQuizPassedPerfectly}
							>
								Next
							</button>
						</div>
					</>
				) : (
					<LoadingSpinner />
				)}
			</div>
		</div>
	);
}
