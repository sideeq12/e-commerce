import * as React from "react";

function InnerCollection({  name, imageUrl, price }){
    return(
        <div className="innerCollection">
        <div  style={{
            backgroundImage : `url(${imageUrl})`
        }} className="CollDesign" /> 
        <div className="collection-footer">
        <span>{name}</span> 
        <div>{price}</div>
        </div>
        </div>
    )
}
export default InnerCollection;