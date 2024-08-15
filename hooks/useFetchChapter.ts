import axios from "axios";
import { TWENTY_FOUR_HOURS } from "@/constants/pageConstants";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BASE_URL } from "@/constants/appConstants";

interface QuizData {
	questionText: string;
	answerOptions: { answerText: string; isCorrect: boolean }[];
}

interface FetchContentResult {
	contentSections: string[];
	allQuizData: Record<number, QuizData[]>;
	subtitle: string;
}

const fetchContent = async (slug: string): Promise<FetchContentResult> => {
	const API_URL = `${BASE_URL}/wp-json/wp/v2/chapter?slug=${slug}`;
	try {
		const response = await axios.get(API_URL);
		const data = response.data;

		if (data.length === 0) {
			throw new Error("No content found for the provided slug.");
		}

		const renderedContent = data[0].content.rendered;
		const contentSections = renderedContent.split("<!--nextpage-->");
		const subtitle = data[0].acf.subtitle || data[0].title.rendered;

		const parser = new DOMParser();
		const doc = parser.parseFromString(renderedContent, "text/html");

		const allQuizData: Record<number, QuizData[]> = {};
		let currentPageIndex = 0;

		contentSections.forEach((section: string, index: any) => {
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
	} catch (error: any) {
		throw new Error(`Error fetching content: ${error.response?.data?.message || error.message}`);
	}
};

const useFetchChapter = (slug: string): UseQueryResult<FetchContentResult, Error> => {
	return useQuery({
		queryKey: ["content", slug],
		queryFn: () => fetchContent(slug),
		staleTime: TWENTY_FOUR_HOURS,
	});
};

export default useFetchChapter;
