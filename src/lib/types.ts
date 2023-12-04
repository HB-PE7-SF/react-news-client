export interface Category {
    id: number;
    name: string;
}

export interface Article {
    id: number;
    title: string;
    createdAt: string;
    visible: boolean;
    url: string;
    category: Category;
}
