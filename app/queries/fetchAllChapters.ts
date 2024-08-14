import { BASE_URL } from "@/constants/appConstants";
import { Chapter } from "@/types/chapters";
import axios from "axios";

const API_URL = `${BASE_URL}/wp-json/wp/v2/chapter?_fields=id,title,slug,subtitle,acf&orderby=date&order=asc`;

export const fetchAllChapters = async (): Promise<Chapter[]> => {
	const response = await axios.get<Chapter[]>(API_URL);
	return response.data;
};

export const fetchAllChaptersFromApi = async (): Promise<Chapter[]> => {
	const response = await axios.get<Chapter[]>("/api/chapters");
	return response.data;
};
