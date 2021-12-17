import "./sources.css";

interface ISourceData {
    id: string;
    name: string;
}

class Sources {
    draw(data: ISourceData[]) {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector("#sourceItemTemp") as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            sourceClone.querySelector(".source__item-name")!.textContent = item.name;
            sourceClone.querySelector(".source__item")!.setAttribute("data-source-id", item.id);

            fragment.append(sourceClone);

        });

        document.querySelector(".sources")!.append(fragment);
    }
}

export default Sources;
