import News from './news/news';
import Sources from './sources/sources';
import {NewsDto} from "./news/newsDto";
import {SourceDto} from "./sources/sourceDto";

export class AppView {
    public news: News;
    public sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: { articles: NewsDto[]; }) {
        const values: Array<NewsDto> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: { sources: SourceDto[]; }) {
        const values: Array<SourceDto> = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
