import {NewsDto} from "../view/news/newsDto";
import {IEndpoint} from "./endpoint.interface";

class Loader {
    baseLink: string;
    options: { [apiKey: string]: string };

    constructor(baseLink: string, options:{ [apiKey: string]: string }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        endpoint: IEndpoint,
        callback = (data: { articles: NewsDto[]; }) => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, endpoint.options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Record<string, unknown>, endpoint: string):string {
        const urlOptions = {...this.options, ...options};
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string|undefined, endpoint: IEndpoint, callback: (data: { articles: NewsDto[]; }) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint.endpoint), {method})
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
