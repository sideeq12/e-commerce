import React, {Component} from 'react';
import HomePage from "./pages/homepages";
import "../assets/style/index.css"
import {Route, Switch} from "react-router-dom"
import Shop from "./shop/shop"

const Test = ()=>(<h3>testing</h3>)
function App(){
    return(
        <div>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Test} />
        <Route exact path="/shop" component={Shop} />
            </Switch>
            </div>
    )
}

export default App;
