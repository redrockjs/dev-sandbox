import AppController from '../controller/controller';
import {AppView} from '../view/appView';
import {NewsDto} from "../view/news/newsDto";

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        if (document) {
            document
                .querySelector('.sources')
                .addEventListener('click', (e) => this.controller.getNews(e, (data: { articles: NewsDto[]; }) => this.view.drawNews(data)));
        }
        this.controller.getSources((data: any) => this.view.drawSources(data));
    }
}

export default App;
