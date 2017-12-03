
export class Article {
    private _author: string;
    private _title: string;
    private _description: string;
    private _url: string;
    private _urlToImage: string;
    private _publishedAt: string;

    static fromJSON(json): Article {
        const article = new Article(json.author, json.title, json.description, json.url, json.urlToImage, json.publishedAt);
        return article;
    }

    constructor(author: string, title: string, description: string, url: string, urlToImage: string, publishedAt: string) {
        this._author = author;
        this._title = title;
        this._description = description;
        this._url = url;
        this._urlToImage = urlToImage;
        this._publishedAt = publishedAt;
    }

    get author(): string {
        return this._author;
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get url(): string {
        return this._url;
    }

    get urlToImage(): string {
        return this._urlToImage;
    }

    get publishedAt(): string {
        return this._publishedAt;
    }

    toJSON() {
        return {
            author: this._author,
            title: this._title,
            description: this._description,
            url: this._url,
            urlToImage: this._urlToImage,
            publishedAt: this._publishedAt,
        }
    }
}