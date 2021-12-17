import News from './news/news';
import Sources from './sources/sources';
import {INews} from "./news/news.interface";
import {ISources} from "./sources/sources.interface";

export class AppView {
    public news: News;
    public sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: { articles: INews[]; }) {
        const values: INews[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: { sources: ISources[]; }) {
        const values: ISources[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
