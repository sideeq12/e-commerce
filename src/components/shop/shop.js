import React, {Component} from "react";

class Shop extends Component{

    constructor(props){
        super(props);
        this.state = {
            collections : [{
                id : 1,
                title : "HATS",
                routeName : "Hats",
                content : [{
                    id : 1,
                    name : "",
                    imageUrl : "",
                    price : ""
                }
            ]
            }
            ]
        }
    }
}