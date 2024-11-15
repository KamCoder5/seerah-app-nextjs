import { Chapter, FetchContentResult, QuizData } from "@/types/chapters";
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getCurrentChapter = (unlockedChapters: string[], data: Chapter[] | undefined): Chapter | null => {
	if (!unlockedChapters || !data) return null;

	const currentChapterIndex = unlockedChapters
		.map((chapter) => parseInt(chapter.split("-")[1]))
		.reduce((max, num) => (num > max ? num : max), 0);

	return data.find((chapter) => parseInt(chapter.slug.split("-")[1]) === currentChapterIndex) || null;
};

export const parseContent = (data: any): FetchContentResult => {
	const renderedContent = data[0].content.rendered;
	const contentSections = renderedContent.split("<!--nextpage-->");
	const subtitle = data[0].acf.subtitle || data[0].title.rendered;

	const parser = new DOMParser();
	const allQuizData: Record<number, QuizData[]> = {};
	let currentPageIndex = 0;

	contentSections.forEach((section: string) => {
		const sectionDoc = parser.parseFromString(section, "text/html");
		const quizElements = sectionDoc.querySelectorAll<HTMLElement>(".quiz-block");

		quizElements.forEach((element) => {
			const jsonString = element.getAttribute("data");
			if (jsonString) {
				try {
					const jsonData: QuizData[] = JSON.parse(jsonString);
					if (Array.isArray(jsonData) && jsonData.length > 0) {
						if (!allQuizData[currentPageIndex]) {
							allQuizData[currentPageIndex] = [];
						}
						allQuizData[currentPageIndex] = allQuizData[currentPageIndex].concat(jsonData);
					}
				} catch (error) {
					console.error("Error parsing JSON from quiz block data attribute:", error);
				}
			}
		});

		currentPageIndex++;
	});

	return { contentSections, allQuizData, subtitle };
};
