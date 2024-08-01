import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Chapter } from "@/types/chapters";
import { TWENTY_FOUR_HOURS } from "@/constants/pageConstants";
import { BASE_URL } from "@/constants/appConstants";

const API_URL = `${BASE_URL}/wp-json/wp/v2/chapter?_fields=id,title,slug,subtitle,acf&orderby=date&order=asc`;

const fetchAllChapters = async (): Promise<Chapter[]> => {
	const response = await axios.get<Chapter[]>(API_URL);
	return response.data;
};

const useChapters = (): UseQueryResult<Chapter[], Error> => {
	return useQuery<Chapter[], Error>({
		queryKey: ["chapters"],
		queryFn: fetchAllChapters,
		staleTime: TWENTY_FOUR_HOURS,
	});
};

export default useChapters;
