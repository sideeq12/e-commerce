import * as React from "react";

function InnerCollection({ id, name, imageUrl }){
    return(
        <div>
        <div className="innerCollection" style={{
            backgroundImage : imageUrl
        }} /> 
        <div>
        <h4>{id}</h4>
        <h6>{name}</h6>
        </div>
        </div>
    )
}
export default InnerCollection;