import React, {Component} from "react";
import Collections from "./collection";
import collectionPreview from "../preview-collection/previewCollection"

class Shop extends Component{

    constructor(props){
        super(props);
        this.state = {
            collections : Collections
        }
    }

    render(){
        let {collections} = this.state;
        const Display = (unit)=>{ 
            return(
               <collectionPreview content={unit.content} key={unit.id} title={unit.title}/>
            )
        }
        return(
            <div className="Shop-Page">
            <div>
                 {collections.map(Display)}
                 </div>
                 checking out
            </div>
        )
    }
}
export default Shop;