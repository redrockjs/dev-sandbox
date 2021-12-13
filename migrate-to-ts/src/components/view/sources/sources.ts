import './sources.css';
import {SourceDto} from "./sourceDto";

class Sources {
    draw(data: Array<SourceDto>):void {
        const fragment = document.createDocumentFragment();
        // const sourceItemTemp = document.querySelector('#sourceItemTemp');
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        data.forEach((item) => {
            const sourceClone = (sourceItemTemp as Node).cloneNode(true);


            (sourceClone as HTMLElement).querySelector('.source__item-name').textContent = item.name;

            //sourceClone.textContent = item.name;
            (sourceClone as HTMLElement).querySelector('.source__item').setAttribute('data-source-id', String(item.id));

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
