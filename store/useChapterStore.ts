// app/store/useChapterStore.ts
import { create } from "zustand";

type ChapterState = {
  unlockedChapters: string[];
  unlockNextChapter: (
    currentChapterSlug: string,
    allChapters: string[],
  ) => void;
};

const useChapterStore = create<ChapterState>((set) => ({
  unlockedChapters: ["chapter-1"], // Initially, only chapter-1 is unlocked
  unlockNextChapter: (currentChapterSlug, allChapters) =>
    set((state) => {
      const currentIndex = allChapters.indexOf(currentChapterSlug);
      if (currentIndex >= 0 && currentIndex < allChapters.length - 1) {
        const nextChapterSlug = allChapters[currentIndex + 1];
        return {
          unlockedChapters: [...state.unlockedChapters, nextChapterSlug],
        };
      }
      return state;
    }),
}));

export default useChapterStore;
