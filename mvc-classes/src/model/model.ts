import EventEmitter from "../helpers/eventemitter";

class Model{
    private counter : number
    constructor() {
        this.counter = 0;
    }

    inc(){
        this.counter += 1;
        EventEmitter.emit('inc');
    }

    dec(){
        this.counter -= 1;
        EventEmitter.emit('dec');
    }

}

export default Model;