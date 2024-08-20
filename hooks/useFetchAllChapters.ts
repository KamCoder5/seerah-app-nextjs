import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Chapter } from "@/types/chapters";
import { TWENTY_FOUR_HOURS } from "@/constants/pageConstants";
import { fetchAllChapters } from "@/app/queries/fetchAllChapters";

const useChapters = (): UseQueryResult<Chapter[], Error> => {
  return useQuery<Chapter[], Error>({
    queryKey: ["chapters"],
    queryFn: fetchAllChapters,
    staleTime: TWENTY_FOUR_HOURS,
  });
};

export default useChapters;
