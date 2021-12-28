import MainPage from "../main";
import SettingsPage from "../settings";
import StatisticPage from "../statistics";

class App {
    private container: HTMLElement
    private initialPage: MainPage

    static renderNewPage(idPage:string){
        document.body.innerText=''

    }

    constructor() {
        this.container = document.body;
        this.initialPage = new MainPage('main-page')
    }

    run(){
        const mainPageHTML = this.initialPage.render()
        this.container.append(mainPageHTML)
    }
}

export default App;