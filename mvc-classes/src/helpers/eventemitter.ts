class EventEmitter {
    listeners: Array<Function>;
    static on;
    static emit;

    constructor() {
        this.listeners = [];
    }

    on(listener) {
        this.listeners.push(listener);
    }

    emit(params) {
        this.listeners.forEach(listener => listener(params));
    }
}

export default EventEmitter;