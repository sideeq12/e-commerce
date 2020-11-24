import React, {Component} from 'react';
import HomePage from "./pages/homepages";
import "../assets/style/index.css"
import {Route, Switch} from "react-router-dom"

const Test = ()=>(<h3>testing</h3>)
function App(){
    return(
        <div>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Test} />
            </Switch>
            </div>
    )
}

export default App;
