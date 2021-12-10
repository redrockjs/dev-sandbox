import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '35900f7f66c441358d03b31d2304c07b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
