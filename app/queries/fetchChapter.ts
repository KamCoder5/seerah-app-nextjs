import { parseContent } from "@/lib/utils";
import { FetchContentResult } from "@/types/chapters";
import axios from "axios";

export const fetchChapter = async (slug: string): Promise<FetchContentResult> => {
	try {
		const response = await axios.get(`/api/chapters/${slug}`);
		const { data } = response.data;

		// Parse the content on the client side
		return parseContent(data);
	} catch (error: any) {
		throw new Error(error.response?.data?.message || error.message || "Error fetching content");
	}
};
