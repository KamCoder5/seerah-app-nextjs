import { useQuery, UseQueryResult } from "@tanstack/react-query";

const BASE_URL = "https://theseerahapp.com";

interface Chapter {
	slug: string;
	content: {
		rendered: string;
	};
}

interface QuizData {
	// Define the structure of the quiz data as per your requirement
	question: string;
	options: string[];
	correctAnswer: string;
}

interface FetchContentResult {
	contentSections: string[];
	allQuizData: QuizData[];
}

const fetchContent = async (slug: string): Promise<FetchContentResult> => {
	const API_URL = `${BASE_URL}/wp-json/wp/v2/chapter?slug=${slug}`;
	try {
		const response = await fetch(API_URL);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data: Chapter[] = await response.json();
		const renderedContent = data[0].content.rendered;
		const contentSections = renderedContent.split("<!--nextpage-->");

		// Extract quiz data without using cheerio
		const parser = new DOMParser();
		const doc = parser.parseFromString(renderedContent, "text/html");

		const allQuizData: QuizData[] = [];
		const quizElements = doc.querySelectorAll<HTMLElement>(".quiz-block");

		quizElements.forEach((element) => {
			const jsonString = element.getAttribute("data");
			if (jsonString) {
				try {
					const jsonData: QuizData = JSON.parse(jsonString);
					allQuizData.push(jsonData);
				} catch (error) {
					console.error(
						"Error parsing JSON from quiz block data attribute:",
						error
					);
				}
			}
		});

		return { contentSections, allQuizData };
	} catch (error: any) {
		throw new Error(`Error fetching content: ${error.message}`);
	}
};

const useFetchChapter = (
	slug: string
): UseQueryResult<FetchContentResult, Error> => {
	return useQuery({
		queryKey: ["content", slug],
		queryFn: () => fetchContent(slug),
		staleTime: 1000 * 60 * 60, // 1 hour
	});
};

export default useFetchChapter;
