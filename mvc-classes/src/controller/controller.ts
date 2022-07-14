import View from "../view/view";
import Model from "../model/model";

class Controller {
    private view: View;
    private model: Model;

    constructor() {
        this.view = new View();
        this.model = new Model();

        this.view.clickMinusEvent.addListener(() => {
            //console.log('dec')
            this.model.dec();
            // событие клика по кнопке минус из вью вызывает функцию dec из модели
        });
        this.view.clickPlusEvent.addListener(() => {
            //console.log('inc')
            this.model.inc();
            // событие клика по кнопке плюс из вью вызывает функцию inc из модели
        });

        this.model.counterEvent.addListener(()=>{
            //console.log(this.model.getNumber());
            this.view.updateResult(this.model.getNumber());
            // событие изменения данных в модели вызывает функцию обновления счетчика во вью
        });
    }

    run(){
        this.view.render();
    }
}

export default Controller;