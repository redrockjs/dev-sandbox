class Span {
    private readonly content: string;
    private readonly className: string;

    constructor(content, className) {
        this.content = content;
        this.className = className;
    }

    render() {
        const span: HTMLElement = document.createElement('span')
        span.innerHTML = this.content;
        span.className = this.className;
        document.body.appendChild(span);
    }
}

export default Span;