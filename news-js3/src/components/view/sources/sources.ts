import './sources.css';

class Sources {
    draw(data: any) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item: any) => {
            // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
