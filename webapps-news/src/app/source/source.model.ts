import { ArticleComponent } from "./article/article.component";

export class Source {
    private _id: string;
    private _name: string;
    private _description: string;
    private _url: string;
    private _category: string;
    private _language: string;
    private _country: string;
    private _articles = new Array<ArticleComponent>();

    constructor(id: string, name: string, description: string, url: string, category: string, language: string, country: string) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._url = url;
        this._category = category;
        this._language = language;
        this._country = country;
    }

    get id() : string {
        return this._id;
    }

    get name() : string {
        return this._name;
    }

    get description() : string {
        return this._description;
    }

    get url() : string {
        return this._url;
    }

    get category() : string {
        return this._category;
    }

    get language() : string {
        return this._language;
    }

    get country() : string {
        return this._country;
    }

    addArticle(article: ArticleComponent) {
        this._articles.push(article);
    }
}