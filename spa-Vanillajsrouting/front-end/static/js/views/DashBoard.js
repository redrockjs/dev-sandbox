import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle("Dashboard")
    }
    async getHtml() {
        return `
        <h1>Welcome back, Gerald!!</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p> Id delectus laboriosam accusantium eius tempora commodi, sunt quo enim sit voluptate sapiente veritatis. </p>

        <p>odio saepe, expedita et. Ea voluptatum beatae asperiores.</p>
        <a href="/posts" data-link>View recent posts</a>
        `;
    }
}