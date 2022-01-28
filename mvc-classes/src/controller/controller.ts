import View from "../view/view";
import Model from "../model/model";
import ButtonPlus from "../view/buttonPlus";

class Controller {
    private view: View;
    private model: Model;

    constructor() {
        this.view = new View();
        this.model = new Model();

    }

    run(){
        this.view.render();
    }
}

export default Controller;