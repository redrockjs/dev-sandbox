import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: any;
    view: any;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data: any) => this.view.drawNews(data)));
        this.controller.getSources((data: any) => this.view.drawSources(data));
    }
}

export default App;
