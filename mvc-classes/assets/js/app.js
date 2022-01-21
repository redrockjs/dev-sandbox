export default class App{
    constructor(props) {}

    run() {
        const currentPageHTML = document.querySelector('.content');
        currentPageHTML.innerHTML = '<h1> test <h1>';
        console.log(currentPageHTML);
        return currentPageHTML
    }
}