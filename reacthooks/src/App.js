import './App.css';
import React from "react";
import {Route} from "react-router";
import {UseEffectHook} from "./pages/UseEffectHook";
import {NavBar} from "./components/navbar";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Route path="/useeffecthooks" component={UseEffectHook}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
