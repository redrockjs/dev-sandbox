import Event from "../helpers/event";

class Model {
    private _counter: number
    counterEvent: Event;

    constructor() {
        this._counter = 0;
        this.counterEvent = new Event();
    }

    getNumber(){
        return this._counter;
    }

    inc() {
        this._counter += 1;
        this.counterEvent.trigger('inc');
    }

    dec() {
        this._counter -= 1;
        this.counterEvent.trigger('dec');
    }

}

export default Model;