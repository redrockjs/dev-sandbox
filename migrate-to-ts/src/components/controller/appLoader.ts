import Loader from './loader';

class AppLoader extends Loader {

    constructor() {
        //original link 'https://newsapi.org/v2/'
        super('https://nodenews.herokuapp.com/', {
            apiKey: '35900f7f66c441358d03b31d2304c07b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
