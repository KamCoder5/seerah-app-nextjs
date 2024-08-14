import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Chapter } from "@/types/chapters";
import { TWENTY_FOUR_HOURS } from "@/constants/pageConstants";
import { fetchAllChaptersFromApi } from "@/app/queries/fetchAllChapters";

const useChapters = (): UseQueryResult<Chapter[], Error> => {
	return useQuery<Chapter[], Error>({
		queryKey: ["chapters"],
		queryFn: fetchAllChaptersFromApi,
		staleTime: TWENTY_FOUR_HOURS,
	});
};

export default useChapters;
