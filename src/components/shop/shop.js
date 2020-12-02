import React, {Component} from "react";
import Collections from "./collection";
import Preview from "../preview-collection/previewCollection"


class Shop extends Component{

    constructor(props){
        super(props);
        this.state = {
            collections : Collections
        }
    }

    render(){
        const collections = this.state.collections;
        collections.map((coll)=> console.log(coll.title))
        // const Display = (unit)=>{ 
        //     return  <collectionPreview content={unit.content} key={unit.id} title={unit.title}/>
            
        // }
        
        return(
            <div className="Shop-Page">
            {collections.map(coll => <Preview title={coll.title} key={coll.id} content={coll.content} /> )}
            
            </div>
        )
    }
}
export default Shop;