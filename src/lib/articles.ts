import { Article } from "./types";

export const getArticles = async (): Promise<Article[]> => {
    const res = await fetch(`${import.meta.env.VITE_API_ENTRYPOINT}/articles`, {
        headers: {
            "X-API-TOKEN": import.meta.env.VITE_API_KEY,
        },
    });

    return (await res.json()) as Article[];
};
