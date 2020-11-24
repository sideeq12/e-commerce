import React from "react";
import "../menu-item/menu.css"

function MenuItem({title, imageUrl}){
<div className="box" style={{
    backgroundImage : `url(${imageUrl})`
}}>
                <div className="inner-box">
                    <h2>{title}</h2>
                    <span>Shop now</span>
                </div>
            </div>
}
export default MenuItem;