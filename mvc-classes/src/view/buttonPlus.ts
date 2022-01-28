import Event from "../helpers/event";

class ButtonPlus {
    private readonly content: string;
    private readonly className: string;
    private clickEvent;

    constructor(content, className) {
        this.content = content;
        this.className = className;
        this.clickEvent = new Event();
    }

    render() {
        const button: HTMLElement = document.createElement('button')
        button.innerHTML = this.content;
        button.className = this.className;
        document.body.appendChild(button);

        const elemHandle = document.querySelector('.button-plus');
        if (elemHandle) {
            elemHandle.addEventListener('click', () => {
                console.log('click on plus');
                this.clickEvent.trigger('inc');
            })
        }
    }
}

export default ButtonPlus;