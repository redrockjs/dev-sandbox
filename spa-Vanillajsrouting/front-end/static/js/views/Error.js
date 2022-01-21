import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Error");
    }

    async getHtml() {
        return `
            <h1>Error</h1>
            <p>There was an error not found!</p>
        `;
    }
}