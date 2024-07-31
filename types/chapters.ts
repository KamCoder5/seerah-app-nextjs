export type Chapter = {
	id: number;
	slug: string;
	title: {
		rendered: string;
	};
	acf: {
		is_new: boolean;
		subtitle: string;
	};
	subtitle: string;
};

export type Chapters = Chapter[];
