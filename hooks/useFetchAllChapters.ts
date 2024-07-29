import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Chapter } from "@/types/chapters";

const BASE_URL = "https://theseerahapp.com";
const API_URL = `${BASE_URL}/wp-json/wp/v2/chapter?_fields=id,title,slug,subtitle&orderby=date&order=asc`;

const fetchAllChapters = async (): Promise<Chapter[]> => {
	const response = await axios.get<Chapter[]>(API_URL);
	return response.data; // Axios automatically parses JSON
};

const useChapters = (): UseQueryResult<Chapter[], Error> => {
	return useQuery<Chapter[], Error>({
		queryKey: ["chapters"],
		queryFn: fetchAllChapters,
	});
};

export default useChapters;
