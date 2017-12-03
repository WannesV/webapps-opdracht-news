import { ArticleComponent } from '../article/article/article.component';

export class Source {
    private _id: string;
    private _name: string;
    private _description: string;
    private _url: string;
    private _category: string;
    private _language: string;
    private _country: string;
    private _users = new Array<string>();
    private _articles = new Array<ArticleComponent>();

    static fromJSON(json): Source {
        const source = new Source(json.id, json.name, json.description, json.url, json.category, json.language, json.country);
        source._id = json._id;
        return source;
    }

    static fromJSON2(json): Source {
        const source = new Source(json.id, json.name, json.description, json.url, json.category, json.language, json.country);
        source._id = json._id;
        source._users = json.users;
        return source;
    }

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

    get users(): string[] {
        return this._users;
    }

    addArticle(article: ArticleComponent) {
        this._articles.push(article);
    }

    addUser(user: string) {
        this._users.push(user);
    }

    removeUser(user: string) {
        this._users.splice(this._users.findIndex(u => u === user) , 1);
    }

    toJSON() {
        return {
            id: this._id,
            name: this._name,
            description: this._description,
            url: this._url,
            category: this._category,
            language: this._language,
            country: this._country,
            users: this._users,
        }
    }
}