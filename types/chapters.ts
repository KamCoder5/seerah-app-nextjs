export type Chapter = {
	id: number;
	slug: string;
	title: {
		rendered: string;
	};
	acf: {
		is_new: boolean;
		subtitle: string;
		is_coming_soon: boolean;
		timeline: string;
	};
};

export type Chapters = Chapter[];

export interface QuizData {
	questionText: string;
	answerOptions: { answerText: string; isCorrect: boolean }[];
}

export interface FetchContentResult {
	contentSections: string[];
	allQuizData: Record<number, QuizData[]>;
	subtitle: string;
}
