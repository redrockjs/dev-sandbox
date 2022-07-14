class Event {
    listeners: Array<Function>;
    static addListener;
    static trigger;

    constructor() {
        this.listeners = [];
    }

    addListener(listener: Function) {
        this.listeners.push(listener);
    }

    trigger(params: string) {
        this.listeners.forEach(listener => listener(params));
    }
}

export default Event;