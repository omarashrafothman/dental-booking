export interface Article {
    id: number;
    title: string;
    description: string;
    date: string;
    category: string;
    image: string;
}

export type NavLinkType = {
    name: string;
    path: string;
};
