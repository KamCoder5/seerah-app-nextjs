import { Chapter } from "@/types/chapters";
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getCurrentChapter = (unlockedChapters: string[], data: Chapter[] | undefined): Chapter | null => {
	if (!unlockedChapters || !data) return null;

	const currentChapterIndex = unlockedChapters
		.map((chapter) => parseInt(chapter.split("-")[1]))
		.reduce((max, num) => (num > max ? num : max), 0);

	return data.find((chapter) => parseInt(chapter.slug.split("-")[1]) === currentChapterIndex) || null;
};
