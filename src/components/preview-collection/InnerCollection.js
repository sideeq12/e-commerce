import * as React from "react";

function InnerCollection({ id, name, imageUrl }){
    return(
        <div className="innerCollection" style={{
            backgroundImage : imageUrl
        }}>
        <h4>{id}</h4>
        <h6>{name}</h6>
        </div>
    )
}
export default InnerCollection;