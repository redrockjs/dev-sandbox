export class NewsDto {
    author: string;
    publishedAt: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    source: Record<string, unknown>;

    constructor(fields: NewsDto) {
        this.author = fields.author;
        this.publishedAt = fields.publishedAt;
        this.title = fields.title;
        this.description = fields.description;
        this.url = fields.url;
        this.source = fields.source;
        this.urlToImage = fields.urlToImage;
    }
}