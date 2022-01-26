class Button {
    private readonly content: string;
    private readonly className: string;

    constructor(content, className) {
        this.content = content;
        this.className = className;
    }

    render() {
        const button: HTMLElement = document.createElement('button')
        button.innerHTML = this.content;
        button.className = this.className;
        document.body.appendChild(button);
    }
}

export default Button;