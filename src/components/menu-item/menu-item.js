import React from "react";
import {withRouter} from "react-router-dom"
import "../menu-item/menu.css"

function MenuItem({title, imageUrl, history,linkUrl}){ 
    return(
       
<div className="box" onClick={()=>history.push(`${math.url}${linkUrl}`)}>
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
export default withRouter(MenuItem);