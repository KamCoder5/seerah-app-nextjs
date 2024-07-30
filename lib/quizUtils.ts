// utils/quizUtils.ts
export const isCurrentPageQuiz = (data: any, pageIndex: number) => {
	return (data?.contentSections?.length ?? 0) > 0 && data?.allQuizData?.[pageIndex]?.length > 0;
};

export const resetQuiz = (resetQuizState: () => void) => {
	resetQuizState();
};
