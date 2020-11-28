import React, {Component} from "react";
import collections from "./collection";
import collectionPreview from "../preview-collection/previewCollection"

class Shop extends Component{

    constructor(props){
        super(props);
        this.state = {
            collections : collections
        }
    }

    render(){
        let {collections} = this.state
        return(
            <div className="Shop-Page">
                 {collections.map(({title ,id, content})=>{
                     <collectionPreview key={id} title={title} content={content} />
                 })}
            </div>
        )
    }
}
export default Shop;