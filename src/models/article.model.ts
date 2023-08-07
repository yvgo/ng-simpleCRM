export class Articles {
    status: string | undefined;
    totalResults: number | undefined;
    articles: Article[] | undefined;
}

export class Article {
    author: string | undefined;
    content: string | undefined;
    description: string | undefined;
    publishedAt: string | undefined;
    source: Source | undefined;
    title: string | undefined;
    url: string | undefined;
    urlToImage: string | undefined;
}

export class Source {
    id: string | undefined;
    name: string | undefined;
}

export const initialArticles: Articles = {
    status: '',
    totalResults: 0,
    articles: []
}