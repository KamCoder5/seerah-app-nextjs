import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TWENTY_FOUR_HOURS } from "@/constants/pageConstants";
import { fetchChapter } from "@/app/queries/fetchChapter";
import { FetchContentResult } from "@/types/chapters";

const useFetchChapter = (
  slug: string,
): UseQueryResult<FetchContentResult, Error> => {
  return useQuery({
    queryKey: ["content", slug],
    queryFn: () => fetchChapter(slug),
    staleTime: TWENTY_FOUR_HOURS,
  });
};

export default useFetchChapter;
