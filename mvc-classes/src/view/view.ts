// import ButtonMinus from "./buttonMinus";
// import ButtonPlus from "./buttonPlus";
// import Span from "./span";
import Event from "../helpers/event";

class View {
    clickMinusEvent: Event;
    clickPlusEvent: Event;

    constructor() {
        this.clickMinusEvent = new Event();
        this.clickPlusEvent = new Event();
    }

    render() {
        const btnMinus: HTMLElement = document.createElement('button')
        btnMinus.innerHTML = '-';
        btnMinus.className = 'button button-minus';

        const textResult: HTMLElement = document.createElement('span')
        textResult.innerHTML = '0';
        textResult.className = 'text-result';
        document.body.appendChild(textResult);

        const btnPlus: HTMLElement = document.createElement('button')
        btnPlus.innerHTML = '+';
        btnPlus.className = 'button button-plus';

        document.body.appendChild(btnMinus);
        document.body.appendChild(textResult);
        document.body.appendChild(btnPlus);

        const btnMinusHandle = document.querySelector('.button-minus');
        if (btnMinusHandle) {
            btnMinusHandle.addEventListener('click', () => {
                this.clickMinusEvent.trigger('dec');
            })
        }
        const btnPlusHandle = document.querySelector('.button-plus');
        if (btnPlusHandle) {
            btnPlusHandle.addEventListener('click', () => {
                this.clickPlusEvent.trigger('inc');
            })
        }
    }

    updateResult(data) {
        const resultHandle = document.querySelector('.text-result');
        if (resultHandle) {
            resultHandle.innerHTML = data;
        }
    }
}

export default View;