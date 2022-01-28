class Event {
    listeners: Array<Function>;
    static addListener;
    static trigger;

    constructor() {
        this.listeners = [];
    }

    addListener(listener) {
        this.listeners.push(listener);
    }

    trigger(params) {
        this.listeners.forEach(listener => listener(params));
    }
}

export default Event;