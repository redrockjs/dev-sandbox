import Dashboard from "./views/DashBoard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";
import Error from "./views/Error.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/settings", view: Settings },
        { path: "/notfound", view: Error },

    ];
    //test routes
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });
    
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
    if (!match) {
        match = {
            route: routes[3],
            isMatch: true
        }
    }
    const view = new match.route.view();
    document.getElementById("app").innerHTML = await view.getHtml()
}

window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", e => {
        if (e.target.matches("[data-link")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})