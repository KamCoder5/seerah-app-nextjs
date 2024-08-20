// utils/quizUtils.ts
export const isCurrentPageQuiz = (data: any, pageIndex: number): boolean => {
  // Ensure that both contentSections and allQuizData are available and not empty
  if (!data?.contentSections || !data?.allQuizData) {
    return false;
  }

  // Check if the current page contains quiz data
  const currentQuizData = data.allQuizData[pageIndex];
  return currentQuizData && currentQuizData.length > 0;
};

export const resetQuiz = (resetQuizState: () => void) => {
  resetQuizState();
};
