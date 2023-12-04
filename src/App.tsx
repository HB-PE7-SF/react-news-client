import { useEffect, useState } from "react";
import "./App.css";
import { Article } from "./lib/types";
import ArticleItem from "./ArticleItem";
import { getArticles } from "./lib/articles";

function App() {
    const [error, setError] = useState(false);
    const [articles, setArticles] = useState<Article[] | null>(null);

    useEffect(() => {
        getArticles()
            .then((articles) => setArticles(articles))
            .catch(() => setError(true));
    }, []);

    return (
        <main className="max-w-[400px] mx-auto">
            <h1 className="text-2xl">Articles ㄇㄉㄈㄎ</h1>

            {error && (
                <div className="bg-red-200 text-red-700 py-1">
                    Une erreur est survenue
                </div>
            )}

            {!articles && <div>Loading...</div>}

            <div className="flex flex-col gap-3">
                {articles &&
                    articles.map((article) => (
                        <ArticleItem key={article.id} article={article} />
                    ))}
            </div>
        </main>
    );
}

export default App;
