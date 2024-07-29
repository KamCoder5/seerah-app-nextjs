export type Chapter = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  subtitle: string;
};

export type Chapters = Chapter[];
