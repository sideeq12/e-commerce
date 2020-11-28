import React, {Component} from "react";
import collections from "./collection"

class Shop extends Component{

    constructor(props){
        super(props);
        this.state = {
            collections : collections
        }
    }

    render(){
        return(
            <div>
                Shop Page
            </div>
        )
    }
}
export default Shop;