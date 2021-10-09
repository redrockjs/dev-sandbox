import './App.css';
import React from "react";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {Navigation} from "./components/Navigation";
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {AppState} from "./context/AppState";

let App = () => {
    return (
        <AppState>
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route path="/login" exact render={() => <Login/>}/>
                    <Route path="/" render={() => <Home/>}/>
                </Switch>
            </BrowserRouter>
        </AppState>
    );
}

export default App;
