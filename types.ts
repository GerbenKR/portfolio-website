export type GridItem = {
    title: string;
    image: string;
    url: string | null;
};

export type ProjectItem = {
    slug: string;
    title: string;
    description: string;
    technologies: string;
    image: string;
    url: string | null;
    source: string | null;
};
