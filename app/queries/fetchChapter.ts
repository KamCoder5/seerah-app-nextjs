import { parseContent } from "@/lib/utils";
import { FetchContentResult } from "@/types/chapters";

export const fetchChapter = async (slug: string): Promise<FetchContentResult> => {
	try {
		const response = await fetch(`/api/chapters/${slug}`);

		// Check if the response is ok (status code is 2xx)
		if (!response.ok) {
			throw new Error(`Error fetching content: ${response.statusText}`);
		}

		// Parse the response as JSON
		const { data } = await response.json();

		// Parse the content on the client side
		return parseContent(data);
	} catch (error: any) {
		throw new Error(error.message || "Error fetching content");
	}
};
