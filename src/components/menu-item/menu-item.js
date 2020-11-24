import React from "react";
import "../menu-item/menu.css"

function MenuItem({title, imageUrl}){ 
    return(
       
<div className="box">
<div className="back"  style={{
    backgroundImage : `url(${imageUrl})`
}} ></div>
                <div className="inner-box">
                    <h2>{title}</h2>
                    <span>SHOP NOW</span>
                </div>
            </div>

    )
}
export default MenuItem;