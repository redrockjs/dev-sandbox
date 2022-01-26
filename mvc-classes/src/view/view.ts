import Button from "./button";
import Span from "./span";

class View {
    private buttonMinus: Button;
    private buttonPlus: Button;
    private span: Span;

    constructor() {
        this.buttonMinus = new Button('-','button');
        this.buttonPlus = new Button('+','button')
        this.span = new Span('0','label')
    }

    render() {

        this.buttonMinus.render();
        this.span.render()
        this.buttonPlus.render();
    }
}

export default View;