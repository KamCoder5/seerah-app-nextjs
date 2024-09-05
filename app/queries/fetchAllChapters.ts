import { Chapter } from "@/types/chapters";

export const fetchAllChapters = async (): Promise<Chapter[]> => {
	const response = await fetch("/api/chapters");

	// Check if the response is ok (status code is 2xx)
	if (!response.ok) {
		throw new Error(`Error fetching chapters: ${response.statusText}`);
	}

	// Parse the response as JSON
	const data: Chapter[] = await response.json();

	return data;
};
