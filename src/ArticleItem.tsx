import { Article } from "./lib/types";

const ArticleItem = ({ article }: { article: Article }) => (
    <div className="border-2 border-gray-500 p-2 text-left">
        <p className="bg-blue-700 text-white px-3 py-1 inline-block">
            {article.createdAt}
        </p>
        <h3 className="text-xl">{article.title}</h3>
        <h5>{article.category.name}</h5>
        <p>
            <a href={article.url} target="_blank" className="underline">
                Voir l'article
            </a>
        </p>
    </div>
);

export default ArticleItem;
