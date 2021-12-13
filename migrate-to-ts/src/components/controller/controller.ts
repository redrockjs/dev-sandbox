import AppLoader from './appLoader';
import {NewsDto} from "../view/news/newsDto";

class AppController extends AppLoader {
    getSources(callback: (data?: Record<string, unknown>) => void) {
        super.getResp(
            {
                endpoint: 'sources',
                options: {}
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: { articles: NewsDto[]; }) => void) {
        let target = e.target as Node;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if ((target as HTMLElement).classList.contains('source__item')) {
                const sourceId = (target as HTMLElement).getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
