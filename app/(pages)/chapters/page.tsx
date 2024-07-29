"use client";

import ContinueReadingButton from "@/components/button/ContinueReadingButton";
import SingleChapterButton from "@/components/button/SingleChapterButton";
import { LoadingSpinner } from "@/components/spinner/Spinner";
import Typography from "@/components/typography/Typography";
import { HOME_CONSTANTS } from "@/constants/pageConstants";
import useFetchAllChapters from "@/hooks/useFetchAllChapters";
import { getCurrentChapter } from "@/lib/utils";
import useChapterStore from "@/store/useChapterStore";
import { useRouter } from "next/navigation";

export default function ChaptersRoot() {
	const { data, isLoading, error } = useFetchAllChapters();
	const { unlockedChapters } = useChapterStore();
	const router = useRouter();

	if (isLoading) return <LoadingSpinner />;
	if (error) return <p>Error fetching content: {error.message}</p>;

	const currentChapter = getCurrentChapter(unlockedChapters, data);

	return (
		<main>
			<div className="flex flex-col items-center px-4 py-6">
				<Typography
					variant="h1"
					className="text-3xl font-bold"
				>
					{HOME_CONSTANTS.PAGE_HEADING}
				</Typography>
				<Typography
					variant="body1"
					className="text-lg mt-2"
				>
					{HOME_CONSTANTS.PAGE_DESCRIPTION}
				</Typography>
				<div className="my-6 w-full">
					<Typography
						variant="h3"
						className="text-2xl font-semibold"
					>
						{HOME_CONSTANTS.CHAPTER_HEADING}
					</Typography>
					{data &&
						data.length > 0 &&
						data.map((chapter, index) => (
							<div
								key={index}
								className="mt-4"
							>
								<SingleChapterButton
									title={chapter.subtitle}
									slug={chapter.slug}
									onClick={() => {
										router.push(`/chapters/${chapter.slug}`);
									}}
									disabled={!unlockedChapters.includes(chapter.slug)}
								/>
							</div>
						))}
				</div>
				<ContinueReadingButton
					slug={currentChapter ? currentChapter.slug : "loading"}
					title={currentChapter ? currentChapter.subtitle : "loading"}
					onClick={() => router.push(`/chapters/${currentChapter ? currentChapter.slug : "loading"}`)}
				/>
			</div>
		</main>
	);
}
